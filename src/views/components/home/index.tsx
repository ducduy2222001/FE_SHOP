import React from "react";
import { Button, Grid } from "@mui/material";
import {
  LockOutlined,
  LocalShippingOutlined,
  AutorenewOutlined,
  ShareLocationOutlined,
} from "@mui/icons-material";
import { withLayout } from "../../../layout";
import CardItem from "../../../common/components/card";
import SwiperReview from "../../../common/components/swiperReview";

import shoes2 from "../../../assets/image/shoes2.png";
import clothes_model1 from "../../../assets/image/clothes_model1.png";
import clothes_model2 from "../../../assets/image/clothes_model2.png";
import bgHome from "../../../assets/image/home.png";

import "../../../assets/scss/common.scss";
import styles from "./home.module.scss";

export const DATA_SERVICE = [
  {
    id: 1,
    icon: <LockOutlined style={{ fontSize: "45px" }} />,
    title: "Secure Payments",
    content:
      "Shop with confidence knowing that your transactions are safeguarded.",
  },
  {
    id: 2,
    icon: <LocalShippingOutlined style={{ fontSize: "45px" }} />,
    title: "Free Shipping",
    content:
      "Shopping with no extra charges – savor the liberty of complimentary shipping on every order.",
  },
  {
    id: 1,
    icon: <AutorenewOutlined style={{ fontSize: "45px" }} />,
    title: "Easy Returns",
    content:
      "With our hassle-free Easy Returns, changing your mind has never been more convenient.",
  },
  {
    id: 1,
    icon: <ShareLocationOutlined style={{ fontSize: "45px" }} />,
    title: "Order Tracking",
    content:
      "Stay in the loop with our Order Tracking feature – from checkout to your doorstep.",
  },
];

const DATA_CARDITEM = [
  {
    id: 1,
    size: false,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 2,
    size: false,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 3,
    size: false,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 4,
    size: false,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
];

const DATA_CARDITEMSALE = [
  {
    id: 1,
    size: false,
    badge: true,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 2,
    size: false,
    badge: true,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 3,
    size: false,
    badge: true,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 4,
    size: false,
    badge: true,
    image: "../../../assets/image/clothes.png",
  },
];

const CARDITEM_SWIPER = [
  {
    id: 1,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 2,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 3,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 4,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 5,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 6,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 7,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 8,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
  {
    id: 9,
    size: true,
    badge: false,
    image: "../../../assets/image/clothes.png",
  },
];

const Home = () => {
  return (
    <div
      className={`${styles.home} flex flex-direction-column flex-align-center`}
    >
      <ListCard data={DATA_CARDITEM} sale={false} />
      <Collection gender={false} />
      <div
        className={`${styles.containD} widthScreen flex flex-direction-column flex-align-flex-start`}
      >
        <div
          style={{ width: "100%" }}
          className={`${styles.title} flex flex-direction-column flex-align-center`}
        >
          Trending Now
          <hr
            style={{
              width: "100px",
              height: "3px",
              border: "none",
              background: "#78bcc4",
              marginTop: "15px",
            }}
          />
        </div>
        <SwiperReview CARDITEM_SWIPER={CARDITEM_SWIPER} />
      </div>
      <Collection gender={true} />
      <ListCard data={DATA_CARDITEMSALE} sale={true} />
      <div
        className={`${styles.containB} flex flex-direction-column flex-align-center flex-justify-center`}
      >
        <div
          className="flex flex-direction-column flex-align-flex-end widthScreen"
          style={{ gap: "20px", margin: "100px 0" }}
        >
          <img
            src={shoes2}
            alt=""
            style={{
              width: "450px",
              height: "auto",
              borderRadius: "10px",
            }}
          />
          <div
            className="flex flex-direction-column flex-align-center flex-justify-center"
            style={{ gap: "20px" }}
          >
            <span className={`${styles.titleImg}`}>
              Explore Our Shoes Collection Now!
            </span>
            <Button variant="outlined" className={`${styles.btnRegisterNow} `}>
              REGISTER NOW
            </Button>
          </div>
        </div>
      </div>
      <div className={`${styles.containC}`}>
        <div className="widthScreen flex flex-align-center flex-justify-space-between">
          {DATA_SERVICE.map((item) => {
            return (
              <ServiceOfShop
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ContentHome = () => {
  return (
    <div
      className={`${styles.contentHome} flex flex-direction-column flex-justify-center flex-align-center`}
    >
      <div
        className="flex flex-direction-column flex-justify-center flex-align-center"
        style={{ rowGap: "30px" }}
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
            textAlign: "center",
          }}
        >
          Every day is a canvas waiting to be painted with the beauty of life!
        </span>
        <span
          style={{
            fontFamily: "cursive",
            fontSize: "14px",
            width: "750px",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Experience effortless style with our Casual & Everyday collection:
          chic comfort, classic denim, and soft essentials for your daily
          fashion journey
        </span>
        <Button variant="outlined" className={`${styles.btnRegisterNow} `}>
          REGISTER NOW
        </Button>
      </div>
    </div>
  );
};

const headerProps = {
  image: bgHome,
  element: <ContentHome />,
};

// Chỉ xuất một lần với HOC áp dụng
export default withLayout(Home, headerProps);

const ListCard = (props: any) => {
  const { data, sale } = props;
  return (
    <div className={`${styles.containA} widthScreen`}>
      <Grid container gap={7}>
        <Grid item justifyContent="space-between" md={12}>
          <div
            className={`${styles.title} flex flex-direction-column flex-align-center`}
          >
            {sale ? "Product Is On Sale" : "Most Popular"}
            <hr
              style={{
                width: "100px",
                height: "3px",
                border: "none",
                background: "#78bcc4",
                marginTop: "15px",
              }}
            />
          </div>
        </Grid>
        <Grid
          container
          item
          md={12}
          justifyContent="space-between"
          style={{ paddingTop: "0px" }}
        >
          {data.map((item: any) => {
            return (
              <CardItem
                size={item.small}
                badge={item.badge}
                image={item.image}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid
        container
        flex={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item>
          <Button variant="outlined" className={`${styles.btnSeeAll} `}>
            SEE ALL
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const Collection = (props: { gender: boolean }) => {
  const { gender } = props;
  return (
    <div
      className={`${styles.containC} ${
        gender ? styles.man : styles.women
      } widthScreen flex flex-align-center`}
    >
      <div
        className="flex flex-direction-row flex-align-center flex-justify-center"
        style={{
          backgroundImage: `${
            gender
              ? "linear-gradient(to left bottom, #58565f, #6e656c, #817679, #938887, #a39b96, #aba49e, #b2ada6, #b9b7ae, #bab8ae, #bcb9ae, #bdbbae, #bebcae"
              : "linear-gradient(to right bottom, #4734ba, #2e3aa9, #1b3c97, #153c82, #1b3a6c, #264870, #365573, #496175, #698492, #8fa8b0, #b7cdcf, #e3f2f1)"
          }`,
          width: "1000px",
          height: "650px",
          position: "relative",
          zIndex: "-1",
          marginTop: "40px",
        }}
      >
        <img
          src={gender ? clothes_model2 : clothes_model1}
          alt=""
          style={{
            width: "500px",
            height: "624px",
            objectFit: "cover",
            bottom: "60px",
            position: "absolute",
            boxShadow: "9px -5px 20px 0px #000",
          }}
        />
      </div>
      <div
        className={`flex flex-direction-column ${
          gender ? "flex-align-flex-end" : "flex-align-flex-start"
        }`}
        style={
          gender
            ? {
                width: "700px",
                position: "relative",
                gap: "10px",
                left: "40px",
              }
            : {
                width: "700px",
                position: "relative",
                gap: "10px",
                right: "57px",
              }
        }
      >
        <span className="font-s">{gender ? "Men" : "Women"}</span>
        <span
          style={{
            fontSize: "32px",
            fontWeight: "700",
            letterSpacing: "5px",
          }}
        >
          Style collection
        </span>
        <span
          className="font-s"
          style={gender ? { textAlign: "right" } : { textAlign: "left" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
          temporary, congue justo at, lobortis orci. Aliquam venenatis dui
          lectus, eu convallis turpis convallis et. Pelentesque.
        </span>
        <Button variant="contained" className={`${styles.btnViewCollection} `}>
          VIEW COLLECTIONS
        </Button>
      </div>
    </div>
  );
};

export const ServiceOfShop = (props: any) => {
  const { title, content, icon } = props;
  return (
    <div
      className="flex flex-direction-column flex-align-center"
      style={{
        width: "250px",
        gap: "15px",
        height: "200px",
      }}
    >
      <span>{icon}</span>
      <h2 style={{ fontFamily: "serif", fontStyle: "italic" }}>{title}</h2>
      <span>{content}</span>
    </div>
  );
};
