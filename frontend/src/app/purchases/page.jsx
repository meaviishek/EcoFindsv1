"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Leaf, Search, Package, Star, MessageCircle, RotateCcw } from "lucide-react"

// Mock purchase history
const mockPurchases = [
  {
    id: 1,
    orderId: "ECO-2024-001",
    items: [
      {
        id: 2,
        title: "Wooden Coffee Table",
        price: 120,
        category: "Furniture",
        image: "/wooden-coffee-table.png",
        seller: "WoodCraftLover",
        quantity: 1,
      },
    ],
    total: 125.99,
    status: "delivered",
    orderDate: "2024-01-10",
    deliveryDate: "2024-01-15",
  },
  {
    id: 2,
    orderId: "ECO-2024-002",
    items: [
      {
        id: 6,
        title: "Guitar Acoustic",
        price: 200,
        category: "Music",
        image: "/acoustic-guitar.png",
        seller: "MusicMaker",
        quantity: 1,
      },
    ],
    total: 205.99,
    status: "shipped",
    orderDate: "2024-01-20",
    trackingNumber: "ECO123456789",
  },
  {
    id: 3,
    orderId: "ECO-2024-003",
    items: [
      {
        id: 4,
        title: "Yoga Mat Set",
        price: 25,
        category: "Sports",
        image: "/yoga-mat-set.png",
        seller: "ZenLifestyle",
        quantity: 1,
      },
      {
        id: 5,
        title: "Ceramic Plant Pots",
        price: 15,
        category: "Home & Garden",
        image: "/ceramic-plant-pots.png",
        seller: "GreenThumb",
        quantity: 2,
      },
    ],
    total: 60.99,
    status: "processing",
    orderDate: "2024-01-25",
  },
]

const statusColors = {
  processing: "bg-yellow-100 text-yellow-800 border-yellow-200",
  shipped: "bg-blue-100 text-blue-800 border-blue-200",
  delivered: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
}

export default function PurchasesPage() {
  const [purchases] = useState(mockPurchases)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredPurchases = purchases.filter((purchase) => {
    const matchesSearch =
      purchase.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      purchase.items.some((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || purchase.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleReorder = (purchase) => {
    console.log("Reordering items from purchase:", purchase.orderId)
    alert("Items added to cart for reordering!")
  }

  const handleContactSeller = (sellerName) => {
    console.log("Contacting seller:", sellerName)
    alert(`Message sent to ${sellerName}!`)
  }

  const handleLeaveReview = (item) => {
    console.log("Leaving review for:", item.title)
    alert("Review functionality coming soon!")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">EcoFinds</h1>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/products">
              <Button variant="outline">Browse Products</Button>
            </Link>
            <Link href="/cart">
              <Button>View Cart</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Purchase History</h2>
          <p className="text-muted-foreground">Track your sustainable shopping journey and previous orders</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search orders or items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Purchase List */}
        <div className="space-y-6">
          {filteredPurchases.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No purchases found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your search or filter criteria."
                    : "Start your sustainable shopping journey today!"}
                </p>
                <Link href="/products">
                  <Button>Browse Products</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            filteredPurchases.map((purchase) => (
              <Card key={purchase.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Order {purchase.orderId}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(purchase.orderDate).toLocaleDateString()}
                        {purchase.deliveryDate &&
                          ` • Delivered on ${new Date(purchase.deliveryDate).toLocaleDateString()}`}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={statusColors[purchase.status as keyof typeof statusColors]}>
                        {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                      </Badge>
                      <p className="text-lg font-semibold text-primary mt-1">${purchase.total.toFixed(2)}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {purchase.items.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                        <Link href={`/products/${item.id}`} className="shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded-lg border hover:opacity-80 transition-opacity"
                          />
                        </Link>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <Link
                                href={`/products/${item.id}`}
                                className="font-medium text-foreground hover:text-primary transition-colors"
                              >
                                {item.title}
                              </Link>
                              <p className="text-sm text-muted-foreground">by {item.seller}</p>
                              <Badge variant="secondary" className="text-xs mt-1">
                                {item.category}
                              </Badge>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">${item.price.toFixed(2)}</p>
                              {item.quantity > 1 && (
                                <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                              )}
                            </div>
                          </div>

                          {purchase.status === "delivered" && (
                            <div className="flex gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleLeaveReview(item)}
                                className="text-xs"
                              >
                                <Star className="h-3 w-3 mr-1" />
                                Review
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleContactSeller(item.seller)}
                                className="text-xs"
                              >
                                <MessageCircle className="h-3 w-3 mr-1" />
                                Contact Seller
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleReorder(purchase)}
                          className="flex items-center gap-1"
                        >
                          <RotateCcw className="h-3 w-3" />
                          Reorder
                        </Button>
                        {purchase.trackingNumber && (
                          <Button variant="outline" size="sm">
                            Track Package
                          </Button>
                        )}
                      </div>

                      {purchase.trackingNumber && (
                        <p className="text-xs text-muted-foreground">Tracking: {purchase.trackingNumber}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Summary Stats */}
        {purchases.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">Your Sustainable Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">{purchases.length}</p>
                  <p className="text-sm text-muted-foreground">Orders Placed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {purchases.reduce(
                      (sum, p) => sum + p.items.reduce((itemSum, item) => itemSum + item.quantity, 0),
                      0,
                    )}
                  </p>
                  <p className="text-sm text-muted-foreground">Items Rescued</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">
                    ${purchases.reduce((sum, p) => sum + p.total, 0).toFixed(0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
