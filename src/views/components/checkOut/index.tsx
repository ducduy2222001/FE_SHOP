import React from "react";
import { withLayout } from "../../../layout";
import {
  Autocomplete,
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { ButtonCustom } from "../../../common/components/button";
import { countries } from "./constant";

import styles from "./checkout.module.scss";

const CheckOut = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("🚀 ~ handleSubmit ~ data:", data);
  };

  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"50px 0"}
    >
      <div
        className="widthScreen flex flex-direction-column"
        style={{ gap: "20px" }}
      >
        <h1 style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          Checkout
        </h1>
        <Grid container component="form" onSubmit={handleSubmit} gap={4}>
          <Grid item xs={7}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                textAlign: "center",
              }}
            >
              <Box display={"flex"} justifyContent={"space-between"} gap={5}>
                <TextField
                  required
                  id="first-name"
                  name="First name"
                  label="First name"
                  type="text"
                  fullWidth={true}
                />
                <TextField
                  required
                  id="last-name"
                  name="last name"
                  label="Last name"
                  type="text"
                  fullWidth={true}
                />
              </Box>
              <Autocomplete
                id="country-select-demo"
                fullWidth={true}
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                  <TextField {...params} label="Choose a country" />
                )}
              />
              <TextField required id="address" name="address" label="Address" />
              <TextField
                required
                id="province-city"
                name="province-city"
                label="Province/City"
              />
              <TextField
                required
                id="zip-code"
                name="zip-code"
                label="Zip Code"
                type="number"
              />
              <TextField
                required
                id="phone-number"
                name="phone-number"
                label="Phone number"
                type="number"
              />
              <TextField required id="email" name="email" label="Email" />
              <Box display={"flex"} flexDirection={"column"}>
                <h3 style={{ textAlign: "left", paddingBottom: "10px" }}>
                  More information
                </h3>
                <TextField
                  id="noted"
                  name="noted"
                  label="Noted (option)"
                  multiline
                  rows={4}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs>
            <Paper sx={{ border: "1px solid #78bcc4" }}>
              <Box borderBottom="1px solid #ccc">
                <Typography
                  variant="h4"
                  fontWeight={"600"}
                  component={"div"}
                  padding={"20px"}
                >
                  Total cart
                </Typography>
              </Box>
              <Grid item>
                <RowOrder
                  textFirst="Products"
                  textLast="Estimated price"
                  fontSize={"18px"}
                  fontWeight={"600"}
                  borderBottom={"1px solid #ccc"}
                />
                <RowOrder
                  textFirst="Short - White x 2 - XL"
                  textLast="$500"
                  fontSize={"16px"}
                  borderBottom={"1px solid #ccc"}
                />
                <RowOrder
                  textFirst="Short - White x 2 - XL"
                  textLast="$500"
                  fontSize={"16px"}
                  borderBottom={"1px solid #ccc"}
                />

                <RowOrder
                  textFirst="Total:"
                  textLast="$1000"
                  fontWeight={"600"}
                  fontSize={"18px"}
                />
                <Box padding={"20px 20px"}>
                  <ButtonCustom
                    type="submit"
                    variant="outlined"
                    size="large"
                    className={styles.btnOrder}
                    text="Confirm an order"
                    style={{
                      width: "100%",
                      padding: "10px 30px",
                      color: "#78bcc4",
                      borderColor: "#78bcc4",
                    }}
                  />
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

const RowOrder = (props: any) => {
  const { borderBottom, fontSize, fontWeight, textFirst, textLast } = props;

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"10px 20px"}
      borderBottom={borderBottom}
    >
      <Typography
        variant="h6"
        component="span"
        fontWeight={fontWeight}
        fontSize={fontSize}
      >
        {textFirst}
      </Typography>
      <Typography
        variant="h6"
        component="span"
        fontWeight={"600"}
        fontSize={"18px"}
      >
        {textLast}
      </Typography>
    </Box>
  );
};

export default withLayout(CheckOut, {});
