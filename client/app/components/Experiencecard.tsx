"use client";
import Link from "next/link";

export default function ExperienceCard({ exp }: { exp: any }) {
  return (
    <div className="border rounded-2xl shadow hover:shadow-2xl transition duration-300 bg-white overflow-hidden flex flex-col">
      <img
        src={exp.image}
        alt={exp.title}
        className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mt-1 text-gray-800">
            {exp.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {exp.description}
          </p>
        </div>
        <div className="mt-3">
          <p className="font-bold text-blue-600 text-lg mb-2">₹{exp.price}</p>
          <Link
            href="#"
            className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
