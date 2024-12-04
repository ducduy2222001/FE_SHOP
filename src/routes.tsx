import React from "react";
import Home from "./views/components/home";
import Shop from "./views/components/shop";
import AboutUs from "./views/components/aboutUs";
import ContactUs from "./views/components/contactUs";
import FavoriteProduct from "./views/components/favoriteProduct";
import Cart from "./views/components/cart";
import ErrorPage from "./views/components/errorPage";
import CheckOut from "./views/components/checkOut";
import ProductDetail from "./views/components/productDetail";
import Login from "./views/components/auth/Login";
import { routerPaths } from "./tool";

const routes = [
  {
    path: routerPaths.home,
    element: <Home />,
  },
  {
    path: routerPaths.shop,
    element: <Shop />,
  },
  {
    path: routerPaths.aboutUs,
    element: <AboutUs />,
  },
  {
    path: routerPaths.contactUs,
    element: <ContactUs />,
  },
  {
    path: routerPaths.favoriteProduct,
    element: <FavoriteProduct />,
  },
  {
    path: routerPaths.cart,
    element: <Cart />,
  },
  {
    path: routerPaths.checkout,
    element: <CheckOut />,
  },
  {
    path: routerPaths.productDetail,
    element: <ProductDetail />,
  },
  { path: routerPaths.login, element: <Login /> },
  {
    path: routerPaths.errorPage,
    element: <ErrorPage />,
  },
];

export default routes;
