import { Users, Shield, Globe } from "lucide-react";

const committeeData = {
  organizing: [
    {
      name: "Prof. Vijay Deshmukh",
      role: "Chief Patron",
      affiliation: "JSPM University",
    },
    {
      name: "Dr. Snehal Kulkarni",
      role: "Conference Chair",
      affiliation: "Head, Civil Dept.",
    },
    {
      name: "Dr. Rahul Mehta",
      role: "Organizing Secretary",
      affiliation: "JSPM University",
    },
    {
      name: "Prof. Anjali Joshi",
      role: "Treasurer",
      affiliation: "JSPM University",
    },
  ],
  advisory: [
    { name: "Dr. S.K. Singh", affiliation: "IIT Delhi" },
    { name: "Dr. M.R. Rao", affiliation: "NIT Trichy" },
    { name: "Dr. P.V. Kumar", affiliation: "VJTI Mumbai" },
    { name: "Dr. A.B. Desai", affiliation: "COEP Pune" },
  ],
  technical: [
    { name: "Dr. Kiran Patil", affiliation: "JSPM University" },
    { name: "Prof. Suresh Wagh", affiliation: "JSPM University" },
    { name: "Dr. Meera Kulkarni", affiliation: "JSPM University" },
    { name: "Prof. Nitin Bhosale", affiliation: "JSPM University" },
  ],
};

const ConferenceCommitte = () => {
  return (
    <section
      id="committee"
      className="py-20 bg-gradient-to-br from-gray-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conference{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Committee
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated team organizing and guiding CEMENT'26
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Organizing Committee
              </h3>
            </div>
            <div className="space-y-4">
              {committeeData.organizing.map((member, index) => (
                <div
                  key={index}
                  className="border-l-4 border-teal-500 pl-4 py-2 hover:bg-teal-50 transition-colors rounded-r"
                >
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-teal-600 font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">{member.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Advisory Committee
              </h3>
            </div>
            <div className="space-y-4">
              {committeeData.advisory.map((member, index) => (
                <div
                  key={index}
                  className="border-l-4 border-cyan-500 pl-4 py-2 hover:bg-cyan-50 transition-colors rounded-r"
                >
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Technical Committee
              </h3>
            </div>
            <div className="space-y-4">
              {committeeData.technical.map((member, index) => (
                <div
                  key={index}
                  className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors rounded-r"
                >
                  <h4 className="font-semibold text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceCommitte;
