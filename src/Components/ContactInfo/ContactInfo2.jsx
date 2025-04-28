import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactInfo2 = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Project: "",
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
    
    // Enhanced validation
    const requiredFields = ['Name', 'Email', 'Project', 'Phone', 'Message'];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      alert('Please fill in all required fields');
      setSubmitStatus("error");
      return;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.Phone)) {
      alert('Please enter a valid 10-digit phone number');
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
        "https://script.google.com/macros/s/AKfycby-qHRAwUw7ZyGNhgYf-I04eksNoULwqrIpGPeuIQUYQ2bYrxsYKaifMVornbZtfULo/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      const resultText = await response.text();
      
      if (response.ok) {
        setSubmitStatus("success");
        alert('Form submitted successfully!');
        setFormData({
          Name: "",
          Email: "",
          Project: "",
          Phone: "",
          Message: "",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error("Form submission failed", error);
      alert('Form submission failed. Please try again.');
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
};

  return (
    <div>
      <section className="contact-info-section fix section-padding" style={{
        padding: '80px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 15px'
        }}>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-info-items text-center active" style={{
                padding: '40px 30px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                height: '100%'
              }}>
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="content">
                  <h3>Our Address</h3>
                  <p>
                    Basmati Bhawan, Gola Rd, near Issyoga, Ramjaipal Nagar, Patna
                    <br /> Bihar,801503.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="mailto:info@example.com">info@corcus.in</a>
                  </h3>
                  <p>
                    Email us anytime for any kind <br />
                    of query.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="content">
                  <h3>
                    Phone: <a href="tel:+2086660112">+08789677330</a>
                  </h3>
                  <p>
                    Call us for any kind of support, we <br />
                    will be happy to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section-33 fix section-padding pt-0">
        <div className="container">
          <div className="contact-wrapper-2" style={{
            backgroundColor: '#fff',
            borderRadius: '15px',
            padding: '40px',
            boxShadow: '0 0 30px rgba(0,0,0,0.1)'
          }}>
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                // In the map section, update the iframe styles:
                <div className="map-items" style={{ height: '100%', minHeight: '500px' }}>
                  <div className="googpemap" style={{ height: '100%' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.702167670409!2d85.05559967521958!3d25.618237114518706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed572a39ec32d7%3A0x5f24450d80959e86!2sCorcus%20Studio%20LLP!5e1!3m2!1sen!2sin!4v1743748006759!5m2!1sen!2sin"
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '500px',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-content" style={{
                  padding: '20px'
                }}>
                  <h2>Ready to Get Started?</h2>
                  <form
                    id="contact-form"
                    className="contact-form-items"
                    onSubmit={handleSubmit}
                    style={{
                      width: '100%'
                    }}
                  >
                    <div className="row g-4">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt" style={{
                          marginBottom: '20px'
                        }}>
                          <span style={{
                            display: 'block',
                            marginBottom: '8px',
                            color: '#666',
                            fontSize: '14px'
                          }}>Your Name*</span>
                          <input
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              border: '1px solid #ddd',
                              borderRadius: '5px',
                              fontSize: '16px',
                              transition: 'border-color 0.3s ease'
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
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
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <span>Project Name*</span>
                          <input
                            type="text"
                            name="Project"
                            value={formData.Project}
                            onChange={handleChange}
                            placeholder="Project Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".6s">
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
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
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
                      <div className="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                        <button 
                          type="submit" 
                          className="theme-btn"
                          style={{
                            backgroundColor: '#000000',
                            color: '#fff',
                            padding: '15px 30px',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#fea000';
                            e.target.querySelector('i').style.color = '#000000';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#000000';
                            e.target.querySelector('i').style.color = '#ffffff';
                          }}
                        >
                          Send Message <i className="bi bi-arrow-right" style={{ color: '#000000' }}></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  {submitStatus === "error" && (
                    <p style={{
                      color: '#dc3545',
                      marginTop: '15px',
                      fontSize: '14px'
                    }}>Form submission failed. Please try again.</p>
                  )}
                  {submitStatus === "success" && (
                    <p style={{
                      color: '#28a745',
                      marginTop: '15px',
                      fontSize: '14px'
                    }}>Your message has been successfully sent!</p>
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
