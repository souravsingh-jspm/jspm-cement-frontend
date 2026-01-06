import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "@/assets/Icons/JSPM-logo.svg";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Keynote Speakers", path: "/keynote-speakers" },
  { label: "Committee", path: "/conference-committee" },
  { label: "Themes", path: "/conference-theme" },
  { label: "Registration", path: "/registration" },
  { label: "Important Dates", path: "/important-dates" },
];

import { Link } from "react-router-dom";

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6 bg-white p-2">
              <div className="">
                <img src={logo} alt="Univesity logo" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">CEMENT'26</h3>
                <p className="text-sm text-gray-400">JSPM University</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              International Conference on Civil Engineering Material & Emerging
              Novel Technologies
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  className="text-teal-400 mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-400">
                  Civil Engineering Department
                  <br />
                  JSPM University
                  <br />
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-teal-400 flex-shrink-0" size={20} />
                <a
                  href="mailto:conference.sces@jspmuni.ac.in"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  conference.sces@jspmuni.ac.in
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-teal-400 flex-shrink-0" size={20} />
                <span className="text-gray-400">+91 87934 88880</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <Icon size={20} />
                </button>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Stay updated with the latest news and announcements about
              CEMENT'26
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} CEMENT'26 - JSPM University. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
