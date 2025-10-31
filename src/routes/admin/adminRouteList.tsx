import { SignIn } from "./adminLazyLoaded";
import { FRONTEND_ROUTES } from "@/constants/routeConstants";

export const adminLandingRoutes = [
  {
    path: FRONTEND_ROUTES.LOGIN,
    element: <SignIn />,
  },
];
