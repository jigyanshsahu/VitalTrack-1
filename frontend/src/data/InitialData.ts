import { UserProfile, Medication, VitalRecord, VitalType, MedicalReport } from "../../types";

export const initialUser: UserProfile = {
  name: "Vikalp",
  age: 18,
  bloodType: "O+",
  allergies: ["Penicillin"],
  emergencyContact: {
    name: "John Doe",
    phone: "+1 (555) 123-4567",
    relation: "Father",
  },
};

export const initialMeds: Medication[] = [
  {
    id: "1",
    name: "Aspirin",
    dosage: "500mg",
    frequency: "Morning, Night",
    times: ["08:00", "20:00"],
    inventory: 30,
    refillThreshold: 10,
    instructions: "Take with water",
  },
  {
    id: "2",
    name: "Vitamin D",
    dosage: "1000IU",
    frequency: "Morning",
    times: ["08:00"],
    inventory: 60,
    refillThreshold: 20,
    instructions: "Take with breakfast",
  },
];

export const initialVitals: VitalRecord[] = [
  {
    id: "1",
    type: VitalType.BloodSugar,
    value: "110",
    unit: "mg/dL",
    timestamp: Date.now() - 86400000,
    status: "normal",
  },
  {
    id: "2",
    type: VitalType.Weight,
    value: "75",
    unit: "kg",
    timestamp: Date.now() - 86400000,
    status: "normal",
  },
];

export const initialReports: MedicalReport[] = [
  {
    id: "1",
    title: "Annual Checkup",
    type: "Lab Report",
    date: new Date().toISOString().split("T")[0],
    summary: "All vitals normal, continue current medications",
  },
];
