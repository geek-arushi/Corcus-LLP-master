import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "../popup/Popup";
import ContactForm from "../contactForm/ContactForm";

const Servicesnew = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="container my-5">
      {/* Custom CSS for styling */}
      <style>
        {`
          .service-card {
            border: 2px solid black !important;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          }

          .stroke-text {
            color: transparent;
            -webkit-text-stroke: 2px black;
            font-weight: bold;
          }

          .btn:hover {
            background-color: yellow !important;
            color: black !important;
            border-color: yellow !important;
          }

          .custom-btn:hover {
            background-color: #eeb200 !important;
            color: black !important;
            border-color: #eeb200 !important;
          }
        `}
      </style>

      {/* Title Section */}
      <div className="d-flex flex-column flex-md-row align-items-start mb-4">
        <h1
          className="display-4 stroke-text me-md-4 mb-3 mb-md-0"
          style={{
            backgroundColor: "#fbd735",
            padding: "10px 30px",
            borderRadius: "8px",
            minWidth: "200px",
            textAlign: "center",
          }}
        >
          Services
        </h1>
        <div>
          <p className="lead fw-semibold color-black mb-0">
            At our digital marketing agency, we offer a wide range of services to help
            businesses grow and achieve their goals. These services include performance
            marketing, social media management, SEO, content creation, and more — all
            tailored to boost your brand’s online presence and drive real results.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="row">
        {[
          {
            title: "Performance Marketing",
            desc: "Contact us today to learn how our digital marketing services can help your business grow. Let's make things happen!",
            img: "https://storage.googleapis.com/a1aa/image/5uc2fv4cxC3oMRHykdI7VJJacv3S8YMeW2wC8ijyjM8.jpg",
            btnStyle: "dark",
            darkStyle: false,
          },
          {
            title: "Social Media Marketing",
            desc: "Strategic content creation and management across platforms to engage your audience.",
            img: "https://storage.googleapis.com/a1aa/image/wefXIsLvtycT9Shfxg11D22Abs3j0nT-IocQgusqGdc.jpg",
            btnStyle: "light",
            darkStyle: true,
          },
          {
            title: "Search Engine Optimization",
            desc: "Improve your website's visibility and ranking on search engines.",
            img: "https://storage.googleapis.com/a1aa/image/FneCYJh2bfHp7NKk3XJ_68N5cX1tLoBynLFHRUSLCU4.jpg",
            btnStyle: "light",
            darkStyle: true,
          },
          {
            title: "Content Marketing",
            desc: "Engaging and informative content that builds brand authority and attracts customers.",
            img: "https://storage.googleapis.com/a1aa/image/A7hl5keKixBkU8r1e9QbV1m8EPXUgwvb9WDPFSMjF_Y.jpg",
            btnStyle: "dark",
            darkStyle: false,
          },
          {
            title: "Brand Strategy & Consulting",
            desc: "Customized marketing strategies that align with your business goals.",
            img: "https://storage.googleapis.com/a1aa/image/5uc2fv4cxC3oMRHykdI7VJJacv3S8YMeW2wC8ijyjM8.jpg",
            btnStyle: "dark",
            darkStyle: false,
          },
          {
            title: "Creative Design",
            desc: "Visually appealing creatives that resonate with your target audience.",
            img: "https://storage.googleapis.com/a1aa/image/wefXIsLvtycT9Shfxg11D22Abs3j0nT-IocQgusqGdc.jpg",
            btnStyle: "light",
            darkStyle: true,
          },
          {
            title: "E-commerce Marketing",
            desc: "Comprehensive solutions to boost your online store's sales and visibility.",
            img: "https://storage.googleapis.com/a1aa/image/FneCYJh2bfHp7NKk3XJ_68N5cX1tLoBynLFHRUSLCU4.jpg",
            btnStyle: "light",
            darkStyle: true,
          },
          {
            title: "Analytics & Reporting",
            desc: "In-depth performance analysis to refine and optimize your campaigns.",
            img: "https://storage.googleapis.com/a1aa/image/A7hl5keKixBkU8r1e9QbV1m8EPXUgwvb9WDPFSMjF_Y.jpg",
            btnStyle: "dark",
            darkStyle: false,
          },
        ].map((service, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div
              className={`card service-card h-100 p-4 rounded d-flex flex-column flex-md-row align-items-center ${
                service.darkStyle ? "bg-black text-white" : ""
              }`}
            >
              <div className="order-md-2 ms-md-4">
                <img
                  src={service.img}
                  alt={service.title}
                  height="150"
                  width="150"
                  className="mb-4 mb-md-0"
                />
              </div>
              <div>
                <h2 className="h4 fw-bold mb-3">{service.title}</h2>
                <p className="mb-3">
                  {service.desc}
                  <br />
                  <button
                    className={`btn btn-${service.btnStyle} custom-btn mt-3`}
                    onClick={() => setIsPopupOpen(true)}
                  >
                    Get your free proposal
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <ContactForm />
      </Popup>
    </div>
  );
};

export default Servicesnew;
