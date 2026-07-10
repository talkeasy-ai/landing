import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts'
import Home from './pages/Home'
import About from './pages/About'
import Solution from './pages/Solution'
import Contact from './pages/Contact'
import Roadmap from './pages/Roadmap'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}
