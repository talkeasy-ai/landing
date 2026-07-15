export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Valid email required' })
  }

  const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
  const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID
  const mailchimpServer = process.env.MAILCHIMP_SERVER

  if (!mailchimpApiKey || !mailchimpAudienceId || !mailchimpServer) {
    console.error('Mailchimp configuration missing')
    return res.status(500).json({ message: 'Server configuration error' })
  }

  try {
    const mailchimpUrl = `https://${mailchimpServer}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`

    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`anystring:${mailchimpApiKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending',
      }),
    })

    const data = await response.json()

    if (response.ok) {
      return res.status(200).json({ message: 'Successfully subscribed' })
    } else if (data.title === 'Member Exists') {
      return res.status(200).json({ message: 'You\'re already on our waitlist' })
    } else {
      return res.status(400).json({ message: data.detail || 'Failed to subscribe' })
    }
  } catch (error) {
    console.error('Mailchimp API error:', error)
    return res.status(500).json({ message: 'Failed to process subscription' })
  }
}
