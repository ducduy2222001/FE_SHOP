import React from "react";

import styles from "./login.module.scss";
import { Paper } from "@mui/material";

const Login = () => {
  return (
    <div className={`${styles.bgLogin}`}>
      <div
        style={{
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "100px",
        }}
      >
        <Paper elevation={3}>heloo</Paper>
      </div>
    </div>
  );
};

export default Login;
