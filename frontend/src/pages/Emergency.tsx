import { useAppContext } from "../AppContext";
import { Card, Button } from "../components/UIComponents";
import { AlertCircle, Phone, Pill, AlertTriangle, MapPin } from "lucide-react";

const Emergency = () => {
  const { user, medications } = useAppContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="relative">
            <AlertCircle className="w-12 h-12 text-red-600 animate-pulse" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-red-900">Emergency Information</h1>
            <p className="text-red-700 mt-1">Critical medical information at a glance</p>
          </div>
        </div>

        {/* Emergency Contact - Large Call Button */}
        <div className="rounded-2xl bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-300 p-8 mb-8 shadow-lg">
          <p className="text-red-900 font-semibold mb-4 text-center">EMERGENCY CONTACT</p>
          <div className="text-center mb-6">
            <p className="text-3xl font-bold text-red-900">{user.emergencyContact.name}</p>
            <p className="text-red-800 mt-2 text-lg">{user.emergencyContact.relation}</p>
          </div>
          <Button
            onClick={() => window.location.href = `tel:${user.emergencyContact.phone}`}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-xl flex items-center justify-center gap-3"
            variant="danger"
          >
            <Phone className="w-6 h-6" />
            {user.emergencyContact.phone}
          </Button>
        </div>

        {/* Critical Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Allergies */}
          <div className="rounded-2xl bg-white p-6 shadow-md border-l-4 border-red-500">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900">ALLERGIES</h3>
            </div>
            <div className="space-y-2">
              {user.allergies.length > 0 ? (
                user.allergies.map((allergy, idx) => (
                  <div key={idx} className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="font-bold text-red-900">⚠️ {allergy}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-600">No known allergies reported</p>
              )}
            </div>
          </div>

          {/* Blood Type */}
          <div className="rounded-2xl bg-white p-6 shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">BLOOD TYPE</h3>
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg">
                <div className="text-center">
                  <p className="text-lg text-blue-100">Blood Type</p>
                  <p className="text-6xl font-bold">{user.bloodType}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Medications */}
        <div className="rounded-2xl bg-white p-6 shadow-md border-l-4 border-orange-500">
          <div className="flex items-center gap-3 mb-6">
            <Pill className="w-8 h-8 text-orange-600" />
            <h3 className="text-2xl font-bold text-gray-900">CURRENT MEDICATIONS</h3>
          </div>

          {medications.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {medications.map((med) => (
                <div key={med.id} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-bold text-gray-900 text-lg">{med.name}</p>
                  <div className="mt-2 space-y-1 text-sm text-gray-700">
                    <p><span className="font-semibold">Dosage:</span> {med.dosage}</p>
                    <p><span className="font-semibold">Frequency:</span> {med.frequency}</p>
                    <p><span className="font-semibold">Times:</span> {med.times.join(", ")}</p>
                    {med.instructions && (
                      <p><span className="font-semibold">Instructions:</span> {med.instructions}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No medications registered</p>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-8 rounded-2xl bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <p className="text-yellow-900 font-semibold mb-2">ℹ️ Important:</p>
          <p className="text-yellow-800">
            Keep this information up to date. Share with emergency services when needed. Medical alert ID bracelet recommended.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
