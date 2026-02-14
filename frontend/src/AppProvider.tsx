import { useState, ReactNode } from "react";
import { AppContext } from "./AppContext";
import { Medication, VitalRecord, MedicalReport } from "../types";
import { initialUser, initialMeds, initialVitals, initialReports } from "./data/InitialData";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [user] = useState(initialUser);
  const [medications, setMedications] = useState(initialMeds);
  const [vitals, setVitals] = useState(initialVitals);
  const [reports, setReports] = useState(initialReports);
  const [healthScore, setHealthScore] = useState(85);

  const addMedication = (med: Medication) => {
    setMedications([...medications, med]);
  };

  const removeMedication = (id: string) => {
    setMedications(medications.filter((med) => med.id !== id));
  };

  const addVitalLog = (log: VitalRecord) => {
    setVitals([...vitals, log]);
  };

  const takeDose = (medId: string) => {
    setMedications(
      medications.map((med: Medication) =>
        med.id === medId 
          ? { 
              ...med, 
              lastTaken: new Date().toISOString(),
              inventory: Math.max(0, med.inventory - 1)
            } 
          : med
      )
    );
  };

  const addReport = (report: MedicalReport) => {
    setReports([...reports, report]);
  };

  const removeReport = (id: string) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        medications,
        vitals,
        reports,
        healthScore,
        addMedication,
        removeMedication,
        addVitalLog,
        takeDose,
        addReport,
        removeReport,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
