import React from "react";
import Home from "./views/components/home";
import Shop from "./views/components/shop";
import AboutUs from "./views/components/aboutUs";
import ContactUs from "./views/components/contactUs";
import FavoriteProduct from "./views/components/favoriteProduct";
import Cart from "./views/components/cart";
import ErrorPage from "./views/components/errorPage";
import CheckOut from "./views/components/checkOut";

const routes = [
  {
    path: "/",
    element: <Home />,
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
  {
    path: "/favorite-product",
    element: <FavoriteProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
