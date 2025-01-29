import {
  companyList,
  helpList,
  linkList,
  ResourcesList,
} from "@/constants/Constants";
import FooterLIst from "./FooterLIst";

const Footer = () => {
  return (
    <div className="CContainer">
      <div className="py-20 flex justify-between items-start flex-wrap gap-6">
        <FooterLIst lists={companyList} title="Company" />
        <FooterLIst lists={helpList} title="Help" />
        <FooterLIst lists={ResourcesList} title="Resources" />
        <FooterLIst lists={linkList} title="Links" />
      </div>
    </div>
  );
};

export default Footer;
