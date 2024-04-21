import React from "react";
import { CardActionArea, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

import clothes from "../../../assets/image/clothes1.png";
const CardItem = () => {
  return (
    <>
      <Grid item xs="auto">
        <CardActionArea>
          <CardMedia
            component="img"
            height="330"
            sx={{ width: "270px" }}
            image={clothes}
            alt="green iguana"
          />
        </CardActionArea>
      </Grid>
    </>
  );
};

export default CardItem;
