import { FileText } from "lucide-react";
import { useState } from "react";

export default function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CEMENT'26</h1>
              <p className="text-xs text-gray-600">JSPM University</p>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            <a
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Home
            </a>
            <a
              href="/keynote-speakers"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Key Note Speakers
            </a>
            <a
              href="/conference-committee"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Committee
            </a>
            <a
              href="/conference-theme"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Themes
            </a>
            <a
              href="/registration"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Registration
            </a>
            <a
              href="/important-dates"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Important Dates
            </a>
            <a
              href="/submit-paper"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <FileText size={18} />
              <span>Submit Paper</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <a
              href=""
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg"
            >
              Home
            </a>
            <a
              href=""
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg"
            >
              Key Note Speakers
            </a>
            <a
              href=""
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg"
            >
              Committee
            </a>
            <a
              href=""
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg"
            >
              Themes
            </a>
            <a
              href=""
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg"
            >
              Registration
            </a>
            <a
              href=""
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-lg"
            >
              Important Dates
            </a>
            <a
              href=""
              className="block w-full text-left px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg mt-2"
            >
              Submit Paper
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
