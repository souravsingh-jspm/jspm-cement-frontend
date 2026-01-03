import ImportantDatePage from "@/pages/Admin/ImportantDate/ImportantDate";
import { SignIn } from "./adminLazyLoaded";
import { FRONTEND_ROUTES } from "@/constants/routeConstants";

export const adminLandingRoutes = [
  {
    path: FRONTEND_ROUTES.LOGIN,
    element: <SignIn />,
  },
  {
    path: FRONTEND_ROUTES.IMPORTANT_DATES,
    element: <ImportantDatePage />,
  },
];
