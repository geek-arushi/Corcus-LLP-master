import { Link } from "react-router-dom";
import parse from "html-react-parser";

const WhatWeDo = () => {
  const heading = {
    subtitle: "WHY services uS",
    title: "Use SEO to Drive Growth <br> at Your Business",
    content: "Pellentesque ut vehicula sapien <br> dictumst. Maecenas ante.",
  };

  const whyContent = [
    {
      img: "/assets/img/service/icon-1.png",
      title: "Digital Marketing",
      content: "Lorem dolor amet consectetur read adipiscing any more elit.",
    },
    {
      img: "/assets/img/service/icon-2.png",
      title: "SEO Analytics",
      content: "Lorem dolor amet consectetur read adipiscing any more elit.",
    },
    {
      img: "/assets/img/service/icon-3.png",
      title: "Social Marketing",
      content: "Lorem dolor amet consectetur read adipiscing any more elit.",
    },
  ];

  return (
    <section className="service-section fix section-padding">
      <div className="left-shape float-bob-y">
        <img src="/assets/img/service/left-shape.png" alt="img" />
      </div>
      <div className="right-shape">
        <img src="/assets/img/service/right-shape.png" alt="img" />
      </div>
      <div className="bg-shape">
        <img src="/assets/img/service/bg-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title wow fadeInUp">
              <span>{heading.subtitle}</span>
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {parse(heading.title)}
            </h2>
          </div>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            {parse(heading.content)}
          </p>
        </div>
        <div className="row">
          {whyContent.map((item, i) => (
            <div
              key={i}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <img src={item.img} alt="img" />
                </div>
                <div className="content">
                  <h4>
                    <Link to="/service/service-details">{item.title}</Link>
                  </h4>
                  <p>{item.content}</p>
                  <Link to="/service/service-details" className="link-btn">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
