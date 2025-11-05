import { Users, Shield, Globe } from "lucide-react";

const committeeData = {
  organizing: [
    {
      name: "Dr. Dipak Jadhav",
    },
    {
      name: "Dr. Pritam Hait",
    },
    {
      name: "Dr. Prashant Sudani",
    },
    {
      name: "Dr. Pravin Bhasme",
    },
    {
      name: "Dr. Sagar Turkane",
    },
    {
      name: "Dr. Jaicky Gurnani",
    },
    {
      name: "Mr. Manjunath Changali",
    },
    {
      name: "Mr. Mahesh Lokhande",
    },
    {
      name: "Dr. Pinki Deb",
    },
    {
      name: "Mr. Sharanabasappa Kori",
    },
    {
      name: "Mr. Gokul Dhumal",
    },
    {
      name: "Mr. Azharuddin Humnabad",
    },
    {
      name: "Dr. Tushar Das",
    },
    {
      name: "Dr. Deepak Kolekar",
    },
    {
      name: "Ms. Ankita Turate",
    },
    {
      name: "Ms. Sharayu Kadam",
    },
    {
      name: "Mrs. Preeti Kumari",
    },
  ],
  advisory: [
    {
      name: "Prof. Dr. M. S. Ranadive",
      affiliation: "Professor (Retd.), College of Engineering Pune",
    },
    { name: "Dr. Kiran Patil", affiliation: "Professor, NIT Surat" },
    { name: "Prof. S. Choudhury", affiliation: "Professor, NIT Silchar" },
    { name: "Prof. AK Mungray", affiliation: "NIT Trichy" },
    { name: "Prof. A.I. Lashkar", affiliation: "Professor, NIT Silchar" },
    { name: "Prof. Yogendra Singh", affiliation: "Professor, IIt Roorkee" },
    { name: "Dr. Laxmikant Yadu", affiliation: "Professor, NIT Raipur" },
    {
      name: "Dr. A. S. Sayyed",
      affiliation: "Professor, Sanjivani College of Engineering Kopargaon",
    },
    {
      name: "Dr. Mukhopaddhyay",
      affiliation: "Professor (Retd.), College of Engineering Pune",
    },
    {
      name: "Dr. Girish Kulkarni",
      affiliation: "Professor, Shivaji University Kolhapur",
    },

    {
      name: "Dr. Mahesh Chougule",
      affiliation: "Professor, DKTE Society's Textile & Engineering Institute",
    },

    {
      name: "Dr. Popat Kumbhar",
      affiliation: "Professor, Rajarambapu Institute of Technology",
    },

    {
      name: "Dr. G. L. Sivakumar Babu",
      affiliation: "Retired Professor, IISc Bengaluru",
    },

    // { name: "", affiliation: "" },

    // { name: "", affiliation: "" },
  ],
  technical: [
    {
      name: "Dr. Sharan Kumar Goudar",
      affiliation: "Assisant Professor, NIT Calicut",
    },
    {
      name: "Dr. Yashwant Patil",
      affiliation: "Assistant Professor, Rajarambapu Institute of Technology",
    },
    {
      name: "Dr. Ajim Sutar",
      affiliation:
        "Assistant Professor, D. Y. Patil college of engineering and technology, kolhapur",
    },
    {
      name: "Dr. M. V. Shah",
      affiliation: "Assistant Professor, Gov. L. D. College of Engineering",
    },
    {
      name: "Dr. K. K. Tripathi",
      affiliation: "Assistant Professor, COEP Tech Pune",
    },
    { name: "Dr. P. Das", affiliation: "Assistant Professor, NIT Silchar" },
    {
      name: "Dr. Atanu. Sahu",
      affiliation: "Assistant Professor, NIT Silchar",
    },
    {
      name: "Dr. Sandeep K. Chouksey",
      affiliation: "Assistant Professor, NIT Raipur",
    },
    {
      name: "Dr. Tarun Rajak",
      affiliation:
        "Assistant Professor, Shri Shankaracharya Institute Of Professional Management & Technology, Raipur",
    },
    {
      name: "Dr. Anurag Sharma",
      affiliation: "Assistant Professor, O. P. Jindal University, Raigarh",
    },
    {
      name: "Dr. Nitin Tiwar",
      affiliation:
        "Assistant Professor, Southern Illinois University Carbondale US",
    },
  ],
};

const ConferenceCommitte = () => {
  return (
    <section
      id="committee"
      className="py-20 bg-gradient-to-br from-gray-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
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
                  {/* <p className="text-sm text-teal-600 font-medium">
                    {member.role}
                  </p> */}
                  {/* <p className="text-sm text-gray-600">{member.affiliation}</p> */}
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
