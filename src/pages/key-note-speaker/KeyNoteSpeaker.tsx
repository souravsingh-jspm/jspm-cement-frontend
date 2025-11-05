import { User, Award, Building2 } from "lucide-react";
import { useGetKeyNoteSpeakersById } from "@/services/KeyNoteSpeakers";

const speakers = [
  {
    name: "Dr. Praveen Kumar",
    title: "Professor of Civil Engineering",
    institution: "IIT Roorkee",
    expertise: "Transportations Engineering",
    image: "https://jspmuni.ac.in/images/media_images/Dr.PK.jpeg",
  },
  // {
  //   name: "Dr. Priya Sharma",
  //   title: "Senior Research Scientist",
  //   institution: "CSIR-SERC",
  //   expertise: "Smart Building Technologies",
  //   image:
  //     "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
  // },
  // // {
  //   name: "Dr. Amit Patel",
  //   title: "Director, Infrastructure Division",
  //   institution: "L&T Construction",
  //   expertise: "Advanced Concrete Technologies",
  //   image:
  //     "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
  // },
  // {
  //   name: "Dr. Sunita Reddy",
  //   title: "Head of Department",
  //   institution: "NIT Warangal",
  //   expertise: "Nanomaterials in Construction",
  //   image:
  //     "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400",
  // },
];

const KeyNoteSpeaker = () => {
  const { data: keyNoteSpeaker } = useGetKeyNoteSpeakersById("");

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

        {/* <div className="grid grid-cols-1 justify-center w-[20vw]">
          {speakers.map((speaker, index) => (
            <div key={index} className="">
              <div className="">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-[50vh] object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {speaker.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Award
                      className="text-teal-600 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <p className="text-sm text-gray-700">{speaker.title}</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Building2
                      className="text-teal-600 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <p className="text-sm text-gray-700">
                      {speaker.institution}
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <User
                      className="text-teal-600 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <p className="text-sm text-gray-600 italic">
                      {speaker.expertise}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flex justify-center py-10">
          <div className="w-[500px] bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl shadow-lg overflow-hidden text-center">
            {/* Image */}
            <img
              src={speakers[0].image}
              alt={speakers[0].name}
              className="w-full h-[50vh] object-contain bg-white"
            />

            {/* Details */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-gray-900">
                {speakers[0].name}
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <Award className="text-teal-600" size={16} />
                <p className="text-sm text-gray-700">{speakers[0].title}</p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Building2 className="text-teal-600" size={16} />
                <p className="text-sm text-gray-700">
                  {speakers[0].institution}
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <User className="text-teal-600" size={16} />
                <p className="text-sm text-gray-600 italic">
                  {speakers[0].expertise}
                </p>
              </div>
            </div>
          </div>
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
