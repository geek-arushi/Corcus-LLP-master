import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div>
      <section className="footer-section footer-bg fix">
        <div className="container">
          <div className="footer-widgets-wrapper">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link
                      to="/"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <img src="/assets/img/logo/black-logo.png" alt="img" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      Empowering brands with integrity, simplicity, performance,
                      and innovation.
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://www.facebook.com/share/18tSev5WW6/">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="https://www.instagram.com/corcus_studio?igsh=dTRlc3dobXZuY2E1">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="https://www.youtube.com/@corcusstudiollp7004">
                        <i className="bi bi-youtube"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/corcus-studio-llp/">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="https://x.com/Corcus_studio">
                        <i className="bi bi-twitter-x"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Quick Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link to="/">
                        <i className="bi bi-arrow-right"></i>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <i className="bi bi-arrow-right"></i>
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/service">
                        <i className="bi bi-arrow-right"></i>
                        Our Services
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/blog">
                        <i className="bi bi-arrow-right"></i>
                        Our Blogs
                      </Link>
                    </li> */}
                    <li>
                      <Link to="/Team">
                        <i className="bi bi-arrow-right"></i>
                        Teams
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <i className="bi bi-arrow-right"></i>
                        Connect Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Important Links</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link to="/blog">
                        <i className="bi bi-arrow-right"></i>
                        Our Blogs
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="bi bi-arrow-right"></i>
                        Join Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Contact Us</h3>
                  </div>
                  <div className="footer-content">
                    <ul className="contact-info">
                      <li>
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto:info@example.com">info@corcus.in</a>
                      </li>
                      <li>
                        <i className="fa-solid fa-phone-volume"></i>
                        <a href="tel:2086660112">+918789677330</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                © All Copyright 2025 by Corcus
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <a href="#">Terms & Condition</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <a href="#" id="scrollUp" className="scroll-icon">
            <i className="bi bi-arrow-up"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer2;
