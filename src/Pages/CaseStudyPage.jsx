import CaseStudy3 from "../Components/CaseStudy/CaseStudy3";
import BreadCumb from "../Components/Common/BreadCumb";

const CaseStudyPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Case studies"
            ></BreadCumb>       
            <CaseStudy3></CaseStudy3>      
        </div>
    );
};

export default CaseStudyPage;