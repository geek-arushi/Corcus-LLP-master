import Blog3 from "../Components/Blog/Blog3";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogRightSidebar = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Blog Standard"
            ></BreadCumb> 
            <Blog3></Blog3>           
        </div>
    );
};

export default BlogRightSidebar;