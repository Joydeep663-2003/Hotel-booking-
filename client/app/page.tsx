"use client";
import { useEffect, useState } from "react";
import ExperienceCard from "./components/Experiencecard";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // ✅ Fetch from environment variable for Vercel
    const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/experiences`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        🏨 Luxury Hotel Bookings
      </h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Loading hotels...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((exp) => (
            <ExperienceCard key={exp._id} exp={exp} />
          ))}
        </div>
      )}
    </main>
  );
}
