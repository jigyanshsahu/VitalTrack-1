/// <reference types="vite/client" />

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// ==================== USER ====================
export const fetchUser = async () => {
  const res = await fetch(`${API_BASE_URL}/user`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};

export const updateUser = async (userData: any) => {
  const res = await fetch(`${API_BASE_URL}/user`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error("Failed to update user");
  return res.json();
};

// ==================== MEDICATIONS ====================
export const fetchMedications = async () => {
  const res = await fetch(`${API_BASE_URL}/medications`);
  if (!res.ok) throw new Error("Failed to fetch medications");
  return res.json();
};

export const addMedication = async (medData: any) => {
  const res = await fetch(`${API_BASE_URL}/medications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medData),
  });
  if (!res.ok) throw new Error("Failed to add medication");
  return res.json();
};

export const removeMedication = async (medId: string) => {
  const res = await fetch(`${API_BASE_URL}/medications/${medId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to remove medication");
  return res.json();
};

export const takeDose = async (medId: string) => {
  const res = await fetch(`${API_BASE_URL}/medications/${medId}/take-dose`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Failed to take dose");
  return res.json();
};

// ==================== VITALS ====================
export const fetchVitals = async () => {
  const res = await fetch(`${API_BASE_URL}/vitals`);
  if (!res.ok) throw new Error("Failed to fetch vitals");
  return res.json();
};

export const addVitalLog = async (vitalData: any) => {
  const res = await fetch(`${API_BASE_URL}/vitals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(vitalData),
  });
  if (!res.ok) throw new Error("Failed to add vital log");
  return res.json();
};

// ==================== REPORTS ====================
export const fetchReports = async () => {
  const res = await fetch(`${API_BASE_URL}/reports`);
  if (!res.ok) throw new Error("Failed to fetch reports");
  return res.json();
};

export const addReport = async (reportData: any) => {
  const res = await fetch(`${API_BASE_URL}/reports`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reportData),
  });
  if (!res.ok) throw new Error("Failed to add report");
  return res.json();
};

export const removeReport = async (reportId: string) => {
  const res = await fetch(`${API_BASE_URL}/reports/${reportId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to remove report");
  return res.json();
};
