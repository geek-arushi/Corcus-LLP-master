import Internhero from "../Components/HeroBanner/Internhero";
import InternP from "../Components/InternPartner";
import InternshipDomains from "../Components/InternDom";
import CallToAction from "../Components/Internform";
import InternWhy from "../Components/InternWhy";
import WorkingProcess from "../Components/Internworking";
import MentorTeamBootstrap from "../Components/Internmentors";
import BenefitsSection from "../Components/Benifits";


const Intern = () => {
    return (
      <div>
        <Internhero></Internhero>
        <InternP></InternP>
        <InternshipDomains></InternshipDomains>
        {/* <CallToAction></CallToAction> */}
        <InternWhy></InternWhy>
        {/* <WorkingProcess></WorkingProcess> */}
        <MentorTeamBootstrap></MentorTeamBootstrap>
        <BenefitsSection></BenefitsSection>
        
      </div>
    );
  };
  
  export default Intern;