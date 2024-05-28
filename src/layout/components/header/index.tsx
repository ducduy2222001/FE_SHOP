import Headroom from "react-headroom";
import { Badge, IconButton } from "@mui/material";
import {
  LocalMallOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import styles from "./header.module.scss";
import Logo from "../../../common/components/logo";
import { NavLink, useNavigate } from "react-router-dom";
import { KeyboardEvent, MouseEvent, useState } from "react";
import Panel from "../../../common/components/panel";
const LIST_HOME = [
  {
    id: 1,
    name: "Home",
    link: "/",
    checked: true,
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
    checked: false,
  },
  {
    id: 3,
    name: "About US",
    link: "/about-us",
    checked: false,
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contact-us",
    checked: false,
  },
];

const Header = (props: any) => {
  const { image, element } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  return (
    <>
      <header
        className={`${styles.headerBgImage} flex flex-direction-column`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <Headroom style={{ zIndex: 100000 }}>
          <div className={`${styles.header} ${styles.gridContainer}`}>
            <div className={`${styles.headerContentFirst}`}>
              <ul className={`${styles.menu} flex flex-align-start`}>
                {LIST_HOME.map((item) => {
                  return (
                    <NavLink
                      to={item.link}
                      key={item.id}
                      className={({ isActive }) =>
                        `${isActive ? styles.active : ""} ${
                          styles.itemHeader
                        } flex flex-align-center flex-justify-center`
                      }
                    >
                      {item.name}
                    </NavLink>
                  );
                })}
              </ul>
            </div>
            <div
              className={`${styles.headerContentSecond} flex flex-align-center flex-direction-column flex-justify-center`}
            >
              <Logo />
            </div>
            <div
              className={`${styles.headerContentThird} flex flex-align-center flex-justify-flex-end`}
            >
              <IconButton
                aria-label="search"
                children={<SearchOutlined className={`${styles.iconSize}`} />}
                className={`${styles.iconColor}`}
                onClick={() => {
                  console.log("click search");
                }}
              />
              <IconButton
                aria-label="heart"
                children={
                  <Badge badgeContent={4} color="secondary">
                    <FavoriteBorderOutlined className={`${styles.iconSize}`} />
                  </Badge>
                }
                className={`${styles.iconColor}`}
                onClick={() => {
                  navigate("/favorite-product");
                }}
              />
              <IconButton
                aria-label="cart"
                children={
                  <Badge badgeContent={4} color="secondary">
                    <LocalMallOutlined className={`${styles.iconSize}`} />
                  </Badge>
                }
                className={`${styles.iconColor}`}
                onClick={toggleDrawer(true)}
              />
              <Panel
                open={open}
                width={"600px"}
                toggleDrawer={toggleDrawer}
                title="Shopping Cart"
                component={<div>hahaha</div>}
              />
            </div>
          </div>
        </Headroom>
        {element}
      </header>
    </>
  );
};
export default Header;

// màn nhỏ kc 35px
// màn lớn kc 356px
