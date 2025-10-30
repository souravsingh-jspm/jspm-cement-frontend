import { Navigate } from "react-router-dom";
import { isSessionValid } from "@/utils/authHelpers";
import { JSX } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isValid = isSessionValid();

  if (!isValid) {
    // Session expired or not logged in
    return <Navigate to="" />;
  }

  return children;
}
