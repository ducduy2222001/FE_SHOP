import React from "react";
import { HighlightOffOutlined } from "@mui/icons-material";
import { Grid, IconButton, Paper } from "@mui/material";

import { modelMen } from "../../../../../assets/image";

const ItemCart = () => {
  return (
    <Paper elevation={2}>
      <Grid container direction="row" alignItems="center">
        <Grid item container direction="row" spacing={2} xs={8}>
          <Grid item sx={{ height: "130px" }}>
            <img
              src={modelMen}
              alt=""
              style={{
                width: "100px",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Grid>
          <Grid item>
            <Grid
              item
              container
              direction="column"
              justifyContent="space-evenly"
              sx={{ height: "100%" }}
            >
              <h3>Clothes - 01 short</h3>
              <div
                className="flex flex-description-row flex-align-center"
                style={{ gap: "5px" }}
              >
                <h3>Size:</h3>
                <h3 style={{ fontWeight: "400" }}>XL</h3>
              </div>
              <div>1 x $175.00</div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs
          direction={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-end"}
        >
          <IconButton>
            <HighlightOffOutlined />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ItemCart;
