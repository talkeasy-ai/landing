import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/pwa_export.png" alt="Talkeasy" className="h-8 w-8" />
            <span className="font-bold text-lg text-teal hidden sm:inline">Talkeasy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/solution" className="text-teal hover:text-coral transition text-sm font-medium">
              Solution
            </Link>
            <Link to="/about" className="text-teal hover:text-coral transition text-sm font-medium">
              About
            </Link>
            {/* <Link to="/roadmap" className="text-teal hover:text-coral transition text-sm font-medium">
              Roadmap
            </Link> */}
            <Link to="/contact" className="text-teal hover:text-coral transition text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          {/* <button className="bg-coral hover:bg-coral-dark text-white px-6 py-2 rounded-lg font-medium text-sm transition">
            Get Early Access
          </button> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-4 text-teal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link to="/solution" className="text-teal hover:text-coral py-2 text-sm font-medium">
              Solution
            </Link>
            <Link to="/about" className="text-teal hover:text-coral py-2 text-sm font-medium">
              About
            </Link>
            {/* <Link to="/roadmap" className="text-teal hover:text-coral py-2 text-sm font-medium">
              Roadmap
            </Link> */}
            <Link to="/contact" className="text-teal hover:text-coral py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
