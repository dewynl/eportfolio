import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import withRoot from "./withRoot";
// import AppBar from "./components/AppBar";
import MainPage from "./routes/main_page/MainPage";
import ModulePage from "./routes/course_modules_pages/ModulePage";

const router = createBrowserRouter([
  {
    path: "/eportfolio",
    element: <MainPage />
  },
  {
    path: "/eportfolio/modules/:path",
    element: <ModulePage />
  }
]);

function App() {
  return (
    <React.Fragment>
      {/* <AppBar /> */}
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default withRoot(App);
