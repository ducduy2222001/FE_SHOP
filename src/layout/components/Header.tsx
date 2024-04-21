import { useState } from "react";
import { Button } from "antd";
import { Badge, IconButton } from "@mui/material";
import {
  LocalMallOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import "../../common/scss/common.scss";
import styles from "./header.module.scss";
import Logo from "../../common/components/Logo/Logo";

const LIST_HOME = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Shop",
  },
  {
    id: 3,
    name: "About US",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];

const Header = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else setColor(false);
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <header className={`${styles.headerBgImage}`}>
        <div
          className={`${styles.header} ${color ? styles.headerBg : ""} ${
            styles.gridContainer
          }`}
        >
          <div className={`${styles.headerContentFirst}`}>
            <ul className={`${styles.menu} flex flex-align-center`}>
              {LIST_HOME.map((item) => {
                return (
                  <li key={item.id} style={{ cursor: "pointer" }}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={`${styles.headerContentSecond} flex flex-align-center flex-direction-column flex-justify-center`}
          >
            <Logo color={true} />
          </div>
          <div
            className={`${styles.headerContentThird} flex flex-align-center flex-justify-flex-end`}
          >
            <IconButton
              aria-label="search"
              className={`${styles.iconColor}`}
              onClick={() => {
                console.log("click search");
              }}
            >
              <SearchOutlined className={`${styles.iconSize}`} />
            </IconButton>
            <IconButton
              aria-label="heart"
              className={`${styles.iconColor}`}
              onClick={() => {
                console.log("click heart");
              }}
            >
              <Badge badgeContent={4} color="secondary">
                <FavoriteBorderOutlined className={`${styles.iconSize}`} />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="cart"
              className={`${styles.iconColor}`}
              onClick={() => {
                console.log("click cart");
              }}
            >
              <Badge badgeContent={4} color="secondary">
                <LocalMallOutlined className={`${styles.iconSize}`} />
              </Badge>
            </IconButton>
          </div>
        </div>

        <div
          className={`${styles.headerBody}  flex flex-direction-column flex-justify-center flex-align-center`}
        >
          <div
            className="flex flex-direction-column flex-justify-center flex-align-center"
            style={{ rowGap: "30px", marginTop: "100px" }}
          >
            <span
              style={{
                fontFamily: "cursive",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              UNLEASH CREATIVITY & INSPIRE INNOVATION
            </span>
            <span
              style={{
                fontFamily: "serif",
                fontSize: "60px",
                fontStyle: "italic",
                width: "650px",
                fontWeight: "600",
              }}
            >
              Every day is a canvas waiting to be painted with the beauty of
              life!
            </span>
            <span
              style={{
                fontFamily: "cursive",
                fontSize: "14px",
                width: "750px",
                fontWeight: "500",
              }}
            >
              Experience effortless style with our Casual & Everyday collection:
              chic comfort, classic denim, and soft essentials for your daily
              fashion journey
            </span>
            <Button
              ghost={true}
              className={`${styles.btnRegisterNow} flex flex-align-center`}
            >
              REGISTER NOW
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

// màn nhỏ kc 35px
// màn lớn kc 356px
