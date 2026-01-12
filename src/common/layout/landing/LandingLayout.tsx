import { Outlet } from "react-router-dom";
import LandingFoot from "./LandingFooter";
import LandingNav from "./LandingNav";

const LandingLayout = () => {
  return (
    <div>
      <LandingNav />
      <Outlet />
      <LandingFoot />
    </div>
  );
};

export default LandingLayout;