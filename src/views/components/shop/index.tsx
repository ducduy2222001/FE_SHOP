import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
} from "@mui/material";
import { withLayout } from "../../../layout";
import { SIZE, COLOR, TYPE_FILTER, LIST_BTN_FILTER } from "./constant";
import NoResults from "../../../common/components/noResults";
import CardItem from "../../../common/components/card";
import { ButtonCustom } from "../../../common/components/button";

import { shop } from "../../../assets/image";

import styles from "./shop.module.scss";
import Link from "@mui/material/Link";

interface ShowCardProps {
  status: boolean;
  type: Object;
}
interface TypeFilterProps {
  id: number;
  name: string;
  status: boolean;
  type: number;
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
  const [arrSizeFilter, setArrSizeFilter] = useState<TypeFilterProps[]>([]);
  const [arrColorFilter, setArrColorFilter] = useState<TypeFilterProps[]>([]);

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
    ArrCardFilter[id].type,
  );
  const [showCard, setShowCard] = useState<ShowCardProps[]>([]);
  const [btnFilters, setTypeFilterFilters] = useState(LIST_BTN_FILTER);

  const handleCheckbox = (index: number, type: any) => {
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

  const filterAndSetArrFilter = (
    filterValue: number,
    setArrFilter: React.Dispatch<React.SetStateAction<TypeFilterProps[]>>,
  ) => {
    if (!Array.isArray(typeFilter)) {
      console.error("Expected 'type' to be an array.");
      return;
    }
    const newType = typeFilter.filter(
      (item) => item.status === true && item.type === filterValue,
    );
    const filteredTypes = newType.filter(
      (item) =>
        !isItemInArray(item, arrSizeFilter) &&
        !isItemInArray(item, arrColorFilter),
    );
    setArrFilter((prevTypes) => [...prevTypes, ...filteredTypes]);
  };

  const isItemInArray = (item: TypeFilterProps, arr: TypeFilterProps[]) => {
    return arr.some((existingType) => existingType.name === item.name);
  };

  const handleApply = () => {
    filterAndSetArrFilter(0, setArrSizeFilter);
    filterAndSetArrFilter(1, setArrColorFilter);
  };

  const handleDeleteFilter = (items: TypeFilterProps) => {
    const filterMap: Record<
      number,
      React.Dispatch<React.SetStateAction<TypeFilterProps[]>>
    > = {
      0: setArrSizeFilter,
      1: setArrColorFilter,
    };
    const filterType = items.type;
    const filterFunction = filterMap[filterType];
    if (filterFunction) {
      filterFunction((prevFilter) =>
        prevFilter.filter((item) => item.id !== items.id),
      );
    }
  };

  const handleClearAllFilter = () => {
    setArrSizeFilter([]);
    setArrColorFilter([]);

    const clearedSize = listTypeFilters(SIZE, TYPE_FILTER[0].index).map(
      (item) => ({
        ...item,
        status: false,
      }),
    );
    setCheckboxes(clearedSize);
    const clearedColor = listTypeFilters(COLOR, TYPE_FILTER[1].index).map(
      (item) => ({
        ...item,
        status: false,
      }),
    );
    setColor(clearedColor);
  };

  const buttonsFilter = [
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

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const listRef = useRef(null);
  const propsListRef = new CustomEvent("propsListRef", {
    detail: { ref: listRef.current },
  });
  window.dispatchEvent(propsListRef);

  return (
    <div ref={listRef}>
      {category ? (
        <div className={`${styles.shop}`} id="listProduct">
          <div className="widthScreen margin-center">
            <Grid container style={{ paddingBottom: "20px" }}>
              {category && (
                <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                    color="inherit"
                    href="/shop"
                  >
                    Shop
                  </Link>
                  <div style={{ textTransform: "capitalize" }}>{category}</div>
                </Breadcrumbs>
              )}
            </Grid>
            <Grid container>
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
                      key={`${item.id}-${item.label}`}
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
                    className={`${styles.listFilter}  flex flex-justify-flex-start flex-direction-column`}
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
                      {buttonsFilter.map((button, index) => (
                        <Button
                          key={index}
                          variant="contained"
                          onClick={button.onClick}
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
                    marginTop: "15px",
                    gap: "5px",
                  }}
                  className="flex flex-direction-row "
                >
                  {(arrSizeFilter.length > 0 || arrColorFilter.length > 0) && (
                    <Chip
                      size="medium"
                      sx={{
                        background: "var(--color-blue-music)",
                        color: "var(--color-white)",
                        fontSize: "16px",
                        height: "40px",
                        width: "120px",
                        "& .MuiChip-deleteIcon": {
                          color: "white",
                        },
                      }}
                      label={"Clear all"}
                      onDelete={handleClearAllFilter}
                    />
                  )}
                  {arrSizeFilter.map((item: TypeFilterProps, index) => (
                    <Chip
                      key={index}
                      size="medium"
                      sx={{
                        background: "var(--color-blue-music)",
                        color: "var(--color-white)",
                        fontSize: "16px",
                        height: "40px",
                        maxWidth: "100px",
                        "& .MuiChip-deleteIcon": {
                          color: "white",
                        },
                      }}
                      label={item.name}
                      onDelete={() => handleDeleteFilter(item)}
                    />
                  ))}
                  {arrColorFilter.map((item: TypeFilterProps, index) => (
                    <Chip
                      key={index}
                      size="medium"
                      sx={{
                        background: "var(--color-blue-music)",
                        color: "var(--color-white)",
                        fontSize: "16px",
                        height: "40px",
                        maxWidth: "100px",
                        "& .MuiChip-deleteIcon": {
                          color: "white",
                        },
                      }}
                      label={item.name}
                      onDelete={() => handleDeleteFilter(item)}
                    />
                  ))}
                </div>
              </Grid>
              {/* <Grid container item spacing={3} justifyContent={"space-between"}>
            {Array.from(Array(7)).map((_, index) => (
              <Grid key={index} item>
                <CardItem size={false} image={""} badge={false} />
              </Grid>
            ))}
          </Grid> */}
              <NoResults />
            </Grid>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );

  //check điều kiện lấy type theo url để render ra UI tương ứng
};

const ContentShop = () => {
  const navigate = useNavigate();

  const handleNavigate = (category: string) => {
    navigate(`/shop?category=${category}`);
  };

  const buttonCategories = [
    { label: "Women", category: "women" },
    { label: "Man", category: "man" },
    { label: "Shoes", category: "shoes" },
  ];

  useEffect(() => {
    const handleOnClickCategory = (value: any) => {
      value.detail.ref?.scrollIntoView({
        behavior: "smooth",
      });
    };
    window.addEventListener("propsListRef", handleOnClickCategory);

    return () => {
      window.removeEventListener("propsListRef", handleOnClickCategory);
    };
  }, []);

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
            width: "650px",
            fontSize: "60px",
            fontStyle: "italic",
            fontFamily: "serif",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Shop
        </span>
        <div className="flex flex-justify-space-between">
          {buttonCategories.map((item) => (
            <ButtonCustom
              key={item.category}
              variant="outlined"
              text={item.label}
              style={{
                padding: "20px 40px",
                borderColor: "var(--color-white)",
                color: "var(--color-white)",
              }}
              onClick={() => handleNavigate(item.category)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const headerProps = {
  image: shop,
  element: <ContentShop />,
};

export default withLayout(Shop, headerProps);
