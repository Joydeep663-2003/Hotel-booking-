"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/experiences")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item: any) => item._id === id);
        setHotel(found);
      })
      .catch((err) => console.error("Error loading details:", err));
  }, [id]);

  if (!hotel) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-center">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <img
          src={hotel.image}
          alt={hotel.title}
          className="rounded-lg w-full h-64 object-cover"
        />
        <h1 className="text-3xl font-bold mt-4 text-blue-700">{hotel.title}</h1>
        <p className="text-gray-600 mt-2">{hotel.description}</p>
        <p className="mt-4 text-xl font-semibold text-blue-600">
          ₹{hotel.price}
        </p>

        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          🛒 Buy / Book Now
        </button>
      </div>
    </div>
  );
}
