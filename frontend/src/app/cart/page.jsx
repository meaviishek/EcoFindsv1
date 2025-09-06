"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@radix-ui/react-select"

import { Leaf, ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

// Mock cart items
const mockCartItems = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    price: 85,
    category: "Clothing",
    image: "/vintage-leather-jacket.png",
    seller: "EcoFashionista",
    quantity: 1,
    condition: "Excellent",
  },
  {
    id: 3,
    title: "Yoga Mat Set",
    price: 25,
    category: "Sports",
    image: "/yoga-mat-set.png",
    seller: "ZenLifestyle",
    quantity: 1,
    condition: "Like New",
  },
  {
    id: 5,
    title: "Ceramic Plant Pots",
    price: 15,
    category: "Home & Garden",
    image: "/ceramic-plant-pots.png",
    seller: "GreenThumb",
    quantity: 2,
    condition: "Good",
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems)
  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    console.log("Proceeding to checkout with items:", cartItems)
    alert("Checkout functionality coming soon!")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/products" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">EcoFinds</h1>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Shopping Cart</h2>
          <p className="text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your sustainable shopping cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Discover amazing pre-loved items and start your sustainable shopping journey.
              </p>
              <Link href="/products">
                <Button>Browse Products</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Link href={`/products/${item.id}`} className="shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-24 h-24 object-cover rounded-lg border hover:opacity-80 transition-opacity"
                        />
                      </Link>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <Link
                              href={`/products/${item.id}`}
                              className="font-semibold text-foreground hover:text-primary transition-colors"
                            >
                              {item.title}
                            </Link>
                            <p className="text-sm text-muted-foreground">by {item.seller}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {item.category}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {item.condition}
                              </Badge>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                            {item.quantity > 1 && <p className="text-xs text-muted-foreground">${item.price} each</p>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <div className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Promo Code</label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="text-sm"
                      />
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  </div>

                  <Button onClick={handleCheckout} className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>

                  <div className="text-xs text-muted-foreground text-center">
                    Secure checkout powered by sustainable commerce
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
