"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@radix-ui/react-select"
import { Leaf, Search, Filter, Grid, List, SlidersHorizontal, MapPin, Star } from "lucide-react"

// Extended mock product data with more details
const mockProducts = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    price: 85,
    category: "Clothing",
    condition: "Excellent",
    image: "/vintage-leather-jacket.png",
    description: "Classic brown leather jacket in excellent condition",
    seller: "EcoFashionista",
    location: "San Francisco, CA",
    rating: 4.8,
    views: 24,
    favorites: 5,
    postedDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Wooden Coffee Table",
    price: 120,
    category: "Furniture",
    condition: "Good",
    image: "/wooden-coffee-table.png",
    description: "Handcrafted oak coffee table with natural finish",
    seller: "WoodCraftLover",
    location: "Portland, OR",
    rating: 4.9,
    views: 18,
    favorites: 3,
    postedDate: "2024-01-10",
  },
  {
    id: 3,
    title: "iPhone 12 Pro",
    price: 450,
    category: "Electronics",
    condition: "Like New",
    image: "/iphone-12-pro.jpg",
    description: "Unlocked iPhone 12 Pro, 128GB, excellent condition",
    seller: "TechRecycler",
    location: "Austin, TX",
    rating: 4.7,
    views: 45,
    favorites: 12,
    postedDate: "2024-01-20",
  },
  {
    id: 4,
    title: "Yoga Mat Set",
    price: 25,
    category: "Sports",
    condition: "Like New",
    image: "/yoga-mat-set.png",
    description: "Complete yoga set with mat, blocks, and strap",
    seller: "ZenLifestyle",
    location: "Denver, CO",
    rating: 4.6,
    views: 12,
    favorites: 2,
    postedDate: "2024-01-25",
  },
  {
    id: 5,
    title: "Ceramic Plant Pots",
    price: 15,
    category: "Home & Garden",
    condition: "Good",
    image: "/ceramic-plant-pots.png",
    description: "Set of 3 handmade ceramic pots for indoor plants",
    seller: "GreenThumb",
    location: "Seattle, WA",
    rating: 4.5,
    views: 8,
    favorites: 1,
    postedDate: "2024-01-22",
  },
  {
    id: 6,
    title: "Guitar Acoustic",
    price: 200,
    category: "Music",
    condition: "Excellent",
    image: "/acoustic-guitar.png",
    description: "Yamaha acoustic guitar, great for beginners",
    seller: "MusicMaker",
    location: "Nashville, TN",
    rating: 4.8,
    views: 32,
    favorites: 8,
    postedDate: "2024-01-18",
  },
]

const categories = ["All", "Clothing", "Electronics", "Furniture", "Sports", "Home & Garden", "Music", "Books", "Other"]
const conditions = ["All", "Like New", "Excellent", "Good", "Fair", "Poor"]
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "popular", label: "Most Popular" },
]

export default function BrowsePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCondition, setSelectedCondition] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [products] = useState(mockProducts)

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.seller.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
      const matchesCondition = selectedCondition === "All" || product.condition === selectedCondition
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesSearch && matchesCategory && matchesCondition && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        case "oldest":
          return new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime()
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "popular":
          return b.views - a.views
        default:
          return 0
      }
    })

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSelectedCondition("All")
    setPriceRange([0, 500])
    setSortBy("newest")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">EcoFinds</h1>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/products/add">
              <Button variant="outline">Sell Item</Button>
            </Link>
            <Link href="/cart">
              <Button>Cart</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Browse Sustainable Finds</h2>

          {/* Main Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for items, sellers, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>

          {/* Quick Filters and Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>

              {(selectedCategory !== "All" ||
                selectedCondition !== "All" ||
                priceRange[0] > 0 ||
                priceRange[1] < 500) && (
                <Button variant="ghost" onClick={clearFilters} className="text-muted-foreground">
                  Clear Filters
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex border border-border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground mt-4">
            {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"} found
          </p>
        </div>

        <div className="flex gap-8">
          {/* Advanced Filters Sidebar */}
          {showFilters && (
            <div className="w-80 shrink-0">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Advanced Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Condition Filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Condition</h4>
                    <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map((condition) => (
                          <SelectItem key={condition} value={condition}>
                            {condition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  {/* Price Range */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={500}
                        min={0}
                        step={5}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Location Filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Location</h4>
                    <div className="space-y-2">
                      {["San Francisco, CA", "Portland, OR", "Austin, TX", "Denver, CO", "Seattle, WA"].map(
                        (location) => (
                          <div key={location} className="flex items-center space-x-2">
                            <Checkbox id={location} />
                            <label htmlFor={location} className="text-sm">
                              {location}
                            </label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Products Grid/List */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </CardContent>
              </Card>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg line-clamp-1">{product.title}</CardTitle>
                          <Badge variant="secondary" className="ml-2 shrink-0">
                            {product.condition}
                          </Badge>
                        </div>
                        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-primary">${product.price}</span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{product.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>by {product.seller}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{product.location.split(",")[0]}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.id}`}>
                    <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            className="w-32 h-32 object-cover rounded-lg shrink-0 group-hover:scale-105 transition-transform duration-200"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {product.title}
                                </h3>
                                <p className="text-muted-foreground">{product.description}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-primary">${product.price}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge variant="secondary">{product.condition}</Badge>
                                  <Badge variant="outline">{product.category}</Badge>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-4">
                                <span>by {product.seller}</span>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span>{product.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  <span>{product.location}</span>
                                </div>
                              </div>
                              <span>
                                {product.views} views • {product.favorites} favorites
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
