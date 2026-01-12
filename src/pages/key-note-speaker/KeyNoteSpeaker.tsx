import { User, Award, Building2 } from "lucide-react";
import Img1 from "@/assets/Images/Image1.png";
import Img2  from "@/assets/Images/Image2.png";

const speakers: any = [
  {
    name: "Dr. Praveen Kumar",
    title: "Professor of Civil Engineering",
    institution: "IIT Roorkee",
    expertise: "Transportations Engineering",
    image: Img1,
  },
  {
    name: "Dr Ishfaq Rashid Sheikh ",
    title: "Postdoctoral Fellow",
    institution: "Shenzhen University Guangdong China",
    expertise: "Geotechnical Engineering",
    image:Img2,
  },

];

const KeyNoteSpeaker = () => {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Keynote{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Speakers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from distinguished experts and thought leaders in civil
            engineering and construction technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {speakers.map((speaker: any, index: any) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="flex justify-center bg-grey-100 p-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-[50vh] object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {speaker.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Award className="text-teal-600 mt-1 flex-shrink-0" size={16} />
                    <p className="text-sm text-gray-700">{speaker.title}</p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Building2 className="text-teal-600 mt-1 flex-shrink-0" size={16} />
                    <p className="text-sm text-gray-700">
                      {speaker.institution}
                    </p>
                  </div>

                  <div className="flex items-start space-x-2">
                    <User className="text-teal-600 mt-1 flex-shrink-0" size={16} />
                    <p className="text-sm text-gray-600 italic">
                      {speaker.expertise}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 bg-teal-50 inline-block px-6 py-3 rounded-lg">
            More speakers to be announced soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyNoteSpeaker;
