import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./AdminNav";

const AdminLayout = () => {
  const sideBarRef = useRef<HTMLDivElement>(null);
  const [sideBarWidth, setSidebarWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (sideBarRef.current) {
      setSidebarWidth(sideBarRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSidebarWidth(sideBarRef.current?.clientWidth || 0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Navbar />
      <Suspense fallback={<>...</>}>
        <div
          className="p-8 max-tablet:p-2 max-tablet:mt-0 max-mobile:p-0"
          style={{
            marginTop: "60px",
            marginLeft: `${sideBarWidth}px`,
          }}
        >
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default AdminLayout;
