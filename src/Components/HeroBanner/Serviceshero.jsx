import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";

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
    subtitle: "What We Offer",
    title: "Strategic Digital Marketing Services That Deliver Results",
    content:
      " We offer a full suite of performance-driven digital marketing services designed to elevate your brand and drive real business growth. Whether you're looking to build brand awareness, generate quality leads, or boost your online sales — we've got you covered.",
  };

  return (
    <section className="hero-section hero-3 services-hero">
      <div className="container">
        <div className="row align-items-center">
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
            </div>
          </div>
          <div className="col-lg-6 px-4">
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

        @media (max-width: 768px) {
          .hero-content {
            padding: 30px 15px 0 15px;
            text-align: center;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .contact-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Serviceshero;
