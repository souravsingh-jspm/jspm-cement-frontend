import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import videoSrc from "../../assets/background.mp4";

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Ensure video plays correctly
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

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

      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden" id="home">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source 
              src={videoSrc} 
              type="video/mp4" 
            />

          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Conference Info Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 md:px-8 pt-16">
          <div className="max-w-6xl mx-auto text-center">
            {/* Conference Title */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                CEMENT'26
              </h1>
              <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <p className="text-teal-200 font-semibold text-sm md:text-base">
                  1<sup>st</sup> International Conference
                </p>
              </div>
            </div>

            {/* Conference Full Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 max-w-4xl mx-auto leading-relaxed">
              Civil Engineering Materials & Emerging Next Technologies
            </h2>

            {/* Conference Theme */}
            <div className="mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-teal-300 mb-4 max-w-3xl mx-auto italic">
                &ldquo;Cementing Smart Material for Smart Infrastructure&rdquo;
              </h3>
            </div>

            {/* Conference Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                <Calendar className="text-teal-300" size={20} />
                <div className="text-left">
                  <p className="text-sm text-gray-300">Conference Date</p>
                  <p className="font-semibold text-white">
                    14<sup>th</sup> - 15<sup>th</sup> February 2026
                  </p>
                </div>
              </div>
              
              <div className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-full shadow-lg animate-pulse">
                <p className="text-base font-bold tracking-wider flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Virtual Mode</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/registration"
                aria-label="Register for CEMENT '26 Conference"
                className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-200 transform hover:-translate-y-1"
              >
                Register Now
              </Link>
              <Link
                to="/conference-theme"
                aria-label="Explore conference themes"
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-200 transform hover:-translate-y-1"
              >
                View Themes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-16 bg-white" id="themes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about the organizing institutions and their commitment to excellence in education and research.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ABOUT JS
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  PM GROUP
                </span>
              </h2>
              <div className="text-gray-700 leading-relaxed text-justify">
              JSPM (Jayawant Shikshan Prasarak Mandal) Pune, established in 1998 under Prof. Dr. T. J. Sawant's visionary leadership, exemplifies educational excellence. This multidisciplinary institution offers undergraduate, postgraduate, and doctoral programs across Engineering, Management, Pharmacy, Arts & Commerce, Education, Health Sciences, Law, and Computer Applications. With state-of-the-art infrastructure, modern laboratories, and industry-aligned curriculum emphasizing experiential learning, JSPM prepares students for real-world challenges. Beyond academics, it promotes holistic development through extracurricular activities, sports, and cultural events. Its student-centric approach fosters an inclusive environment where every individual thrives. Integrating advanced technology and aligning with national educational policies, JSPM stands as Pune's leading educational institution, shaping tomorrow's leaders.
              </div>
            </article>
            
            <article className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ABOUT JSPM{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  UNIVERSITY PUNE
                </span>
              </h2>
              <div className="text-gray-700 leading-relaxed text-justify">
                JSPM University Pune embodies educational excellence aligned with the National Education Policy (NEP), emphasizing experiential learning through internships, industry projects, field visits, and practical simulations. Our flexible, multidisciplinary curriculum enables students to explore diverse passions while acquiring comprehensive knowledge. We prioritize creativity, innovation, and digital proficiency to prepare students for a dynamic world. Holistic development thrives through extracurricular activities in sports, arts, culture, and community service, nurturing character alongside intellect. Strong industry partnerships provide valuable real-world exposure, while our inclusive environment empowers every student. JSPM University Pune shapes future leaders through transformative, NEP-aligned education that seamlessly integrates academic rigor with practical relevance and social responsibility
              </div>
            </article>
            
            <article className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ABOUT SCHOOL OF CIVIL AND{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  ENVIRONMENTAL SCIENCES
                </span>
              </h2>
              <div className="text-gray-700 leading-relaxed text-justify">
                Established in 2023, JSPM University Pune's School of Civil and Environmental Sciences offers undergraduate and postgraduate programs, including B.Tech. in Civil Engineering and M.Tech specializations in Construction Management, Transportation, Environmental and Water Resources, and Structural Engineering. Notably, it features Maharashtra's first M.Tech. in Real Estate and Valuation, addressing niche industry demands. The school prioritizes experiential learning through internships, industry projects, and field training, ensuring practical skill development. Strong industry collaborations provide research opportunities and professional exposure. Modern laboratories, smart classrooms, and experienced faculty cultivate innovation, critical thinking, and leadership. Holistic development is enhanced through workshops, seminars, and extracurricular activities, preparing students comprehensively for professional success.
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Don't Miss This Opportunity
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Be part of the premier international conference on civil engineering materials and next-generation technologies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/registration"
              className="px-8 py-4 bg-white text-teal-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-gray-50 transition-all duration-200"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;