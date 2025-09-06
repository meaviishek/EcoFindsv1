import React from "react";

import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navbar = () => (
  <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="font-heading text-2xl font-bold text-green-600">EcoFinds</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors">
              Sell Items
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors">
              Impact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Input className="w-64 pl-10" placeholder="Search pre-owned items..." />
            <Icon
              icon="lucide:search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
          <Button size="icon" variant="ghost">
            <Icon icon="lucide:heart" className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="relative">
            <Icon icon="lucide:shopping-cart" className="h-5 w-5" />
            <Badge
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
              3
            </Badge>
          </Button>
          <Button size="icon" variant="ghost">
            <Icon icon="lucide:user" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar