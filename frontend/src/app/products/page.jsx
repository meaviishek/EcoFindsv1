"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Leaf, Search, Plus, Filter } from "lucide-react"

// Mock product data
const mockProducts = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    price: 85,
    category: "Clothing",
    image: "/vintage-leather-jacket.png",
    description: "Classic brown leather jacket in excellent condition",
    seller: "EcoFashionista",
  },
  {
    id: 2,
    title: "Wooden Coffee Table",
    price: 120,
    category: "Furniture",
    image: "/wooden-coffee-table.png",
    description: "Handcrafted oak coffee table with natural finish",
    seller: "WoodCraftLover",
  },
  {
    id: 3,
    title: "iPhone 12 Pro",
    price: 450,
    category: "Electronics",
    image: "/iphone-12-pro.jpg",
    description: "Unlocked iPhone 12 Pro, 128GB, excellent condition",
    seller: "TechRecycler",
  },
  {
    id: 4,
    title: "Yoga Mat Set",
    price: 25,
    category: "Sports",
    image: "/yoga-mat-set.png",
    description: "Complete yoga set with mat, blocks, and strap",
    seller: "ZenLifestyle",
  },
  {
    id: 5,
    title: "Ceramic Plant Pots",
    price: 15,
    category: "Home & Garden",
    image: "/ceramic-plant-pots.png",
    description: "Set of 3 handmade ceramic pots for indoor plants",
    seller: "GreenThumb",
  },
  {
    id: 6,
    title: "Guitar Acoustic",
    price: 200,
    category: "Music",
    image: "/acoustic-guitar.png",
    description: "Yamaha acoustic guitar, great for beginners",
    seller: "MusicMaker",
  },
]

const categories = ["All", "Clothing", "Electronics", "Furniture", "Sports", "Home & Garden", "Music", "Books"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [products] = useState(mockProducts)

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Sell Item
              </Button>
            </Link>
            <Link href="/my-listings">
              <Button variant="outline">My Listings</Button>
            </Link>
            <Link href="/browse">
              <Button variant="outline">Advanced Search</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Browse Sustainable Finds</h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
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
          </div>

          <p className="text-muted-foreground">{filteredProducts.length} items found</p>
        </div>

        {/* Products Grid */}
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
                      {product.category}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <span className="text-sm text-muted-foreground">by {product.seller}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No items found matching your search.</p>
              <p>Try adjusting your search terms or browse all categories.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
