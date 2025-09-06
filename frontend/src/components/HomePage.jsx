import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Users, ShoppingBag, Star, Heart, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
  

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-50/30"></div>
        <div className="container mx-auto text-center relative">
          <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
            🌱 Join 50,000+ Eco-Conscious Shoppers
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Discover Unique Finds,
            <span className="text-primary"> Sustainably</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join our community marketplace where pre-owned goods find new homes. Reduce waste, save money, and discover
            one-of-a-kind treasures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/auth/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Selling Today
              </Button>
            </Link>
            <Link href="/browse">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Browse Items
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">200K+</div>
              <div className="text-sm text-muted-foreground">Items Sold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Trees Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Featured Finds</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover amazing pre-owned items from our community of conscious sellers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                <img
                  src="/vintage-leather-jacket.png"
                  alt="Vintage Leather Jacket"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    Clothing
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">4.9</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Vintage Leather Jacket</h4>
                <p className="text-sm text-muted-foreground mb-2">Authentic 1980s leather jacket</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">$89</span>
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 cursor-pointer" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                <img
                  src="/wooden-coffee-table.png"
                  alt="Wooden Coffee Table"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    Furniture
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">4.8</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Wooden Coffee Table</h4>
                <p className="text-sm text-muted-foreground mb-2">Handcrafted oak coffee table</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">$245</span>
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 cursor-pointer" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                <img
                  src="/iphone-12-pro.jpg"
                  alt="iPhone 12 Pro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    Electronics
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">5.0</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">iPhone 12 Pro</h4>
                <p className="text-sm text-muted-foreground mb-2">Excellent condition, unlocked</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">$599</span>
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 cursor-pointer" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                <img
                  src="/yoga-mat-set.png"
                  alt="Yoga Mat Set"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    Sports
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">4.7</span>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground mb-1">Yoga Mat Set</h4>
                <p className="text-sm text-muted-foreground mb-2">Premium yoga mat with blocks</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">$45</span>
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/browse">
              <Button variant="outline" size="lg">
                View All Items
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose EcoFinds?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 bg-transparent">
              <CardHeader>
                <Recycle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Sustainable Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Extend the lifecycle of products and reduce environmental impact through conscious consumption.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-transparent">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Trusted Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with like-minded individuals who value quality, sustainability, and unique finds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-transparent">
              <CardHeader>
                <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Easy Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Simple listing process, secure transactions, and seamless buying experience for everyone.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Our Community Says</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied users who've found amazing deals and made sustainable choices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Found the perfect vintage furniture for my apartment. Great quality and amazing prices!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">Verified Buyer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Selling my items was so easy! The community is friendly and transactions are smooth."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Mike R.</div>
                    <div className="text-sm text-muted-foreground">Active Seller</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Love the sustainable approach! I've saved money and helped the environment."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">E</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Emma L.</div>
                    <div className="text-sm text-muted-foreground">Eco Enthusiast</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <Award className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Start Your Sustainable Journey?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our growing community of eco-conscious buyers and sellers. Make a positive impact while finding great
            deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Join EcoFinds Today
              </Button>
            </Link>
            <Link href="/browse">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                Start Browsing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">EcoFinds</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Empowering sustainable consumption through community-driven commerce.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/community" className="hover:text-primary transition-colors">
              Community
            </Link>
            <Link href="/sustainability" className="hover:text-primary transition-colors">
              Sustainability
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
