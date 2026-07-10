export default function RoadmapSection() {
  const timeline = [
    { phase: "Now", title: "Model fine-tuning", status: "active" },
    { phase: "Phase 0", title: "Berlin partnership launch", status: "next" },
    { phase: "Year 1", title: "Pilot with 2–3 care centers", status: "future" },
    { phase: "Year 2", title: "Scale to 1,000 MAU", status: "future" },
    { phase: "Year 3", title: "20 Berlin care centers", status: "future" }
  ]

  return (
    <section id="roadmap" className="bg-white py-20 border-b border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold font-heading text-teal mb-12">From annotation to scale</h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 mt-2 ${
                      item.status === "active" ? "bg-green-500" :
                      item.status === "next" ? "bg-coral" : "bg-gray-300"
                    }`} />
                    {idx < timeline.length - 1 && (
                      <div className="w-0.5 h-12 bg-cream my-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs font-mono text-teal font-bold uppercase">{item.phase}</p>
                    <h3 className="text-base font-heading font-bold text-teal mt-1">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key metrics */}
          <div>
            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-4">Success metrics</h3>
            <ul className="space-y-2 text-sm text-teal">
              <li className="flex gap-2">
                <span className="text-coral font-bold flex-shrink-0">•</span>
                <span>Monthly active users</span>
              </li>
              <li className="flex gap-2">
                <span className="text-coral font-bold flex-shrink-0">•</span>
                <span>Task completion rate</span>
              </li>
              <li className="flex gap-2">
                <span className="text-coral font-bold flex-shrink-0">•</span>
                <span>Time-to-first-success</span>
              </li>
              <li className="flex gap-2">
                <span className="text-coral font-bold flex-shrink-0">•</span>
                <span>User retention</span>
              </li>
            </ul>

            <h3 className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-4 mt-8">Impact areas</h3>
            <div className="space-y-2">
              <div className="text-xs bg-cream rounded px-2 py-1 text-teal">Reduced inequalities</div>
              <div className="text-xs bg-cream rounded px-2 py-1 text-teal">Digital inclusion</div>
              <div className="text-xs bg-cream rounded px-2 py-1 text-teal">Elderly wellbeing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
