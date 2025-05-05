import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Import Poppins font via CSS-in-JSX
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const Card = ({
  bgColor,
  border,
  textColor,
  arrowBg,
  titleLines,
  imgSrc,
  imgAlt,
}) => {
  return (
    <div
      className={`card-custom ${border ? "" : "no-border"}`}
      style={{
        backgroundColor: bgColor,
        borderColor: border ? "rgba(0,0,0,0.3)" : "transparent",
        color: textColor,
      }}
    >
      <div>
        {titleLines.map(({ text, highlightBg, highlightColor }, i) => (
          <p
            key={i}
            className={`card-text-highlight ${
              highlightBg === "yellow"
                ? "yellow-bg"
                : highlightBg === "white"
                ? "white-bg"
                : ""
            }`}
            style={{ color: highlightColor }}
          >
            {text}
          </p>
        ))}
        <div className="d-flex align-items-center mt-3">
          <span
            className={`arrow-circle ${
              arrowBg === "black"
                ? "arrow-black-yellow"
                : "arrow-yellow-black"
            }`}
          >
            <i className="fas fa-arrow-right"></i>
          </span>
          <span className="learn-more ms-2" style={{ color: textColor }}>
            Learn more
          </span>
        </div>
      </div>
      <img
        src={imgSrc}
        alt={imgAlt}
        width="120"
        height="80"
        className="img-fluid"
      />
      <style jsx>{`
        .card-custom {
          border-radius: 1rem;
          border: 1px solid rgba(0, 0, 0, 0.3);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 120px;
          font-family: "Poppins", sans-serif;
        }
        .no-border {
          border: none !important;
        }
        .card-text-highlight {
          font-weight: 700;
          font-size: 0.75rem;
          line-height: 1;
          margin-bottom: 0.2rem;
          display: inline-block;
          padding: 0.15rem 0.5rem;
          border-radius: 0.25rem;
        }
        .yellow-bg {
          background-color: #ffb800;
        }
        .white-bg {
          background-color: white;
        }
        .arrow-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.75rem;
        }
        .arrow-black-yellow {
          background-color: black;
          color: #ffb800;
        }
        .arrow-yellow-black {
          background-color: #ffb800;
          color: black;
        }
        .learn-more {
          font-size: 0.75rem;
        }

        @media (max-width: 576px) {
          .card-custom {
            flex-direction: column;
            min-height: auto;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

const InternshipDomains = () => {
  return (
    <div
      className="container py-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="d-flex flex-column flex-sm-row align-items-center mb-4 gap-3">
        <h1
          className="highlight-bg mb-0"
          style={{
            fontSize: "1.125rem",
            fontWeight: "400",
            backgroundColor: "#FFB800",
            borderRadius: "0.25rem",
            padding: "0.15rem 0.5rem",
            display: "inline-block",
          }}
        >
          Internship Domains
        </h1>
        <p className="mb-0" style={{ fontSize: "0.75rem", maxWidth: "600px" }}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="row g-3">
        <div className="col-12 col-sm-6">
          <Card
            bgColor="#E6E6E6"
            border={true}
            textColor="black"
            arrowBg="black"
            titleLines={[
              {
                text: "BEGINER",
                highlightBg: "yellow",
                highlightColor: "black",
              },
              {
                text: "WEB DEVELOPER",
                highlightBg: "yellow",
                highlightColor: "black",
              },
            ]}
            imgSrc="https://storage.googleapis.com/a1aa/image/dbefc5ff-7dec-4dee-09d3-a0510632d962.jpg"
            imgAlt="Line art style tech icons"
          />
        </div>
        <div className="col-12 col-sm-6">
          <Card
            bgColor="#FFB800"
            border={false}
            textColor="black"
            arrowBg="black"
            titleLines={[
              {
                text: "INTERMEDIATE",
                highlightBg: "white",
                highlightColor: "black",
              },
              {
                text: "WEB DEVELOPER",
                highlightBg: "white",
                highlightColor: "black",
              },
            ]}
            imgSrc="https://storage.googleapis.com/a1aa/image/c571360d-ae3f-4526-91e3-62d79af9b8f0.jpg"
            imgAlt="Browser with cursor click"
          />
        </div>
        <div className="col-12 col-sm-6">
          <Card
            bgColor="#12181F"
            border={false}
            textColor="white"
            arrowBg="yellow"
            titleLines={[
              {
                text: "WORDPRESS",
                highlightBg: "white",
                highlightColor: "black",
              },
              {
                text: "DEVELOPER",
                highlightBg: "white",
                highlightColor: "black",
              },
            ]}
            imgSrc="https://storage.googleapis.com/a1aa/image/bb6e0296-d87a-4421-1d25-9cbfd04c5076.jpg"
            imgAlt="WordPress developer"
          />
        </div>
        <div className="col-12 col-sm-6">
          <Card
            bgColor="#E6E6E6"
            border={true}
            textColor="black"
            arrowBg="black"
            titleLines={[
              {
                text: "SHOPIFY",
                highlightBg: "yellow",
                highlightColor: "black",
              },
              {
                text: "ECOMERCE",
                highlightBg: "yellow",
                highlightColor: "black",
              },
            ]}
            imgSrc="https://storage.googleapis.com/a1aa/image/39a012a1-327f-49d7-12a8-67f62cfbb23f.jpg"
            imgAlt="Shopify ecommerce"
          />
        </div>
        <div className="col-12 col-sm-6">
          <Card
            bgColor="#12181F"
            border={false}
            textColor="white"
            arrowBg="yellow"
            titleLines={[
              {
                text: "WORDPRESS",
                highlightBg: "white",
                highlightColor: "black",
              },
              {
                text: "DEVELOPER",
                highlightBg: "white",
                highlightColor: "black",
              },
            ]}
            imgSrc="https://storage.googleapis.com/a1aa/image/bb6e0296-d87a-4421-1d25-9cbfd04c5076.jpg"
            imgAlt="WordPress developer"
          />
          </div>
          <div className="col-12 col-sm-6">
          <Card
            bgColor="#12181F"
            border={false}
            textColor="white"
            arrowBg="yellow"
            titleLines={[
              {
                text: "WORDPRESS",
                highlightBg: "white",
                highlightColor: "black",
              },
              {
                text: "DEVELOPER",
                highlightBg: "white",
                highlightColor: "black",
              },
            ]}
            imgSrc="https://storage.googleapis.com/a1aa/image/bb6e0296-d87a-4421-1d25-9cbfd04c5076.jpg"
            imgAlt="WordPress developer"
          />
          </div>
      </div>
    </div>
  );
};

export default InternshipDomains;
