import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Internform = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Qualification: "",
    PassingYear: "",
    Course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    setFormData((prev) => ({
      ...prev,
      PassingYear: year,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      Name: formData.Name,
      Phone: formData.Phone,
      Email: formData.Email,
      Qualification: formData.Qualification,
      PassingYear: formData.PassingYear,
      Course: formData.Course,
    };

    const formBody = new URLSearchParams();
    Object.entries(submissionData).forEach(([key, value]) =>
      formBody.append(key, value)
    );

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxQkLpKHDXZ1J1XQN-6X4s1Jqx_zBWfdQy5O26KWwbJtnc7f4LtLU4DreKtoliRXwhp/exec", 
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
        Qualification: "",
        PassingYear: "",
        Course: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Internship Application Form</h2>

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
            name="Qualification"
            value={formData.Qualification}
            onChange={handleChange}
            placeholder="Your Qualification"
            required
          />
        </div>

        <div className="form-group">
          <DatePicker
            selected={formData.PassingYear ? new Date(formData.PassingYear, 0, 1) : null}
            onChange={handleDateChange}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="Select Passing Year"
            className="year-picker"
            required
          />
        </div>

        <div className="form-group">
          <select
            name="Course"
            value={formData.Course}
            onChange={handleChange}
            required
          >
            <option value="">Select Your Course</option>
            <option value="Motion Graphics">Motion Graphics</option>
            <option value="AI">AI</option>
            <option value="CANVA">CANVA</option>
            <option value="SMM">SMM</option>
            <option value="SHOPIFY ECOMMERCE">SHOPIFY ECOMMERCE</option>
            <option value="WORDPRESS DEVELOPER">WORDPRESS DEVELOPER</option>
            <option value="INTERMEDIATE WEB DEVELOPER">INTERMEDIATE WEB DEVELOPER</option>
            <option value="BEGINER WEB DEVELOPER">BEGINER WEB DEVELOPER</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>

      <style jsx>{`
        .contact-form {
          max-width: 500px;
          margin: 40px auto;
          padding: 30px 25px;
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          font-family: 'Poppins', sans-serif;
        }
        .contact-form h2 {
          text-align: center;
          color: #333;
          margin-bottom: 30px;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .contact-form input,
        .contact-form select,
        .year-picker {
          width: 100%;
          padding: 12px 15px;
          font-size: 14px;
          border-radius: 8px;
          border: 1px solid #ddd;
          transition: all 0.3s ease;
        }
        .contact-form input:focus,
        .contact-form select:focus,
        .year-picker:focus {
          border-color: #007bff;
          outline: none;
          box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
        }
        .submit-btn {
          width: 100%;
          padding: 14px;
          background-color:rgb(0, 0, 0);
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }
        .submit-btn:hover {
          background-color: #eeb200;
        }
      `}</style>
    </>
  );
};

export default Internform;