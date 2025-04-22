import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import PopupForm from "../popup";

const HeroBanner3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const heroImages = [
    "/assets/img/hero/hero-image-1.jpg",
    "/assets/img/hero/hero-image-2.jpg",
    "/assets/img/hero/hero-image-3.jpg",
    // "/assets/img/hero/hero-image-4.png",
    // "/assets/img/hero/hero-image-5.png",
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
    title: "Scale Your Brand with Performance Driven Marketing",
    content:
      "We help businesses maximize their ROI with data-backed strategies, high-converting ad creatives, and impactful digital campaigns. Whether you're just starting out or ready to level up, we craft marketing solutions that are tailored to your audience, your goals, and your brand voice.",
    btnname: "Get Started",
    btnname2: "Contact Us",
  };

  return (
    <section className="hero-section hero-3 services-hero">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* Content Section */}
          <div className="col-lg-6 px-4">
            <div className="hero-content">
              <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
              <h1
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{ marginBottom: "15px" }}
              >
                {parse(heroContent.title)}
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-delay=".5s"
                style={{ marginTop: "0" }}
              >
                {heroContent.content}
              </p>
              <div className="hero-button d-flex gap-3 mt-4">
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

          {/* Image Section */}
          <div className="col-lg-6 px-4 mb-4 mb-lg-0">
            <div
              className="hero-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              style={{ textAlign: "center" }}
            >
              <img
                src={heroImages[currentImageIndex]}
                alt="Hero"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && <PopupForm isOpen={showPopup} setIsOpen={setShowPopup} />}

      {/* Inline Styles */}
      <style jsx="true">{`
        .services-hero {
          padding: 100px 0 20px 0;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: #444;
        }

        .theme-btn {
          background: #eeb200;
          padding: 10px 20px;
          border-radius: 25px;
          color: #000;
          font-weight: 500;
          transition: background 0.3s;
          cursor: pointer;
        }

        .theme-btn:hover {
          background: #000;
          color: #fff;
        }

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
          .hero-content {
            padding: 30px 15px 0 15px;
            text-align: center;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-content p {
            font-size: 1rem;
          }

          .contact-btn,
          .theme-btn {
            padding: 10px 16px;
            font-size: 0.95rem;
            width: 100%;
            justify-content: center;
          }

          .hero-button {
            justify-content: center;
            flex-wrap: wrap;
          }

          .hero-image {
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner3;
