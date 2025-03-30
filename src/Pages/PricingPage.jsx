import BreadCumb from "../Components/Common/BreadCumb";
import Faq1 from "../Components/Faq/Faq1";
import Pricng2 from "../Components/Pricing/Pricng2";

const PricingPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Pricing"
            ></BreadCumb>   
            <Pricng2></Pricng2>
            <Faq1 addclass="faq-section section-padding pt-0"></Faq1>
        </div>
    );
};

export default PricingPage;