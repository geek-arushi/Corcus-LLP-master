
const Value1 = () => {

    const chooseContent = [
        {iconclass:'bi bi-people', title:'Integrity', content:'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'},
        {iconclass:'bi bi-pie-chart', title:'Simplicity', content:'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'},
        {iconclass:'bi bi-cloudy', title:'Performance', content:'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'},
        {iconclass:'bi bi-check-circle', title:'Integrity', content:'Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.'},
      ]; 

    return (
        <section className="value-section fix section-padding  pt-0">
        <div className="value-shape">
            <img src="/assets/img/value-shape.png" alt="img" />
        </div>
        <div className="value-shape-2">
            <img src="/assets/img/value-shape-2.png" alt="img" />
        </div>
        <div className="container">
            <div className="section-title text-center wow fadeInUp" data-wow-delay=".3s">
                <h2>Our values</h2>
            </div>
            <div className="row">
            {chooseContent.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="value-box-items">
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


            </div>
        </div>
    </section>
    );
};

export default Value1;