"use client";
import React from "react";
import Link from "next/link";

const myProducts = [
  { id: 1, title: "Organic Cotton T-Shirt", price: 19.99, image: "/public/window.svg" },
  { id: 2, title: "Reusable Water Bottle", price: 12.49, image: "/public/victory.svg" },
];

export default function MyListings() {
  return (
    <div className="min-h-screen bg-white font-[Inter] px-4 py-8">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Listings</h1>
          <Link href="/products/add">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition">+ Add Product</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {myProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
              <img src={product.image} alt={product.title} className="w-24 h-24 mb-2 rounded-lg shadow" />
              <div className="font-semibold text-gray-800 text-center">{product.title}</div>
              <div className="text-green-600 font-bold mb-2">${product.price.toFixed(2)}</div>
              <div className="flex gap-2 mt-2">
                <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition text-sm">Edit</button>
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center shadow">
          <div>
            <div className="font-bold text-lg text-gray-800">Total Items Listed: {myProducts.length}</div>
            <div className="text-green-600 font-semibold">Items Sold: 1</div>
            <div className="text-gray-700">Earnings: $32.48</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
