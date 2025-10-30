import { SignIn, KeynoteSpeaker } from "./adminLazyLoaded";
import { FRONTEND_ROUTES } from "@/constants/routeConstants";

export const adminLandingRoutes = [
  {
    path: FRONTEND_ROUTES.LOGIN,
    element: <SignIn />,
  },
  {
    path: FRONTEND_ROUTES.KEYNOTE_SPEAKERS,
    element: <KeynoteSpeaker />,
  },
];
