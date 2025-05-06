import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const BenefitsSection = () => {
  const benefitsData = [
    {
      icon: "bi bi-person-gear",
      bgColor: "#FFF9E5",
      borderColor: "#F8D458",
      title: "Tailored Learning Experience",
      description:
        "Benefit from personalized courses that adapt to your learning style and preferences, ensuring a customized educational journey.",
    },
    {
      icon: "bi bi-collection-play",
      bgColor: "#E8F1FF",
      borderColor: "#4285F4",
      title: "Engaging Multimedia Content",
      description:
        "Enjoy the freedom to learn at your own pace, anytime, anywhere, allowing you to balance education with your busy schedule.",
    },
    {
      icon: "bi bi-graph-up-arrow",
      bgColor: "#F9EAFF",
      borderColor: "#D252E1",
      title: "Career-Boosting Skills",
      description:
        "Immerse yourself in interactive and enjoyable learning with multimedia content, quizzes, and hands-on exercises for a dynamic educational experience.",
    },
    {
      icon: "bi bi-briefcase",
      bgColor: "#FFF0EB",
      borderColor: "#FF5733",
      title: "Tailored Learning Experience",
      description:
        "Invest in your future with practical skills that enhance your career prospects, making you competitive and opening doors to new opportunities.",
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
  `;

  return (
    <section className="benefits-section py-5">
      <style jsx="true">{styles}</style>
      <div className="container">
        <div className="mb-5">
          <h2 className="fw-bold mb-2">Benefits</h2>
          <p className="text-secondary">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

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

export default BenefitsSection;
