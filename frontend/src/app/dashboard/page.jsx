"use client";
import React, { useState } from "react";
import Link from "next/link";

const categories = ["All", "Clothing", "Electronics", "Home", "EcoPick", "Most Resold"];
const products = [
  {
    id: 1,
    title: "Organic Cotton T-Shirt",
    category: "Clothing",
    price: 19.99,
    image: "/public/window.svg",
    trending: "EcoPick",
  },
  {
    id: 2,
    title: "Reusable Water Bottle",
    category: "Home",
    price: 12.49,
    image: "/public/victory.svg",
    trending: "Most Resold",
  },
  {
    id: 3,
    title: "Solar Power Bank",
    category: "Electronics",
    price: 29.99,
    image: "/public/globe.svg",
    trending: "EcoPick",
  },
  {
    id: 4,
    title: "Bamboo Toothbrush",
    category: "Home",
    price: 4.99,
    image: "/public/file.svg",
    trending: "",
  },
];

const recommendations = [
  {
    id: 5,
    title: "Eco-Friendly Notebook",
    price: 7.99,
    image: "/public/next.svg",
  },
  {
    id: 6,
    title: "Plant-Based Soap",
    price: 5.49,
    image: "/public/vercel.svg",
  },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter(
    (p) =>
      (category === "All" || p.category === category || p.trending === category) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white font-[Inter] px-4 py-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
        />
      </div>
      {/* Category Filter */}
      <div className="flex gap-2 justify-center mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1 rounded-full text-sm font-semibold border transition shadow-sm ${
              category === cat
                ? "bg-green-600 text-white border-green-600"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-green-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition relative">
            <img src={product.image} alt={product.title} className="w-28 h-28 mb-3 rounded-lg shadow" />
            <div className="font-semibold text-gray-800 text-center">{product.title}</div>
            <div className="text-sm text-gray-500 mb-1">{product.category}</div>
            <div className="text-green-600 font-bold mb-2">${product.price.toFixed(2)}</div>
            <Link href={`/products/${product.id}`}>
              <button className="bg-green-600 text-white px-4 py-1 rounded-lg font-semibold shadow hover:bg-green-700 transition text-sm mt-2">View Details</button>
            </Link>
            {product.trending && (
              <span className="absolute top-2 right-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold shadow">{product.trending}</span>
            )}
          </div>
        ))}
      </div>
      {/* Floating Add Button */}
      <Link href="/products/add">
        <button className="fixed bottom-8 right-8 bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg hover:bg-green-700 transition z-50">
          +
        </button>
      </Link>
      {/* AI-powered Recommendations */}
      <div className="max-w-2xl mx-auto mt-16">
        <h2 className="text-xl font-bold text-gray-800 mb-4">You may like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center hover:shadow-lg transition">
              <img src={rec.image} alt={rec.title} className="w-20 h-20 mb-2 rounded-lg shadow" />
              <div className="font-semibold text-gray-800 text-center">{rec.title}</div>
              <div className="text-green-600 font-bold mb-2">${rec.price.toFixed(2)}</div>
              <button className="bg-green-50 text-green-700 px-4 py-1 rounded hover:bg-green-100 transition text-sm">View Product</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
