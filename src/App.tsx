import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/user/routes";

// import { SignIn } from "./common/layout/SignIn";
import "./App.css";
function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      {/* <SignIn /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
