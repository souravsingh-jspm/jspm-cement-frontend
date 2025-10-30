// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
// import LandingFoot from "./LandingFooter";
// import LandingNav from "./LandingNav";

// const LandingLayout = () => {
//   return (
//     <div>
//       <LandingNav />
//       <Suspense>
//         <div className="px-2 pt-10 tablet:pt-10 w-full flex flex-col items-center">
//           <div className="w-full">
//             <Outlet />
//           </div>
//         </div>
//       </Suspense>
//       <LandingFoot />
//     </div>
//   );
// };

// export default LandingLayout;

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import LandingFoot from "./LandingFooter";
import LandingNav from "./LandingNav";

const LandingLayout = () => {
  return (
    <div>
      <LandingNav />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-[100vh]">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
          </div>
        }
      >
        <div className="px-2 pt-10 tablet:pt-10 w-full flex flex-col items-center">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </Suspense>
      <LandingFoot />
    </div>
  );
};

export default LandingLayout;
