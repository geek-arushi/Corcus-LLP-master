import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MakeThings = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container">
        <div className="bg-light rounded-3 p-4 p-md-5 d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">Let's make things happen</h2>
            <p className="text-secondary mb-4">
              Contact us today to learn more about how our digital
              marketing services can help your business grow and
              succeed online.
            </p>
            <button
              className="theme-btn btn btn-dark rounded-2 px-4 py-2 career-btn"
              type="button"
            >
              Get your profesnall career
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <div className="position-relative">
              <div className="position-absolute" style={{ top: "-20px", right: "-20px" }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0L48.9 31.1L80 40L48.9 48.9L40 80L31.1 48.9L0 40L31.1 31.1L40 0Z" fill="white" stroke="black" strokeWidth="1"/>
                </svg>
              </div>
              <div className="rounded-circle bg-black" style={{ width: "80px", height: "80px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div className="rounded-circle bg-white" style={{ width: "40px", height: "40px" }}></div>
              </div>
              <div className="position-absolute" style={{ bottom: "-30px", left: "-30px" }}>
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 0L60 30L30 60L0 30L30 0Z" fill="#FFD700"/>
                </svg>
              </div>
              <div className="position-absolute" style={{ bottom: "20px", right: "-40px" }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="#C0C0C0"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for button hover effect */}
      <style jsx="true">{`
        .career-btn {
          transition: all 0.3s ease;
        }
        .career-btn:hover {
          background-color: #FFBF00 !important;
          border-color: #FFBF00 !important;
          color: black !important;
        }
      `}</style>
    </section>
  );
};

export default MakeThings;