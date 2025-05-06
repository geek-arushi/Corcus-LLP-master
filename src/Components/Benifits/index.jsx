import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Benefits = () => {
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

  return (
    <section className="benefits-section py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <div className="benefits-header">
              <h2 className="section-title fw-bold mb-1">Benefits</h2>
              <p className="text-secondary">
                Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div 
                className="benefit-card h-100" 
                style={{ 
                  backgroundColor: benefit.bgColor,
                  borderRadius: "12px",
                  border: `1px solid ${benefit.borderColor}`,
                  borderLeft: `6px solid ${benefit.borderColor}`,
                  overflow: "hidden",
                  padding: "1.5rem",
                  position: "relative",
                }}
              >
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-start mb-3">
                    <div 
                      className="icon-container me-3" 
                      style={{ 
                        width: "48px", 
                        height: "48px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: benefit.borderColor,
                        color: "#fff",
                        flexShrink: 0
                      }}
                    >
                      <i className={`${benefit.icon} fs-5`}></i>
                    </div>
                    <h5 className="card-title fw-bold mb-0">{benefit.title}</h5>
                  </div>
                  <div className="ps-5">
                    <p className="card-text text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .benefits-section {
          background-color: #ffffff;
          padding: 3rem 0;
        }
        .benefits-header {
          margin-bottom: 2rem;
        }
        .benefit-card {
          transition: transform 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .benefit-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Benefits;