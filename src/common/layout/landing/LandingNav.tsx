import { FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/Icons/JSPM-logo.svg";

const navLinkClass = "px-2 py-2 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all duration-200";

const LandingNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-25">
          <Link to="https://jspmuni.ac.in/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <img src={logo} alt="JSPM Logo" className="h-12 w-auto" />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1 text-sm lg:text-base">
            <Link to="/" className={navLinkClass}>Home</Link>
            <Link to="/keynote-speakers" className={navLinkClass}>Keynote Speakers</Link>
            <Link to="/conference-committee" className={navLinkClass}>Committee</Link>
            <Link to="/conference-theme" className={navLinkClass}>Themes</Link>
            <Link to="/registration" className={navLinkClass}>Registration Details</Link>
            <Link to="/important-dates" className={navLinkClass}>Important Dates</Link>
            <Link to="/publications" className={navLinkClass}>Publications</Link>
            <Link to="/submit-paper" className="ml-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
              <FileText size={18} />
              <span>Submit Paper</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 py-2 space-y-1">
            <Link to="/" className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">Home</Link>
            <Link to="/keynote-speakers" className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">Keynote Speakers</Link>
            <Link to="/conference-committee" className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">Committee</Link>
            <Link to="/conference-theme" className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">Themes</Link>
            <Link to="/registration" className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">Registration</Link>
            <Link to="/important-dates" className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">Important Dates</Link>
            <Link to="/publications" className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-teal-50 rounded-lg">Publications</Link>
            <Link to="/submit-paper" className="block w-full text-left px-2 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg mt-2">Submit Paper</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LandingNav;