import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Servicesnew = () => {
  return (
    <div className="container my-5">
      {/* Custom CSS for shadow, border, hover popup, stroke text, and button hover */}
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
        `}
      </style>

      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-4">
        <h1
          className="display-4 mb-2 mb-md-0 me-md-4 stroke-text"
          style={{
            backgroundColor: '#fbd735',
            padding: '10px 30px',
            borderRadius: '8px',
          }}
        >
          Service
        </h1>
        <p className="lead fw-bold">
          At our digital marketing agency, we offer a wide range of services to help businesses grow and achieve their goals. These services include:
        </p>
      </div>

      <div className="row">
        {[
          {
            title: "Performance Marketing",
            desc: "Contact us today to learn how our digital marketing services can help your business grow. Let's make things happen!",
            img: "https://storage.googleapis.com/a1aa/image/5uc2fv4cxC3oMRHykdI7VJJacv3S8YMeW2wC8ijyjM8.jpg",
            btnStyle: "dark",
            darkStyle: false
          },
          {
            title: "Social Media Marketing",
            desc: "Strategic content creation and management across platforms to engage your audience.",
            img: "https://storage.googleapis.com/a1aa/image/wefXIsLvtycT9Shfxg11D22Abs3j0nT-IocQgusqGdc.jpg",
            btnStyle: "light",
            darkStyle: true
          },
          {
            title: "Search Engine Optimization",
            desc: "Improve your website's visibility and ranking on search engines.",
            img: "https://storage.googleapis.com/a1aa/image/FneCYJh2bfHp7NKk3XJ_68N5cX1tLoBynLFHRUSLCU4.jpg",
            btnStyle: "light",
            darkStyle: true
          },
          {
            title: "Content Marketing",
            desc: "Engaging and informative content that builds brand authority and attracts customers.",
            img: "https://storage.googleapis.com/a1aa/image/A7hl5keKixBkU8r1e9QbV1m8EPXUgwvb9WDPFSMjF_Y.jpg",
            btnStyle: "dark",
            darkStyle: false
          },
          {
            title: "Performance Marketing",
            desc: "Contact us today to learn how our digital marketing services can help your business grow. Let's make things happen!",
            img: "https://storage.googleapis.com/a1aa/image/5uc2fv4cxC3oMRHykdI7VJJacv3S8YMeW2wC8ijyjM8.jpg",
            btnStyle: "dark",
            darkStyle: false
          },
          {
            title: "Social Media Marketing",
            desc: "Strategic content creation and management across platforms to engage your audience.",
            img: "https://storage.googleapis.com/a1aa/image/wefXIsLvtycT9Shfxg11D22Abs3j0nT-IocQgusqGdc.jpg",
            btnStyle: "light",
            darkStyle: true
          },
          {
            title: "Search Engine Optimization",
            desc: "Improve your website's visibility and ranking on search engines.",
            img: "https://storage.googleapis.com/a1aa/image/FneCYJh2bfHp7NKk3XJ_68N5cX1tLoBynLFHRUSLCU4.jpg",
            btnStyle: "light",
            darkStyle: true
          },
          {
            title: "Content Marketing",
            desc: "Engaging and informative content that builds brand authority and attracts customers.",
            img: "https://storage.googleapis.com/a1aa/image/A7hl5keKixBkU8r1e9QbV1m8EPXUgwvb9WDPFSMjF_Y.jpg",
            btnStyle: "dark",
            darkStyle: false
          },
        ].map((service, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div
              className={`card service-card h-100 p-4 rounded d-flex flex-column flex-md-row align-items-center ${service.darkStyle ? 'bg-black text-white' : ''}`}
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
                <h2 className="h4 fw-bold mb-2">{service.title}</h2>
                <p className="mb-4">{service.desc}</p>
                <a href="/contact" target="_blank" rel="noopener noreferrer">
                  <button className={`btn btn-${service.btnStyle}`}>Get your free proposal</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicesnew;
