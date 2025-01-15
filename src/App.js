// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomeSection from "./components/HomePage/HomeSection";
// import RestorentsPage from "./components/Restorentspage/Restorentspage.jsx";
// import { Provider } from "react-redux";
// import { store } from "./Store.js";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./components/Header/Header.jsx";
// import ProductDetail from "./components/Restorentspage/ProductsApi/ProductDetail/ProductDetail.jsx";
// import ProductsApi from "./components/Restorentspage/ProductsApi/ProductsApi.jsx";
// import SignUp from "./components/Modals/SignUp/SignUp.jsx"; // Path to SignUp component
// import Login from "./components/Modals/Login/Login.jsx"; // Path to Login component

// const App = () => {
//   const [isSignUpOpen, setSignUpOpen] = useState(false);
//   const [isLoginOpen, setLoginOpen] = useState(false);

//   const handleSignUpOpen = () => setSignUpOpen(true);
//   const handleSignUpClose = () => {
//     setSignUpOpen(false);
//     setLoginOpen(true); // Open Login after SignUp
//   };

//   const handleLoginOpen = () => setLoginOpen(true);
//   const handleLoginClose = () => setLoginOpen(false);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Navbar onSignUpClick={handleSignUpOpen} onLoginClick={handleLoginOpen} />, // Pass handlers to Navbar
//       children: [
//         {
//           path: "",
//           element: <HomeSection />,
//         },
//         {
//           path: "/restaurants",
//           element: <RestorentsPage />,
//         },
//         {
//           path: "/",
//           element: <ProductsApi />,
//         },
//         {
//           path: "/product/:id",
//           element: <ProductDetail />,
//         },
//       ],
//     },
//   ]);

//   return (
//     <Provider store={store}>
//       <RouterProvider router={router} />
//       {/* Dialogs for SignUp and Login */}
//       <SignUp open={isSignUpOpen} onClose={handleSignUpClose} />
//       <Login open={isLoginOpen} onClose={handleLoginClose} onOpenSignUp={handleSignUpOpen} />
//     </Provider>
//   );
// };

// export default App;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeSection from "./components/HomePage/HomeSection";
import RestorentsPage from "./components/Restorentspage/Restorentspage.jsx";
import { Provider } from "react-redux";
import { store } from "./Store.js";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Header/Header.jsx";
import ProductDetail from "./components/Restorentspage/ProductsApi/ProductDetail/ProductDetail.jsx";
import ProductsApi from "./components/Restorentspage/ProductsApi/ProductsApi.jsx";
import SignUp from "./components/Modals/SignUp/SignUp.jsx"; // Path to SignUp component
import Login from "./components/Modals/Login/Login.jsx"; // Path to Login component

const App = () => {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => {
    setSignUpOpen(false);
    setLoginOpen(true); // Open Login after SignUp
  };

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar onSignUpClick={handleSignUpOpen} onLoginClick={handleLoginOpen} />, // Pass handlers to Navbar
      children: [
        {
          path: "",
          element: <HomeSection />,
        },
        {
          path: "/restaurants",
          element: <RestorentsPage />,
        },
        {
          path: "/products",  // Added new route for products
          element: <ProductsApi />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* Dialogs for SignUp and Login */}
      <SignUp open={isSignUpOpen} onClose={handleSignUpClose} />
      <Login open={isLoginOpen} onClose={handleLoginClose} onOpenSignUp={handleSignUpOpen} />
    </Provider>
  );
};

export default App;
