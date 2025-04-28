import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactInfo2 = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Projectname: "",
    Phone: "",
    Message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.Name ||
      !formData.Email ||
      !formData.Projectname ||
      !formData.Phone ||
      !formData.Message
    ) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) =>
      formBody.append(key, value)
    );

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzTquOK4AbTudTkMTpCXpiRsv0ITbRkVQPSJXWXdmRDnALf4eredYt2fJp2nBYTPsinEw/exec", // 👈 Replace this with your deployed Web App URL
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

      if (resultText.toLowerCase().includes("successfully sent")) {
        setSubmitStatus("success");
        setFormData({
          Name: "",
          Email: "",
          Projectname: "",
          Phone: "",
          Message: "",
        });

        if (typeof fbq !== "undefined") {
          fbq("track", "Lead");
        }
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Contact Info Section */}
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            {/* Address */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-items text-center active">
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="content">
                  <h3>Our Address</h3>
                  <p>Basmati Bhawan, Gola Rd, near Issyoga, Ramjaipal Nagar, Patna<br />Bihar, 801503</p>
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="content">
                  <h3><a href="mailto:info@corcus.in">info@corcus.in</a></h3>
                  <p>Email us anytime for any kind of query.</p>
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="content">
                  <h3>Phone: <a href="tel:+08789677330">+08789677330</a></h3>
                  <p>Call us for any kind of support, we will be happy to help.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section-33 fix section-padding pt-0">
        <div className="container">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="map-items">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.702167670409!2d85.05559967521958!3d25.618237114518706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed572a39ec32d7%3A0x5f24450d80959e86!2sCorcus%20Studio%20LLP!5e1!3m2!1sen!2sin!4v1743748006759!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-content">
                  <h2>Ready to Get Started?</h2>
                  <form className="contact-form-items" onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Name */}
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <span>Your Name*</span>
                          <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      {/* Email */}
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <span>Your Email*</span>
                          <input
                            type="email"
                            name="Email"
                            value={formData.Email}
                            onChange={handleChange}
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      {/* Project Name */}
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <span>Project Name*</span>
                          <input
                            type="text"
                            name="Projectname"
                            value={formData.Projectname}
                            onChange={handleChange}
                            placeholder="Project Name"
                          />
                        </div>
                      </div>
                      {/* Phone */}
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <span>Mobile Number*</span>
                          <input
                            type="tel"
                            name="Phone"
                            value={formData.Phone}
                            onChange={handleChange}
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                      {/* Message */}
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <span>Write Message*</span>
                          <textarea
                            name="Message"
                            value={formData.Message}
                            onChange={handleChange}
                            placeholder="Write Message"
                          ></textarea>
                        </div>
                      </div>
                      {/* Submit */}
                      <div className="col-lg-7">
                        <button type="submit" className="theme-btn" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"} <i className="bi bi-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Success/Error Message */}
                  {submitStatus === "error" && (
                    <p className="text-danger mt-3">Form submission failed. Please fill all fields or try again!</p>
                  )}
                  {submitStatus === "success" && (
                    <p className="text-success mt-3">Your message has been successfully sent!</p>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo2;
