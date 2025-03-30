import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div>
      {/* <section className="cta-section section-padding pb-0">
        <div className="rokect-shape float-bob-y">
          <img src="/assets/img/rokect.png" alt="img" />
        </div>
        <div className="container">
          <div
            className="cta-wrapper bg-cover"
            data-background="/assets/img/cta-bg.jpg"
          >
            <div
              className="cta-img wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <img src="/assets/img/cta-img.png" alt="img" />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Stay Connected With <br /> Cutting Edge IT
            </h2>
            <div className="main-button wow fadeInUp" data-wow-delay=".5s">
              <Link to="/contact">
                {" "}
                <span className="theme-btn"> talk TO A SPECIALIST </span>
                <span className="arrow-btn">
                  {" "}
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

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
                    <a href="index.html">
                      <img src="/assets/img/logo/black-logo.png" alt="img" />
                    </a>
                  </div>
                  <div className="footer-content">
                    <p>
                      Phasellus ultricies aliquam volutpat ullamcorper laoreet
                      neque, a lacinia curabitur lacinia mollis
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-youtube"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-linkedin"></i>
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
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                {/* <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Recent Posts</h3>
                  </div>
                  <div className="recent-post-area">
                    <div className="recent-post-items">
                      <div className="thumb">
                        <img src="/assets/img/news/pp1.jpg" alt="post-img" />
                      </div>
                      <div className="content">
                        <ul className="post-date">
                          <li>
                            <i className="fa-solid fa-calendar-days me-2"></i>
                            20 Feb, 2024
                          </li>
                        </ul>
                        <h6>
                          <Link to="/blog/blog-details">
                            Top 5 Most Famous <br />
                            Technology Trend In 2024
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="recent-post-items mb-0">
                      <div className="thumb">
                        <img src="/assets/img/news/pp2.jpg" alt="post-img" />
                      </div>
                      <div className="content">
                        <ul className="post-date">
                          <li>
                            <i className="fa-solid fa-calendar-days me-2"></i>
                            15 Dec, 2024
                          </li>
                        </ul>
                        <h6>
                          <Link to="/blog/blog-details">
                            The Surfing Man Will Blow <br />
                            Your Mind
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div> */}
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
                    <div className="footer-input">
                      <input
                        type="email"
                        id="email2"
                        placeholder="Your email address"
                      />
                      <button className="newsletter-btn" type="submit">
                        <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        I agree to the <a href="#">Privacy Policy.</a>
                      </label>
                    </div>
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
                  <a href="#">Privacy Policy</a>
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
