"use client";
import React, { useState } from "react";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState("EcoUser");
  const [email, setEmail] = useState("eco@finds.com");
  const [bio, setBio] = useState("Eco enthusiast. Love sustainable shopping!");

  return (
    <div className="min-h-screen bg-white font-[Inter] px-4 py-8 flex flex-col items-center">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-700">EU</div>
          <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200 transition text-sm" onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit"}</button>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block font-semibold mb-1">Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} disabled={!edit} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} disabled={!edit} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1">Bio</label>
            <textarea value={bio} onChange={e => setBio(e.target.value)} disabled={!edit} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" rows={2} />
          </div>
          {edit && <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition">Save</button>}
        </form>
        {/* Badges & Graph */}
        <div className="mt-8 flex gap-2">
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full font-bold text-xs">Top Seller</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-xs">Eco Champion</span>
        </div>
        <div className="mt-6">
          <h3 className="font-bold text-gray-800 mb-2">Items Bought vs Sold</h3>
          <div className="w-full h-24 bg-gray-100 rounded-lg flex items-end">
            <div className="bg-green-600 h-16 w-1/2 rounded-l-lg"></div>
            <div className="bg-green-300 h-8 w-1/2 rounded-r-lg"></div>
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
