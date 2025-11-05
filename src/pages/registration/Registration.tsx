import { Users, GraduationCap, Building2, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const registrationCategoriesEarlyBird = [
  {
    icon: Users,
    category: "Faculty/Industry Person",
    price: "₹5,000",
    international: "$100",
    features: ["All Sessions Access", "E-Certificate", "Proceedings"],
  },
  {
    icon: GraduationCap,
    category: "Students/Research Scholars",
    price: "₹4,000",
    international: "$60",
    features: ["All Sessions Access", "E-Certificate", "Proceedings"],
  },

  {
    icon: Building2,
    category: "Attendee",
    price: "₹1,000",
    international: "$25",
    features: ["All Sessions Access", "E-Certificate", "Proceedings"],
  },
];

const registrationNormalCategories = [
  {
    icon: Users,
    category: "Faculty/Industry Person",
    price: "₹5,500",
    international: "$120",
    features: ["All Sessions Access", "E-Certificate", "Proceedings"],
  },
  {
    icon: GraduationCap,
    category: "Students/Research Scholars",
    price: "₹4,500",
    international: "$75",
    features: ["All Sessions Access", "E-Certificate", "Proceedings"],
  },

  {
    icon: Building2,
    category: "Attendee",
    price: "₹2,000",
    international: "$30",
    features: ["All Sessions Access", "E-Certificate", "Proceedings"],
  },
];

export default function Registration() {
  return (
    <section
      id="registration"
      className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Registration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Details
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your registration category and secure your spot at CEMENT'26
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 underline">
            Early{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Birds
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 rounded-2xl p-3">
          {registrationCategoriesEarlyBird.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white">
                  <Icon size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">{category.price}</p>
                    {category.international !== category.price && (
                      <p className="text-sm opacity-90">
                        International: {category.international}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <svg
                          className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 underline">
            Normal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Registration
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 rounded-2xl p-3">
          {registrationNormalCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-6 text-white">
                  <Icon size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">{category.price}</p>
                    {category.international !== category.price && (
                      <p className="text-sm opacity-90">
                        International: {category.international}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <svg
                          className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Registration Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Fill Form",
                desc: "Complete the online registration form",
              },
              {
                step: "02",
                title: "Make Payment",
                desc: "Pay registration fee via provided methods",
              },
              {
                step: "03",
                title: "Submit Paper",
                desc: "Upload your research paper (if presenting)",
              },
              {
                step: "04",
                title: "Get Confirmation",
                desc: "Receive confirmation email with details",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/submit-paper"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 transform hover:-translate-y-1"
            >
              Submit Now
            </Link>
          </div>
        </div>

        {/* <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <p className="text-amber-900">
            <strong>Early Bird Discount:</strong> Register before [Date TBA] and get 20% off on registration fees!
          </p>
        </div> */}
      </div>
    </section>
  );
}
