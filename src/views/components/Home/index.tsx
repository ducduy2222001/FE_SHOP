import React from "react";
import { Grid } from "@mui/material";
import { withLayout } from "../../../layout";
import CardItem from "../../../common/components/card";
import shoes2 from "../../../assets/image/shoes2.png";

import "../../../assets/scss/common.scss";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div
      className={`${styles.home} flex flex-direction-column flex-align-center`}
    >
      <div className={`${styles.title}`}>Featured Products</div>
      <div style={{ width: "1190px", paddingBottom: "70px" }}>
        <Grid
          container
          item
          spacing={1}
          md={12}
          justifyContent="space-between
"
        >
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Grid>
      </div>
      <div
        className={`${styles.containA} flex flex-direction-column flex-align-end flex-justify-center`}
      >
        <div className="flex flex-direction-column flex-align-center">
          <img
            src={shoes2}
            alt=""
            style={{
              width: "500px",
              height: "auto",
            }}
          />
          <span style={{ fontSize: "40px", color: "var($color-white)" }}>
            Explore Our Shoes Collection Now!
          </span>
        </div>
      </div>
    </div>
  );
};

// Chỉ xuất một lần với HOC áp dụng
export default withLayout(Home);
