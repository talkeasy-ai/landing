import { createHash } from 'node:crypto'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : ''

  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' })
  }

  const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
  const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID
  // The data center is the part of the API key after the dash (e.g. "…-us21"),
  // so MAILCHIMP_SERVER is only needed to override it.
  const mailchimpServer = process.env.MAILCHIMP_SERVER || mailchimpApiKey?.split('-')[1]

  if (!mailchimpApiKey || !mailchimpAudienceId || !mailchimpServer) {
    console.error('Mailchimp configuration missing')
    return res.status(500).json({ message: 'Server configuration error' })
  }

  // Upsert by subscriber hash so repeat sign-ups don't error.
  const subscriberHash = createHash('md5').update(email).digest('hex')
  const mailchimpUrl = `https://${mailchimpServer}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members/${subscriberHash}`

  const headers = {
    'Authorization': `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString('base64')}`,
    'Content-Type': 'application/json',
  }

  try {
    let response = await fetch(mailchimpUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        email_address: email,
        status_if_new: 'pending',
      }),
    })

    let data = await response.json()

    // Someone who unsubscribed earlier is rejoining: send them a new confirmation email.
    if (response.ok && data.status === 'unsubscribed') {
      response = await fetch(mailchimpUrl, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ status: 'pending' }),
      })
      data = await response.json()
    }

    if (!response.ok) {
      console.error('Mailchimp API error:', data.title, data.detail)
      if (data.title === 'Forgotten Email Not Subscribed') {
        return res.status(400).json({ message: 'This email was removed from our list and can\'t be re-added here. Please contact us to rejoin.' })
      }
      if (data.title === 'Invalid Resource') {
        return res.status(400).json({ message: 'Please enter a valid email address.' })
      }
      return res.status(502).json({ message: 'Failed to subscribe. Please try again later.' })
    }

    if (data.status === 'subscribed') {
      return res.status(200).json({ status: 'subscribed', message: 'You\'re already on our waitlist.' })
    }
    return res.status(200).json({ status: 'pending', message: 'Almost done! Check your inbox and confirm your email.' })
  } catch (error) {
    console.error('Mailchimp request failed:', error)
    return res.status(500).json({ message: 'Failed to process subscription' })
  }
}
