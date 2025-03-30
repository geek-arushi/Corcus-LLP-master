import BreadCumb from "../Components/Common/BreadCumb";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";

const ServiceDetailsPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Service Details"
            ></BreadCumb>  
            <ServiceDetails></ServiceDetails>       
        </div>
    );
};

export default ServiceDetailsPage;