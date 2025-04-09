import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";

const Abouthero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/assets/img/about/06.png",
    "/assets/img/about/07.png",
    "/assets/img/about/08.png",
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
    subtitle: "Grow Your Business with Impactful Advertising",
    title: " Empowering Brands with Data-Driven Digital Marketing",
    content:
      " At Corcus Studio, we are a results-focused digital marketing agency committed to helping businesses thrive in the online world. With a deep understanding of consumer behavior and the latest marketing tools, we create strategies that not only reach your target audience but also convert them into loyal customers.",
  };

  return (
    <section className="hero-section hero-3 about-hero">
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

      {/* Custom CSS */}
      <style jsx="true">{`
        .about-hero {
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

export default Abouthero;
