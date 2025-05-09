import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";

const Internhero = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/assets/img/Inetrn/14.jpg",
    "/assets/img/Inetrn/15.jpg",
    "/assets/img/Inetrn/16.jpg",
    "/assets/img/Inetrn/17.png",
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
    title: "Launch Your Career with Real Industry Skills!",
    content:
      "Internship Program in Digital Marketing, Web Development, AI & SMM. Kickstart your professional journey with hands-on training, live projects, and expert mentorship",
  };

  return (
    <section className="hero-section hero-3 services-hero">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          {/* Text Content */}
          <div className="col-lg-6 px-4 mt-4 mt-lg-0">
            <div className="hero-content text-lg-start text-center">
              <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
              <h1
                className="wow fadeInUp"
                data-wow-delay=".3s"
                style={{ marginBottom: "30px" }} // 👈 Increased space between title and paragraph
              >
                {parse(heroContent.title)}
              </h1>
              <p
                className="wow fadeInUp"
                data-wow-delay=".5s"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                {heroContent.content}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 px-4 mb-4 mb-lg-0 text-center">
            <div
              className="hero-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <img
                src={heroImages[currentImageIndex]}
                alt="Service Hero"
                className="img-fluid w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional Scoped Styles */}
      <style jsx="true">{`
        .services-hero {
          padding: 100px 0 20px 0;
        }

        .hero-content h6 {
          font-size: 1rem;
          font-weight: 500;
          color: #eeb200;
          margin-bottom: 10px;
        }

        .hero-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          color: #000;
        }

        .hero-content p {
          font-size: 1.1rem;
          color: #444;
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

          .hero-image {
            margin-bottom: 30px;
          }

          .services-hero {
            padding: 60px 0 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Internhero;
