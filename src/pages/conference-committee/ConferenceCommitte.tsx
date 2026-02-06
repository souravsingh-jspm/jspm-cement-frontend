import { Users, Shield, Globe, Award, Mail, Briefcase, Building, Crown, Target, Trophy, Medal, Sparkles, ChevronRight, Star, UserCheck, Settings, Zap, ExternalLink, Phone } from "lucide-react";
import { useState } from "react";

// Import images (keep your existing imports)
import FounderSecreatary from "@/assets/Images/CommitteeImages/Founder Secretary.jpg";
import Presedent from "@/assets/Images/CommitteeImages/Presedent.jpg";
import ViceChancellor from "@/assets/Images/CommitteeImages/Vice Chancellor.jpg";
import Dean from "@/assets/Images/CommitteeImages/Dean.jpg";
import DIRECTOR from "@/assets/Images/CommitteeImages/Aniket Patil.jpeg";
import OCCHIRAG from "@/assets/Images/CommitteeImages/Chirag Chaware.png";
import OCNIKITA from "@/assets/Images/CommitteeImages/Nikita Bhagat.jpg";

// Committee Data
const CHIEF_PATRON = [
  {
    name: "Prof. (Dr.) T. J. Sawant",
    title: "Founder Secretary, JSPM Group of Institutes, Pune",
    image: FounderSecreatary,
    role: "Chief Patron",
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

const CONVENER = [
  {
    name: "Dr. Aniket D. Patil",
    title: "Director (I/C), School of Civil & Environmental Sciences, JSPM University Pune",
    image: DIRECTOR,
  },
];

const ORGANIZING_CHAIRS = [
  {
    name: "Dr. Nikita Bhagat",
    title: "Assistant Professor, SCES, JSPM University Pune",
    image: OCNIKITA,
  },
  {
    name: "Mr. Chirag Chaware",
    title: "Assistant Professor, SCES, JSPM University Pune",
    image: OCCHIRAG,
  },
];

const committeeData = {
  organizing: [
    { name: "Dr. Snehal Abhyankar" },
    { name: "Dr. Dipak Jadhav" },
    { name: "Dr. Pritam Hait" },
    { name: "Dr. Prashant Sudani" },
    { name: "Dr. Pravin Bhasme" },
    { name: "Dr. Sagar Turkane" },
    { name: "Dr. Jaicky Gurnani" },
    { name: "Mr. Manjunath Changali" },
    { name: "Mr. Mahesh Lokhande" },
    { name: "Dr. Pinki Deb" },
    { name: "Mr. Sharanabasappa Kori" },
    { name: "Mr. Gokul Dhumal" },
    { name: "Mr. Azharuddin Humnabad" },
    { name: "Dr. Tushar Das" },
    { name: "Dr. Deepak Kolekar" },
    { name: "Ms. Ankita Turate" },
    { name: "Ms. Sharayu Kadam" },
    { name: "Mrs. Preeti Kumari" },
  ],
  advisory: [
    { name: "Prof. Dr. M. S. Ranadive", affiliation: "Professor (Retd.), College of Engineering Pune" },
    { name: "Dr. Kiran Patil", affiliation: "Professor, NIT Surat" },
    { name: "Prof. S. Choudhury", affiliation: "Professor, NIT Silchar" },
    { name: "Prof. AK Mungray", affiliation: "SVNIT Trichy" },
    { name: "Prof. A.I. Lashkar", affiliation: "Professor, NIT Silchar" },
    { name: "Prof. Yogendra Singh", affiliation: "Professor, IIT Roorkee" },
    { name: "Dr. Laxmikant Yadu", affiliation: "Professor, NIT Raipur" },
    { name: "Dr. A. S. Sayyed", affiliation: "Professor, Sanjivani College of Engineering Kopargaon" },
    { name: "Dr. Mukhopaddhyay", affiliation: "Professor (Retd.), College of Engineering Pune" },
    { name: "Dr. Girish Kulkarni", affiliation: "Professor, Shivaji University Kolhapur" },
    { name: "Dr. Mahesh Chougule", affiliation: "Professor, DKTE Society's Textile & Engineering Institute" },
    { name: "Dr. Popat Kumbhar", affiliation: "Professor, Rajarambapu Institute of Technology" },
    { name: "Dr. G. L. Sivakumar Babu", affiliation: "Retired Professor, IISc Bengaluru" },
  ],
  technical: [
    { name: "Dr. Sharan Kumar Goudar", affiliation: "Assistant Professor, NIT Calicut" },
    { name: "Dr. Yashwant Patil", affiliation: "Assistant Professor, Rajarambapu Institute of Technology" },
    { name: "Dr. Ajim Sutar", affiliation: "Assistant Professor, D. Y. Patil College of Engineering and Technology, Kolhapur" },
    { name: "Dr. M. V. Shah", affiliation: "Assistant Professor, Gov. L. D. College of Engineering" },
    { name: "Dr. K. K. Tripathi", affiliation: "Assistant Professor, COEP Tech Pune" },
    { name: "Dr. P. Das", affiliation: "Assistant Professor, NIT Silchar" },
    { name: "Dr. Atanu. Sahu", affiliation: "Assistant Professor, NIT Silchar" },
    { name: "Dr. Sandeep K. Chouksey", affiliation: "Assistant Professor, NIT Raipur" },
    { name: "Dr. Tarun Rajak", affiliation: "Assistant Professor, Shri Shankaracharya Institute Of Professional Management & Technology, Raipur" },
    { name: "Dr. Anurag Sharma", affiliation: "Assistant Professor, O. P. Jindal University, Raigarh" },
    { name: "Dr. Nitin Tiwar", affiliation: "Assistant Professor, Southern Illinois University Carbondale US" },
  ],
};

// Type for committee members
interface CommitteeMember {
  name: string;
  title?: string;
  image?: string;
  role?: string;
  affiliation?: string;
}

// Enhanced CommitteeCard Component
const CommitteeCard: React.FC<{ member: CommitteeMember; index: number; type: string }> = ({ member, index, type }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getCardColors = (type: string) => {
    switch (type) {
      case "chief-patron":
        return {
          bg: "from-purple-600 via-purple-500 to-indigo-600",
          lightBg: "from-purple-50 to-purple-100",
          border: "border-purple-200",
          text: "text-purple-600",
          icon: <Crown className="w-5 h-5" />
        };
      case "patron":
        return {
          bg: "from-blue-600 via-blue-500 to-cyan-600",
          lightBg: "from-blue-50 to-cyan-100",
          border: "border-blue-200",
          text: "text-blue-600",
          icon: <Shield className="w-5 h-5" />
        };
      case "convener":
        return {
          bg: "from-teal-600 via-teal-500 to-emerald-600",
          lightBg: "from-teal-50 to-emerald-100",
          border: "border-teal-200",
          text: "text-teal-600",
          icon: <Target className="w-5 h-5" />
        };
      case "organizing-chair":
        return {
          bg: "from-amber-600 via-amber-500 to-orange-600",
          lightBg: "from-amber-50 to-orange-100",
          border: "border-amber-200",
          text: "text-amber-600",
          icon: <Trophy className="w-5 h-5" />
        };
      default:
        return {
          bg: "from-gray-600 via-gray-500 to-gray-600",
          lightBg: "from-gray-50 to-gray-100",
          border: "border-gray-200",
          text: "text-gray-600",
          icon: <Award className="w-5 h-5" />
        };
    }
  };

  const colors = getCardColors(type);

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />
      
      {/* Top accent bar */}
      <div className={`h-2 bg-gradient-to-r ${colors.bg}`}></div>
      
      <div className="relative p-6">
        {/* Image container */}
        <div className="relative mb-6">
          <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${colors.bg} flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-3xl font-bold">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
              </div>
            )}
            {/* Image frame */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
            {member.name}
          </h3>
          
          {member.title && (
            <div className="mb-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                <Briefcase className={`w-4 h-4 ${colors.text}`} />
                <p className="text-sm text-gray-700 leading-relaxed">{member.title}</p>
              </div>
            </div>
          )}
          
          {member.affiliation && (
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Building className={`w-4 h-4 ${colors.text}`} />
              <p className="text-sm text-gray-600 leading-relaxed">{member.affiliation}</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// Enhanced CommitteeList Component
const CommitteeList: React.FC<{ title: string; members: CommitteeMember[]; icon: React.ReactNode; color: string }> = ({ title, members, icon, color }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedMembers = showAll ? members : members.slice(0, 6);

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 h-full border border-gray-100 group/committee">
      {/* Header with gradient */}
      <div className="relative mb-8">
        <div className="flex items-start space-x-4">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg ${color} group-hover/committee:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-gray-900 group-hover/committee:text-gray-800 transition-colors">
                {title}
              </h3>
              <span className="px-3 py-1 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-700 text-sm font-semibold rounded-full">
                {members.length}
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex-1 h-1.5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"
                  style={{ width: `${Math.min(100, (members.length / 20) * 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 font-medium">{members.length} Members</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Members list */}
      <div className="space-y-2 mb-6">
        {displayedMembers.map((member, index) => (
          <div
            key={index}
            className="group/item flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-cyan-50/50 transition-all duration-200 cursor-pointer border border-transparent hover:border-teal-100"
          >
            {/* Index number */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mr-4 group-hover/item:from-teal-100 group-hover/item:to-cyan-100 transition-all duration-200">
              <span className="text-sm font-semibold text-gray-600 group-hover/item:text-teal-700">
                {index + 1}
              </span>
            </div>
            
            {/* Member info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900 group-hover/item:text-teal-700 transition-colors truncate pr-2">
                  {member.name}
                </h4>
                <div className="flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-300 group-hover/item:bg-teal-400 transition-colors"></div>
                </div>
              </div>
              {member.affiliation && (
                <p className="text-sm text-gray-600 mt-1 truncate group-hover/item:text-gray-700 transition-colors">
                  {member.affiliation}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* View all button */}
      {members.length > 6 && (
        <div className="relative">
          <div className="absolute inset-x-0 bottom-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full py-3 px-4 text-center bg-gradient-to-r from-gray-50 to-gray-100 hover:from-teal-50 hover:to-cyan-100 text-gray-700 hover:text-teal-700 font-medium rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 group/button relative overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
            
            <span className="relative z-10 font-semibold">
              {showAll ? "Show Less" : `View All ${members.length} Members`}
            </span>
            <ChevronRight className={`w-4 h-4 relative z-10 transition-transform duration-300 ${showAll ? "rotate-90" : ""} group-hover/button:translate-x-1`} />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover/button:border-teal-200 transition-all duration-300"></div>
          </button>
        </div>
      )}
    </div>
  );
};

const ConferenceCommittee = () => {
  return (
    <section id="committee" className="relative py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden mt-5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Committee
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the distinguished professionals and experts guiding CEMENT'26 towards excellence in civil engineering research and innovation.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          {/* Chief Patron - Featured Card */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  CHIEF{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                    PATRON
                  </span>
                </h2>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-xl">
                {CHIEF_PATRON.map((member, index) => (
                  <div key={index} className="relative">
                    <CommitteeCard member={member} index={index} type="chief-patron" />
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Patrons */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  PAT
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    RONS
                  </span>
                </h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PATRON.map((member, index) => (
                <div key={index} className="relative">
                  <CommitteeCard member={member} index={index} type="patron" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Convener & Organizing Chairs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Convener */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-lg shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  CONV
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                    ENER
                  </span>
                </h2>
              </div>
              
              <div className="flex justify-center">
                {CONVENER.map((member, index) => (
                  <div key={index} className="w-full max-w-sm">
                    <CommitteeCard member={member} index={index} type="convener" />
                  </div>
                ))}
              </div>
            </div>

            {/* Organizing Chairs */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg shadow-lg">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  ORGANI
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                    ZING CHAIRS
                  </span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ORGANIZING_CHAIRS.map((member, index) => (
                  <div key={index} className="relative">
                    <CommitteeCard member={member} index={index} type="organizing-chair" />
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Committee Sections */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Committee{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Members
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated committees bring together expertise from academia and industry to ensure the success of CEMENT'26.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CommitteeList
              title="Advisory Committee"
              members={committeeData.advisory}
              icon={<Shield className="text-white" size={24} />}
              color="bg-gradient-to-br from-indigo-500 to-purple-600"
            />
            
            <CommitteeList
              title="Technical Committee"
              members={committeeData.technical}
              icon={<Settings className="text-white" size={24} />}
              color="bg-gradient-to-br from-blue-500 to-cyan-600"
            />
            
            <CommitteeList
              title="Organizing Committee"
              members={committeeData.organizing}
              icon={<UserCheck className="text-white" size={24} />}
              color="bg-gradient-to-br from-teal-500 to-emerald-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceCommittee;