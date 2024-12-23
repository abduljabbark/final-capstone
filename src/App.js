import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeSection from "./components/HomePage/HomeSection";
import RestorentsPage from "./components/Restorentspage/Restorentspage.jsx";
import { Provider } from "react-redux";
import { store } from "./Store.js";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Header/Header.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <HomeSection />,
        },
        {
          path: "/restaurants",
          element: <RestorentsPage />,
        },
      ],
    },
  ]);

  return (

    <>
    <Provider store={store}>
     <RouterProvider router={router} />;
   </Provider>
    </>
  );

  
 
 
  

}

export default App;
