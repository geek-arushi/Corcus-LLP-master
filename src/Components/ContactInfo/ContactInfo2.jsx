import { useState } from "react";
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

    if (
      !formData.Name ||
      !formData.Email ||
      !formData.Projectname ||
      !formData.Phone ||
      !formData.Message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzTquOK4AbTudTkMTpCXpiRsv0ITbRkVQPSJXWXdmRDnALf4eredYt2fJp2nBYTPsinEw/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        const resultText = await response.text();
        console.log("Server Response:", resultText);

        setSubmitStatus("success");
        alert("Form submitted successfully!");
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
        throw new Error("Server returned error status");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setSubmitStatus("error");
      alert("Form submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Contact Information Section */}
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="contact-info-items active">
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="content">
                  <h3>Our Address</h3>
                  <p>
                    Basmati Bhawan, Gola Rd, near Issyoga, Ramjaipal Nagar,
                    Patna, Bihar 801503
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="contact-info-items">
                <div className="icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="mailto:info@corcus.in">info@corcus.in</a>
                  </h3>
                  <p>Email us anytime for any queries.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="contact-info-items">
                <div className="icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="tel:+08789677330">+08789677330</a>
                  </h3>
                  <p>Call us for any kind of support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section-33 fix section-padding pt-0">
        <div className="container">
          <div
            className="contact-wrapper-2"
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              padding: "40px",
              boxShadow: "0 0 30px rgba(0,0,0,0.1)",
            }}
          >
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div
                  className="map-items"
                  style={{ height: "100%", minHeight: "500px" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.702167670409!2d85.05559967521958!3d25.618237114518706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed572a39ec32d7%3A0x5f24450d80959e86!2sCorcus%20Studio%20LLP!5e1!3m2!1sen!2sin!4v1743748006759!5m2!1sen!2sin"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "500px",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                    title="Corcus Studio LLP Location"
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="contact-content" style={{ padding: "20px" }}>
                  <h2>Ready to Get Started?</h2>

                  <form onSubmit={handleSubmit} className="contact-form-items">
                    <div className="row g-4">
                      {[
                        { label: "Your Name*", name: "Name", type: "text" },
                        {
                          label: "Email Address*",
                          name: "Email",
                          type: "email",
                        },
                        {
                          label: "Project Name*",
                          name: "Projectname",
                          type: "text",
                        },
                        { label: "Phone Number*", name: "Phone", type: "tel" },
                      ].map((field, idx) => (
                        <div className="col-lg-6" key={idx}>
                          <div className="form-clt">
                            <span>{field.label}</span>
                            <input
                              type={field.type}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              placeholder={field.label}
                              required
                              style={{
                                width: "100%",
                                padding: "12px 15px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                fontSize: "16px",
                              }}
                            />
                          </div>
                        </div>
                      ))}

                      <div className="col-12">
                        <div className="form-clt">
                          <span>Message*</span>
                          <textarea
                            name="Message"
                            value={formData.Message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            required
                            style={{
                              width: "100%",
                              padding: "12px 15px",
                              border: "1px solid #ddd",
                              borderRadius: "5px",
                              fontSize: "16px",
                              height: "150px",
                              resize: "vertical",
                            }}
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="theme-btn"
                          disabled={isSubmitting}
                          style={{
                            cursor: isSubmitting ? "not-allowed" : "pointer",
                            opacity: isSubmitting ? 0.7 : 1,
                            padding: "12px 25px",
                            fontSize: "18px",
                            borderRadius: "8px",
                            backgroundColor: "#000",
                            color: "#fff",
                            border: "none",
                          }}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Now"}
                          <i className="bi bi-arrow-right ms-2"></i>
                        </button>

                        {submitStatus === "error" && (
                          <p style={{ color: "red", marginTop: "10px" }}>
                            There was an error submitting the form. Please try
                            again.
                          </p>
                        )}
                        {submitStatus === "success" && (
                          <p style={{ color: "green", marginTop: "10px" }}>
                            Form submitted successfully!
                          </p>
                        )}
                      </div>
                    </div>
                  </form>
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
