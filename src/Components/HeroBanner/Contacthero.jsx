import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Simulate API call
    setTimeout(() => {
      setStatus("Thank you! We’ll be in touch shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section className="contact-section services-hero">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h6 className="subtitle">Contact Us</h6>
            <h1 style={{ marginBottom: "30px" }}>
              Let’s Bring Your Vision to Life
            </h1>
            <p style={{ marginTop: "0", marginBottom: "0", color: "#444" }}>
              Whether you have a question, want to start a project, or just say
              hello — we’d love to hear from you. Drop us a message and our
              team will get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email*"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message*"
                rows={4}
                required
              />
              <button type="submit" className="theme-btn">
                Send Message
              </button>
              {status && <p className="mt-3 text-info">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .services-hero {
          padding: 80px 0;
        }

        .subtitle {
          font-size: 1rem;
          font-weight: 500;
          color: #eeb200;
          margin-bottom: 10px;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #000;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 1rem;
          outline: none;
        }

        .theme-btn {
          background: #eeb200;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          color: #000;
          font-weight: 500;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .theme-btn:hover {
          background: #000;
          color: #fff;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          input,
          textarea {
            font-size: 0.95rem;
          }

          .theme-btn {
            width: 100%;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
