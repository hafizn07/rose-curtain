"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-gray-200"
        > 
          <span className="text-gray-200">Velvet Rose Curtain</span>
          <span className="text-rose-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-white hover:text-indigo-400 font-medium"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-indigo-400 font-medium"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-white hover:text-indigo-400 font-medium"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-indigo-400 font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-indigo-400 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border-t border-gray-700 py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="text-white hover:text-indigo-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-indigo-400 font-medium"
            >
              About
            </Link>
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-indigo-400 font-medium"
            >
              Services
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-indigo-400 font-medium"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
