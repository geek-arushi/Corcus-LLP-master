import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import PopupForm from "../popup"; // Make sure this path is correct

const HeroBanner3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const heroImages = [
    "/assets/img/hero/hero-image-1.png",
    "/assets/img/hero/hero-image-2.png",
    "/assets/img/hero/hero-image-3.png",
    "/assets/img/hero/hero-image-4.png",
    "/assets/img/hero/hero-image-5.png",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const heroContent = {
    subtitle: "go for advertising",
    title: " Scale Your Brand with Performance Driven Marketing",
    content:
      "We help businesses maximize their ROI with data-backed strategies, high-converting ad creatives, and impactful digital campaigns. Whether you're just starting out or ready to level up, we craft marketing solutions that are tailored to your audience, your goals, and your brand voice.",
    btnname: "Get Started",
    btnname2: "Contact Us",
    btnurl: "/contact",
  };

  return (
    <section
      className="hero-section hero-3"
      style={{ padding: "120px 0 10px 0" }}
    >
      <div className="container-fluid">
        <div className="row g-2 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content" style={{ marginRight: "-60px" }}>
              <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(heroContent.title)}
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                {heroContent.content}
              </p>
              <div className="hero-button d-flex gap-3">
                <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                  <span
                    className="theme-btn"
                    onClick={() => setShowPopup(true)}
                    role="button"
                  >
                    {heroContent.btnname}
                  </span>
                </div>
                <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                  <span
                    className="contact-btn"
                    onClick={() => setShowPopup(true)}
                    role="button"
                  >
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    {heroContent.btnname2}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="hero-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              style={{ marginLeft: "-15px" }}
            >
              <img src={heroImages[currentImageIndex]} alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && <PopupForm isOpen={showPopup} setIsOpen={setShowPopup} />}

      {/* Custom CSS for Contact Us Button */}
      <style>
        {`
          .contact-btn {
            background: transparent;
            border: 2px solid black;
            color: black;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            border-radius: 25px;
            gap: 8px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
          }

          .contact-btn:hover {
            background: black;
            color: white;
          }

          @media (max-width: 768px) {
            .hero-section.hero-3 {
              padding: 40px 0 20px 0;
            }

            .hero-content {
              margin-right: 0 !important;
              text-align: center;
              padding: 0 20px;
              margin-bottom: 30px;
            }

            .hero-content h6 {
              font-size: 0.9rem;
              margin-bottom: 10px;
            }

            .hero-content h1 {
              font-size: 1.8rem;
              line-height: 1.3;
              margin-bottom: 15px;
            }

            .hero-content p {
              font-size: 1rem;
              margin-bottom: 25px;
              line-height: 1.6;
            }

            .hero-button {
              justify-content: center;
              flex-wrap: wrap;
              gap: 15px !important;
            }

            .hero-button .main-button {
              margin-bottom: 0;
              width: 100%;
              max-width: 200px;
            }

            .hero-button .theme-btn,
            .hero-button .contact-btn {
              width: 100%;
              justify-content: center;
              padding: 12px 20px;
              font-size: 0.95rem;
            }

            .hero-image {
              margin-left: 0 !important;
              margin-top: 20px;
              text-align: center;
              padding: 0 20px;
            }

            .hero-image img {
              max-width: 100%;
              height: auto;
              border-radius: 10px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroBanner3;
