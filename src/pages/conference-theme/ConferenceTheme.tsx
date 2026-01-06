import {
  Hammer,
  Lightbulb,
  Leaf,
  Building,
  Zap,
  Recycle,
  Map,
} from "lucide-react";

const themes = [
  {
    icon: Hammer,
    title: "Advanced Structural Engineering & Materials",
    description:
      "Modern structural systems and materials including HPC, UHPC, self-healing and nano materials, smart structures, seismic and wind-resistant design, structural health monitoring (SHM), retrofitting, and performance-based design.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Modern Construction & Project Management",
    description:
      "Innovative construction practices using BIM, AI, IoT, robotics, 3D printing, modular and lean construction. Covers project planning, risk management, smart contracts, and PPP models for improved efficiency and quality.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Transportation Infrastructure & Mobility Solutions",
    description:
      "Advanced pavement technologies and sustainable mobility systems including smart highways, intelligent transportation systems (ITS), EV infrastructure, traffic modelling, and renewable energy integration for urban and rural transport.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Building,
    title: "Geotechnical Engineering & Ground Improvement",
    description:
      "Ground improvement and underground construction technologies including soil stabilization, geosynthetics, foundation systems, seismic site analysis, tunnelling, and geotechnical monitoring for safe infrastructure development.",
    color: "from-blue-500 to-teal-600",
  },
  {
    icon: Leaf,
    title: "Environmental Engineering & Water Systems",
    description:
      "Resilient and climate-adaptive environmental infrastructure covering wastewater treatment, hydrological modelling, stormwater management, integrated water resources management (IWRM), flood control, groundwater recharge, and circular water economy.",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Map,
    title: "Urban Planning, Real Estate & Smart Infrastructure",
    description:
      "Integration of urban planning, real estate, and smart technologies for sustainable cities. Includes smart city frameworks, GIS-based planning, real estate valuation, ICT-enabled services, RERA compliance, and resilient urban design.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Recycle,
    title: "Sustainable & Novel Material Characterization",
    description:
      "Development and characterization of sustainable construction materials such as fly ash, GGBS, geopolymers, and bio-concrete. Includes NDT, advanced techniques (XRD, SEM, FTIR), life cycle analysis, and environmental impact assessment.",
    color: "from-emerald-500 to-green-600",
  },
];
const ConferenceTheme = () => {
  return (
    <section id="themes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conference{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Themes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore cutting-edge topics and research areas in civil engineering
            materials and technologies
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Conference
            </span>
          </h2>
        </div>
        <div
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8
      hover:shadow-2xl transition-shadow
      text-gray-900
      text-sm sm:text-lg md:text-xl
      leading-relaxed tracking-normal
      break-words
      text-justify mx-auto mb-4"
        >
          This International Conference aims to address the evolving needs of
          modern infrastructure by bringing together researchers, academicians,
          industry professionals, and stakeholders to exchange ideas and
          innovations in civil engineering. The event will focus on advancements
          in sustainable construction materials, modern technologies, and best
          practices across the sector. The themes of the conference include
          structural engineering, transportation systems, geotechnical
          innovations, environmental engineering, and the use of digital tools
          for developing resilient infrastructure. A major highlight is the
          inclusion of urban development and real estate topics, with sessions
          on smart cities, land use planning, infrastructure financing, and the
          latest trends in property valuation and sustainable investment. By
          fostering collaboration and knowledge-sharing, the conference seeks to
          inspire innovative solutions and promote interdisciplinary approaches
          for sustainable infrastructure development. It offers a valuable
          platform for networking, learning, and shaping the future of civil
          engineering in a rapidly changing world.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${theme.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {theme.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Additional Topics Welcome</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            We encourage submissions on related topics within the broader scope
            of civil engineering materials and emerging technologies. Contact
            the technical committee for topic suitability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTheme;
