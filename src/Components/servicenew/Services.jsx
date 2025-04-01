import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Servicesnew = () => {
  return (
    <div className="container my-5">
      {/* Custom CSS for shadow and popup */}
      <style>
        {`
          .service-card {
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .service-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
          }
        `}
      </style>

      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-4">
        <h1 className="text-warning display-4 mb-2 mb-md-0 me-md-4">Service</h1>
        <p className="lead">
          At our digital marketing agency, we offer a wide range of services to help businesses grow and achieve their goals. These services include:
        </p>
      </div>

      <div className="row">
        {/* Performance Marketing */}
        <div className="col-md-6 mb-4">
          <div className="card service-card h-100 border p-4 rounded d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ms-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/5uc2fv4cxC3oMRHykdI7VJJacv3S8YMeW2wC8ijyjM8.jpg"
                alt="Performance Marketing"
                height="150"
                width="150"
                className="mb-4 mb-md-0"
              />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-2">Performance Marketing</h2>
              <p className="mb-4">
                Contact us today to learn how our digital marketing services can help your business grow. Let's make things happen!
              </p>
              <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-light">Get your free proposal</button>
</a>
            </div>
          </div>
        </div>

        {/* Social Media Marketing */}
        <div className="col-md-6 mb-4">
          <div className="card service-card h-100 bg-dark text-white p-4 rounded d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ms-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/wefXIsLvtycT9Shfxg11D22Abs3j0nT-IocQgusqGdc.jpg"
                alt="Social Media Marketing"
                height="150"
                width="150"
                className="mb-4 mb-md-0"
              />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-2">Social Media Marketing</h2>
              <p className="mb-4">
                Strategic content creation and management across platforms to engage your audience.
              </p>
              <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-light">Get your free proposal</button>
</a>
            </div>
          </div>
        </div>

        {/* Search Engine Optimization */}
        <div className="col-md-6 mb-4">
          <div className="card service-card h-100 bg-dark text-white p-4 rounded d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ms-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/FneCYJh2bfHp7NKk3XJ_68N5cX1tLoBynLFHRUSLCU4.jpg"
                alt="Search Engine Optimization"
                height="150"
                width="150"
                className="mb-4 mb-md-0"
              />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-2">Search Engine Optimization</h2>
              <p className="mb-4">
                Improve your website's visibility and ranking on search engines.
              </p>
              <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-light">Get your free proposal</button>
</a>
            </div>
          </div>
        </div>

        {/* Content Marketing */}
        <div className="col-md-6 mb-4">
          <div className="card service-card h-100 border p-4 rounded d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ms-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/A7hl5keKixBkU8r1e9QbV1m8EPXUgwvb9WDPFSMjF_Y.jpg"
                alt="Content Marketing"
                height="150"
                width="150"
                className="mb-4 mb-md-0"
              />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-2">Content Marketing</h2>
              <p className="mb-4">
                Engaging and informative content that builds brand authority and attracts customers.
              </p>
              <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-light">Get your free proposal</button>
</a>
            </div>
          </div>
        </div>

        {/* Duplicate Performance Marketing */}
        <div className="col-md-6 mb-4">
          <div className="card service-card h-100 border p-4 rounded d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ms-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/5uc2fv4cxC3oMRHykdI7VJJacv3S8YMeW2wC8ijyjM8.jpg"
                alt="Performance Marketing"
                height="150"
                width="150"
                className="mb-4 mb-md-0"
              />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-2">Performance Marketing</h2>
              <p className="mb-4">
                Contact us today to learn how our digital marketing services can help your business grow. Let's make things happen!
              </p>
              <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-light">Get your free proposal</button>
</a>
            </div>
          </div>
        </div>

        {/* Duplicate Social Media Marketing */}
        <div className="col-md-6 mb-4">
          <div className="card service-card h-100 bg-dark text-white p-4 rounded d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ms-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/wefXIsLvtycT9Shfxg11D22Abs3j0nT-IocQgusqGdc.jpg"
                alt="Social Media Marketing"
                height="150"
                width="150"
                className="mb-4 mb-md-0"
              />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-2">Social Media Marketing</h2>
              <p className="mb-4">
                Strategic content creation and management across platforms to engage your audience.
              </p>
              <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-light">Get your free proposal</button>
</a>
            </div>
          </div>
        </div>

        {/* Duplicate Search Engine Optimization */}
        <div className="col-md-6 mb-4">
          <div className="card service-card h-100 bg-dark text-white p-4 rounded d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ms-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/FneCYJh2bfHp7NKk3XJ_68N5cX1tLoBynLFHRUSLCU4.jpg"
                alt="Search Engine Optimization"
                height="150"
                width="150"
                className="mb-4 mb-md-0"
              />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-2">Search Engine Optimization</h2>
              <p className="mb-4">
                Improve your website's visibility and ranking on search engines.
              </p>
              <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-light">Get your free proposal</button>
</a>
            </div>
          </div>
        </div>

        {/* Duplicate Content Marketing */}
        <div className="col-md-6 mb-4">
          <div className="card service-card h-100 border p-4 rounded d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ms-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/A7hl5keKixBkU8r1e9QbV1m8EPXUgwvb9WDPFSMjF_Y.jpg"
                alt="Content Marketing"
                height="150"
                width="150"
                className="mb-4 mb-md-0"
              />
            </div>
            <div>
              <h2 className="h4 fw-bold mb-2">Content Marketing</h2>
              <p className="mb-4">
                Engaging and informative content that builds brand authority and attracts customers.
              </p>
              <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-light">Get your free proposal</button>
</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesnew;
