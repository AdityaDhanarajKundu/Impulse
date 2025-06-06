import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import impulse from "../assets/logofinal.png";
import mmch from "../assets/mmch.png";

// events, schedule, sponsors, gallery, members, about
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Events", path: "/events" },
    { label: "Schedule", path: "/schedule" },
    { label: "Sponsors", path: "/sponsors" },
    { label: "Gallery", path: "/gallery" },
    { label: "Members", path: "/members" },
    { label: "About", path: "/about" },
  ];

  const location = useLocation();
  
  return (
    <header className="w-full z-50 bg-transparent backdrop-blur-sm text-white shadow-md sticky top-0">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img
              src={impulse}
              alt="Impulse Logo"
              className="aspect-square w-24"
            />
          </Link>
          <Link to="/" className="flex items-center">
            <img src={mmch} alt="College Logo" className="aspect-square w-24" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className="relative px-6 py-2 font-extrabold group inline-block font-michroma"
              >
                {/* Animated Background Span */}
                <span
                  className={`absolute inset-0 rounded-[30px] transition-all duration-300 ease-in-out z-0
          ${
            location.pathname === item.path
              ? "bg-gradient-to-t from-purple-900 to-blue-900 h-full"
              : "bg-gray-700 h-0 group-hover:h-full group-hover:bg-gradient-to-t group-hover:from-purple-900 group-hover:to-blue-900"
          }`}
                />

                {/* Link Text */}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0f172a]/90 text-white px-4 pb-4 space-y-4 text-center text-sm font-medium transition-all">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-full transition duration-300 font-michroma ${
                    isActive
                      ? "bg-gradient-to-r from-purple-800 to-indigo-700 text-white font-bold"
                      : "hover:bg-gradient-to-r hover:from-purple-800 hover:to-indigo-700 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
