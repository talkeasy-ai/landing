export default function Solution() {
  return (
    <main>
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold font-heading text-teal mb-4">How Talkeasy Works</h1>
          <p className="text-2xl text-teal leading-relaxed">Voice-first navigation that anyone can use, anywhere, anytime.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-heading text-teal mb-4">The Talkeasy Experience</h2>
            <p className="text-lg text-teal leading-relaxed mb-8">
              Talkeasy listens, understands, and acts entirely on your device. No servers. No data collected. Just voice.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-cream rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold text-coral mb-3">Just Speak</h3>
                <p className="text-teal text-sm">Use your natural voice to navigate. No special commands. No written menus.</p>
              </div>
              <div className="bg-cream rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold text-coral mb-3">Instant Understanding</h3>
                <p className="text-teal text-sm">AI processes your request locally on your phone. Fast. Private. Offline.</p>
              </div>
              <div className="bg-cream rounded-lg p-6">
                <h3 className="text-lg font-heading font-bold text-coral mb-3">Get Things Done</h3>
                <p className="text-teal text-sm">Call family. Set reminders. Find contacts. All with your voice.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold font-heading text-teal mb-6">Key Features</h2>
            <ul className="space-y-4 text-teal">
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">✓</span>
                <span><strong>Voice Navigation</strong> — Control your phone entirely through voice commands</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">✓</span>
                <span><strong>Offline-First</strong> — Works without internet. No connectivity required for daily use.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">✓</span>
                <span><strong>Multilingual</strong> — Speaks your language. Understands accents and speech variations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">✓</span>
                <span><strong>Private by Default</strong> — All processing happens on your device. Your data never leaves.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">✓</span>
                <span><strong>Open Source</strong> — Transparent, auditable, community-driven development.</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-bold font-heading text-teal mb-6">Who Talkeasy is For</h2>
            <ul className="space-y-3 text-teal text-lg">
              <li>👴 Senior citizens navigating smartphones</li>
              <li>👵 Elderly individuals with limited tech experience</li>
              <li>📱 Anyone who prefers voice over typing</li>
              <li>🌍 Non-English speakers needing accessible technology</li>
              <li>📡 People without reliable internet connectivity</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
