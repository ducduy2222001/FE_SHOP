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
import { SIZE, COLOR } from "./constant";

interface Item {
  status: boolean;
  type: Object;
}

function Shop() {
  const listTypeFilters = (data: any) => {
    const initial = Array.from({ length: data.length }, (_, index) => ({
      status: false,
      name: data[index],
    }));

    return initial;
  };

  const [checkboxes, setCheckboxes] = useState(listTypeFilters(SIZE));
  const [color, setColor] = useState(listTypeFilters(COLOR));
  const [close, setClose] = useState(false);
  const [id, setId] = useState(Number);

  const [listArrFilter, setListArrFilter] = useState<Item[]>([]);

  const handleCheckbox = (index: any, type: any, id: number) => {
    const newArr = [...type];
    newArr[index].status = !newArr[index].status;
    if (id === 0) {
      setCheckboxes(newArr);
    } else if (id === 1) {
      setColor(newArr);
    }
  };

  const handleClear = () => {
    if (id === 0) {
      const cleared = listTypeFilters(SIZE).map((item) => ({
        ...item,
        status: false,
      }));
      setCheckboxes(cleared);
    } else if (id === 1) {
      const cleared = listTypeFilters(COLOR).map((item) => ({
        ...item,
        status: false,
      }));
      setColor(cleared);
    }
  };

  const handleClose = () => {
    const updatedArrFilter = ArrFilter.filter((item) => item.id === id).map(
      (item) => ({
        ...item,
        status: false,
      }),
    );
    setListArrFilter(updatedArrFilter);
  };

  const handleSubmit = (type: any) => {
    type.forEach((item: any) => {
      console.log(`${item.name} is checked:`, item.status);
    });
  };

  const ArrFilter = [
    {
      id: 0,
      type: checkboxes,
      status: false,
      ref: useRef(0),
    },
    {
      id: 1,
      type: color,
      status: false,
      ref: useRef(0),
    },
  ];

  const buttonData = [
    {
      label: "Clear",
      onClick: handleClear,
    },
    { label: "Close", onClick: handleClose },
    {
      label: "Apply",
      onClick: handleSubmit,
    },
  ];

  const listFilters = [
    { id: 0, label: "Size" },
    { id: 1, label: "Color" },
  ];

  const handleOpenFilterBy = (id: number) => {
    setId(id);
    const updatedArrFilter = ArrFilter.map((item) => ({
      ...item,
      status: item.id === id,
    }));
    setListArrFilter(updatedArrFilter);
  };

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
              {listFilters.map((item) => (
                <button
                  key={item.id}
                  disabled={listArrFilter[id]?.status}
                  className={`${styles.btn} font-m`}
                  onClick={() => handleOpenFilterBy(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {listArrFilter[id]?.status && (
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
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    columnGap={10}
                  >
                    {ArrFilter[id].type.map((item, index) => (
                      <FormControlLabel
                        key={index}
                        label={item.name}
                        labelPlacement="start"
                        sx={{ marginLeft: "0px" }}
                        control={
                          <Checkbox
                            checked={item.status}
                            sx={{
                              "& .MuiSvgIcon-root": { fontSize: 30 },
                            }}
                            onChange={() =>
                              handleCheckbox(index, ArrFilter[id].type, id)
                            }
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
                      onClick={() => button.onClick(ArrFilter[id].type)}
                      style={{ marginLeft: index > 0 ? 10 : 0 }}
                      className={styles.btnFilters}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              </Paper>
            )}
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
