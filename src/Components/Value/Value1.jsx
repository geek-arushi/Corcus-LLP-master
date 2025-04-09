import "bootstrap/dist/css/bootstrap.min.css";

const Value1 = () => {
  const chooseContent = [
    {
      iconclass: "bi bi-people",
      title: "Integrity",
      content:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
    },
    {
      iconclass: "bi bi-pie-chart",
      title: "Simplicity",
      content:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
    },
    {
      iconclass: "bi bi-cloudy",
      title: "Performance",
      content:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
    },
    {
      iconclass: "bi bi-check-circle",
      title: "Innovation",
      content:
        "Collaboratively formulate principle capital. Progressively evolve user revolutionary hosting services.",
    },
  ];

  return (
    <section className="value-section fix section-padding pt-0">
      <div className="container">
        {/* Stroke Title */}
        <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
          <h1
            className="display-3 fw-bold stroke-text"
            style={{
              WebkitTextStroke: "2px black",
              color: "transparent",
              fontWeight: 900,
            }}
          >
            Our Values
          </h1>
        </div>

        {/* Value Cards */}
        <div className="row">
          {chooseContent.map((item, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="value-box-items text-center">
                <div className="icon mb-3">
                  <i className={item.iconclass}></i>
                </div>
                <div className="content">
                  <h3 className="title">{item.title}</h3>
                  <p className="text">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx="true">{`
        .stroke-text {
          -webkit-text-stroke: 2px black;
          color: transparent;
        }

        .icon {
          font-size: 2.5rem;
          color: black;
          transition: color 0.3s ease;
        }

        .value-box-items {
          padding: 20px;
          border: 1px solid #eee;
          border-radius: 8px;
          background-color: #fff;
          height: 100%;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .value-box-items h3.title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 10px;
          color: black;
          transition: color 0.3s ease;
        }

        .value-box-items p.text {
          font-size: 0.95rem;
          color: #555;
          transition: color 0.3s ease;
        }

        /* Hover Effects */
        .value-box-items:hover {
          background-color: black;
        }

        .value-box-items:hover .icon {
          color: black;
        }

        .value-box-items:hover h3.title,
        .value-box-items:hover p.text {
          color: white;
        }
      `}</style>
    </section>
  );
};

export default Value1;
