import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams();
    for (let key in formData) {
      formBody.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwe4RjJp4iIKdG92bm-R7QZ-clddBU1X6Z8fWVvRtwTmeUl10N8nYisNuJw8_LUhaWI/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      const resultText = await response.text();
      console.log(resultText);

      setFormData({ Name: "", Phone: "", Email: "", Message: "" });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Get Your Free Proposal</h2>
      <div className="form-group">
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="Phone"
          value={formData.Phone}
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
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="Message"
          value={formData.Message}
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
