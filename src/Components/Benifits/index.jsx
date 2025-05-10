import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BenefitsSectionStyled = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    document.body.style.fontFamily = "'Poppins', sans-serif";
    return () => {
      document.body.style.fontFamily = "";
    };
  }, []);

  const benefitsData = [
    {
      icon: "bi bi-person-ge",
      bgColor: "#FFF9E5",
      borderColor: "#F8D458",
      title: "Hands-On Project Experience",
      description:
        "Work on real-world projects, gaining practical skills and industry insights that go beyond classroom learning.",
    },
    {
      icon: "bi bi-teach",
      bgColor: "#E8F1FF",
      borderColor: "#4285F4",
      title: "Personalized Mentorship and Career Guidance",
      description:
        "Receive one-on-one mentorship from industry experts, tailored to your learning pace and career goals.",
    },
    {
      icon: "bi bi-employee",
      bgColor: "#F9EAFF",
      borderColor: "#D252E1",
      title: "Professional Networking and Growth",
      description:
        "Connect with like-minded peers and industry professionals, expanding your network and career opportunities.",
    },
    {
      icon: "bi bi-certificate",
      bgColor: "#FFF0EB",
      borderColor: "#FF5733",
      title: "Certification and Exclusive Perks",
      description:
        "Earn a recognized internship certificate and enjoy exclusive perks, including resume reviews, interview prep, and job placement support.",
    },
  ];

  const styles = `
    .benefit-icon {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      flex-shrink: 0;
    }
    .benefit-card {
      background-color: #ffffff;
      border-radius: 12px;
      border: 1px solid #ddd;
      padding: 1.5rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      transition: transform 0.3s ease;
    }
    .benefit-card:hover {
      transform: translateY(-5px);
    }
    .stroke-heading {
      font-size: 4rem;
      font-weight: 700;
      color: transparent;
      -webkit-text-stroke: 2px #000;
      display: inline-block;
      line-height: 1;
    }
    .benefit-description {
      font-size: 0.875rem;
      color: #6c757d;
      line-height: 1.6;
    }
    .poppins-font {
      font-family: 'Poppins', sans-serif;
    }
    @media (max-width: 768px) {
      .heading-row {
        flex-direction: column !important;
        align-items: flex-start !important;
      }
    }
  `;

  return (
    <section className="benefits-section py-5 poppins-font">
      <style jsx="true">{styles}</style>
      <div className="container">
        {/* Stroke Heading & Paragraph Row */}
        <div className="d-flex justify-content-between align-items-center mb-5 heading-row flex-md-row flex-column gap-3">
          <h2 className="stroke-heading m-0">Internship Benefits at Corcus Studio</h2>
          <p className="benefit-description m-0" style={{ maxWidth: "700px" }}>
           
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="d-flex flex-column gap-4">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card d-flex flex-column flex-sm-row align-items-start gap-3"
              style={{ backgroundColor: benefit.bgColor, borderLeft: `6px solid ${benefit.borderColor}` }}
            >
              <div
                className="benefit-icon"
                style={{ backgroundColor: benefit.borderColor }}
              >
                <i className={`${benefit.icon} fs-5`}></i>
              </div>
              <div>
                <h5 className="fw-bold mb-1">{benefit.title}</h5>
                <p className="text-muted mb-0" style={{ fontSize: "0.875rem", lineHeight: "1.6" }}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionStyled;
