import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
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
              My grandmother, Emaye, is 76. Nineteen years ago she left Ethiopia for Alexandria, Virginia, to be near her son. She doesn't speak English, but that never stopped her. She learned the bus routes and built a life in a new country. She loves WhatsApp. Her mornings start at six with three hours of prayer. Then she tries to call her children, who live all over the world. One wrong tap mutes the phone, the contacts app stops behaving the way it used to, and she gives up. Later her medication reminder goes off, and she dismisses it by accident because she can't read it fast enough. In the afternoon YouTube updates, her favourite show is buried behind a screen she no longer recognises, and she sits alone until evening, waiting for a grandchild to come by and fix it. She calls me, or one of my siblings, but we're all busy trying to make it in the world. The device that was meant to connect her ends up isolating her.
            </p>
            <p className="text-lg text-teal leading-relaxed">
              None of this is because Emaye isn't capable. Technology wasn't designed for her. It was designed for people like the engineers who built it: people who read English, are always online, and grew up tapping glass. I'm an immigrant and a software engineer, and I kept asking one simple question: what if all she had to do was speak? Talkeasy is my answer. She says "Call my daughter" in her own language and her own accent, and the phone does it, privately, on the device, with no internet and nothing to read. No passwords. No menus. Emaye is who I build it for, and she stands for millions of people like her who are fully capable but have been shut out by a screen. She just wants to call her daughter. That shouldn't be too much to ask.
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Open-source engineering (SUSE)</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">AWS ML Specialty (2025)</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">AWS Solutions Architect (2025)</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Python · Ruby · JavaScript</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Docker · Terraform · Ansible</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Native English & Amharic</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">B1 German</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">7+ years Berlin</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/ngetahun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal underline underline-offset-4 hover:text-coral-dark transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                    Natnael on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-cream border border-cream rounded-lg p-8 mt-6">
              <div className="flex gap-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral to-orange flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-heading font-bold text-2xl">AB</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-teal mb-1">Aaron Varghese Bijo</h3>
                  <p className="text-sm text-teal mb-4">Business Co-founder · B.Sc. Digital Business & Sustainability, XU Exponential University of Applied Sciences · Potsdam</p>
                  <p className="text-sm text-teal leading-relaxed mb-4">
                    Joined Talkeasy at PEELxImpact 2026, where the team used design thinking, customer interviews and rapid prototyping to test the idea with real users. Project Lead of XU's Pop-Up University, which brings hands-on workshops on AI tools, personal finance and digital skills into schools in Berlin and Brandenburg.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Digital Business & Sustainability</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Design thinking</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Customer research</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Project leadership</span>
                    <span className="px-3 py-1 bg-white text-teal text-xs rounded-full border border-cream">Digital-skills education</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/aaron-varghese-bijo-32481b39a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal underline underline-offset-4 hover:text-coral-dark transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                    Aaron on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
