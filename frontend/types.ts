export enum VitalType {
  BloodPressure = 'Blood Pressure',
  BloodSugar = 'Blood Sugar',
  HeartRate = 'Heart Rate',
  Weight = 'Weight',
}

export interface VitalRecord {
  id: string;
  type: VitalType;
  value: string; // Stored as string to handle "120/80"
  unit: string;
  timestamp: number;
  status: 'normal' | 'warning' | 'critical';
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string; // e.g., "Morning, Night"
  times: string[]; // e.g., ["08:00", "20:00"]
  inventory: number;
  refillThreshold: number;
  instructions?: string;
}

export interface MedicalReport {
  id: string;
  title: string;
  type: 'Lab Report' | 'Prescription' | 'Radiology' | 'Discharge Summary' | 'Other';
  date: string;
  summary: string;
  imageUrl?: string; // Base64 string for display
}

export interface UserProfile {
  name: string;
  age: number;
  bloodType: string;
  allergies: string[];
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
}

export interface AppState {
  user: UserProfile;
  medications: Medication[];
  vitals: VitalRecord[];
  reports: MedicalReport[];
  healthScore: number;
}