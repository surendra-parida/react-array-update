import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ArrayUpdate from "./components/ArrayUpdate";
import ObjectStateUpdate from "./components/ObjectStateUpdate";
import Home from "./components/Home";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet style={{paddingTop: "250px"}} />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/arrayupdate",
        element: <ArrayUpdate />,
      },
      {
        path: "/objectstateupdate",
        element: <ObjectStateUpdate />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
