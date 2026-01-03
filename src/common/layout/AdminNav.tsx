import { FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { clearSession } from "@/utils/authHelpers";

export default function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/importantdates"
            className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
          >
            Important Dates
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            {/* <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/keynote-speakers"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Key Admin Speakers
            </Link>
            <Link
              to="/conference-committee"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Committee
            </Link>
            <Link
              to="/conference-theme"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Themes
            </Link>
            <Link
              to="/registration"
              className="px-4 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200"
            >
              Registration
            </Link> */}

            <Link
              to="/submit-paper"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <FileText size={18} />
              <button onClick={() => clearSession()}>Logout</button>
              {/* <span>Logout</span> */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
