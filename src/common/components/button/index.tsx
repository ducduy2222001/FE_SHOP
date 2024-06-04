import React from "react";
import { Button } from "@mui/material";

import "../../../assets/scss/common.scss";

import styles from "./buttonCustom.module.scss";

export const ButtonCustom = (props: any) => {
  const { variant, text, style, className, onClick } = props;
  return (
    <Button
      variant={variant}
      className={`${styles.btn} ${className}`}
      sx={style}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
