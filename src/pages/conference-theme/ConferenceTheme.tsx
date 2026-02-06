import {
  Hammer,
  Lightbulb,
  Leaf,
  Building,
  Zap,
  Recycle,
  Map,
  Target,
  Cpu,
  Globe,
  Users,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Building2,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ConferenceTheme = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const themes = [
    {
      icon: Hammer,
      title: "Advanced Structural Engineering & Materials",
      description: "Modern structural systems and materials including HPC, UHPC, self-healing and nano materials, smart structures, seismic and wind-resistant design, structural health monitoring (SHM), retrofitting, and performance-based design.",
      color: "from-teal-500 to-cyan-600",
      topics: ["High-performance concrete", "Smart materials", "Seismic design", "Structural monitoring"],
    },
    {
      icon: Lightbulb,
      title: "Modern Construction & Project Management",
      description: "Innovative construction practices using BIM, AI, IoT, robotics, 3D printing, modular and lean construction. Covers project planning, risk management, smart contracts, and PPP models for improved efficiency and quality.",
      color: "from-cyan-500 to-blue-600",
      topics: ["BIM technology", "AI in construction", "Robotics", "Lean construction"],
    },
    {
      icon: Zap,
      title: "Transportation Infrastructure & Mobility Solutions",
      description: "Advanced pavement technologies and sustainable mobility systems including smart highways, intelligent transportation systems (ITS), EV infrastructure, traffic modelling, and renewable energy integration for urban and rural transport.",
      color: "from-amber-500 to-orange-600",
      topics: ["Smart highways", "EV infrastructure", "Traffic modeling", "Sustainable mobility"],
    },
    {
      icon: Building,
      title: "Geotechnical Engineering & Ground Improvement",
      description: "Ground improvement and underground construction technologies including soil stabilization, geosynthetics, foundation systems, seismic site analysis, tunnelling, and geotechnical monitoring for safe infrastructure development.",
      color: "from-blue-500 to-teal-600",
      topics: ["Soil stabilization", "Foundation systems", "Tunneling", "Geotechnical monitoring"],
    },
    {
      icon: Leaf,
      title: "Environmental Engineering & Water Systems",
      description: "Resilient and climate-adaptive environmental infrastructure covering wastewater treatment, hydrological modelling, stormwater management, integrated water resources management (IWRM), flood control, groundwater recharge, and circular water economy.",
      color: "from-green-500 to-teal-600",
      topics: ["Wastewater treatment", "Flood control", "Water resources", "Climate adaptation"],
    },
    {
      icon: Map,
      title: "Urban Planning, Real Estate & Smart Infrastructure",
      description: "Integration of urban planning, real estate, and smart technologies for sustainable cities. Includes smart city frameworks, GIS-based planning, real estate valuation, ICT-enabled services, RERA compliance, and resilient urban design.",
      color: "from-indigo-500 to-blue-600",
      topics: ["Smart cities", "Urban planning", "Real estate", "GIS applications"],
    },
    {
      icon: Recycle,
      title: "Sustainable & Novel Material Characterization",
      description: "Development and characterization of sustainable construction materials such as fly ash, GGBS, geopolymers, and bio-concrete. Includes NDT, advanced techniques (XRD, SEM, FTIR), life cycle analysis, and environmental impact assessment.",
      color: "from-emerald-500 to-green-600",
      topics: ["Sustainable materials", "Geopolymers", "Bio-concrete", "Life cycle analysis"],
    },
  ];



  return (
    <section id="themes" className="relative py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden mt-10">
      {/* About Conference Section */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">

          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Themes
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore cutting-edge research areas and innovative topics shaping the future of civil engineering materials and technologies.
          </p>
        </div>

        <div className="mb-16">
  <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 shadow-xl">
    <div className="flex items-center space-x-3 mb-6">
      <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg">
        <Building2 className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900">About The Conference</h3>
    </div>
    
    <div className="text-gray-700 leading-relaxed text-lg space-y-4">
      <p>
        This International Conference aims to address the evolving needs of modern infrastructure by bringing together researchers, academicians, industry professionals, and stakeholders to exchange ideas and innovations in civil engineering. The event will focus on advancements in sustainable construction materials, modern technologies, and best practices across the sector.
      </p>
      <p>
        The themes of the conference include structural engineering, transportation systems, geotechnical innovations, environmental engineering, and the use of digital tools for developing resilient infrastructure. A major highlight is the inclusion of urban development and real estate topics, with sessions on smart cities, land use planning, infrastructure financing, and the latest trends in property valuation and sustainable investment.
      </p>
      <p>
        By fostering collaboration and knowledge-sharing, the conference seeks to inspire innovative solutions and promote interdisciplinary approaches for sustainable infrastructure development. It offers a valuable platform for networking, learning, and shaping the future of civil engineering in a rapidly changing world.
      </p>
    </div>
  </div>
</div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ${
                  hoveredCard === index ? 'shadow-2xl transform -translate-y-2' : 'hover:shadow-2xl hover:-translate-y-2'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Color Bar */}
                <div className={`h-2 bg-gradient-to-r ${theme.color}`}></div>
                
                <div className="p-8">
                  {/* Icon and Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${theme.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white w-7 h-7" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-500">Track {index + 1}</div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {theme.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


        {/* CTA Section */}
        <div className=" text-center">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2x rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to Present Your Research?
            </h3>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Submit your paper on any of these conference themes and be part of this premier international event.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/submit-paper"
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 transform hover:-translate-y-1 flex items-center space-x-3"
              >
                <span>Submit Your Paper</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/registration"
                className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border-2 border-teal-200"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 -left-4 w-8 h-8 bg-teal-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-cyan-300 rounded-full opacity-20 animate-pulse delay-700"></div>
    </section>
  );
};

export default ConferenceTheme;