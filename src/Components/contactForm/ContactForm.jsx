import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Get Your Free Proposal</h2>
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Send Proposal Request
      </button>
    </form>
  );
};

export default ContactForm;
