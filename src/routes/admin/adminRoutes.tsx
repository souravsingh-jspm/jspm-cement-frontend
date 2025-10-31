import AdminLayout from "@/common/layout/AdminLayout";
import { adminLandingRoutes } from "./adminRouteList";

const routes = [
  {
    element: <AdminLayout />,
    children: adminLandingRoutes,
  },
];

export default routes;
