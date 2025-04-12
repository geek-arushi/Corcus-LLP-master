import React, { useState } from "react";
import "./popup.scss"; // keep your styles

const PopupForm = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (
      !formData.Name.trim() ||
      !formData.Phone.trim() ||
      !formData.Email.trim() ||
      !formData.Message.trim()
    ) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) =>
      formBody.append(key, value)
    );

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby3F3QHRbptPVMRogJxokydQiRbh-RqZ5eejvvXG6QKY3LkBM4vPmEX-XLld3f00ZVcSg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      const resultText = await response.text();
      console.log("Response from script:", resultText);
      setSubmitStatus("success");

      setTimeout(() => {
        setIsOpen(false);
        setFormData({ Name: "", Phone: "", Email: "", Message: "" });
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            disabled={isSubmitting}
          />
          <input
            type="tel"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
            disabled={isSubmitting}
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
          />
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="Message"
            value={formData.Message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className={`submit-button ${isSubmitting ? "submitting" : ""} ${
              submitStatus ? submitStatus : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Sending..."
              : submitStatus === "success"
              ? "Sent!"
              : "Send"}
          </button>
          {submitStatus === "error" && (
            <p className="error-message">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
