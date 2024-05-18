import Headroom from "react-headroom";
import { Badge, IconButton } from "@mui/material";
import {
  LocalMallOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import styles from "./header.module.scss";
import Logo from "../../../common/components/logo";
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

const Header = (props: any) => {
  const { image, element } = props;
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
              <Logo />
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
        </Headroom>
        {element}
      </header>
    </>
  );
};
export default Header;

// màn nhỏ kc 35px
// màn lớn kc 356px
