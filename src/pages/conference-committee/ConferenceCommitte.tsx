import { Users, Shield, Globe, Award } from "lucide-react";

import FounderSecreatary from "@/assets/Images/CommitteeImages/Founder Secretary.png";
import Presedent from "@/assets/Images/CommitteeImages/Presedent.png";
import ViceChancellor from "@/assets/Images/CommitteeImages/Vice Chancellor.png";
import Dean from "@/assets/Images/CommitteeImages/Dean.png";
import DIRECTOR from "@/assets/Images/CommitteeImages/Aniket Patil.png";
import OCCHIRAG from "@/assets/Images/CommitteeImages/Chirag Chaware.png";
import OCNIKITA from "@/assets/Images/CommitteeImages/Nikita Bhagat.jpg";

const CHIEF_PATRON = [
  {
    name: "Prof. (Dr.) T. J. Sawant",
    title: "Founder Secretary, JSPM Group of Institutes, Pune",
    image: FounderSecreatary,
  },
];
const PATRON = [
  {
    name: "Prof. (Dr.) R. S. Joshi",
    title: "President, JSPM University Pune",
    image: Presedent,
  },
  {
    name: "Prof. (Dr.) B. B. Ahuja",
    title: "Vice Chancellor, JSPM University Pune",
    image: ViceChancellor,
  },
  {
    name: "Prof. R. S. Deshpande",
    title: "Dean, FST, JSPM University Pune",
    image: Dean,
  },
];

const DIRECTOR1 = [
  {
    name: "Dr. Aniket D. Patil",
    title:
      "Director (I/C), School of Civil & Enviromental Sciences, JSPM University Pune",
    image: DIRECTOR,
  },
];

const ORGINIZING_CHAIRS = [
  {
    name: "Dr. Nikita Bhagat",
    title: "Assistant Professor,SCES, JSPM University Pune",
    image: OCNIKITA,
  },
  {
    name: "Mr. Chirag Chaware",
    title: "Assistant Professor,SCES, JSPM University Pune",
    image: OCCHIRAG,
  },
];
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
      {" "}
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

        <h2 className="text-4xl font-bold text-gray-900 mb-4 underline">
          CHIEF{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 ">
            PATRON
          </span>
        </h2>
        <div className="my-3">
          <div className="grid grid-cols-1 gap-8 px-6 max-w-7xl">
            {CHIEF_PATRON.map((cp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={cp.image}
                  alt={cp.name}
                  className="w-full h-[30vh] object-contain bg-white"
                />

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {cp.name}
                  </h3>

                  <div className="flex items-center justify-center space-x-2">
                    <Award className="text-teal-600" size={16} />
                    <p className="text-sm text-gray-700">{cp.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 underline">
          PAT
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            RON
          </span>
        </h2>
        <div className="">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl my-3">
            {PATRON.map((p, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-[30vh] object-contain bg-white"
                />

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>

                  <div className="flex items-center justify-center space-x-2">
                    <Award className="text-teal-600" size={16} />
                    <p className="text-sm text-gray-700">{p.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto">
            {/* Left Column — CONVENER */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 underline text-center">
                CONV
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  ENER
                </span>
              </h2>

              <div className="flex justify-center">
                {DIRECTOR1.map((cp, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300 w-full max-w-sm"
                  >
                    {/* Image container for consistent size */}
                    <div className="w-full h-64 sm:h-72 bg-gray-50 flex items-center justify-center">
                      <img
                        src={cp.image}
                        alt={cp.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {cp.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2">
                        <Award className="text-teal-600" size={16} />
                        <p className="text-sm text-gray-700">{cp.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — ORGANIZING CHAIRS */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 underline text-center">
                ORGANI
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  ZING CHAIRS
                </span>
              </h2>

              {/* Responsive grid of chairs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                {ORGINIZING_CHAIRS.map((cp, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300 w-full max-w-sm"
                  >
                    {/* Uniform image container */}
                    <div className="w-full h-64 sm:h-72 bg-gray-50 flex items-center justify-center">
                      <img
                        src={cp.image}
                        alt={cp.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {cp.name}
                      </h3>
                      <div className="flex items-center justify-center space-x-2">
                        <Award className="text-teal-600" size={16} />
                        <p className="text-sm text-gray-700">{cp.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default ConferenceCommitte;
