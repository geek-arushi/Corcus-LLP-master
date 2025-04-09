import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import PopupForm from "../popup";
import parse from "html-react-parser";

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
    <section className="hero-section hero-3" style={{ padding: "100px 0 40px 0" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" style={{ paddingRight: "20px" }}>
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

          <div className="col-lg-6" style={{ paddingLeft: "20px" }}>
            <div
              className="hero-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
              style={{ textAlign: "center" }}
            >
              <img
                src={heroImages[currentImageIndex]}
                alt="Hero"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      {showPopup && <PopupForm isOpen={showPopup} setIsOpen={setShowPopup} />}

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
            .hero-content {
              text-align: center;
              padding-bottom: 30px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default HeroBanner3;
