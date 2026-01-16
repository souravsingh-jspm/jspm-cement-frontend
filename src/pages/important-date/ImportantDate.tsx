import { Calendar, Clock, FileCheck, Award } from "lucide-react";

interface ImportantDate {
  id_id: number;
  id_title: string;
  id_description: string;
  id_icon: string;
  highlight?: boolean;
}

const ICONS: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Calendar,
  Clock,
  FileCheck,
  Award,
};

const importantDates: ImportantDate[] = [
  {
    id_id: 1,
    id_title: "Last Date for Submission of Full-Length Paper",
    id_description: "20th January 2026",
    id_icon: "FileCheck",
    highlight: true,
  },
  {
    id_id: 2,
    id_title: "Acceptance Notification",
    id_description: "20th January 2026",
    id_icon: "Award",
    highlight: true,
  },
  {
    id_id: 3,
    id_title: "Early Bird Registration",
    id_description: "20th January 2026 to 30th January 2026",
    id_icon: "Calendar",
  },
  {
    id_id: 4,
    id_title: "Late Registration",
    id_description: "31st January 2026 onwards",
    id_icon: "Clock",
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
            CEMENT&apos;26
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500"></div>

          <div className="space-y-8">
            {importantDates.map((item) => {
              const Icon = ICONS[item.id_icon] || Calendar;

              return (
                <div
                  key={item.id_id}
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
                      {item.id_title}
                    </h3>

                    <p
                      className={`text-lg font-semibold ${
                        item.highlight ? "text-amber-700" : "text-teal-600"
                      }`}
                    >
                      {item.id_description}
                    </p>
                  </div>
                </div>
              );
            })}
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
