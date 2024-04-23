import React from "react";
import { Badge } from "antd";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid, IconButton } from "@mui/material";
import { ShoppingBasket, RemoveRedEye } from "@mui/icons-material";

import clothes from "../../../assets/image/clothes1.png";
import styles from "./card.module.scss";

const CardItem = () => {
  return (
    <>
      <Grid
        item
        xs="auto"
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ height: "430px" }}
      >
        <Badge.Ribbon text="Sell" placement="start">
          <CardActionArea className={`${styles.card} `}>
            <div
              className={`${styles.btnsCard} flex flex-direction-column sssss`}
            >
              <IconButton
                className={`${styles.iConButton}`}
                children={<ShoppingBasket />}
                disableRipple={true}
                size="small"
              />
              <IconButton
                className={`${styles.iConButton}`}
                children={<RemoveRedEye />}
                disableRipple={true}
                size="small"
              />
            </div>
            <CardMedia
              component="img"
              height="330"
              sx={{ width: "270px" }}
              image={clothes}
              alt="green iguana"
              className={`${styles.imgCard}`}
            />
          </CardActionArea>
        </Badge.Ribbon>
        <span
          style={{
            fontSize: "14px",
            opacity: "0.5",
            fontWeight: "600",
          }}
        >
          MEN
        </span>
        <span className="font-l" style={{ fontWeight: "700" }}>
          T-Shirt Name 1
        </span>
        <span className="font-m">$100</span>
      </Grid>
    </>
  );
};

export default CardItem;
