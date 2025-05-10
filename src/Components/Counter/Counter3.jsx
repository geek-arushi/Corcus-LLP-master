import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";

const Counter3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://youtu.be/NSKCh9yhZxk?si=aBriTfUuBwCyJaVd");
    setToggle(true);
  };

  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  return (
    <section
      className="cta-counter-section-3 fix section-padding bg-cover"
      data-background="/assets/img/cta-counter-bg.jpg"
    >
      <div className="container">
        <div className="cta-counter-wrapper-2">
          <div className="section-title-area">
            <div className="section-title">
              <p className="text-white compact-text wow fadeInUp" data-wow-delay=".3s">
                At Corcus, we are a performance-driven digital marketing company dedicated to delivering measurable results and real business growth. Established in 2020, Corcus was built on a foundation of over 10 years of collective industry experience brought in by our expert team. From startups to well-established brands, we partner with businesses to craft data-backed strategies that drive traffic, generate leads, and boost ROI. We don’t just run ads—we create performance engines tailored to your unique goals. Our team of seasoned marketers, creatives, and strategists are passionate about staying ahead of trends, understanding audiences, and executing campaigns that convert. Whether it’s social media marketing, paid ads, SEO, content creation, or full-funnel growth strategies—we focus on what matters: your results. Join us on the journey to transform clicks into customers and ideas into impact. Corcus — Where Strategy Meets Performance.
              </p>
            </div>
          </div>
          <div
            className="cta-video-image wow img-custom-anim-left"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <img src="/assets/img/cta-video.jpg" alt="img" />
            <a onClick={handelClick} className="video-icon video-popup" role="button">
              <i className="bi bi-play-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />

      <style jsx="true">{`
        .compact-text {
          font-size: 13px;
          line-height: 1.4;
          max-width: 100%;
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .compact-text {
            font-size: 12px;
            line-height: 1.3;
          }
        }
      `}</style>
    </section>
  );
};

export default Counter3;
