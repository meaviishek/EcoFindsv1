import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


export function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
    
       <main className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Smartphones</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>iPhone 15 Pro</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                alt="iPhone 15 Pro"
                src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/N0LI60vfs1-apple-iphone-15-plus-128-gb-blue-493839327-i-1-1200wx1200h.jpeg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden border-2 border-primary">
                <img
                  alt="iPhone 15 Pro thumbnail"
                  src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/N0LI60vfs1-apple-iphone-15-plus-128-gb-blue-493839327-i-1-1200wx1200h.jpeg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  alt="iPhone 15 Pro thumbnail"
                  src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/wlbZjQUvhq-apple-iphone-15-plus-128-gb-blue-493839327-i-3-1200wx1200h.jpeg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  alt="iPhone 15 Pro thumbnail"
                  src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/ou5W_hhvtJ-apple-iphone-15-plus-128-gb-blue-493839327-i-2-1200wx1200h.jpeg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  alt="iPhone 15 Pro thumbnail"
                  src="https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/0RHEVMZyga-apple-iphone-15-plus-128-gb-blue-493839327-i-4-1200wx1200h.jpeg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                New Release
              </Badge>
              <h1 className="text-3xl font-heading font-bold mb-2">iPhone 15 Pro</h1>
              <p className="text-muted-foreground">
                The most advanced iPhone ever with titanium design and A17 Pro chip
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex">
                <Icon icon="lucide:star" className="h-5 w-5 fill-primary text-primary" />
                <Icon icon="lucide:star" className="h-5 w-5 fill-primary text-primary" />
                <Icon icon="lucide:star" className="h-5 w-5 fill-primary text-primary" />
                <Icon icon="lucide:star" className="h-5 w-5 fill-primary text-primary" />
                <Icon icon="lucide:star" className="h-5 w-5 fill-primary text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">(4.8) • 2,847 reviews</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold">$999</div>
                <div className="text-lg text-muted-foreground line-through">$1,099</div>
                <Badge variant="destructive">Save $100</Badge>
              </div>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Storage</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="border-primary bg-primary/5 text-primary">
                      128GB
                    </Button>
                    <Button variant="outline">256GB</Button>
                    <Button variant="outline">512GB</Button>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Color</Label>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-primary cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-muted cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-muted cursor-pointer" />
                    <div className="w-8 h-8 rounded-full bg-rose-400 border-2 border-muted cursor-pointer" />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Quantity</Label>
                  <div className="flex items-center space-x-3">
                    <Button size="icon" variant="outline">
                      <Icon icon="lucide:minus" className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">1</span>
                    <Button size="icon" variant="outline">
                      <Icon icon="lucide:plus" className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full h-12 text-lg font-medium">
                  <Icon icon="lucide:shopping-cart" className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12">
                    <Icon icon="lucide:heart" className="h-5 w-5 mr-2" />
                    Wishlist
                  </Button>
                  <Button variant="outline" className="h-12">
                    <Icon icon="lucide:share-2" className="h-5 w-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon icon="lucide:truck" className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-medium">
                    Free shipping on orders over $50
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon icon="lucide:shield-check" className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-600 font-medium">2-year warranty included</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon icon="lucide:rotate-ccw" className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-600 font-medium">30-day return policy</span>
                </div>
              </div>
            </div>
            <Card className="mb-6">
              <CardContent className="px-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-heading font-semibold">Sold by</h3>
                  <Button size="sm" variant="outline">
                    Visit Store
                  </Button>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        alt="Apple Store"
                        src="https://images.stockcake.com/public/1/c/5/1c5f326a-d867-4ac6-ba64-47b3edb9f752_large/illuminated-apple-logo-stockcake.jpg"
                      />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-medium text-lg">Apple Store Official</h4>
                      <Badge variant="secondary" className="text-xs">
                        <Icon icon="lucide:shield-check" className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                          <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                          <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                          <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                          <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                        </div>
                        <span className="text-sm font-medium">4.9</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        98.2% positive (45,892 reviews)
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium">99.8%</div>
                        <div className="text-muted-foreground">On-time delivery</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">24/7</div>
                        <div className="text-muted-foreground">Customer support</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">5+ years</div>
                        <div className="text-muted-foreground">In business</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Tabs className="mb-12" defaultValue="description">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="px-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Product Description</h3>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    The iPhone 15 Pro represents the pinnacle of smartphone technology, featuring a
                    stunning titanium design that's both lightweight and incredibly durable. The A17
                    Pro chip delivers unprecedented performance for everything from everyday tasks
                    to the most demanding applications.
                  </p>
                  <p className="mb-4">
                    Key features include a revolutionary camera system with advanced computational
                    photography, ProRes video recording, and Action button for customizable quick
                    actions. The Super Retina XDR display with ProMotion technology provides an
                    immersive viewing experience with true-to-life colors.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Titanium design with aerospace-grade alloy</li>
                    <li>A17 Pro chip with 6-core GPU</li>
                    <li>Pro camera system with 48MP Main camera</li>
                    <li>Action button for customizable controls</li>
                    <li>USB-C connector with USB 3 support</li>
                    <li>Up to 29 hours video playback</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="px-6">
                <h3 className="text-xl font-heading font-semibold mb-4">
                  Technical Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Display</h4>
                      <p className="text-sm text-muted-foreground">
                        6.1-inch Super Retina XDR OLED
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2556×1179 resolution at 460 ppi
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Chip</h4>
                      <p className="text-sm text-muted-foreground">A17 Pro chip</p>
                      <p className="text-sm text-muted-foreground">
                        6-core CPU with 2 performance cores
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Camera</h4>
                      <p className="text-sm text-muted-foreground">48MP Main, 12MP Ultra Wide</p>
                      <p className="text-sm text-muted-foreground">
                        12MP Telephoto with 3x optical zoom
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Battery</h4>
                      <p className="text-sm text-muted-foreground">Up to 29 hours video playback</p>
                      <p className="text-sm text-muted-foreground">
                        MagSafe and Qi wireless charging
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">5.77 × 2.78 × 0.32 inches</p>
                      <p className="text-sm text-muted-foreground">Weight: 6.60 ounces</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Water Resistance</h4>
                      <p className="text-sm text-muted-foreground">IP68 rating</p>
                      <p className="text-sm text-muted-foreground">Up to 6 meters for 30 minutes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
  <Card>
    <CardContent className="px-6">
      <h3 className="text-xl font-heading font-semibold mb-4">Customer Reviews</h3>
      <div className="space-y-6">
        
        {/* --- Review 1: Sarah (5 stars) --- */}
        <div className="border-b pb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium">Sarah Johnson</span>
                <Badge variant="secondary">Verified Purchase</Badge>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="lucide:star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-sm text-muted-foreground">2 days ago</span>
          </div>
          <p className="text-sm">
            Amazing phone! The camera quality is outstanding and the titanium build feels
            premium. Battery life easily gets me through the day with heavy usage.
          </p>
        </div>

        {/* --- Review 2: Mike (5 stars) --- */}
        <div className="border-b pb-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium">Mike Chen</span>
                <Badge variant="secondary">Verified Purchase</Badge>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} icon="lucide:star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <span className="text-sm text-muted-foreground">1 week ago</span>
          </div>
          <p className="text-sm">
            Great upgrade from my iPhone 13. The A17 Pro chip is incredibly fast and the
            Action button is more useful than I expected. Only minor complaint is the
            price.
          </p>
        </div>

        {/* --- Review 3: Emily (4 stars) --- */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium">Emily Rodriguez</span>
                <Badge variant="secondary">Verified Purchase</Badge>
              </div>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Icon key={i} icon="lucide:star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <Icon icon="lucide:star" className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <span className="text-sm text-muted-foreground">2 weeks ago</span>
          </div>
          <p className="text-sm">
            Perfect phone for photography enthusiasts. The Pro camera system captures
            incredible detail and the new portrait mode is fantastic. Highly recommend!
          </p>
        </div>

      </div>
    </CardContent>
  </Card>
</TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardContent className="px-6">
                <h3 className="text-xl font-heading font-semibold mb-4">Shipping Information</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Delivery Options</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon icon="lucide:truck" className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Standard Delivery</div>
                            <div className="text-sm text-muted-foreground">5-7 business days</div>
                          </div>
                        </div>
                        <span className="font-medium">Free</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon icon="lucide:zap" className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Express Delivery</div>
                            <div className="text-sm text-muted-foreground">2-3 business days</div>
                          </div>
                        </div>
                        <span className="font-medium">$9.99</span>
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Icon icon="lucide:clock" className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">Next Day Delivery</div>
                            <div className="text-sm text-muted-foreground">Order by 2 PM</div>
                          </div>
                        </div>
                        <span className="font-medium">$19.99</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Return Policy</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      We offer a 30-day return policy for all unopened items in original packaging.
                      Items must be returned in new, unused condition.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Free return shipping within 30 days</li>
                      <li>• Original packaging and accessories required</li>
                      <li>• Refund processed within 3-5 business days</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div>
          <h2 className="text-2xl font-heading font-bold mb-6">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="px-4 pt-4 pb-2">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                  <img
                    alt="iPhone 15"
                    src="https://m.media-amazon.com/images/I/516IO6TPGIL._SX679_.jpg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-medium mb-1">iPhone 15</h3>
                <p className="text-sm text-muted-foreground mb-2">Dynamic Island • 48MP Camera</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">$799</span>
                  <div className="flex">
                    <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground ml-1">4.7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="px-4 pt-4 pb-2">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                  <img
                    alt="iPhone 15 Pro Max"
                    src="https://m.media-amazon.com/images/I/61Jrsu9d3-L._SX679_.jpg"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-medium mb-1">iPhone 15 Pro Max</h3>
                <p className="text-sm text-muted-foreground mb-2">Largest display • 5x Telephoto</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">$1,199</span>
                  <div className="flex">
                    <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground ml-1">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="px-4 pt-4 pb-2">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                  <img
                    alt="AirPods Pro"
                    src="https://rukminim2.flixcart.com/image/832/832/kpinwy80/headphone/r/1/q/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70&crop=false"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-medium mb-1">AirPods Pro</h3>
                <p className="text-sm text-muted-foreground mb-2">Active Noise Cancellation</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">$249</span>
                  <div className="flex">
                    <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground ml-1">4.6</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="group cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="px-4 pt-4 pb-2">
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-3">
                  <img
                    alt="MagSafe Charger"
                    src="https://ambraneindia.com/cdn/shop/files/1_png_e803b85a-9248-4791-a28d-0d5c8a90f1d7.webp?v=1721043431&width=900"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="font-medium mb-1">MagSafe Charger</h3>
                <p className="text-sm text-muted-foreground mb-2">Wireless charging made easy</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">$39</span>
                  <div className="flex">
                    <Icon icon="lucide:star" className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground ml-1">4.4</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}