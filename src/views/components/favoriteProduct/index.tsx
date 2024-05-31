import React from "react";
import { withLayout } from "../../../layout";
import { Grid, Typography } from "@mui/material";
import CardItem from "../../../common/components/card";

import styles from "./favoriteProduct.module.scss";

const FavoriteProduct = () => {
  return (
    <div
      className={`${styles.favoriteProduct} flex flex-direction-column flex-align-center`}
    >
      <div className="widthScreen">
        <Grid container gap={5} sx={{ margin: "50px 0px" }}>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              component="span"
              sx={{ fontFamily: "serif" }}
            >
              Favorite item
            </Typography>
          </Grid>
          <Grid container item spacing={3} justifyContent={"space-between"}>
            {Array.from(Array(8)).map((_, index) => (
              <Grid key={index} item>
                <CardItem size={false} image={""} badge={false} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withLayout(FavoriteProduct, {});
