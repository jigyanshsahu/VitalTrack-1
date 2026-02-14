import { useState } from "react";
import { useAppContext } from "../AppContext";
import { Card, Button } from "../components/UIComponents";
import { Activity, TrendingUp, Heart } from "lucide-react";

const Vitals = () => {
  const { vitals, addVitalLog } = useAppContext();

  const getVitalIcon = (type: string) => {
    switch (type) {
      case "Blood Sugar":
        return <TrendingUp className="w-8 h-8 text-orange-600" />;
      case "Weight":
        return <Activity className="w-8 h-8 text-emerald-600" />;
      default:
        return <TrendingUp className="w-8 h-8 text-emerald-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "bg-green-100 text-green-700";
      case "warning":
        return "bg-yellow-100 text-yellow-700";
      case "critical":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Vital Signs
          </h1>
          <p className="text-gray-600 mt-2">Your health measurements and trends</p>
        </div>

        {vitals.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No vital records yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vitals.map((vital) => (
              <div
                key={vital.id}
                className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getVitalIcon(vital.type)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600">{vital.type}</p>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1">{vital.value}</h3>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusColor(vital.status)}`}>
                    {vital.status.toUpperCase()}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Unit</p>
                    <p className="font-bold text-gray-900 mt-1">{vital.unit}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">
                      {new Date(vital.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Vitals;
