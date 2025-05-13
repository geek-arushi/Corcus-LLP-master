import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Counter3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
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
              <a onClick={handleClick} className="video-icon video-popup" role="button">
                <i className="bi bi-play-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Fixed-size Video Modal */}
        {toggle && (
          <div className="video-modal-overlay">
            <div className="video-fixed-box">
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/NSKCh9yhZxk?si=GRy2z3GuiGvhwcOm"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <button onClick={handleClose} className="close-btn">✖</button>
            </div>
          </div>
        )}

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

          .video-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          .video-fixed-box {
            position: relative;
            width: 640px;
            height: 360px;
            background: #000;
          }

          .video-fixed-box iframe {
            width: 640px;
            height: 360px;
            border: none;
            display: block;
          }

          .close-btn {
            position: absolute;
            top: -40px;
            right: 0;
            background: #fff;
            border: none;
            padding: 5px 12px;
            border-radius: 4px;
            font-size: 20px;
            cursor: pointer;
          }
        `}</style>
      </section>
    </>
  );
};

export default Counter3;