import { useRef } from "react";
import Slider from "react-slick";

const Testimonial1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
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

    const testimonialContent = [
        {img:'/assets/img/testimonial/01.png', subtitle:'Nursing Assistant', title:'Esther Howard', content:'Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean'},
        {img:'/assets/img/testimonial/02.png', subtitle:'Nursing Assistant', title:'Courtney Henry', content:'Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean'},
      ]; 

    return (
        <section className="testimonial-section fix section-padding">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="section-title-area">
                        <div className="section-title">
                            <div className="sub-title bg-color-2 wow fadeInUp">
                                <span>TESTIMONILAS</span>
                            </div>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                What our awesome <br/> customers say
                            </h2>
                        </div>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                            The a long established fact that a reader will be distracted <br/> the readable content of page when looking at layout the <br/> point of using lorem Ipsum
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-2 col-lg-4">
                            <div className="testimonial-left wow fadeInUp" data-wow-delay=".3s">
                                <div className="client-img">
                                    <img src="/assets/img/testimonial/10.png" alt="img" />
                                    <div className="content">
                                        <div className="star">
                                        <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                        </div>
                                        <p>15k+(reviews)</p>
                                    </div>
                                </div>
                                <div className="array-button wow fadeInUp" data-wow-delay=".5s">
                                    <button onClick={previous} className="array-prev"><i className="bi bi-arrow-left"></i></button>
                                    <button onClick={next} className="array-next"><i className="bi bi-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-8">
                            <div className="swiper testimonial-slider">
                                <div className="swiper-wrapper cs_slider_gap_30">
                                <Slider ref={sliderRef} {...settings}>
                                {testimonialContent.map((item, i) => (
                                    <div key={i} className="swiper-slide">
                                        <div className="testimonial-box-items">
                                            <div className="icon">
                                                <img src="/assets/img/testimonial/icon.png" alt="img" />
                                            </div>
                                            <div className="testimonial-img">
                                                <img src={item.img} alt="img" />
                                                <div className="shape-img">
                                                    <img src="/assets/img/testimonial/shape.png" alt="img" />
                                                </div>
                                            </div>
                                            <div className="content">
                                               <div className="client-info">
                                                    <div className="star">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <span>{item.subtitle}</span>
                                               </div>
                                               <p>
                                               {item.content}
                                               </p>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                    </Slider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial1;