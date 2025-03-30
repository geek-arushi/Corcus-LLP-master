import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import parse from 'html-react-parser';

const WhatWeDo2 = () => {

    const chooseHeading = {
        subtitle:"WHY we do",
        title:' Use SEO to Drive Growth <br/> at Your Business',
        content:' The a long established fact that a reader will be <br/> distracted the readable content of page when <br/> looking at layout the point.', 
        img:'/assets/img/feature-img.png',           
      }

    const chooseContent = [
        {iconclass:'bi bi-people', title:'Better audiences', content:'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'},
        {iconclass:'bi bi-pie-chart', title:'Better Analytics', content:'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'},
        {iconclass:'bi bi-check-circle', title:'Better Output', content:'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'},
      ]; 

          useEffect(() => {
              loadBackgroudImages();
          }, []);

    return (
        <section className="feature-secton section-padding fix">
            <div className="bg-shape">
                <img src="/assets/img/bg-shape-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <div className="sub-title wow fadeInUp">
                            <span>{chooseHeading.subtitle}</span>
                        </div>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        {parse(chooseHeading.title)}
                        </h2>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                    {parse(chooseHeading.content)}
                    </p>
                </div>
                <div className="row">

                {chooseContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="feature-box-items">
                            <div className="icon">
                               <i className={item.iconclass}></i>
                            </div>
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>
                                {item.content}
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}

                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="feature-box-image bg-cover" data-background="/assets/img/feature-bg.jpg" >
                            <img src={chooseHeading.img} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo2;