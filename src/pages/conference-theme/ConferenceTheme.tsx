import { Hammer, Lightbulb, Leaf, Building, Zap, Recycle } from "lucide-react";

const themes = [
  {
    icon: Hammer,
    title: "Advanced Construction Materials",
    description:
      "Innovative materials including high-performance concrete, fiber-reinforced composites, and smart materials",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Nanotechnology in Construction",
    description:
      "Application of nanomaterials for enhanced durability, strength, and sustainability in civil engineering",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Leaf,
    title: "Sustainable & Green Materials",
    description:
      "Eco-friendly construction materials, recycled aggregates, and carbon-neutral building solutions",
    color: "from-green-500 to-teal-600",
  },
  {
    icon: Building,
    title: "Smart Infrastructure",
    description:
      "IoT-enabled structures, self-healing materials, and intelligent monitoring systems",
    color: "from-blue-500 to-teal-600",
  },
  {
    icon: Zap,
    title: "Energy-Efficient Technologies",
    description:
      "Thermal insulation materials, phase-change materials, and energy-harvesting building components",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Recycle,
    title: "Waste Utilization",
    description:
      "Industrial waste in construction, circular economy approaches, and sustainable resource management",
    color: "from-emerald-500 to-green-600",
  },
];

const ConferenceTheme = () => {
  return (
    <section id="themes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
