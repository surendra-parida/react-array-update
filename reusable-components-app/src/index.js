import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";
import NoteContext from "./NoteContext";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Axios = lazy(()=>import('./components/Axios'));
const ArrayUpdate = lazy(()=>import('./components/ArrayUpdate'));
const ObjectStateUpdate = lazy(()=>import('./components/ObjectStateUpdate'));

function App() {
  return (
    <NoteContext.Provider value={{name:"Surendra Parida", class:"3rd Semester"}}>
      <Header />
      <Outlet style={{paddingTop: "250px"}} />
      <Footer />
    </NoteContext.Provider>
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
        element: (
          <Suspense fallback={<h1> Loading Please Wait.....</h1>}>
            <ArrayUpdate />
          </Suspense>
        )
      },
      {
        path: "/objectstateupdate",
        element: (
          <Suspense fallback={<h1> Loading Please Wait.....</h1>}>
            <ObjectStateUpdate />
          </Suspense>
        )
      },
      {
        
        path: "/axios",
        element: (
          <Suspense fallback={<h1> Loading Please Wait.....</h1>}>
            <Axios />
          </Suspense>
        )
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

reportWebVitals();
