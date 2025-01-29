import { Children } from "@/types";
import Sidebar from "./navbar/Sidebar";

const MainLayout = ({ children }: Children) => {
  return (
    <div className="md:py-5">
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content min-h-screen">
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <Sidebar />{" "}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
