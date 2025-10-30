import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getExperiences = async () => {
  try {
    const res = await axios.get(`${API_BASE}/experiences`);
    return res.data;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
};

export const getExperienceById = async (id: string) => {
  try {
    const res = await axios.get(`${API_BASE}/experiences/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching experience by ID:", error);
    return null;
  }
};
