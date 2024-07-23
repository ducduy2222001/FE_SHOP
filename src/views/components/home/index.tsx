import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { withLayout } from "../../../layout";
import CardItem from "../../../common/components/card";
import SwiperReview from "../../../common/components/swiperReview";
import ListServiceOfShop from "../../../common/components/listServiceOfShop";

import { shoes2, modelWomen, modelMen, home } from "../../../assets/image";

import styles from "./home.module.scss";
import { ButtonCustom } from "../../../common/components/button";
import axiosClient from "../../../common/api/axiosClient";

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

const endpoints = {
  user: {
    getUser: "/user/14",
  },
};

export const getUser = () => {
  return axiosClient().get(endpoints.user.getUser);
};

const Home = () => {
  // const navigation = useNavigate();
  // React.useEffect(() => {
  //   getUser().catch((err) => {
  //     if (err.response.status === 401) {
  //       navigation("/login");
  //     }
  //   });
  // }, []);
  return (
    <div
      className={`${styles.home} flex flex-direction-column flex-align-center`}
    >
      <ListCard data={DATA_CARDITEM} sale={false} />
      <Collection gender={false} />
      <div
        className={`${styles.containD} flex flex-direction-column flex-align-flex-start`}
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
              background: "var(--color-blue-music)",
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
          className="flex flex-direction-column flex-align-flex-end "
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
            <ButtonCustom
              variant="outlined"
              text="REGISTER NOW"
              style={{
                padding: "20px 40px",
                borderColor: "var(--color-white)",
                color: "var(--color-white)",
              }}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.containC} widthScreen `}>
        <ListServiceOfShop />
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
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Experience effortless style with our Casual & Everyday collection:
          chic comfort, classic denim, and soft essentials for your daily
          fashion journey
        </span>
        <ButtonCustom
          variant="outlined"
          text="REGISTER NOW"
          style={{
            padding: "20px 40px",
            borderColor: "var(--color-white)",
            color: "var(--color-white)",
          }}
        />
      </div>
    </div>
  );
};

const headerProps = {
  image: home,
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
          <ButtonCustom
            variant="outlined"
            text="SEE ALL"
            className={`${styles.btnSeeAll}`}
            style={{
              padding: "15px 35px",
              color: "var(--color-blue-music)",
              borderColor: "var(--color-blue-music)",
              marginTop: "30px",
            }}
          />
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
          src={gender ? modelMen : modelWomen}
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
        <span className="font-l" style={{ fontWeight: "500" }}>
          {gender ? "Men" : "Women"}
        </span>
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
          className="font-m"
          style={gender ? { textAlign: "right" } : { textAlign: "left" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
          temporary, congue justo at, lobortis orci. Aliquam venenatis dui
          lectus, eu convallis turpis convallis et. Pelentesque.
        </span>
        <ButtonCustom
          variant="contained"
          className={`${styles.btnViewCollection}`}
          text="VIEW COLLECTIONS"
          style={{
            padding: "20px 40px",
            borderColor: "var(--color-white)",
            color: "var(--color-white)",
            marginTop: "20px",
          }}
        />
      </div>
    </div>
  );
};
