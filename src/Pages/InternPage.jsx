import Internhero from "../Components/HeroBanner/Internhero";
import InternP from "../Components/InternPartner";
import CallToAction from "../Components/Internform";
import InternWhy from "../Components/InternWhy";
import WorkingProcess from "../Components/Internworking";
import MentorTeamBootstrap from "../Components/Internmentors";
import BenefitsSection from "../Components/Benifits";
import MakeThings from "../Components/Make things";
import ContactForm from "../Components/contactForm";
import InternS from "../Components/InternServices";


const Intern = () => {
    return (
      <div>
        <Internhero></Internhero>
        <InternP></InternP>
        <InternS></InternS>
        < MakeThings></MakeThings>
        {/* <CallToAction></CallToAction> */}
        <InternWhy></InternWhy>
        {/* <WorkingProcess></WorkingProcess> */}
        <MentorTeamBootstrap></MentorTeamBootstrap>
        <BenefitsSection></BenefitsSection>
        <ContactForm></ContactForm>
        
      </div>
    );
  };
  
  export default Intern;