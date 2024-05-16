import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
} from "@mui/material";
import { withLayout } from "../../../layout";

import bgShop from "../../../assets/image/shop.png";

import "../../../assets/scss/common.scss";
import styles from "./shop.module.scss";
import { SIZE, COLOR, TYPE_FILTER, LIST_BTN_FILTER } from "./constant";

interface ShowCardProps {
  status: boolean;
  type: Object;
}

interface TypeFilterProps {
  id: number;
  status: boolean;
  name: string;
}

const Shop = () => {
  const listTypeFilters = (data: any, type: number) => {
    const initial = Array.from({ length: data.length }, (_, index) => ({
      type,
      id: index,
      status: false,
      name: data[index],
    }));

    return initial;
  };
  const [checkboxes, setCheckboxes] = useState(listTypeFilters(SIZE, 0));
  const [color, setColor] = useState(listTypeFilters(COLOR, 1));
  const [id, setId] = useState<number>(0);
  const [arrFilter, setArrFilter] = useState<any[]>([]);

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

  const [typeFilter, setTypeFilter] = useState<TypeFilterProps[]>(
    ArrCardFilter[0].type,
  );
  const [showCard, setShowCard] = useState<ShowCardProps[]>([]);
  const [btnFilters, setTypeFilterFilters] = useState(LIST_BTN_FILTER);

  const handleCheckbox = (index: any, type: any) => {
    const newArr = [...type];
    newArr[index].status = !newArr[index].status;
    if (id === TYPE_FILTER[0].index) {
      setCheckboxes(newArr);
    } else if (id === TYPE_FILTER[1].index) {
      setColor(newArr);
    }
  };

  const handleOpenFilterBy = (id: number) => {
    setId(id);
    setTypeFilter(ArrCardFilter[id].type);
    const updatedArrCardFilter = ArrCardFilter.map((item) => ({
      ...item,
      status: item.id === id,
    }));

    setShowCard(updatedArrCardFilter);

    const updateListBtnFilter = btnFilters.map((item) => ({
      ...item,
      disable: item.id === id,
    }));

    setTypeFilterFilters(updateListBtnFilter);
  };

  const handleClear = () => {
    if (id === TYPE_FILTER[0].index) {
      const cleared = listTypeFilters(SIZE, TYPE_FILTER[0].index).map(
        (item) => ({
          ...item,
          status: false,
        }),
      );
      setCheckboxes(cleared);
      setTypeFilter(cleared);
    } else if (id === TYPE_FILTER[1].index) {
      const cleared = listTypeFilters(COLOR, TYPE_FILTER[1].index).map(
        (item) => ({
          ...item,
          status: false,
        }),
      );
      setColor(cleared);
      setTypeFilter(cleared);
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

    const updateListBtnFilter = btnFilters.map((item) => ({
      ...item,
      disable: false,
    }));
    setTypeFilterFilters(updateListBtnFilter);
  };

  const handleApply = (type: any) => {
    console.log(type[0].type);

    const newType = type.filter((item: any) => item.status === true);
    const filteredTypes = newType.filter((item: any) => {
      return !arrFilter.some(
        (existingType: any) => existingType.name === item.name,
      );
    });
    setArrFilter((prevTypes: any) => [...prevTypes, ...filteredTypes]);
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
                              handleCheckbox(index, ArrCardFilter[id].type)
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
                      onClick={() => button.onClick(typeFilter)}
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
              style={{
                position: "absolute",
                marginTop: "95px",
                gap: "5px",
              }}
              className="flex flex-direction-row "
            >
              {arrFilter.map((item, index) => (
                <Chip
                  key={index}
                  size="medium"
                  sx={{
                    background: "#78bcc4",
                    color: "#fff",
                    fontSize: "16px",
                    height: "40px",
                    maxWidth: "100px",
                    "& .MuiChip-deleteIcon": {
                      color: "white",
                    },
                  }}
                  label={item.name}
                  onDelete={handleApply}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: "100vh" }}>sss</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

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
