import { Users, GraduationCap, Building2, Check, Globe, Calendar, CreditCard, FileText, Mail, ArrowRight, Clock, Zap, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
  const [activeTab, setActiveTab] = useState<'early' | 'normal'>('early');
  
  const registrationCategoriesEarlyBird = [
    {
      icon: Users,
      category: "Faculty/Industry Person",
      price: "₹5,000",
      international: "$100",
      features: ["All Technical Sessions", "E-Certificate of Participation", "Conference Proceedings", "Conference Kit", "Lunch & Refreshments", "Networking Opportunities"],
      badge: "Most Popular",
      highlighted: true,
    },
    {
      icon: GraduationCap,
      category: "Students/Research Scholars",
      price: "₹4,000",
      international: "$60",
      features: ["All Technical Sessions", "E-Certificate of Participation", "Conference Proceedings", "Student Discount", "Mentorship Sessions", "Career Guidance"],
      badge: "Student Offer",
      highlighted: false,
    },
    {
      icon: Building2,
      category: "Attendee",
      price: "₹1,000",
      international: "$25",
      features: ["Conference Sessions Access", "E-Certificate", "Networking Sessions", "Exhibition Access", "Industry Insights"],
      badge: "Basic Access",
      highlighted: false,
    },
  ];

  const registrationNormalCategories = [
    {
      icon: Users,
      category: "Faculty/Industry Person",
      price: "₹5,500",
      international: "$120",
      features: ["All Technical Sessions", "E-Certificate of Participation", "Conference Proceedings", "Conference Kit", "Lunch & Refreshments", "Networking Opportunities"],
      badge: "Regular",
      highlighted: true,
    },
    {
      icon: GraduationCap,
      category: "Students/Research Scholars",
      price: "₹4,500",
      international: "$75",
      features: ["All Technical Sessions", "E-Certificate of Participation", "Conference Proceedings", "Student Discount", "Mentorship Sessions", "Career Guidance"],
      badge: "Student Offer",
      highlighted: false,
    },
    {
      icon: Building2,
      category: "Attendee",
      price: "₹2,000",
      international: "$30",
      features: ["Conference Sessions Access", "E-Certificate", "Networking Sessions", "Exhibition Access", "Industry Insights"],
      badge: "Basic Access",
      highlighted: false,
    },
  ];

  const activeCategories = activeTab === 'early' ? registrationCategoriesEarlyBird : registrationNormalCategories;

  const registrationSteps = [
    {
      icon: FileText,
      step: "01",
      title: "Fill Registration Form",
      description: "Complete the online registration form with your details",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: CreditCard,
      step: "02",
      title: "Make Payment",
      description: "Pay registration fee via secure payment methods",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: FileText,
      step: "03",
      title: "Submit Paper",
      description: "Upload your research paper (if presenting)",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Mail,
      step: "04",
      title: "Get Confirmation",
      description: "Receive confirmation email with joining details",
      color: "from-orange-500 to-red-600",
    },
  ];

  const paymentMethods = [
    { name: "UPI", icon: "💳" },
    { name: "Credit Card", icon: "💳" },
    { name: "Debit Card", icon: "💳" },
    { name: "Net Banking", icon: "🏦" },
    { name: "International Payment", icon: "🌍" },
  ];

  return (
    <section id="registration" className="relative py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mt-10 px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full mb-6 shadow-lg">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wider">Limited Seats Available</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Registration
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Secure your spot at CEMENT'26 and join leading experts in civil engineering materials and emerging technologies.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-1 shadow-lg inline-flex">
            <button
              onClick={() => setActiveTab('early')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'early'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Early Bird</span>

            </button>
            <button
              onClick={() => setActiveTab('normal')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'normal'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Regular</span>
            </button>
          </div>
        </div>



        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {activeCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${
                  category.highlighted 
                    ? 'shadow-2xl border-2 border-teal-500' 
                    : 'shadow-xl border border-gray-100'
                }`}
              >
                {/* Badge */}
                {category.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-md">
                      {category.badge}
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="bg-white p-8">
                  {/* Icon & Category */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{category.price}</div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">International: {category.international}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="https://forms.gle/pf3DxbL2jkN53vTQ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      category.highlighted
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:shadow-lg hover:shadow-teal-500/30'
                        : 'bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 hover:bg-gradient-to-r hover:from-teal-200 hover:to-cyan-200'
                    }`}
                  >
                    Register Now
                    <ArrowRight className="inline-block w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Registration Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Registration{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Process
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to complete your registration and secure your spot at the conference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {registrationSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index < registrationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-3/4 w-full h-1 bg-gradient-to-r from-teal-500 to-cyan-600 opacity-30"></div>
                  )}
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                      <StepIcon className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-gray-500 mb-2">Step {step.step}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-10 shadow-2xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Star className="w-8 h-8 text-yellow-300" />
              <h3 className="text-3xl font-bold text-white">Ready to Join CEMENT'26?</h3>
              <Star className="w-8 h-8 text-yellow-300" />
            </div>
            
            <p className="text-teal-100 text-xl mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to connect with industry leaders, learn about cutting-edge research, and advance your career in civil engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://forms.gle/pf3DxbL2jkN53vTQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white text-teal-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-8 text-teal-100 text-sm">
              <p>📧 For queries: <a href="mailto:cement26@jspmuni.ac.in" className="underline hover:text-white">cement26@jspmuni.ac.in</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;