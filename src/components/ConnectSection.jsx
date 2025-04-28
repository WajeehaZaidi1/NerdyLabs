// src/components/ConnectSection.jsx
import React from "react";
import { Link } from "react-router-dom";

const ConnectSection = () => {
  return (
    <section className="w-full py-10 mb-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center ">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Connect and Start Discussing Your Project
        </h2>
        <p className="text-lg mb-8">
          Our nerds are excited to collaborate with you. Reach out and let's
          build something amazing together!
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-white text-cyan-600 font-semibold rounded-full hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default ConnectSection;
