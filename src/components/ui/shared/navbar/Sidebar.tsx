import Logo from "./Logo";
import NavList from "@/components/ui/shared/navbar/NavList";
import { ListItem } from "@/constants/Constants";

const Sidebar = () => {
  return (
    <div className="min-h-full bg- px-5 py-10 w-64 md:w-72 lg:w-80 bg-gray-900">
      <div className="bgShadow"></div>
      <div className=" min-h-[90vh] rounded-lg py-4 lg:py-0">
        <div className="lg:hidden px-4 flex justify-center">
          <Logo />
        </div>
        <NavList Lists={ListItem} />
        
      </div>
    </div>
  );
};

export default Sidebar;
