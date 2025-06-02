import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import impulse from "../assets/logofinal.png";
import mmch from "../assets/mmch.png";

// events, schedule, sponsors, gallery, members, about
function Navbar() {
  const[isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Events", path: "/events" },
    { label: "Schedule", path: "/schedule" },
    { label: "Sponsors", path: "/sponsors" },
    { label: "Gallery", path: "/gallery" },
    { label: "Members", path: "/members" },
    { label: "About", path: "/about" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full h-35 z-50 bg-transparent backdrop-blur-sm text-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center   ">
          <img
            src={impulse}
            alt="Impulse Logo"
            className="w-35 h-40 object-contain block"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                // className="hover:text-indigo-400 transition duration-200"
                className={`px-4 py-2 rounded-lg transition duration-200 ${
                  location.pathname === item.path
                    ? "bg-indigo-500 shadow-lg text-white"
                    : "hover:bg-indigo-500 hover:shadow-md hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/" className="flex items-center   ">
          <img
            src={mmch}
            alt="college Logo"
            className="w-20 h-30 object-contain block"
          />
        </Link>

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
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block hover:text-indigo-400 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;