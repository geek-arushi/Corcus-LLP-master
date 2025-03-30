import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router-dom";

const BreadCumb = ({ Title, bgimg }) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="breadcrumb-wrapper bg-cover" data-background={bgimg}>
      <div className="container">
        <div className="page-heading">
          <div className="breadcrumb-sub-title">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              {Title}
            </h1>
          </div>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i>
            </li>
            <li>{Title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
