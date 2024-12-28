import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LocationProvider } from "./components/Header/LocationContext/LocationContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  
    <LocationProvider>
    <App />
  </LocationProvider>,
);
