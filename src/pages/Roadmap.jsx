import RoadmapSection from '../components/RoadmapSection'

export default function Roadmap() {
  return (
    <main>
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold font-heading text-teal mb-4">Our Roadmap</h1>
          <p className="text-2xl text-teal leading-relaxed">See how Talkeasy is growing from pilot to scale, one community at a time.</p>
        </div>
      </section>

      <RoadmapSection />

      {/* Market Opportunity */}
      <section className="bg-white py-20 border-b border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-8">Market opportunity</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream rounded-lg overflow-hidden">
            <div className="bg-white p-6">
              <p className="text-xs font-mono uppercase text-teal mb-2">Global TAM</p>
              <p className="text-4xl font-heading font-bold text-coral mb-2">
                700<span className="text-2xl">M</span>
              </p>
              <p className="text-sm text-teal">seniors and illiterate adults locked out of smartphones</p>
            </div>

            <div className="bg-white p-6">
              <p className="text-xs font-mono uppercase text-teal mb-2">Germany SAM</p>
              <p className="text-4xl font-heading font-bold text-coral mb-2">
                5.8<span className="text-2xl">M</span>
              </p>
              <p className="text-sm text-teal">seniors who own a smartphone but lack digital confidence</p>
            </div>

            <div className="bg-white p-6">
              <p className="text-xs font-mono uppercase text-teal mb-2">Berlin SOM</p>
              <p className="text-4xl font-heading font-bold text-coral mb-2">
                162<span className="text-2xl">K</span>
              </p>
              <p className="text-sm text-teal">elderly care recipients · 388 care homes as B2B buyers</p>
            </div>

            <div className="bg-white p-6">
              <p className="text-xs font-mono uppercase text-teal mb-2">Assistive tech market</p>
              <p className="text-4xl font-heading font-bold text-coral mb-2">
                $41<span className="text-2xl">B</span>
              </p>
              <p className="text-sm text-teal">by 2033, growing from $26.8B in 2024 at 4.33% CAGR</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
