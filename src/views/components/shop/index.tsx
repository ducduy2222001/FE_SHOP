import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
} from "@mui/material";
import { withLayout } from "../../../layout";

import bgShop from "../../../assets/image/shop.png";

import "../../../assets/scss/common.scss";
import styles from "./shop.module.scss";
import { SIZE } from "./constant";

function Shop() {
  const sizes = ["S", "M", "L", "XL"];
  const initialCheckboxes = Array.from(
    { length: sizes.length },
    (_, index) => ({ checked: false, name: sizes[index] }),
  );
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleCheckboxChange = (index: any) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = !newCheckboxes[index].checked;
    setCheckboxes(newCheckboxes);
  };

  const handleClear = () => {
    const clearedCheckboxes = initialCheckboxes.map((checkbox) => ({
      ...checkbox,
      checked: false,
    }));
    setCheckboxes(clearedCheckboxes);
  };

  const handleClose = () => {};

  const handleSubmit = () => {
    checkboxes.forEach((checkbox, index) => {
      console.log(`${checkbox.name} is checked:`, checkbox.checked);
    });
  };

  const buttonData = [
    {
      label: "Clear",
      variant: "contained",
      color: "secondary",
      onClick: handleClear,
    },
    { label: "Close", variant: "contained", onClick: handleClose },
    {
      label: "Apply",
      variant: "contained",
      color: "primary",
      onClick: handleSubmit,
    },
  ];

  return (
    <div
      className={`${styles.shop}  flex flex-direction-column flex-align-center`}
    >
      <div className="widthScreen">
        <Grid container spacing={4}>
          <Grid
            item
            container
            xs={12}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <div
              className={`${styles.filter} flex flex-direction-row flex-align-center `}
            >
              <span
                style={{
                  fontSize: "30px",
                  fontFamily: "serif",
                  letterSpacing: "3px",
                }}
              >
                Filter by:
              </span>
              <button className={`${styles.btn} font-m`}>Size</button>
              <button className={`${styles.btn} font-m`}>Color</button>
              <button className={`${styles.btn} font-m`}>Price</button>
            </div>
            <Paper
              elevation={3}
              className={`${styles.listFilter} flex flex-justify-flex-start flex-direction-column`}
            >
              <div
                style={{ textAlign: "left", fontWeight: "600" }}
                className="font-l"
              >
                Size
              </div>

              <FormGroup>
                <Box display="flex" justifyContent="flex-start" columnGap={10}>
                  {checkboxes.map((checkbox, index) => (
                    <FormControlLabel
                      key={index}
                      label={checkbox.name}
                      labelPlacement="start"
                      sx={{ marginLeft: "0px" }}
                      control={
                        <Checkbox
                          checked={checkbox.checked}
                          sx={{
                            "& .MuiSvgIcon-root": { fontSize: 30 },
                          }}
                          onChange={() => handleCheckboxChange(index)}
                        />
                      }
                    />
                  ))}
                </Box>
              </FormGroup>

              <div
                className={`${styles.listBtnFilter} flex flex-justify-flex-start`}
              >
                {buttonData.map((button, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    onClick={button.onClick}
                    style={{ marginLeft: index > 0 ? 10 : 0 }}
                    className={styles.btnFilters}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: "100vh" }}></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const ContentShop = () => {
  return (
    <div
      className={`${styles.contentShop} flex flex-direction-column flex-justify-center flex-align-center`}
    >
      <div
        className="flex flex-direction-column flex-justify-center flex-align-center"
        style={{ rowGap: "30px" }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: "60px",
            fontStyle: "italic",
            width: "650px",
            fontWeight: "600",
          }}
        >
          Shop
        </span>
      </div>
    </div>
  );
};

const headerProps = {
  image: bgShop,
  element: <ContentShop />,
};

export default withLayout(Shop, headerProps);
