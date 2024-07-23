import React from "react";
import { Button } from "@mui/material";

import styles from "./buttonCustom.module.scss";

export const ButtonCustom = (props: any) => {
  const { variant, text, type, style, className, onClick } = props;
  return (
    <Button
      type={type}
      variant={variant}
      className={`${styles.btn} ${className}`}
      sx={style}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};
