import React from "react";
import { withLayout } from "../../../layout";

import bgShop from "../../../assets/image/shop.png";

import "../../../assets/scss/common.scss";

function Shop() {
  return <div className="">Shop</div>;
}

const headerProps = {
  home: false,
  title: "Shop",
  image: bgShop,
};

export default withLayout(Shop, headerProps);
