import { User, Award, Linkedin, Globe,  Video, Star } from "lucide-react";
import { useState } from "react";
import Img1 from "@/assets/Images/Image1.png";
import Img2 from "@/assets/Images/Image2.png";
import Img3 from "@/assets/Images/Image3.png";
import Img4 from "@/assets/Images/Image4.png";

interface Speaker {
  name: string;
  title: string;
  institution: string;
  expertise: string;
  topic?: string;
  image: string;
  linkedin: string;
  country?: string;
}

const speakers: Speaker[] = [
  {
    name: "Dr. Praveen Kumar",
    title: "Professor of Civil Engineering",
    institution: "Indian Institute of Technology (IIT) Roorkee",
    expertise: "Transportation Engineering",
    image: Img1,
    linkedin: "https://www.linkedin.com/in/dr-praveen-kumar-472a85233/",
    country: "India",
  },
  {
    name: "Dr. Ishfaq Rashid Sheikh",
    title: "Postdoctoral Research Fellow",
    institution: "Shenzhen University, Guangdong, China",
    expertise: "Geotechnical Engineering",
    image: Img2,
    linkedin: "https://www.linkedin.com/in/ishfaq-rashid-05ba56a3/",
    country: "China",
  },
  {
    name: "Prof. Dr. Rahul Ralegaonkar",
    title: "Professor, Department of Civil Engineering",
    institution: "Visvesvaraya National Institute of Technology (VNIT), Nagpur",
    expertise: "Sustainable Construction Materials",
    topic: "Innovative Solutions for Sustainable Construction using Local Materials",
    image: Img4,
    linkedin: "https://www.linkedin.com/in/dr-rahul-ralegaonkar-4b2a4b15/",
    country: "India",
  },
  {
    name: "Dr. Chandrashekhar Chincholkar",
    title: "Founder and CEO, CMK Advisors LLP",
    institution: "ESG Coach & Green Energy Expert",
    expertise: "Green Energy & Sustainable Infrastructure",
    topic: "Powering Infrastructure with Green Energy – India's Energy Transition",
    image: Img3,
    linkedin: "https://www.linkedin.com/in/dr-chandrashekhar-chincholkar-1308853/",
    country: "India",
  },
];

const KeyNoteSpeaker = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getSpeakerColor = (index: number) => {
    const colors = [
      "from-teal-500 to-cyan-600",
      "from-blue-500 to-indigo-600",
      "from-emerald-500 to-green-600",
      "from-amber-500 to-orange-600",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="speakers" className="relative py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden mt-5">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Keynote Speakers
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Learn from distinguished international experts and thought leaders who are shaping the future of civil engineering and construction technology.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top accent bar */}
              <div className={`h-2 bg-gradient-to-r ${getSpeakerColor(index)}`}></div>
              
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Image Section */}
                  <div className="lg:w-1/3">
                    <div className="relative">
                      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-white shadow-lg">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            hoveredCard === index ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>
                      {/* Country flag */}
                      <div className="absolute -top-2 -right-2">
                        <div className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full shadow-md">
                          <Globe className="w-3 h-3 text-gray-600" />
                          <span className="text-xs font-medium text-gray-700">{speaker.country}</span>
                        </div>
                      </div>
                      {/* Verified badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Content Section */}
                  <div className="lg:w-2/3">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {speaker.name}
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800">{speaker.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{speaker.institution}</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <User className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-800">Expertise</p>
                            <p className="text-sm text-gray-600 mt-1">{speaker.expertise}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Streaming Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">All Sessions Streamed Live</h3>
                    <p className="text-teal-100">
                      Join interactive sessions with live Q&A from anywhere.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Live Streaming</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-white font-medium">Interactive Q&A</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-white font-medium">Virtual Networking</span>
                  </div>
                  {/* <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <span className="text-white font-medium">Recording Access</span>
                  </div> */}
                </div>
              </div>
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

export default KeyNoteSpeaker;