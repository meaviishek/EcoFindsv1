"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

// Recommended products (with your provided image links)
const recommendedProducts = [
  {
    id: 1,
    title: "Reusable Water Bottle",
    category: "Drinkware",
    price: 15.99,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ17fUbuYmrV6s1hAk_cwwdyGT-Yj_b5UobhjW-m4nN3Fm4RczSpzCZ3YPHYp0eOIpMdHbI9GBXD2LwNRhsGBNy2lR0RePpeGnNsf5kT2P4",
  },
  {
    id: 2,
    title: "Organic Cotton Tote",
    category: "Bags",
    price: 12.49,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBoSBKcyNh-GjhFL1rF9SsHJDcJnITE5TTuxmMJAGDz-CSBTcz2UVUZLo10i9hXCgL2ugxQ4-e8DpjAnzQlZ6rMH-6hSYyvUsfsni5RZ07de-FFtQO2Hl3EKJ1u0OOZG6B2TaUwz-6vYI&usqp=CAc",
  },
  {
    id: 3,
    title: "Bamboo Toothbrush",
    category: "Personal Care",
    price: 4.99,
    image:
      "http://assets.myntassets.com/v1/assets/images/2025/JANUARY/28/YpZyyUx2_5218d30703044e219c979481099524ed.jpg",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // Example: Uncomment below to test a filled cart
      // setCart([{ id: 4, title: "Eco-friendly Notebook", category: "Stationery", price: 9.99, quantity: 1, image: "https://via.placeholder.com/200" }]);
    }, 500);
  }, []);

  // Cart calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.08;
  const total = subtotal + taxes;

  const handleQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start font-[Inter] px-4 py-8">
      {cart.length === 0 ? (
        <div className="w-full max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
              alt="Empty Cart"
              className="w-52 h-52 mb-6 drop-shadow-lg"
            />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Your Cart is Empty
            </h1>
            <p className="text-gray-500 mb-6">
              Looks like you haven’t added anything yet. Start exploring and add
              items you love!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link href="/products">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition">
                  Browse Products
                </button>
              </Link>
              <Link href="/sell">
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Start Selling
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Popular picks from EcoFinds community
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-32 h-32 mb-3 object-cover rounded-lg shadow"
                  />
                  <div className="font-semibold text-gray-800 text-center">
                    {product.title}
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    {product.category}
                  </div>
                  <div className="text-green-600 font-bold mb-3">
                    ${product.price.toFixed(2)}
                  </div>
                  <Link href="/products">
                    <button className="bg-green-50 text-green-700 px-4 py-2 rounded hover:bg-green-100 transition text-sm">
                      View Product
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Your Cart{" "}
              <span className="text-green-600 text-xl font-normal">
                ({cart.length} items)
              </span>
            </h1>
          </div>
          <div className="grid gap-6 mb-24">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row items-center hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 rounded-lg shadow mr-0 sm:mr-6 mb-4 sm:mb-0 object-cover"
                />
                <div className="flex-1 text-center sm:text-left">
                  <div className="font-semibold text-gray-800 text-lg">
                    {item.title}
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    {item.category}
                  </div>
                  <div className="text-green-600 font-bold mb-2">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <button
                      onClick={() => handleQuantity(item.id, -1)}
                      className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="px-3 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantity(item.id, 1)}
                      className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-4 sm:mt-0 sm:ml-4 border border-red-400 text-red-500 px-4 py-2 rounded hover:bg-red-50 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          {/* Sticky Footer */}
          <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg py-6 px-4 flex flex-col md:flex-row items-center justify-between z-10">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <div className="text-lg font-semibold text-gray-800">
                Subtotal:{" "}
                <span className="text-green-600">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Taxes: ${taxes.toFixed(2)}
              </div>
              <div className="text-xl font-bold text-gray-800">
                Total:{" "}
                <span className="text-green-600">${total.toFixed(2)}</span>
              </div>
              <div className="text-xs text-gray-400 mt-2">
                EcoFinds ensures secure transactions and sustainable shopping.
              </div>
            </div>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition text-lg">
              Checkout
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
