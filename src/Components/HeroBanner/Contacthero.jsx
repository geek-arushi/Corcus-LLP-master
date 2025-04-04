import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contacthero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/assets/img/Contactus/01.png",
    "/assets/img/Contactus/02.png",
    "/assets/img/Contactus/03.png",
    "/assets/img/Contactus/04.png",
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
    <section className="hero-section hero-3 contact-hero">
      <div className="container-fluid">
        <div className="row g-0 align-items-center no-gap-row">
          <div className="col-lg-6">
            <div className="hero-content">
              <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(heroContent.title)}
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                {heroContent.content}
              </p>
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
                className="img-fluid w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-hero {
          padding: 60px 0 10px 0;
        }

        .no-gap-row > [class*="col-"] {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }

        .hero-content {
          margin-bottom: 0 !important;
          padding: 40px 40px 0 40px;
        }

        .hero-image {
          margin-bottom: 0 !important;
        }

        .contact-btn {
          background: transparent;
          border: 2px solid #000;
          color: #000;
          padding: 10px 22px;
          display: flex;
          align-items: center;
          border-radius: 30px;
          gap: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }

        .contact-btn:hover {
          background: #000;
          color: #fff;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: #444;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .contact-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }

          .hero-button {
            flex-direction: column;
          }

          .hero-content {
            padding: 30px 15px 0 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contacthero;