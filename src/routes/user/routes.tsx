import LandingLayout from "@/common/layout/landing/LandingLayout";
import { landingRoutes } from "./routeList";
import { SignIn } from "../admin/adminLazyLoaded";
import { FRONTEND_ROUTES } from "@/constants/routeConstants";

const routes = [
  {
    element: <LandingLayout />,
    children: landingRoutes,
  },
  {
    path: FRONTEND_ROUTES.LOGIN,
    element: <SignIn />,
  },
];

export default routes;
