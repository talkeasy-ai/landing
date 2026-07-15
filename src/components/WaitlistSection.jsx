import { useState } from 'react'

export default function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter a valid email')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('/api/mailchimp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Thanks for joining! Check your email for updates.')
        setEmail('')
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Waitlist signup error:', error)
      setStatus('error')
      setMessage('Failed to join. Please try again later.')
    }
  }

  return (
    <section className="bg-white py-20" id="waitlist">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold font-heading text-teal mb-4">
          Be the first to try Talkeasy
        </h2>

        <p className="text-lg text-teal mb-8 leading-relaxed">
          Join our waitlist to get early access and be part of making technology accessible to everyone.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-6 py-3 border-2 border-teal rounded-lg text-teal placeholder-teal placeholder-opacity-50 focus:outline-none focus:border-coral transition"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-8 py-3 bg-coral hover:bg-orange text-white rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-green-600 mt-4 font-medium">{message}</p>
        )}

        {status === 'error' && (
          <p className="text-coral mt-4 font-medium">{message}</p>
        )}
      </div>
    </section>
  )
}
