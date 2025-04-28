import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sj1vfvi", // Correctly inside quotes
        "template_tzs65up",
        form.current,
        "NEVndzPfq-M28zoVv"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((err) => {
        console.error("Email send error:", err);
      });
  };

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-full max-w-md text-white shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Get in Touch
        </h2>
        <p className="text-sm text-center mb-6">
          Let’s work together! Fill out the form and we'll get back to you.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="full_name"
            required
            placeholder="Full Name"
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none"
          />

          <input
            type="text"
            name="mobile_number"
            required
            placeholder="Mobile Number"
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none"
          />

          <input
            type="email"
            name="email_id"
            required
            placeholder="Email Address"
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none"
          />

          <select
            name="budget"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none"
          >
            <option value="">Select Budget</option>
            <option value="<$50">Less than $50</option>
            <option value="<$100">Less than $100</option>
            <option value="<$150">Less than $150</option>
            <option value="<$200">Less than $200</option>
            <option value="<$300">Less than $300</option>
            <option value="<$500">Less than $500</option>
            <option value="<$1000">Less than $1000</option>
            <option value=">$1000">More than $1000</option>
          </select>

          <select
            name="solution"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white focus:outline-none"
          >
            <option value="">Select Solution</option>
            <option value="Web Development">Web Development</option>
            <option value="AI Solutions">AI Solutions</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Chatbots">Chatbots</option>
            <option value="Automation Tools">Automation Tools</option>
          </select>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded transition"
          >
            Send ✉️
          </button>

          {sent && (
            <p className="text-center text-green-400 text-sm">
              Message sent successfully!
            </p>
          )}
        </form>

        <p className="text-xs text-center mt-4">
          We respect your privacy. Check our{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
