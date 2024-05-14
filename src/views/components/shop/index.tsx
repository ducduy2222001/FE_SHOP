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
import { SIZE, COLOR, TYPE_FILTER } from "./constant";

interface ShowCardProps {
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

  const ArrCardFilter = [
    {
      id: 0,
      type: checkboxes,
    },
    {
      id: 1,
      type: color,
    },
  ];

  const listBtnFilter = [
    { id: 0, label: TYPE_FILTER[0].name, disable: false },
    { id: 1, label: TYPE_FILTER[1].name, disable: false },
  ];

  const [id, setId] = useState<number>(0);
  const [showCard, setShowCard] = useState<ShowCardProps[]>([]);
  const [btnFilters, setBtnFilters] = useState(listBtnFilter);

  const handleCheckbox = (index: any, type: any, id: number) => {
    const newArr = [...type];
    newArr[index].status = !newArr[index].status;
    if (id === TYPE_FILTER[0].index) {
      setCheckboxes(newArr);
    } else if (id === TYPE_FILTER[1].index) {
      setColor(newArr);
    }
  };

  const handleClear = () => {
    if (id === TYPE_FILTER[0].index) {
      const cleared = listTypeFilters(SIZE).map((item) => ({
        ...item,
        status: false,
      }));
      setCheckboxes(cleared);
    } else if (id === TYPE_FILTER[1].index) {
      const cleared = listTypeFilters(COLOR).map((item) => ({
        ...item,
        status: false,
      }));
      setColor(cleared);
    }
  };

  const handleClose = () => {
    const updatedArrCardFilter = ArrCardFilter.filter(
      (item) => item.id === id,
    ).map((item) => ({
      ...item,
      status: false,
    }));
    setShowCard(updatedArrCardFilter);

    const updateListBtnFilter = listBtnFilter.map((item) => ({
      ...item,
      disable: false,
    }));
    setBtnFilters(updateListBtnFilter);
  };

  const handleApply = (type: any) => {
    type.forEach((item: any) => {
      console.log(`${item.name} is checked:`, item.status);
    });
  };

  const buttonsCard = [
    {
      label: "Apply",
      onClick: handleApply,
    },
    {
      label: "Clear",
      onClick: handleClear,
    },
    { label: "Close", onClick: handleClose },
  ];

  const handleOpenFilterBy = (id: number) => {
    setId(id);
    const updatedArrCardFilter = ArrCardFilter.map((item) => ({
      ...item,
      status: item.id === id,
    }));
    setShowCard(updatedArrCardFilter);

    const updateListBtnFilter = listBtnFilter.map((item) => ({
      ...item,
      disable: item.id === id,
    }));
    setBtnFilters(updateListBtnFilter);
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
              {btnFilters.map((item) => (
                <button
                  key={item.id}
                  disabled={item.disable}
                  className={`${styles.btnFilter} ${
                    item.disable ? styles.btnFilterDisable : ""
                  } font-m`}
                  onClick={() => handleOpenFilterBy(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {showCard[id]?.status && (
              <Paper
                elevation={3}
                className={`${styles.listFilter} flex flex-justify-flex-start flex-direction-column`}
              >
                <div
                  style={{ textAlign: "left", fontWeight: "600" }}
                  className="font-l"
                >
                  {TYPE_FILTER[id].name}
                </div>
                <FormGroup>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    columnGap={10}
                  >
                    {ArrCardFilter[id].type.map((item, index) => (
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
                              handleCheckbox(index, ArrCardFilter[id].type, id)
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
                  {buttonsCard.map((button, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      onClick={() => button.onClick(ArrCardFilter[id].type)}
                      style={{ marginLeft: index > 0 ? 10 : 0 }}
                      className={styles.btnCard}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
              </Paper>
            )}
            <div
              style={{ position: "absolute", top: "70em", background: "red" }}
            >
              ddđ
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: "100vh" }}>sss</div>
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
