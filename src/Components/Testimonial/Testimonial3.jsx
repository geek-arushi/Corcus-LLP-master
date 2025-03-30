import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Testimonial = () => {
  return (
    <div className="container py-5">
      <div className="text-left">
        <h1 className="display-4 text-muted">WHAT</h1>
        <h2 className="display-3 font-weight-bold text-dark">SETS US APART</h2>
        <div className="mt-4">
          <i className="fas fa-chevron-down text-muted"></i>
          <i className="fas fa-chevron-down text-muted ml-2"></i>
          <i className="fas fa-chevron-down text-warning ml-2"></i>
        </div>
      </div>
      <div className="row mt-5">
        {/* Image Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="https://storage.googleapis.com/a1aa/image/b3Vz1m7Gn0EhM3F76cskrnNsAvvBYAooV1bmnlBH0mI.jpg"
            alt="Placeholder image for the section"
            className="img-fluid"
          />
        </div>
        {/* Content Section */}
        <div className="col-lg-6">
          <div className="d-flex align-items-center mb-4">
            <div className="text-muted display-4">01</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/9ZqNSBt3oECYmUYDesZIM36AoeRPtgH-KYeGSYY2a8M.jpg"
              alt="Icon representing innovation-driven strategies"
              className="ml-4"
              width="40"
              height="40"
            />
            <div className="ml-4">
              <h3 className="h5 font-weight-bold">Innovation-Driven Strategies</h3>
              <p>We believe in staying ahead of the curve.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="text-muted display-4">02</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/AtJo7pNfsjd8A4DJMLCF7ZFn03dpM-V6XeyR-zgLYok.jpg"
              alt="Icon representing client-centric approach"
              className="ml-4"
              width="40"
              height="40"
            />
            <div className="ml-4">
              <h3 className="h5 font-weight-bold">Client-Centric Approach</h3>
              <p>Our clients are at the heart of everything we do.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="text-muted display-4">03</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/sEMFNr7IaSRRRL_igj1N1pKaiP-wQSEu4iKfXSlZFyU.jpg"
              alt="Icon representing industry expertise"
              className="ml-4"
              width="40"
              height="40"
            />
            <div className="ml-4">
              <h3 className="h5 font-weight-bold">Industry Expertise</h3>
              <p>Trust is the foundation of all successful partnerships.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="text-muted display-4">04</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/1VRK4AsD_Q0mpk6flDadeSnpuigkkjP8KHgmQd8T4kM.jpg"
              alt="Icon representing client-centric focus"
              className="ml-4"
              width="40"
              height="40"
            />
            <div className="ml-4">
              <h3 className="h5 font-weight-bold">Client-Centric Focus</h3>
              <p>Our mission is to generate measurable outcomes.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="text-muted display-4">05</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/4QPwVTyLY0P-zNbwLhz1XUbsx2-sYOGXeXfHScYTfao.jpg"
              alt="Icon representing collaboration and teamwork"
              className="ml-4"
              width="40"
              height="40"
            />
            <div className="ml-4">
              <h3 className="h5 font-weight-bold">Collaboration and Teamwork</h3>
              <p>Trust is the foundation of all successful partnerships.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
