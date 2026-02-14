import { createContext, useContext } from "react";
import { AppState, Medication, VitalRecord, MedicalReport } from "../types";

export interface AppContextType extends AppState {
  addMedication: (med: Medication) => void;
  removeMedication: (id: string) => void;
  addVitalLog: (log: VitalRecord) => void;
  takeDose: (medId: string) => void;
  addReport: (report: MedicalReport) => void;
  removeReport: (id: string) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};
