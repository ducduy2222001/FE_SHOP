import React from "react";
import { withLayout } from "../../../layout/Layout";

import styles from "./home.module.scss";
import { Grid } from "@mui/material";
import CardItem from "../../../common/components/card/CardItem";

const Home = () => {
  return (
    <div className={`${styles.home}`}>
      <div>Featured Products</div>
      <div style={{ width: "1190px" }}>
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
    </div>
  );
};

// Chỉ xuất một lần với HOC áp dụng
export default withLayout(Home);
