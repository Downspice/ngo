"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons for menu and close

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between backdrop-blur-sm border-b bg-white/30 sticky top-0 z-50 w-full">
      {/* Logo */}
      <div className="p-1">
        <Image src={"/cow.jpg"} alt="logo" height={50} width={50} />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="block md:hidden p-1">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation menu */}
      <div className="hidden md:flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/our-initiatives" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Our Initiatives
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact-us" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Donate Button */}
      <div className="hidden md:block p-1">
        <Button>Donate Now</Button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-1 flex justify-between items-center">
          <Image src={"/cow.jpg"} alt="logo" height={50} width={50} />
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="bg-white h-dvh">
          <div className="w-full flex flex-col space-y-1">
            {" "}
            {/* Add flex and flex-col */}
            <Link href="/" legacyBehavior passHref>
              <div
                className={navigationMenuTriggerStyle()}
                onClick={() => setIsOpen(false)}
              >
                Home
              </div>
            </Link>
            <Link href="/about-us" legacyBehavior passHref>
              <div
                className={navigationMenuTriggerStyle()}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </div>
            </Link>
            <Link href="/our-initiatives" legacyBehavior passHref>
              <div
                className={navigationMenuTriggerStyle()}
                onClick={() => setIsOpen(false)}
              >
                Our Initiatives
              </div>
            </Link>
            <Link href="/contact-us" legacyBehavior passHref>
              <div
                className={navigationMenuTriggerStyle()}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </div>
            </Link>
          </div>

          <div className="p-1">
            <Button onClick={() => setIsOpen(false)}>Donate Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
