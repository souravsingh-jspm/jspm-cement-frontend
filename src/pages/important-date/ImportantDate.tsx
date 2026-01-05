import { Calendar, Clock, FileCheck, Award } from "lucide-react";
import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import { BASE_URL } from "@/constants/appConstants";

interface ImportantDate {
  id_id: number;
  id_title: string;
  id_date: string;
  id_icon: string;
  id_description: string;
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

const ImportantDate = () => {
  const [importantDates, setImportantDates] = useState<ImportantDate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = BASE_URL + "user/importantdate";

  useEffect(() => {
    let isMounted = true;

    const fetchDates = async () => {
      try {
        const res = await axios.get(API_URL);
        if (isMounted) {
          setImportantDates(res.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to fetch important dates");
          setLoading(false);
        }
      }
    };

    fetchDates();
    return () => {
      isMounted = false;
    };
  }, [API_URL]);

  if (loading)
    return (
      <div className="text-center py-20 text-teal-600">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[100vh]">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
            </div>
          }
        >
          <div className="px-2 pt-10 tablet:pt-10 w-full flex flex-col items-center">
            <div className="w-full"></div>
          </div>
        </Suspense>{" "}
      </div>
    );
  if (error)
    return <div className="text-center py-20 text-red-600">{error}</div>;

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
                    {/* <p
                      className={`text-lg font-semibold mb-2 ${
                        item.highlight ? "text-amber-700" : "text-teal-600"
                      }`}
                    >
                      {item.id_date}
                    </p> */}
                    <p
                      className={`text-lg font-semibold mb-2 ${
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
