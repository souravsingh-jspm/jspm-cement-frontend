import { Navigate } from "react-router-dom";
import { isSessionValid } from "@/utils/authHelpers";
import { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isValid = isSessionValid();

  if (!isValid) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
