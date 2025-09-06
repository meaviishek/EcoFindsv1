"use client";
import React, { useState } from "react";

export default function Profile() {
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState("EcoUser");
  const [email, setEmail] = useState("eco@finds.com");
  const [bio, setBio] = useState("Eco enthusiast. Love sustainable shopping!");
  const [tab, setTab] = useState("profile"); // profile | activity

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-[Inter] px-4 py-12 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-500 to-green-300 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {username.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{username}</h2>
              <p className="text-gray-500 text-sm">{email}</p>
            </div>
          </div>
          <button
            onClick={() => setEdit(!edit)}
            className="px-4 py-2 text-sm rounded-lg border bg-gray-100 hover:bg-gray-200 transition"
          >
            {edit ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b text-sm font-semibold">
          <button
            onClick={() => setTab("profile")}
            className={`flex-1 py-3 ${
              tab === "profile"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setTab("activity")}
            className={`flex-1 py-3 ${
              tab === "activity"
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Activity
          </button>
        </div>

        {/* Tab Content */}
        <div className="px-8 py-6">
          {tab === "profile" && (
            <form className="space-y-5">
              <div>
                <label className="block font-semibold mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={!edit}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!edit}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Bio</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  disabled={!edit}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-gray-100"
                  rows={2}
                />
              </div>
              {edit && (
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold shadow hover:bg-green-700 transition"
                >
                  Save Changes
                </button>
              )}
            </form>
          )}

          {tab === "activity" && (
            <div>
              <h3 className="font-bold text-gray-800 mb-3">Achievements</h3>
              <div className="flex gap-2 flex-wrap mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold text-sm">
                  🌟 Top Seller
                </span>
                <span className="bg-green-200 text-green-900 px-3 py-1 rounded-full font-semibold text-sm">
                  🌿 Eco Champion
                </span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">
                  🛒 100+ Items Bought
                </span>
              </div>

              <h3 className="font-bold text-gray-800 mb-2">
                Items Bought vs Sold
              </h3>
              <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden flex items-end">
                <div className="bg-green-600 h-24 w-1/2"></div>
                <div className="bg-green-300 h-12 w-1/2"></div>
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-gray-800 mb-2">Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full w-2/3"></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  67% towards next milestone
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
