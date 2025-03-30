import { useEffect, useRef } from "react";
import Slider from "react-slick";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Testimonial2 = () => {

    const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 4000,        
            responsive: [
              {
                breakpoint: 1399,
                settings: {
                  slidesToShow: 1,
                }
              },
              {
                breakpoint: 1199,
                settings: {
                  slidesToShow: 1,
                }
              },{
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]
          };  
    
          const sliderRef = useRef(null);
    
          const next = () => {
            sliderRef.current.slickNext();
          };
        
          const previous = () => {
            sliderRef.current.slickPrev();
          }; 

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    const testimonialContent = [
        {img:'/assets/img/testimonial/04.png', subtitle:'Web Designer', title:'Kathryn Murphy', content:'There are many variations of passages of the Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.'},
        {img:'/assets/img/testimonial/04.png', subtitle:'Web Designer', title:'Kathryn Murphy', content:'There are many variations of passages of the Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.'},
      ]; 

    return (
        <section className="testimonial-section fix section-padding pt-0 bg-cover" data-background="/assets/img/testimonial/testimonial-bg.jpg">
            <div className="container">
                <div className="testimonial-wrapper-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="testimonial-image">
                                <img src="/assets/img/testimonial/03.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                                <div className="rocket-shape">
                                    <img src="/assets/img/testimonial/rocket.png" alt="img" />
                                </div>
                                <div className="msg-shape float-bob-y">
                                    <img src="/assets/img/testimonial/msg.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title">
                                    <div className="sub-title bg-color-2 wow fadeInUp">
                                        <span>TESTIMONILAS</span>
                                    </div>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Your Marketing Solutions
                                        Happy Clients Says?
                                    </h2>
                                </div>
                                <div className="swiper testimonial-slider-3">
                                    <div className="swiper-wrapper">
                                    <Slider ref={sliderRef} {...settings}>
                                    {testimonialContent.map((item, i) => (
                                        <div key={i} className="swiper-slide">
                                            <div className="testimonial-card-items">
                                                <div className="client-info">
                                                    <div className="client-img">
                                                        <img src={item.img} alt="img" />
                                                    </div>
                                                    <div className="client-content">
                                                        <h5>{item.title}</h5>
                                                        <span>{item.subtitle}</span>
                                                    </div>
                                                </div>
                                                <p>
                                                {item.content}
                                                </p>
                                                <div className="icon">
                                                    <img src="/assets/img/testimonial/icon.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </Slider>

                                    </div>
                                </div>
                                <div className="array-button">
                                    <button onClick={previous} className="array-prev"><i className="bi bi-arrow-up"></i></button>
                                    <button onClick={next} className="array-next"><i className="bi bi-arrow-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial2;