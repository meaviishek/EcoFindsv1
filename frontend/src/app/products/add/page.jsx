"use client"



import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Leaf, ArrowLeft, Upload, X } from "lucide-react"

const categories = ["Clothing", "Electronics", "Furniture", "Sports", "Home & Garden", "Music", "Books", "Other"]

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    condition: "",
  })
  const [images, setImages] = useState<string[]>([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement product creation logic
    console.log("Product creation:", { ...formData, images })
    alert("Product listed successfully!")
  }

  const handleImageAdd = () => {
    // Simulate image upload - in real app, this would handle file upload
    const newImage = `/placeholder.svg?height=200&width=200&query=${formData.title || "product"}`
    setImages([...images, newImage])
  }

  const handleImageRemove = (index) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/products" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">EcoFinds</h1>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">List Your Item</CardTitle>
            <CardDescription>
              Share your pre-loved items with the EcoFinds community and give them a new life.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Product Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Vintage Leather Jacket"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  required
                />
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
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

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your item's condition, features, and any relevant details..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>

              {/* Price */}
              <div className="space-y-2">
                <Label htmlFor="price">Price (USD) *</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    className="pl-8"
                    value={formData.price}
                    onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Condition */}
              <div className="space-y-2">
                <Label htmlFor="condition">Condition *</Label>
                <Select
                  value={formData.condition}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, condition: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">Like New</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Images */}
              <div className="space-y-2">
                <Label>Images</Label>
                <div className="space-y-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleImageAdd}
                    className="w-full h-32 border-dashed bg-transparent"
                  >
                    <div className="text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Add Image Placeholder</p>
                    </div>
                  </Button>

                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Product ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleImageRemove(index)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                List Item
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
