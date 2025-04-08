import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Serviceshero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "assets/img/Servicedetail/1.png",
    "assets/img/Servicedetail/2.png",
    "assets/img/Servicedetail/3.png",
    "assets/img/Servicedetail/4.png",
    "assets/img/Servicedetail/5.png",
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
      " We help businesses maximize their ROI with data-driven strategies, high-converting ads, and powerful digital campaigns.",
  };

  return (
    <section
      className="hero-section hero-3"
      style={{ padding: "120px 0 10px 0" }}
    >
      <div className="container">
        <div className="row g-0 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(heroContent.title)}
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                {heroContent.content}
              </p>
              <div className="hero-button d-flex gap-3">
                <div
                  className="main-button wow fadeInUp"
                  data-wow-delay=".3s"
                ></div>
                <div
                  className="main-button wow fadeInUp"
                  data-wow-delay=".5s"
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="hero-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
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

      {/* Custom CSS for Consistent Padding */}
      <style>
        {`
          .hero-section .container {
            padding-left: 15px;
            padding-right: 15px;
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
          }

          .contact-btn:hover {
            background: black;
            color: white;
          }
        `}
      </style>
    </section>
  );
};

export default Serviceshero;
