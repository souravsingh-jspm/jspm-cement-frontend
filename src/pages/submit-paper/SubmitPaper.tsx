import { FileText, Upload, CheckCircle, AlertCircle } from "lucide-react";

const guidelines = [
  "Papers should be original and not published elsewhere",
  "Maximum length: 6-8 pages including figures and references",
  "Use IEEE conference paper format template",
  "All submissions must be in PDF format",
  "Include keywords and abstract (150-200 words)",
  "Papers will undergo double-blind peer review",
  "Authors must ensure proper citation and avoid plagiarism",
];

const submissionSteps = [
  {
    icon: FileText,
    title: "Prepare Your Paper",
    description:
      "Format your research paper according to IEEE conference guidelines",
  },
  {
    icon: Upload,
    title: "Upload Document",
    description: "Submit your paper through our online submission portal",
  },
  {
    icon: CheckCircle,
    title: "Peer Review",
    description: "Your paper will be reviewed by domain experts",
  },
  {
    icon: AlertCircle,
    title: "Receive Feedback",
    description: "Get acceptance notification and reviewer comments",
  },
];

export default function SubmitPaper() {
  return (
    <section
      id="submit"
      className="py-20 bg-gradient-to-br from-gray-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Submit Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Research Paper
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your innovative research with the global civil engineering
            community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <FileText className="text-teal-600" size={28} />
              <span>Submission Guidelines</span>
            </h3>
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-teal-600 font-semibold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    {guideline}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-cyan-50 border-l-4 border-cyan-500 rounded-r-lg">
              <p className="text-sm text-cyan-900">
                <strong>Note:</strong> Selected papers will be published in
                conference proceedings with ISBN. Best papers may be recommended
                for publication in partner journals.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Submission Process
              </h3>
              <div className="space-y-6">
                {submissionSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-xl p-8 text-white text-center">
              <Upload size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Ready to Submit?</h3>
              <p className="mb-6 opacity-90">
                Upload your research paper to our submission portal
              </p>
              <button className="px-8 py-4 bg-white text-teal-600 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1">
                Submit Paper Now
              </button>
              <p className="mt-4 text-sm opacity-80">
                Submission portal will open soon
              </p>
            </div>
          </div>
        </div>
        {/* 
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Download Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'IEEE Paper Template', format: 'DOCX', size: '245 KB' },
              { name: 'LaTeX Template', format: 'ZIP', size: '1.2 MB' },
              { name: 'Author Guidelines', format: 'PDF', size: '890 KB' }
            ].map((template, index) => (
              <button
                key={index}
                className="flex items-center justify-between p-6 border-2 border-teal-200 rounded-xl hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <FileText className="text-teal-600 group-hover:text-teal-700" size={32} />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{template.name}</p>
                    <p className="text-sm text-gray-600">{template.format} • {template.size}</p>
                  </div>
                </div>
                <Upload className="text-teal-600 group-hover:text-teal-700" size={20} />
              </button>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
