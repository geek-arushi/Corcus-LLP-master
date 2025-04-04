const ContactInfo2 = () => {
  return (
    <div>
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="contact-info-items text-center active">
                <div className="icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div className="content">
                  <h3>Our Address</h3>
                  <p>
                  Basmati Bhawan, Gola Rd, near Issyoga, Ramjaipal Nagar, Patna  <br /> Bihar,801503.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
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
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="content">
                  <h3>
                    Hot: <a href="tel:+2086660112">+08789677330</a>
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
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="map-items">
                  <div className="googpemap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.702167670409!2d85.05559967521958!3d25.618237114518706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed572a39ec32d7%3A0x5f24450d80959e86!2sCorcus%20Studio%20LLP!5e1!3m2!1sen!2sin!4v1743748006759!5m2!1sen!2sin"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-content">
                  <h2>Ready to Get Started?</h2>
                  <form id="contact-form" className="contact-form-items">
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <span>Your Name*</span>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="form-clt">
                          <span>Your Email*</span>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <span>Project Name*</span>
                          <input
                            type="text"
                            name="project"
                            id="project"
                            placeholder="Project Name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <div className="form-clt">
                          <span>Mobile Number*</span>
                          <input
                            type="tel"
                            name="mobile"
                            id="mobile"
                            placeholder="Mobile Number"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <span>Write Message*</span>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write Message"
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <button type="submit" className="theme-btn">
                          Send Message <i className="bi bi-arrow-right"></i>
                        </button>
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
