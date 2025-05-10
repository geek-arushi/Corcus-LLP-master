import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "../popup/Popup";
import Internform from "../contactForm/Intcontact";

const InternS = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    {
      title: "BEGINER WEB DEVELOPER",
      desc: "Contact us today to learn how our digital marketing services can help your business grow.",
      price: "₹ 5999/-",
      img: "assets/img/service/01.gif",
      btnStyle: "dark",
      darkStyle: false,
    },
    {
      title: "INTERMEDIATE WEB DEVELOPER",
      desc: "Strategic content creation and management across platforms to engage your audience.",
      price: "₹ 7999/-",
      img: "assets/img/service/02.gif",
      btnStyle: "light",
      darkStyle: true,
    },
    {
      title: "WORDPRESS DEVELOPER",
      desc: "Improve your website's visibility and ranking on search engines.",
      price: "₹ 3999/-",
      img: "assets/img/service/03.gif",
      btnStyle: "light",
      darkStyle: true,
    },
    {
      title: "SHOPIFY ECOMMERCE",
      desc: "Engaging content builds brand authority and attracts customers.",
      price: "₹ 4999/-",
      img: "assets/img/service/04.gif",
      btnStyle: "dark",
      darkStyle: false,
    },
     {
      title: "SMM",
      desc: "Engaging content builds brand authority and attracts customers.",
      price: "₹ 4999/-",
      img: "assets/img/service/04.gif",
      btnStyle: "dark",
      darkStyle: false,
    },
     {
      title: "CANVA",
      desc: "Improve your website's visibility and ranking on search engines.",
      price: "₹ 1999/-",
      img: "assets/img/service/03.gif",
      btnStyle: "light",
      darkStyle: true,
    },
     {
      title: "AI",
      desc: "Improve your website's visibility and ranking on search engines.",
      price: "₹ 1999/-",
      img: "assets/img/service/03.gif",
      btnStyle: "light",
      darkStyle: true,
    },
    {
      title: "Motion Graphics",
      desc: "Engaging content builds brand authority and attracts customers.",
      price: "₹ 14999/-",
      img: "assets/img/service/04.gif",
      btnStyle: "dark",
      darkStyle: false,
    },
  ];

  return (
    <div className="container my-5">
      <style>
        {`
          .service-card {
            border: 2px solid black !important;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          .service-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          }

          .stroke-text {
            color: transparent;
            -webkit-text-stroke: 2px black;
            font-weight: bold;
            font-size: 60px;
            line-height: 1;
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

          .sticky-title {
            position: sticky;
            top: 100px;
            z-index: 10;
            text-align: start;
          }

          .price-tag {
            background-color: #eeb200;
            color: black;
            padding: 5px 10px;
            font-weight: bold;
            border-radius: 4px;
            display: inline-block;
            margin-bottom: 10px;
          }

          .paid-tag {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #eeb200;
            color: black;
            padding: 5px 10px;
            font-weight: bold;
            border-radius: 4px;
            z-index: 5;
          }

          @media (max-width: 768px) {
            .stroke-text {
              font-size: 2.5rem !important;
              text-align: center;
            }
            .sticky-title {
              position: static;
              top: auto;
              text-align: center;
            }
          }
        `}
      </style>

      {/* Title Section */}
      <div className="row align-items-start mb-5">
        <div className="col-md-4 mb-4 mb-md-0 sticky-title">
          <h1
            className="stroke-text"
            style={{
              backgroundColor: "#ffffff",
              padding: "40px 20px",
              borderRadius: "8px",
            }}
          >
            Services
          </h1>
        </div>
        <div className="col-md-8">
          <p className="lead text-grey ps-md-3" style={{ fontSize: "1rem", fontWeight: "bold", lineHeight: "1.6", marginBottom: "1.5rem" }}></p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className={`card service-card h-100 p-4 rounded d-flex flex-column flex-md-row align-items-center ${service.darkStyle ? "bg-black text-white" : ""}`}>
              <div className="paid-tag">PAID</div>
              <div className="order-md-2 ms-md-4">
                <img src={service.img} alt={service.title} height="150" width="150" className="mb-4 mb-md-0" />
              </div>
              <div>
                <h2 className="h4 fw-bold mb-3">{service.title}</h2>
                <p className="mb-3">
                  {service.desc}
                  <br />
                  <span className="price-tag">Price: {service.price}</span>
                  <br />
                  <button className={`btn btn-${service.btnStyle} custom-btn mt-3`} onClick={() => setIsPopupOpen(true)}>
                    Get your free proposal
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <Internform />
      </Popup>
    </div>
  );
};

export default InternS;
