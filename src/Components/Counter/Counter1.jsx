import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const Counter1 = () => {

    const counterContent = [
        {number:'20.5', title:'Projects Done'},
        {number:'100.5', title:'Happy Clients'},
        {number:'150.5', title:'Team Members'},
      ]; 

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
        <section className="cta-counter-section fix section-padding pt-0">
        <div className="bg-shape">
            <img src="/assets/img/bg-shape.png" alt="img" />
        </div>
        <div className="container">
            <div className="cta-counter-wrapper bg-cover" data-background="/assets/img/counter-bg.jpg" >
                <div className="shape-img">
                    <img src="/assets/img/counter-shape.png" alt="img" />
                </div>
                <div className="counter-box-area">
                {counterContent.map((item, i) => (
                    <div key={i} className="counter-text wow fadeInUp" data-wow-delay=".3s">
                        <h2>
                            <span className="count">{item.number}</span>K
                        </h2>
                        <p>{item.title}</p>
                    </div>
                    ))}

                    <Link to="/about" className="circle-button">
                    <i className="bi bi-arrow-up-right"></i>
                        <span className="text-circle">
                            <img src="/assets/img/text-circlw.png" alt="" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Counter1;