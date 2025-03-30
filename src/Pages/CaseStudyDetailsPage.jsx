import CaseStudyDetails from "../Components/CaseStudyDetails/CaseStudyDetails";
import BreadCumb from "../Components/Common/BreadCumb";

const CaseStudyDetailsPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Case study Details"
            ></BreadCumb>  
            <CaseStudyDetails></CaseStudyDetails>           
        </div>
    );
};

export default CaseStudyDetailsPage;