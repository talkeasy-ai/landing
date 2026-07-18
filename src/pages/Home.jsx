import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
// import WaitlistSection from '../components/WaitlistSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        {/* <WaitlistSection /> */}
      </main>
      <Footer />
    </>
  )
}
