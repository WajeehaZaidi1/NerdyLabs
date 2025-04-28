import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Logo */}
        <img
          src={logo}
          alt="NerdyLabs Logo"
          width={60}
          height={40}
          className="object-contain"
        />

        {/* Title */}
        <div className="flex-1 flex justify-center">
          <h1 className="text-3xl font-serif tracking-wider">NERDY LABS</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-gray-800">
          <Link to="/solutions" className="hover:text-gray-600 transition">
            Solutions
          </Link>
          <Link to="/nerds" className="hover:text-gray-600 transition">
            Nerds
          </Link>
          <Link to="/mission" className="hover:text-gray-600 transition">
            Nerd's Mission
          </Link>
          <Link to="/careers" className="hover:text-gray-600 transition">
            Careers
          </Link>
          <Link to="/contact" className="text-cyan-500">
            <UserCircle className="w-8 h-8" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className=" md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-6 py-4 shadow-sm border-t space-y-3 text-gray-800">
          <Link to="/solutions" className="block hover:text-gray-600 transition">
            Solutions
          </Link>
          <Link to="/nerds" className="block hover:text-gray-600 transition">
            Nerds
          </Link>
          <Link to="/mission" className="block hover:text-gray-600 transition">
            Nerds' Mission
          </Link>
          <Link to="/careers" className="block hover:text-gray-600 transition">
            Careers
          </Link>
          <Link to="/contact" className="flex items-center gap-2 text-cyan-500">
            <UserCircle className="w-6 h-6" />
            Profile
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
