import React from "react";
import { withLayout } from "../../../layout";

import bgShop from "../../../assets/image/shop.png";

import "../../../assets/scss/common.scss";
import styles from "./shop.module.scss";
import { Grid } from "@mui/material";

function Shop() {
  return (
    <div
      className={`${styles.shop}  flex flex-direction-column flex-align-center`}
    >
      {/* <div className="widthScreen">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div style={{ background: "red", height: "100vh" }}></div>
          </Grid>
          <Grid item xs={9}>
            <div style={{ background: "red", height: "100vh" }}></div>
          </Grid>
        </Grid>
      </div> */}
    </div>
  );
}

const ContentShop = () => {
  return (
    <div
      className={`${styles.contentShop} flex flex-direction-column flex-justify-center flex-align-center`}
    >
      <div
        className="flex flex-direction-column flex-justify-center flex-align-center"
        style={{ rowGap: "30px" }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: "60px",
            fontStyle: "italic",
            width: "650px",
            fontWeight: "600",
          }}
        >
          Shop
        </span>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div
              className={`${styles.cardMen} ${styles.card} flex flex-justify-center flex-align-center`}
            ></div>
          </Grid>
          <Grid item xs={6}>
            <div
              className={`${styles.cardWomen} ${styles.card} flex flex-justify-center flex-align-center`}
            ></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const headerProps = {
  image: bgShop,
  element: <ContentShop />,
};

export default withLayout(Shop, headerProps);
