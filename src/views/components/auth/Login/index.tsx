import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { ButtonCustom } from "../../../../common/components/button";
import { bgLogin } from "../../../../assets/image";

import { authService } from "../../../../common/api/services";
import styles from "./login.module.scss";

const Login = () => {
  const dataLogin = useRef({});
  const navigation = useNavigate();
  const handleLogin = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("userName");
    const password = formData.get("password");

    dataLogin.current = { username, password };

    try {
      const response = await authService.login(dataLogin.current);
      const { access_token } = response.data.data;
      localStorage.setItem("ACCESS_TOKEN", access_token);
      if (access_token) {
        navigation("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  return (
    <div className={`${styles.bgLogin}`}>
      <div
        style={{
          maxWidth: "900px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "100px",
        }}
      >
        <Paper
          elevation={3}
          style={{ borderRadius: "10px" }}
          className={`${styles.circle} ${styles.circle1}`}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{ width: "100%" }}
          >
            <Grid item style={{ width: "50%" }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                padding={"20px"}
                spacing={2}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography variant="h5" fontWeight={"600"} component={"div"}>
                    LOGIN
                  </Typography>
                  <Typography component={"span"}>
                    How to get started lorem ipsum dolor at ?
                  </Typography>
                </Box>
                <Box
                  component="form"
                  onSubmit={handleLogin}
                  display={"flex"}
                  flexDirection={"column"}
                  width={300}
                  gap={2}
                >
                  <TextField
                    required
                    id="userName"
                    name="userName"
                    label="username"
                  />
                  <TextField
                    required
                    id="password"
                    name="password"
                    label="password"
                    type="password"
                    rows={4}
                  />
                  <ButtonCustom
                    type="submit"
                    variant="outlined"
                    text="Submit"
                    sx={{ mt: 2 }}
                    className={`${styles.btnViewCollection}`}
                    style={{
                      padding: "10px 20px",
                      color: "var(--color-white)",
                      borderColor: "black",
                    }}
                  />
                </Box>
                <Box width={300}>
                  <Divider flexItem>
                    <Typography component={"span"} fontWeight={600}>
                      Login
                    </Typography>{" "}
                    <Typography component={"span"}>with Others</Typography>
                  </Divider>
                </Box>
                <Box width={300} display={"flex"} flexDirection={"column"}>
                  <ButtonCustom
                    startIcon={
                      <Google
                        style={{
                          fontSize: "25px",
                        }}
                      />
                    }
                    type="button"
                    variant="outlined"
                    text={
                      <span
                        style={{
                          textTransform: "capitalize",
                          letterSpacing: "normal",
                          fontWeight: "200",
                          fontSize: "16px",
                        }}
                      >
                        Login with
                        <span style={{ fontWeight: "600" }}> Google</span>
                      </span>
                    }
                    style={{
                      padding: "10px 20px",
                      color: "black",
                      borderColor: "black",
                    }}
                  />
                </Box>
              </Stack>
            </Grid>
            <Grid item style={{ width: "50%" }}>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{
                  backgroundImage: `url(${bgLogin})`,
                  backgroundColor: "var(--color-dark-gray)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "500px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              ></Stack>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
