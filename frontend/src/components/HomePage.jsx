"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '@/store/slices/cartSlice';
import { Search, Filter, ShoppingCart, Heart, MapPin, Clock } from 'lucide-react';



const categories = [
  'All', 'Electronics', 'Clothing', 'Home & Garden', 'Books', 'Sports', 'Automotive', 'Toys'
];

export default function HomePage({ onNavigate }) {
  const { products, searchTerm, selectedCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = !searchTerm || 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || 
      selectedCategory === 'All' || 
      product.category === selectedCategory;

    return matchesSearch && matchesCategory && product.status === 'available';
  });

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    onNavigate('product-detail');
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl text-white p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to EcoFinds</h1>
        <p className="text-green-100 text-lg">Discover amazing second-hand treasures and give items a new life</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for items..."
              value={searchTerm}
              onChange={(e) => dispatch(setSearchTerm(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => dispatch(setSelectedCategory(category === 'All' ? '' : category))}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (selectedCategory === category || (category === 'All' && !selectedCategory))
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group transform hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 line-clamp-2">{product.title}</h3>
                <span className="text-lg font-bold text-green-600">${product.price}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-3 w-3" />
                  <span>{product.sellerName}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{new Date(product.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {product.category}
                </span>
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="flex items-center space-x-1 px-3 py-1.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-sm">Add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Search className="h-12 w-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No items found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}