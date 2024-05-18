import React from "react";
import { Badge } from "antd";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid, IconButton } from "@mui/material";
import { ShoppingBasket, RemoveRedEye } from "@mui/icons-material";

import clothes from "../../../assets/image/clothes1.png";
import styles from "./card.module.scss";

type CardItemProps = {
  size: boolean;
  image: string;
  badge: boolean;
};

const CardItem = (props: CardItemProps) => {
  const { size, image, badge } = props;
  return (
    <>
      <Grid
        item
        xs="auto"
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ height: `${size ? "330px" : "460px"}` }}
      >
        {badge ? (
          <Badge.Ribbon
            text="-10%"
            placement="start"
            color="red"
            style={{ height: "30px" }}
            className="flex flex-align-center font-l"
          >
            <CardActionArea className={`${styles.card} `}>
              <div
                className={`${styles.btnCard} ${
                  size ? styles.btnCardSmall : styles.btnCardBig
                } flex flex-direction-column`}
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
                sx={{
                  width: `${size ? "180px" : "270px"}`,
                  height: `${size ? "230px" : "330px"}`,
                }}
                image={clothes}
                alt="green iguana"
                className={`${styles.imgCard}`}
              />
            </CardActionArea>
          </Badge.Ribbon>
        ) : (
          <CardActionArea className={`${styles.card} `}>
            <div
              className={`${styles.btnCard} ${
                size ? styles.btnCardSmall : styles.btnCardBig
              } flex flex-direction-column`}
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
              sx={{
                width: `${size ? "190px" : "270px"}`,
                height: `${size ? "230px" : "330px"}`,
              }}
              image={clothes}
              alt="green iguana"
              className={`${styles.imgCard}`}
            />
          </CardActionArea>
        )}
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
