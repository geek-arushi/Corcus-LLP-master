import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Servicesnew = () => {
  return (
    <div className="container my-4">
      <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-4">
        <h1 className="text-warning display-4 mb-2 mb-md-0 mr-md-4">Service</h1>
        <p className="lead">
          At our digital marketing agency, we offer a wide range of services to help businesses grow and achieve their goals. These services include:
        </p>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-2 border-gray-300 p-4 rounded-lg d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ml-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/5uc2fv4cxC3oMRHykdI7VJJacv3S8YMeW2wC8ijyjM8.jpg"
                alt="Illustration of a megaphone representing performance marketing"
                className="mb-4 mb-md-0"
                height="150"
                width="150"
              />
            </div>
            <div>
              <h2 className="h4 font-weight-bold mb-2">Performance Marketing</h2>
              <p className="mb-4">
                Contact us today to learn how our digital marketing services can help your business grow. Let's make things happen!
              </p>
              <button className="btn btn-dark">Get your free proposal</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 bg-dark text-white p-4 rounded-lg d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ml-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/wefXIsLvtycT9Shfxg11D22Abs3j0nT-IocQgusqGdc.jpg"
                alt="Illustration of a smartphone with social media icons representing social media marketing"
                className="mb-4 mb-md-0"
                height="150"
                width="150"
              />
            </div>
            <div>
              <h2 className="h4 font-weight-bold mb-2">Social Media Marketing</h2>
              <p className="mb-4">
                Strategic content creation and management across platforms to engage your audience.
              </p>
              <button className="btn btn-light">Get your free proposal</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 bg-dark text-white p-4 rounded-lg d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ml-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/FneCYJh2bfHp7NKk3XJ_68N5cX1tLoBynLFHRUSLCU4.jpg"
                alt="Illustration of a search engine optimization process"
                className="mb-4 mb-md-0"
                height="150"
                width="150"
              />
            </div>
            <div>
              <h2 className="h4 font-weight-bold mb-2">Search Engine Optimization</h2>
              <p className="mb-4">
                Improve your website's visibility and ranking on search engines.
              </p>
              <button className="btn btn-light">Get your free proposal</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-2 border-gray-300 p-4 rounded-lg d-flex flex-column flex-md-row align-items-center">
            <div className="order-md-2 ml-md-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/A7hl5keKixBkU8r1e9QbV1m8EPXUgwvb9WDPFSMjF_Y.jpg"
                alt="Illustration of content marketing elements"
                className="mb-4 mb-md-0"
                height="150"
                width="150"
              />
            </div>
            <div>
              <h2 className="h4 font-weight-bold mb-2">Content Marketing</h2>
              <p className="mb-4">
                Engaging and informative content that builds brand authority and attracts customers.
              </p>
              <button className="btn btn-dark">Get your free proposal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesnew;
