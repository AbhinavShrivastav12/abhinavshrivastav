import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-xl font-bold font-['Pacifico']">
              <a href="/">Abhinav Web Studio</a>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-primary transition-colors">
                Home
              </a>
              <a href="#services" className="text-white hover:text-primary transition-colors">
                Services
              </a>
              <a href="/about-us" className="text-white hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/works" className="text-white hover:text-primary transition-colors">
                Works
              </a>
              <a href="/contact-us" className="text-white hover:text-primary transition-colors">
                Contact
              </a>
              <button
                onClick={() => (window.location.href = "/contact-us")}
                className="bg-primary hover:bg-secondary text-white px-6 py-2 !rounded-button whitespace-nowrap transition-all cursor-pointer"
              >
                Hire
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden cursor-pointer" onClick={() => setSidebarOpen(true)}>
              <IoMenu color="#FFFFFF" size={28} />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4 cursor-pointer" onClick={() => setSidebarOpen(false)}>
          <IoClose size={28} />
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col space-y-6 px-6 mt-10 text-lg">
          <a href="/" className="hover:text-primary" onClick={() => setSidebarOpen(false)}>Home</a>
          <a href="/about-us" className="hover:text-primary" onClick={() => setSidebarOpen(false)}>About Us</a>
          <a href="/works" className="hover:text-primary" onClick={() => setSidebarOpen(false)}>Works</a>
          <a href="/contact-us" className="hover:text-primary" onClick={() => setSidebarOpen(false)}>Contact</a>
          <a href="#services" className="hover:text-primary" onClick={() => setSidebarOpen(false)}>Services</a>
          <button
            onClick={() => { window.location.href = "/contact-us"; setSidebarOpen(false); }}
            className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-button whitespace-nowrap transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
