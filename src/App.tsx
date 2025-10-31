import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/user/routes";
import AdminLayout from "@/common/layout/AdminLayout";
import SignIn from "@/pages/Admin/SignIn";
import ImportantDatePage from "@/pages/Admin/ImportantDate/ImportantDate";
import ProtectedRoute from "@/components/ProtectedRoute";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    // 👤 Public / User routes
    ...routes,

    // 🔐 Admin routes
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/admin-panel",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true, // default admin page
          element: <ImportantDatePage />,
        },
        // add more admin child routes here
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
