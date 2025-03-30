import BreadCumb from "../Components/Common/BreadCumb";
import Faq1 from "../Components/Faq/Faq1";

const FaqPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Faq"
            ></BreadCumb>   
            <Faq1 addclass="faq-section section-padding"></Faq1>        
        </div>
    );
};

export default FaqPage;