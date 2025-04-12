import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";

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
    subtitle: "Let’s Connect",
    title: " We’re Here to Help You Grow",
    content:
      "Have a project in mind? Need a marketing partner who understands your goals? We’re just a message away! Whether you have a question, need a custom quote, or want to explore how we can take your brand to the next level — we’d love to hear from you.",
  };

  return (
    <section className="hero-section hero-3 contact-hero">
      <div className="container">
        <div className="row flex-lg-row flex-column-reverse align-items-center px-4">
          {/* Content First (on Desktop, bottom on Mobile) */}
          <div className="col-lg-6 hero-content text-lg-start text-center mt-4 mt-lg-0">
            <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
            <h1
              className="wow fadeInUp"
              data-wow-delay=".3s"
              style={{ marginBottom: "15px" }}
            >
              {parse(heroContent.title)}
            </h1>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              {heroContent.content}
            </p>
          </div>

          {/* Image */}
          <div className="col-lg-6 text-center">
            <img
              src={heroImages[currentImageIndex]}
              alt="Hero"
              className="img-fluid w-100 h-auto"
            />
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact-hero {
          padding: 80px 0 20px 0;
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

          .contact-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contacthero;
