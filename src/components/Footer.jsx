import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaSnapchat, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white rounded-2xl shadow-md p-8 m-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left - Logo and Map */}
        <div className="flex flex-col items-start gap-4">
          <div className="text-3xl font-bold flex items-center gap-2">
            <span className="font-logo">N_</span> 
            <span className="font-logo">NERDY LABS</span>
          </div>
          <div className="text-2xl font-logo mt-4">LOCATE LABS</div>
          <div className="mt-4">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3406.4103550999716!2d74.24658579999999!3d31.375246800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIyJzMwLjkiTiA3NMKwMTQnNDcuNyJF!5e0!3m2!1sen!2s!4v1745873746885!5m2!1sen!2s" 
    width="300"
    height="200"
    style={{ border: 0, borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

        {/* Center - Contact Info */}
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-logo">CONTACT LABS</div>
          
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span className="text-black font-semibold">Info@nersylabs.tech</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span className="text-black font-semibold">business@nersylabs.tech</span>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <FaWhatsapp className="text-green-500" />
              <span className="font-bold">+92 339 1000098</span>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              <span className="font-bold">+92 300 4699908</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <FaInstagram className="w-8 h-8 text-pink-500 hover:scale-110 transition" />
            <FaLinkedin className="w-8 h-8 text-blue-600 hover:scale-110 transition" />
            <FaFacebook className="w-8 h-8 text-blue-500 hover:scale-110 transition" />
            <FaSnapchat className="w-8 h-8 text-yellow-400 hover:scale-110 transition" />
            <FaDribbble className="w-8 h-8 text-pink-400 hover:scale-110 transition" />
          </div>
        </div>

        {/* Right - Quick Links */}
        <div className="flex flex-col gap-4">
          <Link to="/nerds" className="text-2xl font-logo hover:text-gray-500 transition">NERDS</Link>
          <Link to="/solutions" className="text-2xl font-logo hover:text-gray-500 transition">SOLUTIONS</Link>
          <Link to="/projects" className="text-2xl font-logo hover:text-gray-500 transition">PROJECTS</Link>
          <Link to="/blog" className="text-2xl font-logo hover:text-gray-500 transition">BLOG</Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-600 text-sm mt-10">
        2024 - 2025 Nerdy Labs. All Rights Reserved
      </div>
    </footer>
  );
}
