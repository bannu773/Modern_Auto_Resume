import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import Explore from "./components/Extrathings/Explore";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Explore /> */}
   
  </React.StrictMode>
);
