import LandingLayout from "@/common/layout/landing/LandingLayout";
import { landingRoutes } from "./routeList";

const routes = [
  {
    element: <LandingLayout />,
    children: landingRoutes,
  },
];

export default routes;
