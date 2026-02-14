import { useAppContext } from "../AppContext";
import { Card, Button } from "../components/UIComponents";
import { Heart, Pill, TrendingUp, Clock, Check } from "lucide-react";
import { useState } from "react";
import { getTimeBasedGreeting } from "../utils";

const Dashboard = () => {
  const { medications, vitals, healthScore, takeDose } = useAppContext();
  const [takenMeds, setTakenMeds] = useState<Set<string>>(new Set());

  const getMedicationTime = (med: any) => {
    return med.times?.[0] || "N/A";
  };

  const handleTakeDose = (medId: string) => {
    takeDose(medId);
    setTakenMeds(prev => new Set(prev).add(medId));
    
    // Show success feedback for 2 seconds
    setTimeout(() => {
      setTakenMeds(prev => {
        const newSet = new Set(prev);
        newSet.delete(medId);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {getTimeBasedGreeting()}
            </h1>
            <p className="text-gray-500 mt-2 text-lg">Here is your daily health overview.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-xl opacity-50"></div>
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{healthScore}</div>
                  <div className="text-xs text-emerald-100 font-medium">Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <p className="text-gray-600 text-sm font-medium">Active Meds</p>
            <p className="text-3xl font-bold text-emerald-600 mt-2">{medications.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
            <p className="text-gray-600 text-sm font-medium">Latest Value</p>
            <p className="text-2xl font-bold text-blue-600 mt-2">{vitals[0]?.value || "N/A"}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all col-span-2 md:col-span-1">
            <p className="text-gray-600 text-sm font-medium">Vitals Count</p>
            <p className="text-3xl font-bold text-red-600 mt-2">{vitals.length}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Today's Schedule */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Clock className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Today's Schedule</h2>
            </div>
            <div className="space-y-3">
              {medications.map((med, idx) => (
                <div
                  key={med.id}
                  className={`relative overflow-hidden rounded-2xl p-4 shadow-md hover:shadow-lg transition-all group border ${
                    takenMeds.has(med.id)
                      ? "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
                      : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100"
                  }`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${
                    takenMeds.has(med.id)
                      ? "bg-gradient-to-r from-green-500 to-emerald-500"
                      : "bg-gradient-to-r from-blue-500 to-cyan-500"
                  }`}></div>
                  <div className="relative flex items-center gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      takenMeds.has(med.id)
                        ? "bg-gradient-to-br from-green-100 to-emerald-100"
                        : "bg-gradient-to-br from-blue-100 to-cyan-100"
                    }`}>
                      {takenMeds.has(med.id) ? (
                        <Check className="w-6 h-6 text-green-600" />
                      ) : (
                        <Pill className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-lg">{med.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{med.dosage} • {med.frequency}</p>
                      <p className="text-xs text-gray-500 mt-1">📅 {getMedicationTime(med)}</p>
                    </div>
                    <Button
                      variant={takenMeds.has(med.id) ? "primary" : "primary"}
                      size="md"
                      onClick={() => handleTakeDose(med.id)}
                      className={`!px-6 transform transition-all hover:scale-105 active:scale-95 ${
                        takenMeds.has(med.id) ? "!bg-green-600 hover:!bg-green-700" : ""
                      }`}
                    >
                      {takenMeds.has(med.id) ? (
                        <>
                          <Check className="w-4 h-4 mr-1" />
                          ✓
                        </>
                      ) : (
                        "Take"
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Vitals */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Recent Vitals</h2>
            </div>
            <div className="space-y-3">
              {vitals.map((vital, index) => (
                <div
                  key={vital.id}
                  className="rounded-2xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-gray-600">{vital.type}</p>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      vital.status === 'normal' 
                        ? 'bg-green-100 text-green-700' 
                        : vital.status === 'warning'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {vital.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <p className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      {vital.value}
                    </p>
                    <p className="text-sm text-gray-500 font-medium">{vital.unit}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">
                    {index === 0 ? "📊 Today" : "📆 Yesterday"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
