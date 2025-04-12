import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Business: "",
    Service: "",
    CustomService: "",
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

    const finalService =
      formData.Service === "Other" ? formData.CustomService : formData.Service;

    const submissionData = {
      ...formData,
      Service: finalService,
    };

    const formBody = new URLSearchParams();
    Object.entries(submissionData).forEach(([key, value]) =>
      formBody.append(key, value)
    );

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwe4RjJp4iIKdG92bm-R7QZ-clddBU1X6Z8fWVvRtwTmeUl10N8nYisNuJw8_LUhaWI/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      const resultText = await response.text();
      console.log(resultText);

      alert("Form submitted successfully!");
      setFormData({
        Name: "",
        Phone: "",
        Email: "",
        Business: "",
        Service: "",
        CustomService: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        .contact-form {
          max-width: 500px;
          margin: 40px auto;
          padding: 30px 25px;
          background-color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          font-family: 'Poppins', sans-serif;
        }

        .contact-form h2 {
          text-align: center;
          margin-bottom: 25px;
          font-size: 24px;
          font-weight: 600;
          color: #333;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .contact-form input,
        .contact-form select {
          width: 100%;
          padding: 12px 15px;
          font-size: 15px;
          font-family: 'Poppins', sans-serif;
          border: 1px solid #ccc;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form select:focus {
          border-color: #007bff;
          outline: none;
          box-shadow: 0 0 3px rgba(0, 123, 255, 0.2);
        }

        .contact-form select {
          appearance: none;
          background-color: #fff;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon fill='%23999' points='70,105 105,35 35,35 '/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          font-family: 'Poppins', sans-serif;
          background-color:rgb(2, 2, 2);
          color: #fff;
          font-weight: 500;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #eeb200;
        }

        @media (max-width: 600px) {
          .contact-form {
            padding: 20px 15px;
          }

          .contact-form h2 {
            font-size: 20px;
          }
        }
      `}
      </style>

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
          <input
            type="text"
            name="Business"
            value={formData.Business}
            onChange={handleChange}
            placeholder="Business Name / Website"
            required
          />
        </div>

        <div className="form-group">
          <select
            name="Service"
            value={formData.Service}
            onChange={handleChange}
            required
          >
            <option value="">Which services are you looking for?</option>
            <option value="Website Design">Website Design</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Branding">Branding</option>
            <option value="Performance Marketing">Performance Marketing</option>
            <option value="Video/Reel Production">Video/Reel Production</option>
            <option value="Other">Other (Write Below)</option>
          </select>
        </div>

        {formData.Service === "Other" && (
          <div className="form-group">
            <input
              type="text"
              name="CustomService"
              value={formData.CustomService}
              onChange={handleChange}
              placeholder="Please specify your service"
              required
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          Send Proposal Request
        </button>
      </form>
    </>
  );
};

export default ContactForm;