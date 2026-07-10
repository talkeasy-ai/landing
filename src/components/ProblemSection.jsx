export default function ProblemSection() {
  const stats = [
    { label: "Europeans 50+ offline", value: 51, source: "Digital 2024 EU Report" },
    { label: "US adults 65+ offline", value: 25, source: "AARP Digital Divide Survey" },
    { label: "Global adults illiterate", value: 54, source: "UNESCO 2024" },
    { label: "German seniors, low confidence", value: 69, source: "Initiative D21 Digital Index" }
  ]

  return (
    <section id="problem" className="bg-white py-20 border-b border-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold font-heading text-teal mb-6">Why are billions locked out of technology they own?</h2>
          <p className="text-lg text-teal leading-relaxed max-w-3xl">
            Smartphones are designed with the assumption of literacy, internet access, and familiarity with touch interfaces. For those who don't fit that mold, the device in their hand is largely useless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-teal">{stat.label}</p>
                <p className="text-2xl font-heading font-bold text-coral">{stat.value}%</p>
              </div>
              <div className="w-full bg-cream rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-coral to-orange h-full rounded-full"
                  style={{ width: `${stat.value}%` }}
                />
              </div>
              <p className="text-xs text-teal mt-2 opacity-70">{stat.source}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-cream rounded-lg p-6">
            <p className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-3">Global context</p>
            <p className="text-3xl font-heading font-bold text-coral mb-2">739<span className="text-lg">M</span></p>
            <p className="text-teal">adults worldwide remain illiterate (2024)</p>
          </div>
          <div className="bg-cream rounded-lg p-6">
            <p className="text-sm font-mono font-bold uppercase text-teal tracking-widest mb-3">Germany opportunity</p>
            <p className="text-3xl font-heading font-bold text-coral mb-2">19.5<span className="text-lg">M</span></p>
            <p className="text-teal">elderly population (23.2% of Germany)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
