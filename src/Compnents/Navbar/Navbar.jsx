import React, { useState, useEffect } from "react";
import HERO from "../img/back.png"; // Adjust path
import { Link, useLocation } from "react-router-dom";  // useLocation added
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();  // current route path

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/30 backdrop-blur-sm text-black shadow-md"
          : "bg-black text-white"
      }`}
      style={{
        backgroundImage: !isScrolled && isHomePage ? `url(${HERO})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {!isScrolled && isHomePage && <div className="absolute inset-0 bg-black/40 z-0" />}

      <div className="relative z-10">
        {/* Top Navbar */}
        <div className="hidden md:flex justify-between items-center px-8 py-2 text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <FaMapMarkerAlt />
              <span>742 Evergreen Terrace Brooklyn, NY 11201</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaPhoneAlt />
              <span>+929 333 9296</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaEnvelope />
              <span>contact@almaris.com</span>
            </span>
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Bottom Navbar */}
        <div className="flex justify-between items-center px-8 py-4">
          {/* Mobile menu toggle button */}
          <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Nav links - hidden on mobile */}
          <nav className="hidden md:flex space-x-7 text-lg font-medium">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/accomandation">Accommodation</Link>
            <a href="#">Facilities</a>
          </nav>

          {/* Title centered */}
          <div className="text-3xl font-serif font-semibold tracking-wide text-center flex-1">
            ALMARIS
          </div>

          {/* Reservation button - hidden on mobile */}
          <div className="ml-auto hidden md:block">
            <button
              className={`border px-6 py-2 rounded transition ${
                isScrolled || !isHomePage
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-black"
              }`}
            >
              RESERVATION
            </button>
          </div>
        </div>

        {/* Mobile menu links - visible only if toggled */}
        {menuOpen && (
          <nav className="md:hidden px-8 pb-4 flex flex-col space-y-4 bg-black bg-opacity-80 text-white">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>Accommodation</Link>
            <Link to="/accomandation" onClick={() => setMenuOpen(false)}>Facilities</Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition mt-2"
            >
              RESERVATION
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
