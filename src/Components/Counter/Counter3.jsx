import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";

const Counter3 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);
    
           const [iframeSrc, setIframeSrc] = useState('about:blank');
          const [toggle, setToggle] = useState(false);
        
          const handelClick = () => {
            setIframeSrc("http://www.youtube.com/embed/NSKCh9yhZxk?si=WvnWUEwS0SGhnzKg");
            setToggle(!toggle);
          };
          const handelClose = () => {
            setIframeSrc('about:blank');
            setToggle(!toggle);
          }; 

    return (
        <section className="cta-counter-section-3 fix section-padding bg-cover" data-background="/assets/img/cta-counter-bg.jpg">
        <div className="container">
            <div className="cta-counter-wrapper-2">
                <div className="section-title-area">
                    <div className="section-title">
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                        About Us
                        </h2>
                        <p className="text-white wow fadeInUp" data-wow-delay=".3s">
                        At Corcus, we are a performance-driven digital marketing company dedicated to delivering measurable results and real business growth. Established in 2020, Corcus was built on a foundation of over 10 years of collective industry experience brought in by our expert team.
                        </p>
                        <p className="text-white wow fadeInUp" data-wow-delay=".3s">
                        From startups to well-established brands, we partner with businesses to craft data-backed strategies that drive traffic, generate leads, and boost ROI. We don’t just run ads—we create performance engines tailored to your unique goals.
                        </p>
                        <p className="text-white wow fadeInUp" data-wow-delay=".3s">
                        Our team of seasoned marketers, creatives, and strategists are passionate about staying ahead of trends, understanding audiences, and executing campaigns that convert. Whether it’s social media marketing, paid ads, SEO, content creation, or full-funnel growth strategies—we focus on what matters: your results.
                        </p>
                        <p className="text-white wow fadeInUp" data-wow-delay=".3s">
                        Join us on the journey to transform clicks into customers and ideas into impact.
                        Corcus — Where Strategy Meets Performance.
                        </p>
                    </div>
                </div>
                <div className="cta-video-image wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                    <img src="/assets/img/cta-video.jpg" alt="img" />
                    <a onClick={handelClick}  className="video-icon video-popup">
                        <i className="bi bi-play-fill"></i>
                    </a>
                </div>
            </div>
        </div>
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>         
    </section>
    );
};

export default Counter3;