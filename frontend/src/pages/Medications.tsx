import { useState } from "react";
import { useAppContext } from "../AppContext";
import { Card, Button } from "../components/UIComponents";
import { Pill, Trash2, Package, Check } from "lucide-react";

const Medications = () => {
  const { medications, removeMedication, takeDose } = useAppContext();
  const [takenMeds, setTakenMeds] = useState<Set<string>>(new Set());

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

  const getLastTakenTime = (med: any) => {
    if (med.lastTaken) {
      try {
        const date = new Date(med.lastTaken);
        return date.toLocaleTimeString("en-US", { 
          hour: "2-digit", 
          minute: "2-digit",
          hour12: true 
        });
      } catch {
        return "Not taken";
      }
    }
    return "Not taken";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Medications
          </h1>
          <p className="text-gray-600 mt-2">Manage your medications and prescriptions</p>
        </div>

        {medications.length === 0 ? (
          <div className="text-center py-12">
            <Pill className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">No medications yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {medications.map((med) => {
              const isTaken = takenMeds.has(med.id);
              return (
                <div
                  key={med.id}
                  className={`rounded-2xl p-6 shadow-md border transition-all group ${
                    isTaken
                      ? "bg-green-50 border-green-200"
                      : "bg-white border-gray-100 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                        isTaken
                          ? "bg-green-100"
                          : "bg-gradient-to-br from-blue-100 to-cyan-100"
                      }`}>
                        {isTaken ? (
                          <Check className="w-7 h-7 text-green-600" />
                        ) : (
                          <Pill className="w-7 h-7 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{med.name}</h3>
                        <p className="text-gray-600 mt-1">{med.dosage}</p>
                      </div>
                    </div>
                    <Button
                      variant="danger"
                      size="md"
                      onClick={() => removeMedication(med.id)}
                      className="!p-3"
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-600">Frequency</p>
                      <p className="font-bold text-gray-900 mt-1">{med.frequency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Times</p>
                      <p className="font-bold text-gray-900 mt-1">{med.times.join(", ")}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">In Stock</p>
                      <p className="font-bold text-emerald-600 mt-1">{med.inventory} units</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Refill At</p>
                      <p className={`font-bold mt-1 ${med.inventory <= med.refillThreshold ? 'text-red-600' : 'text-gray-900'}`}>
                        {med.refillThreshold} left
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Last Taken</p>
                      <p className={`font-bold mt-1 ${isTaken ? 'text-green-600' : 'text-gray-900'}`}>
                        {getLastTakenTime(med)}
                      </p>
                    </div>
                  </div>

                  {med.instructions && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Instructions:</span> {med.instructions}
                      </p>
                    </div>
                  )}

                  <Button
                    variant={isTaken ? "primary" : "primary"}
                    fullWidth
                    className={`mt-4 transition-all ${isTaken ? "bg-green-600 hover:bg-green-700" : ""}`}
                    onClick={() => handleTakeDose(med.id)}
                  >
                    {isTaken ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Taken! ✓
                      </>
                    ) : (
                      <>
                        <Pill className="w-5 h-5 mr-2" />
                        Take Medication
                      </>
                    )}
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Medications;
