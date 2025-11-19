"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, User, Heart, ShoppingCart, X } from "lucide-react";
import Container from "./Container";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  const navLinks = [
    "HOME",
    "SHOP",
    "COLLECTION",
    "JOURNAL",
    "LOOKBOOK",
    "PAGES",
  ];

  // Path generator
  const getPath = (link) => (link === "HOME" ? "/" : `/${link.toLowerCase()}`);

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 z-50">
      <Container>
        <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl font-black">UQM</span>
            <span className="w-3 h-3 bg-red-600 rounded-full"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-sm font-medium text-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={getPath(link)}
                onClick={() => setActive(link)}
                className={`
                relative tracking-wide transition-all
                ${
                  active === link
                    ? "text-black"
                    : "text-gray-700 hover:text-black"
                }
              `}
              >
                {link}

                {/* Active underline */}
                {active === link && (
                  <span className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-black rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6 text-gray-700">
            <Search className="w-5 h-5 cursor-pointer hover:text-black" />
            <User className="w-5 h-5 cursor-pointer hover:text-black" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-black" />

            {/* Cart */}
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-5 h-5 hover:text-black" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-semibold w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <Menu
                className="w-6 h-6 cursor-pointer"
                onClick={() => setMobileOpen(true)}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* ---------------- MOBILE DRAWER MENU ---------------- */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-[999] transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="text-xl font-semibold">MENU</span>
          <X className="cursor-pointer" onClick={() => setMobileOpen(false)} />
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col px-6 mt-4 space-y-6 text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={getPath(link)}
              onClick={() => {
                setActive(link);
                setMobileOpen(false);
              }}
              className={`text-lg text-left transition ${
                active === link
                  ? "text-black font-semibold"
                  : "hover:text-black"
              }`}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Icons */}
        <div className="px-6 mt-10 border-t pt-6 flex space-x-6">
          <Search className="w-6 h-6 cursor-pointer hover:text-black" />
          <User className="w-6 h-6 cursor-pointer hover:text-black" />
          <Heart className="w-6 h-6 cursor-pointer hover:text-black" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* BACKDROP */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-[998]"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
