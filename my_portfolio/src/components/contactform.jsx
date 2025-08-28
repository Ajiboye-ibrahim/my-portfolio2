import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://IbrahimAjiboye.pythonanywhere.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error. Try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl underline underline-offset-1 font-bold text-center text-gray-800 mb-8">
          Leave a message
        </h2>
        {submitted && (
          <div className="mb-6 p-4 text-green-700 bg-green-100 border border-green-400 rounded-lg">
            ✅ Your message has been sent successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-xl p-8 space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              placeholder="Your message..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
