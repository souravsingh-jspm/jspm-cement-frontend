import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "@/components/ui/Slider";

const renderStyledText = (text: string) => {
  return text.split(" ").map((word, index) => {
    if (!word) return null;
    if (word === "&") {
      return (
        <span
          key={index}
          className="inline-block mr-2 text-[30px] sm:text-[28px] lg:text-[30px] text-gray-900"
        >
          &
        </span>
      );
    }
    const firstLetter = word.charAt(0);
    const rest = word.slice(1);
    return (
      <span key={index} className="inline-block mr-2">
        <span className="text-[30px] sm:text-[28px] lg:text-[30px] text-teal-600 ">
          {firstLetter}
        </span>
        <span className="text-[10px] sm:text-[14px] lg:text-[20px] text-gray-900 font-bold">
          {rest}
        </span>
      </span>
    );
  });
};

const HomePage = () => {
  // SEO Metadata
  const pageTitle = "CEMENT '26 - 1st International Conference on Civil Engineering Materials & Emerging Next Technologies";
  const pageDescription = "Join CEMENT '26: International Conference on Civil Engineering Materials & Emerging Next Technologies. Virtual conference on 14th-15th February 2026 focusing on smart materials for smart infrastructure.";
  const keywords = "Civil Engineering, Construction Materials, Smart Infrastructure, Cement Conference, Emerging Technologies, Virtual Conference 2026";

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "CEMENT '26 - 1st International Conference on Civil Engineering Materials & Emerging Next Technologies",
          "description": "International conference focusing on cementing smart material for smart infrastructure",
          "startDate": "2026-02-14",
          "endDate": "2026-02-15",
          "eventStatus": "https://schema.org/EventScheduled",
          "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
          "location": {
            "@type": "VirtualLocation",
            "url": window.location.origin
          },
          "organizer": {
            "@type": "Organization",
            "name": "JSPM University Pune - School of Civil and Environmental Sciences",
            "url": "https://www.jspm.university"
          }
        })}
      </script>

      {/* Update title in document head */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />

      <div className="">
        <Slider />
      </div>
      
      <main
        id="home"
        className="h-[min-h-screen - 10vh] flex py-10 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center">
            {/* Institution Information from Brochure */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl text-teal-800 font-semibold">
                Inspiring Innovation. Transforming Talent.
              </h2>
              <h3 className="text-md sm:text-lg text-cyan-700 font-medium mt-1">
                Faculty of Science and Technology
              </h3>
              <h3 className="text-md sm:text-lg text-cyan-700 font-medium">
                School of Civil and Environmental Sciences
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                cordially invites you for the Inauguration of
              </p>
            </div>

            <div className="inline-block mb-6 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <p className="text-teal-600 font-semibold">
                1<sup>st</sup> International Conference on
              </p>
            </div>

            <h1 className="font-bold text-gray-900 mb-6 leading-tight">
              <div className="mb-2">
                {renderStyledText(
                  "CIVIL ENGINEERING MATERIALS & EMERGING NEXT TECHNOLOGIES"
                )}
              </div>
            </h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                &ldquo;Cementing Smart Material for Smart Infrastructure&rdquo;
              </h2>
            </div>

            <div className="inline-block mb-8 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-xl">
              <p className="text-2xl font-bold tracking-wider">CEMENT'26</p>
            </div>
            
            <div className="mx-2 inline-block mb-8 px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-xl shadow-xl animate-pulse">
              <p className="text-lg font-bold tracking-wider flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Virtual Mode</span>
              </p>
            </div>
            
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join leading researchers, industry experts, and academics to
              explore cutting-edge innovations in civil engineering materials
              and technologies shaping the future of construction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Calendar className="text-teal-600" size={24} />
                <div className="text-left">
                  <p className="text-sm text-gray-600">Conference Date</p>
                  <p className="font-semibold text-gray-900">
                    14<sup>th</sup> - 15<sup>th</sup> February 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/registration"
                aria-label="Register for CEMENT '26 Conference"
                onClick={() =>
                  document
                    .getElementById("registration")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 transform hover:-translate-y-1"
              >
                Registration Details
              </Link>
              <Link
                to="/conference-theme"
                aria-label="Explore conference themes"
                onClick={() =>
                  document
                    .getElementById("themes")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border-2 border-teal-200"
              >
                Explore Themes
              </Link>
            </div>
          </header>
        </div>
      </main>

      {/* About Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <article>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ABOUT JS
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  PM GROUP
                </span>
              </h2>
              <div
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8
                hover:shadow-2xl transition-shadow
                text-gray-900
                text-sm sm:text-lg md:text-xl
                leading-relaxed tracking-normal
                break-words
                text-justify"
              >
                JSPM (Jayawant Shikshan Prasarak Mandal) Pune, established in 1998
                under Prof. Dr. T. J. Sawant's visionary leadership, exemplifies
                educational excellence. This multidisciplinary institution offers
                undergraduate, postgraduate, and doctoral programs across
                Engineering, Management, Pharmacy, Arts & Commerce, Education,
                Health Sciences, Law, and Computer Applications. With
                state-of-the-art infrastructure, modern laboratories, and
                industry-aligned curriculum emphasizing experiential learning, JSPM
                prepares students for real-world challenges. Beyond academics, it
                promotes holistic development through extracurricular activities,
                sports, and cultural events. Its student-centric approach fosters an
                inclusive environment where every individual thrives. Integrating
                advanced technology and aligning with national educational policies,
                JSPM stands as Pune's leading educational institution, shaping
                tomorrow's leaders.
              </div>
            </article>
            
            <article>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ABOUT JSPM{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  UNIVERSITY PUNE
                </span>
              </h2>
              <div
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8
                hover:shadow-2xl transition-shadow
                text-gray-900
                text-sm sm:text-lg md:text-xl
                leading-relaxed tracking-normal
                break-words
                text-justify"
              >
                JSPM University Pune embodies educational excellence aligned with
                the National Education Policy (NEP), emphasizing experiential
                learning through internships, industry projects, field visits, and
                practical simulations. Our flexible, multidisciplinary curriculum
                enables students to explore diverse passions while acquiring
                comprehensive knowledge. We prioritize creativity, innovation, and
                digital proficiency to prepare students for a dynamic world.
                Holistic development thrives through extracurricular activities in
                sports, arts, culture, and community service, nurturing character
                alongside intellect. Strong industry partnerships provide valuable
                real-world exposure, while our inclusive environment empowers every
                student. JSPM University Pune shapes future leaders through
                transformative, NEP-aligned education that seamlessly integrates
                academic rigor with practical relevance and social responsibility.
              </div>
            </article>
            
            <article>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ABOUT SCHOOL OF CIVIL AND{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  ENVIRONMENTAL SCIENCES
                </span>
              </h2>
              <div
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8
                hover:shadow-2xl transition-shadow
                text-gray-900
                text-sm sm:text-lg md:text-xl
                leading-relaxed tracking-normal
                break-words
                text-justify"
              >
                Established in 2023, JSPM University Pune's School of Civil and
                Environmental Sciences offers undergraduate and postgraduate
                programs, including B.Tech. in Civil Engineering and M.Tech
                specializations in Construction Management, Transportation,
                Environmental and Water Resources, and Structural Engineering.
                Notably, it features Maharashtra's first M.Tech. in Real Estate and
                Valuation, addressing niche industry demands. The school prioritizes
                experiential learning through internships, industry projects, and
                field training, ensuring practical skill development. Strong
                industry collaborations provide research opportunities and
                professional exposure. Modern laboratories, smart classrooms, and
                experienced faculty cultivate innovation, critical thinking, and
                leadership. Holistic development is enhanced through workshops,
                seminars, and extracurricular activities, preparing students
                comprehensively for professional success.
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;