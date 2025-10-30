import { Calendar, Clock, FileCheck, Award } from "lucide-react";

const importantDates = [
  {
    icon: FileCheck,
    event: "Abstract Submission Deadline",
    date: "December 15, 2025",
    description: "Submit your research abstract for review",
  },
  {
    icon: Clock,
    event: "Notification of Abstract Acceptance",
    date: "January 10, 2026",
    description: "Authors will be notified of abstract status",
  },
  {
    icon: FileCheck,
    event: "Full Paper Submission",
    date: "February 28, 2026",
    description: "Submit complete research paper",
  },
  {
    icon: Award,
    event: "Final Acceptance Notification",
    date: "March 20, 2026",
    description: "Final paper acceptance and review feedback",
  },
  {
    icon: Calendar,
    event: "Early Bird Registration Closes",
    date: "April 10, 2026",
    description: "Last date for discounted registration",
  },
  {
    icon: Calendar,
    event: "Regular Registration Closes",
    date: "May 15, 2026",
    description: "Final registration deadline",
  },
  {
    icon: Award,
    event: "Conference Dates",
    date: "June 5-7, 2026",
    description: "Three days of knowledge sharing and networking",
    highlight: true,
  },
];

const ImportantDate = () => {
  return (
    <section id="dates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Important{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Dates
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mark your calendar with these crucial deadlines and dates for
            CEMENT'26
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500"></div>

            <div className="space-y-8">
              {importantDates.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6"
                  >
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                        item.highlight
                          ? "bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl"
                          : "bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg"
                      }`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>

                    <div
                      className={`flex-1 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                        item.highlight
                          ? "bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300"
                          : "bg-gradient-to-br from-gray-50 to-teal-50"
                      }`}
                    >
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          item.highlight ? "text-amber-900" : "text-gray-900"
                        }`}
                      >
                        {item.event}
                      </h3>
                      <p
                        className={`text-lg font-semibold mb-2 ${
                          item.highlight ? "text-amber-700" : "text-teal-600"
                        }`}
                      >
                        {item.date}
                      </p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-xl shadow-xl">
            <p className="text-lg font-semibold">
              All dates are tentative and subject to change. Please check
              regularly for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDate;
