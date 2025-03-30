import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const WhyChoose3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section
      className="about-section-2 fix section-padding bg-cover"
      data-background="/assets/img/team/team-bg.jpg"
    >
      <div className="bg-shape">
        <img src="/assets/img/about/bg-shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div
                className="about-image-2 wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <img
                  src="/assets/img/choose-us.png"
                  alt="img"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>Why Choose us</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Let’s make something awesome together
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                At Corcus Studio, we go beyond advertising—we create powerful brand stories that deliver real results. Our 360° marketing solutions cover SEO, social media, Google Ads, and more. Backed by data-driven strategies and creative excellence, we tailor campaigns to maximize your brand’s impact. 

                </p>
                <div className="icon-items-area">
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="content mt-0">
                      <h3>ROI-Driven Approach</h3>
                      <p>
                      We don’t just run ads; we drive measurable growth.
                      {" "}
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="content mt-0">
                      <h3> Data-Backed Strategies</h3>
                      <p>
                      Every decision is based on analytics and consumer behavior.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                  <Link to="/about">
                    {" "}
                    <span className="theme-btn">EXPLORE MORE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="cta-marketing-2 section-padding pb-0">
                <div className="container">
                    <div className="cta-marketing-wrapper">
                        <div className="content">
                            <div className="section-title">
                                <div className="sub-title bg-color-3 wow fadeInUp">
                                    <span>Free Marketing</span>
                                </div>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                    Free digital marketing
                                </h2>
                            </div>
                            <ul className="list mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="white"/>
                                    </svg>
                                    Digital marketing
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="white"/>
                                    </svg>
                                    ECO optimization
                                </li>
                            </ul>
                        </div>
                        <div className="cta-input wow fadeInUp" data-wow-delay=".3s">
                            <input type="email" id="email" placeholder="Your email address" />
                            <button className="newsletter-btn" type="submit">
                            <i className="bi bi-arrow-up-right"></i>
                            </button>
                        </div>
                        <div className="cta-marketing-image wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.3s">
                            <img src="/assets/img/cta-marketing.png" alt="img" />
                        </div>
                    </div>
                </div> */}
      {/* </div> */}
    </section>
  );
};

export default WhyChoose3;
