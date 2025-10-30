import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./AdminNav";

const AdminLayout = () => {
  const appBarRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const [appBarHeight, setAppBarHeight] = useState<number>(0);
  const [sideBarWidth, setSidebarWidth] = useState<number>(0);

  useLayoutEffect(() => {
    if (appBarRef.current) {
      setAppBarHeight(appBarRef.current.clientHeight);
    }
    if (sideBarRef.current) {
      setSidebarWidth(sideBarRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setAppBarHeight(appBarRef.current?.clientHeight || 0);
      setSidebarWidth(sideBarRef.current?.clientWidth || 0);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={``}>
      <Navbar />
      <Suspense fallback={<>...</>}>
        <div
          className="p-8 max-tablet:p-2 max-tablet:mt-0 max-mobile:p-0"
          style={{
            marginTop: `60px`,
            marginLeft: `${sideBarWidth}px`,
            padding: `20px`,
          }}
        >
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default AdminLayout;
