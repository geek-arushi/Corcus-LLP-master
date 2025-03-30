import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";

const HeroBanner1 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

      const heroContent = {
        bg:'/assets/img/hero/hero-bg.jpg',  
        subtitle:"go for advertising",
        title:'think digital',
        content:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or  randomised',
        content2:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.',
        img:'/assets/img/hero/hero-text.png',   
        reviewlogo:'/assets/img/hero/logo.png',   
        reviewimg:'/assets/img/hero/client.png',   
        review:'450+ reviews',             
      }

    return (
        <section className="hero-section fix hero-1 bg-cover" data-background={heroContent.bg} >
        <div className="mike-shape">
            <img src="/assets/img/hero/mike-shape.png" alt="img" />
        </div>
        <div className="arrow-shape">
            <img src="/assets/img/hero/arrow-shape.png" alt="img" />
        </div>
        <div className="arrow-shape-2">
            <img src="/assets/img/hero/arrow-shape.png" alt="img" />
        </div>
        <div className="energy-shape float-bob-y">
            <img src="/assets/img/hero/energy-shape.png" alt="img" />
        </div>
        <div className="rocket-shape">
            <img src="/assets/img/hero/rocket.png" alt="img" className="float-bob-y" />
        </div>
        <div className="container-fluid">
            <div className="hero-title wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <img src={heroContent.img} alt="img" />      
            </div>
            <div className="row g-4 align-items-center">
                <div className="col-xl-5 col-lg-6">
                    <div className="hero-content">
                        <span className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.2s">{heroContent.subtitle}</span>
                        <h1 className="wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.2s">{heroContent.title}</h1>
                        <p className="wow fadeInUp" data-wow-delay=".3s">
                        {heroContent.content}
                        </p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="hero-image">
                        <img src="/assets/img/hero/hero-image.png" alt="img" className=" wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                        <div className="bg-shape">
                            <img src="/assets/img/hero/bg-shape.png" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                    <div className="video-right">
                        <a onClick={handelClick} className="video-btn video-popup wow fadeInUp" data-wow-delay=".3s">
                        <i className="bi bi-play-fill"></i>
                            <img src="/assets/img/hero/text-circle.png" alt="img" />
                        </a>
                        <p className="wow fadeInUp" data-wow-delay=".5s">
                        {heroContent.content2}
                        </p>
                        <div className="client-items wow fadeInUp" data-wow-delay=".7s">
                            <div className="client-logo">
                                <img src={heroContent.reviewlogo} alt="img" />
                            </div>
                            <div className="client-img">
                                <img src={heroContent.reviewimg} alt="img" />
                                <div className="star-icon">
                                    <div className="star">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-regular fa-star"></i>
                                    </div>
                                    <span>{heroContent.review}</span>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default HeroBanner1;