import LandingLayout from "@/common/layout/AdminLayout";
import { adminLandingRoutes } from "./adminRouteList";

const routes = [
  {
    element: <LandingLayout />,
    children: adminLandingRoutes,
  },
];

export default routes;
