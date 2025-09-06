"use client";
import React from "react";

const purchases = [
  { id: 1, title: "Organic Cotton T-Shirt", price: 19.99, seller: "EcoStore", date: "2025-09-01", image: "/public/window.svg" },
  { id: 2, title: "Reusable Water Bottle", price: 12.49, seller: "EcoStore", date: "2025-08-20", image: "/public/victory.svg" },
];

export default function Purchases() {
  return (
    <div className="min-h-screen bg-white font-[Inter] px-4 py-8">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Previous Purchases</h1>
        <div className="space-y-6 mb-8">
          {purchases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-4 flex items-center hover:shadow-lg transition">
              <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg shadow mr-4" />
              <div className="flex-1">
                <div className="font-semibold text-gray-800 text-lg">{item.title}</div>
                <div className="text-green-600 font-bold mb-1">${item.price.toFixed(2)}</div>
                <div className="text-sm text-gray-500">Seller: {item.seller}</div>
                <div className="text-xs text-gray-400">Purchased: {item.date}</div>
              </div>
              <button className="bg-green-50 text-green-700 px-3 py-1 rounded hover:bg-green-100 transition text-xs ml-4">Download Invoice</button>
              <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold">Bought 10 eco-items!</span>
            </div>
          ))}
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
