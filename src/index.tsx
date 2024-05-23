import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./views/components/home";
import Shop from "./views/components/shop";
import AboutUs from "./views/components/aboutUs";
import ContactUs from "./views/components/contactUs";

import "./index.css";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error</div>,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="">
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals(console.log);
