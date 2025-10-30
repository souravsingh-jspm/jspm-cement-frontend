import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#FFFFFF1A] p-5 mobil:p-10 rounded  w-full mobile:w-96">
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginLayout;
