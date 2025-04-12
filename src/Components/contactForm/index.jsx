import { useState } from "react";
import Marquee from "react-fast-marquee";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Contact: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) =>
      formBody.append(key, value)
    );

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyW9-x4wX6dS5R9xzmr2sIreQWRyxWgi4CYuRVDVnUAo7xjQXK2lZbV0zr8HuAFIChI/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      await response.text();
      alert("Form submitted successfully!");
      setFormData({ Name: "", Email: "", Contact: "", Message: "" });
    } catch (error) {
      console.error("Submission failed", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="container-fluid p-0 d-flex justify-content-center align-items-center min-vh-100">
      <div className="shadow-lg p-5 rounded contact-card w-100">
        <div className="row">
          {/* Left Content */}
          <div className="col-md-6 p-4">
            <h2 className="contact-heading">LET’S DISCUSS</h2>
            <h3 className="fw-bold mt-2">YOUR NEXT PROJECT</h3>
            <p className="mt-3 text-muted">
              <strong>Ready to turn your vision into reality?</strong> Whether
              you need branding, web design, packaging, or digital marketing,
              we’re here to help. At Corcus, we are a performance-driven digital
              marketing company delivering real business growth.
            </p>
            <button
              className="btn btn-dark mt-3 custom-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              BOOK AN APPOINTMENT
            </button>
          </div>

          {/* Right Form */}
          <div className="col-md-6 p-4 bg-white rounded">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="Name"
                  placeholder="Full Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="Contact"
                  placeholder="Contact Number"
                  value={formData.Contact}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="Message"
                  placeholder="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100 custom-btn">
                Submit
              </button>
            </form>

            {/* Marquee */}
            <div
              className="marquee-wrapper mt-4 position-relative"
              style={{ height: "40px", overflow: "hidden" }}
            >
              <Marquee
                gradient={false}
                speed={60}
                className="marquee-text position-absolute top-0 start-0 w-100"
              >
                BOOK NOW &nbsp; BOOK NOW &nbsp; BOOK NOW &nbsp; BOOK NOW
              </Marquee>
              <Marquee
                gradient={false}
                speed={60}
                direction="right"
                className="marquee-text position-absolute top-0 start-0 w-100"
              >
                BOOK NOW &nbsp; BOOK NOW &nbsp; BOOK NOW &nbsp; BOOK NOW
              </Marquee>
            </div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx="true">{`
          .custom-btn:hover {
            background-color: #eeb200 !important;
            border-color: #eeb200 !important;
            color: #000 !important;
          }

          .marquee-text {
            font-size: 18px;
            font-weight: 600;
            color: #000;
            white-space: nowrap;
          }

          .contact-heading {
            font-size: 36px;
          }

          @media (max-width: 768px) {
            .contact-heading {
              font-size: 28px;
            }

            .marquee-text {
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ContactForm;
