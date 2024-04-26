import React from "react";
import { Button, Grid } from "@mui/material";
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
      <div className={`${styles.containA}`}>sssss</div>
      <div
        className={`${styles.containB} flex flex-direction-column flex-align-end flex-justify-center`}
      >
        <div
          className="flex flex-direction-column flex-align-center"
          style={{ gap: "20px" }}
        >
          <img
            src={shoes2}
            alt=""
            style={{
              width: "480px",
              height: "auto",
              borderRadius: "10px",
            }}
          />
          <span className={`${styles.titleImg}`}>
            Explore Our Shoes Collection Now!
          </span>
          <Button variant="outlined" className={`${styles.btnRegisterNow} `}>
            REGISTER NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

// Chỉ xuất một lần với HOC áp dụng
export default withLayout(Home);
