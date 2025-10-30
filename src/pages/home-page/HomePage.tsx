import { Calendar, MapPin } from "lucide-react";

const HomePage = () => {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <p className="text-teal-600 font-semibold">
              International Conference 2026
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            CIVIL ENGINEERING MATERIAL &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              EMERGING NOVEL TECHNOLOGIES
            </span>
          </h1>

          <div className="inline-block mb-8 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-xl">
            <p className="text-2xl font-bold tracking-wider">CEMENT'26</p>
          </div>

          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join leading researchers, industry experts, and academics to explore
            cutting-edge innovations in civil engineering materials and
            technologies shaping the future of construction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Calendar className="text-teal-600" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600">Conference Date</p>
                <p className="font-semibold text-gray-900">TBA 2026</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="text-teal-600" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold text-gray-900">JSPM University</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("registration")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 transform hover:-translate-y-1"
            >
              Register Now
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("themes")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border-2 border-teal-200"
            >
              Explore Themes
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HomePage;
