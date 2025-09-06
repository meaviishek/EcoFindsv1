import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function EcommerceIntuitiveHomePage() {
  return (
    <div className="min-h-screen bg-background">
      
 
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Browse Categories</h2>
            <p className="text-muted-foreground text-lg">
              Find quality pre-owned items in every category
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Icon icon="lucide:laptop" className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Electronics</h3>
                <p className="text-sm text-muted-foreground">1,240 items</p>
              </CardContent>
            </Card>
            <Card
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Icon icon="lucide:shirt" className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Clothing</h3>
                <p className="text-sm text-muted-foreground">3,890 items</p>
              </CardContent>
            </Card>
            <Card
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Icon icon="lucide:home" className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Home & Garden</h3>
                <p className="text-sm text-muted-foreground">2,160 items</p>
              </CardContent>
            </Card>
            <Card
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 bg-background">
              <CardContent className="p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Icon icon="lucide:book" className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Books</h3>
                <p className="text-sm text-muted-foreground">1,670 items</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Featured Pre-Owned Items</h2>
              <p className="text-muted-foreground text-lg">
                Quality second-hand treasures waiting for new homes
              </p>
            </div>
            <Button variant="outline">View All Items</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  alt="Pre-owned item"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSqaBuqEJuYdKjMBth6BE3kqWqUYwPNZDaw1fdL4g3ehA7Li7TYBJt02uGlS3_uubmdgCv_tJoc9tVejpL-d1CZZ0C-HDKx9Q"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <Badge className="absolute top-3 left-3 bg-green-100 text-green-800">♻️ Eco</Badge>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:heart" className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Vintage Leather Jacket</h3>
                <p className="text-sm text-muted-foreground mb-3">Excellent condition • Size M</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">$45</span>
                    <span className="text-sm text-muted-foreground line-through">$120 new</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon icon="lucide:star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  alt="Pre-owned item"
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBBCvq_MTO6DXw1eIfeE2RnBAoPCAioFldV-SQW6w6sGk6mrpSqf8tIPvTHuMqqCf8ALObaZ4Khair3xluseGkLr74pBHfXyUSaOoig_r2"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <Badge className="absolute top-3 left-3 bg-orange-100 text-orange-800">
                  🔥 Popular
                </Badge>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:heart" className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">iPhone 12 Pro</h3>
                <p className="text-sm text-muted-foreground mb-3">Like new • 128GB • Unlocked</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">$520</span>
                    <span className="text-sm text-muted-foreground line-through">$999 new</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon icon="lucide:star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  alt="Pre-owned item"
                  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRrWoRFkMmx3oGXajLeEq7vU6MkYe5XRpyYpiSsGLhgxt4sp7_M9SzVeRIezn0doLXlHmv8KFHPgVok2kGeecw7DW3j6infZ9MOjKYCez-N"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <Badge className="absolute top-3 left-3 bg-green-100 text-green-800">♻️ Eco</Badge>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:heart" className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Designer Coffee Table</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Good condition • Mid-century modern
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">$180</span>
                    <span className="text-sm text-muted-foreground line-through">$450 new</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon icon="lucide:star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  alt="Pre-owned item"
                  src="https://sochu.in/cdn/shop/products/Book-06-PS_bf15e0c6-3c00-44c7-a24b-57be21b6c699.jpg?v=1663578371&width=1946"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <Badge className="absolute top-3 left-3 bg-blue-100 text-blue-800">📚 Rare</Badge>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="lucide:heart" className="h-4 w-4" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">First Edition Book Set</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Excellent condition • Classic literature
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">$85</span>
                    <span className="text-sm text-muted-foreground line-through">$200 new</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon icon="lucide:star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center text-white">
            <h2 className="font-heading text-4xl font-bold mb-4">Join the Circular Economy!</h2>
            <p className="text-xl mb-8 opacity-90">
              Every purchase helps reduce waste and supports sustainable living. Start your
              eco-friendly shopping journey today!
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Browse Items
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-green-600">
                Learn About Impact
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Icon icon="lucide:recycle" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sustainable Shopping</h3>
              <p className="text-muted-foreground">Reduce waste by giving items a second life</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Icon icon="lucide:shield-check" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Verified Quality</h3>
              <p className="text-muted-foreground">All items are quality-checked by our team</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Icon icon="lucide:users" className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
              <p className="text-muted-foreground">Connect with eco-conscious buyers and sellers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Stay Updated on Sustainability
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Get notified about new eco-friendly finds, sustainability tips, and community impact
                updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input className="flex-1" placeholder="Enter your email" />
                <Button className="px-8 bg-green-600 hover:bg-green-700">Subscribe</Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Join our eco-community. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-heading text-2xl font-bold mb-4 text-green-600">EcoFinds</div>
              <p className="text-muted-foreground mb-4">
                Your sustainable marketplace for quality pre-owned items. Reducing waste, one
                purchase at a time.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:facebook" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:twitter" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Icon icon="lucide:instagram" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
