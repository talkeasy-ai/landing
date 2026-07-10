export default function About() {
  return (
    <main>
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold font-heading text-teal mb-4">About Talkeasy</h1>
          <p className="text-2xl text-teal leading-relaxed">Talkeasy is a voice-first, open-source AI assistant for elderly and digitally-excluded users. We help people navigate hand-held devices without needing written-English literacy or a reliable internet connection.</p>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold font-heading text-teal mb-4">Our Vision</h2>
            <p className="text-lg text-teal leading-relaxed">
              A world where senior citizens and the digitally illiterate have ease of navigation to the full capabilities of hand-held devices.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold font-heading text-teal mb-4">Our Mission</h2>
            <ul className="space-y-3 text-lg text-teal">
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">—</span>
                <span>Help users navigate technology without assuming written English literacy (language inclusion)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-coral font-bold flex-shrink-0">—</span>
                <span>Help users navigate technology without needing an internet connection (reliable, offline-first)</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-4xl font-bold font-heading text-teal mb-4">Our Values</h2>
            <div className="space-y-6">
              <div className="border-b border-cream pb-6">
                <h3 className="text-lg font-heading font-bold text-coral mb-2">Inclusion</h3>
                <p className="text-teal">Accessible regardless of language, literacy, or digital experience</p>
              </div>
              <div className="border-b border-cream pb-6">
                <h3 className="text-lg font-heading font-bold text-coral mb-2">Empowerment</h3>
                <p className="text-teal">Gives users agency over their own digital lives</p>
              </div>
              <div className="border-b border-cream pb-6">
                <h3 className="text-lg font-heading font-bold text-coral mb-2">Simplicity</h3>
                <p className="text-teal">Reduces complexity, never adds it</p>
              </div>
              <div className="border-b border-cream pb-6">
                <h3 className="text-lg font-heading font-bold text-coral mb-2">Privacy</h3>
                <p className="text-teal">Sensitive data stays on-device</p>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-coral mb-2">Open Source</h3>
                <p className="text-teal">Built in public, contributes back to the community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-teal mb-6">Origin Story</h2>
          <p className="text-lg text-teal leading-relaxed mb-4">
            Built for people like "she just wants to call her daughter" — users who are capable and independent but locked out of modern devices by interface complexity, not ability.
          </p>
          <p className="text-lg text-teal leading-relaxed">
            Smartphones are designed with the assumption of literacy, internet access, and familiarity with touch interfaces. For billions of people who don't fit that mold, the device in their hand is largely useless. Talkeasy changes that by meeting people where they are—with voice, without judgment, and without barriers.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-heading text-teal mb-12">Team</h2>

          <div className="bg-cream border border-cream rounded-lg p-8">
            <div className="flex gap-8 mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-orange flex items-center justify-center flex-shrink-0">
                <span className="text-white font-heading font-bold text-2xl">NG</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-heading font-bold text-teal mb-1">Natnael W. Getahun</h3>
                <p className="text-sm text-teal mb-4">Founder & Lead Engineer · Senior Software Engineer at SUSE GmbH · Berlin</p>
                <p className="text-sm text-teal leading-relaxed mb-4">
                  BSc Computer Science from Jacobs University Bremen (ML, Computer Vision, Robotics). 7+ years of professional experience in full-stack and backend development, open-source engineering, and cloud infrastructure. Active contributor and maintainer of SUSE open-source projects including OSEM. Native English and Amharic speaker — Amharic is a low-resource language with significant demand for voice AI tooling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Open-source engineering (SUSE)</span>
                  <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">AWS ML Specialty (2025)</span>
                  <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">AWS Solutions Architect (2025)</span>
                  <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Python · Ruby · JavaScript</span>
                  <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Docker · Terraform · Ansible</span>
                  <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Native English & Amharic</span>
                  <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">B1 German</span>
                  <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">7+ years Berlin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
