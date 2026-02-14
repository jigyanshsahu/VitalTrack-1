import { useState } from "react";
import { useAppContext } from "../AppContext";
import { Card, Button } from "../components/UIComponents";
import { FileText, Trash2, Download, Calendar } from "lucide-react";

const Documents = () => {
  const { reports, removeReport } = useAppContext();

  const getReportIcon = (type: string) => {
    return <FileText className="w-8 h-8 text-blue-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Medical Documents
          </h1>
          <p className="text-gray-600 mt-2">Your medical reports and records</p>
        </div>

        {reports.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No documents yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getReportIcon(report.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{report.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                        {report.type}
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Calendar className="w-4 h-4" />
                        {report.date}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="danger"
                    size="md"
                    onClick={() => removeReport(report.id)}
                    className="!p-3"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>

                <p className="text-gray-700 mb-4">{report.summary}</p>

                {report.imageUrl && (
                  <div className="mt-4">
                    <img src={report.imageUrl} alt={report.title} className="max-h-64 rounded-lg" />
                  </div>
                )}

                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="md" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents;
