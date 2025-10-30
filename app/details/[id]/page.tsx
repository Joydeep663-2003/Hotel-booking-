"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/experiences/${id}`)
      .then((res) => res.json())
      .then((data) => setHotel(data))
      .catch((err) => console.error("Error fetching details:", err));
  }, [id]);

  if (!hotel) {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <img
        src={hotel.image}
        alt={hotel.title}
        className="rounded-2xl w-full h-72 object-cover"
      />
      <h1 className="text-3xl font-bold mt-4">{hotel.title}</h1>
      <p className="text-gray-700 mt-2">{hotel.description}</p>
      <p className="mt-4 text-2xl font-semibold text-blue-600">
        ₹{hotel.price}
      </p>

      <Link
        href="/"
        className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ⬅ Back to Hotels
      </Link>
    </main>
  );
}
