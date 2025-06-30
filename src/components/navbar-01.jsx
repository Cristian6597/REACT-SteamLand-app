"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ThemeToggle } from "./theme-toggle";

const Navbar01Page = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Collapse after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isCollapsed = isScrolled && !isHovered;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b transition-all duration-300 ease-in-out ${
        isCollapsed ? "h-3" : "h-16"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Collapsed State Indicator with Radiation Symbol */}
      {isCollapsed && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-b-lg opacity-90 flex items-center justify-center">
          {/* Radiation Symbol */}
          <span className="text-yellow-300 text-lg font-bold animate-pulse">
            ☢️
          </span>
        </div>
      )}

      {/* Full Navbar Content */}
      <div
        className={`h-16 flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-300 ${
          isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden sm:inline-flex bg-transparent"
          >
            Sign In
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
            Buy Tickets
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar01Page;
