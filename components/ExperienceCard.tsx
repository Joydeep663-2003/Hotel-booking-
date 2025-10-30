"use client";
import Link from "next/link";

export default function ExperienceCard({ exp }: { exp: any }) {
  return (
    <div className="border rounded-2xl shadow p-4 hover:shadow-lg transition bg-white">
      <img
        src={exp.image}
        alt={exp.title}
        className="rounded-xl w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mt-3">{exp.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{exp.description}</p>
      <p className="mt-2 font-bold text-blue-600">₹{exp.price}</p>

      <Link
        href={`/details/${exp._id}`}
        className="mt-3 block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
