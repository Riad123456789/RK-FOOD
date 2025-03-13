import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h1>

      {/* Map & Info Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Google Map */}
        <div className="w-full h-[350px] overflow-hidden rounded-lg shadow-md">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093656!2d144.9537351153153!3d-37.81627974202137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577cbb0cf4a3!2sMelbourne%2C+Australia!5e0!3m2!1sen!2s!4v1631955799193!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="space-y-7">
          <p className="text-lg text-gray-600">
            Have a question? Reach out to us and we’ll be happy to help!
          </p>
          <div className="text-gray-800 space-y-4">
            <p>
              📍 <strong>Address:</strong> House# 517/1, Jahangir Monjil, Jhikira, Wapda Road, (Nearby to Grameen Bank Branch & Area Office), Ullapara, Sirajgonj, BD
            </p>
            <p>
              📞 <strong>Phone:</strong> +8801795579568
            </p>
            <p>
              📧 <strong>Email:</strong> rkfoodbd@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
