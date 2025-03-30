import { useEffect } from "react";
import Slider from "react-slick";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const About1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const brandContent = [
    { img: "./assets/img/brand/01.png" },
    { img: "./assets/img/brand/02.png" },
    { img: "./assets/img/brand/03.png" },
    { img: "./assets/img/brand/04.png" },
  ];

  const aboutContent = {
    bg: "./assets/img/about/about-bg.png",
    img: "./assets/img/about/01.png",
    subtitle: "ABOUT COMPANY",
    title: "Skills to improve Your Company Brand",
    content:
      "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point established fact that",
    number1: "65%",
    content2: "Paid search <br> marketing",
    number2: "95%",
    content3: "Search engine <br> optimization",
  };

  return (
    <section
      className="about-section fix section-padding"
      data-background={aboutContent.bg}
    >
      <div className="left-shape float-bob-y">
        <img src="./assets/img/about/left-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="brand-wrapper">
          <h4 className="brand-title">1k + Brands Trust Us</h4>
          <div className="swiper brand-slider">
            <div className="swiper-wrapper cs_slider_gap_30">
              <Slider {...settings}>
                {brandContent.map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="brand-img center">
                      <img src={item.img} alt="img" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="about-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src={aboutContent.img}
                  alt="img"
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                />
                <div className="bg-shape">
                  <img src="./assets/img/about/bg-shape.png" alt="img" />
                </div>
                <div className="grap-shape float-bob-x">
                  <img src="./assets/img/about/grap.png" alt="img" />
                </div>
                <div className="box-shape float-bob-y">
                  <img src="./assets/img/about/box-shape.png" alt="img" />
                </div>
                <div className="emoji-shape">
                  <img src="./assets/img/about/emoji.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>{aboutContent.subtitle}</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {aboutContent.title}
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {aboutContent.content}
                </p>
                <div className="circle-progress-bar-wrapper">
                  <div
                    className="single-circle-bar wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="circle-bar" data-duration="2000">
                      <div className="circle-border-area">
                        <span>{aboutContent.number1}</span>
                      </div>
                    </div>
                    <div className="content">
                      <h6>{parse(aboutContent.content2)}</h6>
                    </div>
                  </div>
                  <div
                    className="single-circle-bar wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="circle-bar" data-duration="2000">
                      <div className="circle-border-area">
                        <span>{aboutContent.number2}</span>
                      </div>
                    </div>
                    <div className="content">
                      <h6>{parse(aboutContent.content3)}</h6>
                    </div>
                  </div>
                </div>
                <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                  <Link to="/about">
                    {" "}
                    <span className="theme-btn"> EXPLORE MORE </span>
                    <span className="arrow-btn">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About1;
