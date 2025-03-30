import { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center p-3 min-vh-100 contact-container">
      <div className="shadow-lg p-5 rounded contact-card">
        {/* Social Icons (Right Side) */}
        <div className="social-icons">
          <a href="#" className="text-dark">
            <FaLinkedin />
          </a>
          <a href="#" className="text-dark">
            <FaInstagram />
          </a>
          <a href="#" className="text-dark">
            <FaFacebook />
          </a>
        </div>

        <div className="row">
          {/* Left Side Content */}
          <div className="col-md-6 p-4">
            <h2 className="contact-heading">LET’S DISCUSS</h2>
            <h3 className="fw-bold mt-2">YOUR NEXT PROJECT</h3>
            <p className="mt-3 text-muted">
              <strong>Ready to turn your vision into reality?</strong> Whether
              you need branding, web design, packaging, or digital marketing,
              we’re here to help. Let’s brainstorm, create, and bring your ideas
              to life.
            </p>
            <button className="btn btn-dark mt-3">BOOK AN APPOINTMENT</button>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 p-4 bg-white rounded">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>
            </form>
            {/* Marquee Section Inside White Section */}
            <div className="mt-4">
              <div className="marquee-container">
                <Marquee gradient={false} speed={60} className="marquee-text">
                  BOOK NOW &nbsp; BOOK NOW &nbsp; BOOK NOW &nbsp; BOOK NOW
                </Marquee>
              </div>
              <div className="marquee-container2">
                <Marquee
                  gradient={false}
                  speed={60}
                  direction="right"
                  className="marquee-text"
                >
                  BOOK NOW &nbsp; BOOK NOW &nbsp; BOOK NOW &nbsp; BOOK NOW
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
