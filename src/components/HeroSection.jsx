export default function HeroSection() {
  return (
    <section className="flex items-center bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            {/* <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-white border border-teal rounded-full text-teal text-xs font-mono font-semibold mb-6">
                Berlin · Open source · Pre-revenue
              </span>
            </div> */}

            <h1 className="text-6xl md:text-7xl font-bold font-heading text-teal mb-6 leading-tight">
              Talk to your<br />
              phone. Not to<br />
              <span className="bg-gradient-to-r from-coral to-orange bg-clip-text text-transparent">
                tech support.
              </span>
            </h1>

            <p className="text-lg text-teal mb-4 leading-relaxed max-w-2xl">
              An AI-powered mobile application that helps senior citizens and digitally illiterate people navigate smartphones — with all voice inference running on-device, requiring no internet connection for daily use.
            </p>

            <p className="text-base text-teal mb-8 leading-relaxed max-w-2xl font-semibold">
              <span className="text-coral">Our vision:</span> A world where senior citizens and the digitally illiterate have ease of navigation to the full capabilities of hand-held devices.
            </p>

            {/* <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">AGPL-3.0 open core</span>
              <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">Offline-first · on-device AI</span>
              <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">Android-first</span>
              <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">Multilingual</span>
              <span className="px-3 py-1 bg-white text-teal border border-teal rounded-full text-xs font-mono">Berlin pilot ready</span>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="px-8 py-3 bg-coral hover:bg-coral-dark text-white rounded-lg font-semibold transition">
                Get Early Access
              </button> */}
              <button className="px-8 py-3 border-2 border-teal text-teal hover:bg-teal hover:text-white rounded-lg font-semibold transition">
                Learn More
              </button>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="bg-black rounded-3xl shadow-2xl p-3 max-w-sm">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="/images/talkeasy_ready_screen.png"
                    alt="Talkeasy app screenshot"
                    className="w-full h-auto block"
                  />
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-coral to-orange rounded-3xl opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
