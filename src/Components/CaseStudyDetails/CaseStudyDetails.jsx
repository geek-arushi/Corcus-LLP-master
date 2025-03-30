const CaseStudyDetails = () => {
  return (
    <section className="project-details-section fix section-padding">
      <div className="container">
        <div className="project-details-wrapper">
          <div className="project-details-items">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="details-top-items">
                  <div className="details-left">
                    <h2>Building digital products end to end</h2>
                    <ul className="post-cat">
                      <li>
                        <a href="project-details.html">Creative</a>
                      </li>
                      <li>
                        <a href="project-details.html">Branding</a>
                      </li>
                      <li>
                        <a href="project-details.html">Analytics</a>
                      </li>
                      <li>
                        <a href="project-details.html">Audience</a>
                      </li>
                    </ul>
                  </div>
                  <div className="details-right">
                    <ul className="client-details">
                      <li>
                        Client: <span>David Martin</span>
                      </li>
                      <li>
                        Year: <span>2024</span>
                      </li>
                      <li>
                        Author: <span>Robart Mory</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-details-content">
            <h3>Overview</h3>
            <div className="row g-4">
              <div className="col-lg-7">
                <p>
                  Nam posuere mauris enim, quis pretium elit placerat id. Fusce
                  egestas nisi vel ipsum vehicula facilisis. In pulvinar
                  imperdiet venenatis. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos.
                </p>
              </div>
              <div className="col-lg-5">
                <p>
                  Fusce egestas nisi vel ipsum vehicula facilisis. In pulvinar
                  imperdiet venenatis. Donec eu pulvinar lorem. Etiam vestibulum
                  ligula quis nisl feugiat, consectetur placerat augue
                  vestibulum.
                </p>
              </div>
            </div>
            <h3 className="mt-5">Final Results of the Project</h3>
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="list-items">
                  <ul>
                    <li>
                      <span>Consectetur placerat augue vestibulum</span>
                    </li>
                    <li>
                      <span>Mauris tincidunt a eget facilisis Quisque</span>
                    </li>
                    <li>
                      <span>Lorem ipsum dolor sit amet, consectetur</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span>Adipiscing elit Etiam aliquam, enim vitae</span>
                    </li>
                    <li>
                      <span>Donec at augue ante Nam posuere mauris</span>
                    </li>
                    <li>
                      <span>Quis pretium elit placerat id Fusce egestas</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="progress-area">
                  <div className="progress-wrap">
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Branding Design</h6>
                        <span className="point">86%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value"></div>
                      </div>
                    </div>
                    <div className="pro-items">
                      <div className="pro-head">
                        <h6 className="title">Business</h6>
                        <span className="point">96%</span>
                      </div>
                      <div className="progress">
                        <div className="progress-value style-two"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 mt-4">
              <div className="col-md-6">
                <div className="details-image">
                  <img
                    src="/assets/img/case-studies/details-1.jpg"
                    alt="Case study details - image 1"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="details-image">
                  <img
                    src="/assets/img/case-studies/details-2.jpg"
                    alt="Case study details - image 2"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="slider-button d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              <button className="cmn-prev cmn-border d-center">
                <i className="bi bi-chevron-left"></i>
              </button>
              <span className="fw-bold white-clr previous-text text-capitalize">
                Previous
              </span>
            </div>
            <div className="d-flex align-items-center gap-xxl-4 gap-3 gap-2">
              <span className="fw-bold white-clr previous-text text-capitalize">
                Next
              </span>
              <button className="cmn-next cmn-border d-center">
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudyDetails;
