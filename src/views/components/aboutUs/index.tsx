import React from "react";
import { Grid } from "@mui/material";
import { withLayout } from "../../../layout";

import bgAboutUs from "../../../assets/image/aboutus.jpg";

import styles from "./aboutUs.module.scss";

const AboutUs = () => {
  return (
    <div
      className={`${styles.aboutUs} flex flex-direction-column flex-align-center`}
    >
      <div className="widthScreen">
        <Grid container gap={10} sx={{ padding: "50px 0px" }}>
          <Grid
            container
            item
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              <div className={styles.title}>
                From Vision To Vogue: The Birth Of FemmeWardrobe
              </div>
            </Grid>
            <Grid item xs={7}>
              <div
                className={`${styles.storyContainer} flex flex-direction-column flex-justify-start`}
              >
                <span className={styles.subtitle}>OUR STORY</span>
                <div className={styles.intro}>
                  Our Journey Began With A Simple Yet Powerful Vision - To
                  Redefine The Way People Experience Fashion.
                </div>
                <div className={styles.description}>
                  Fueled by a passion for style and a commitment to
                  individuality, we embarked on a mission to curate a collection
                  that speaks to the diverse tastes and personalities of our
                  cherished customers. From our humble beginnings to the vibrant
                  online space we inhabit today, each milestone represents a
                  chapter in our story. Join us on this fashion-forward
                  adventure, where every piece tells a tale of inspiration,
                  dedication, and sartorial elegance.
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container item sx={{ borderBottom: "1px solid #000" }}></Grid>
          <Grid container item>
            <Grid item>
              <div
                className={`${styles.storyContainer} flex flex-direction-column flex-justify-start`}
              >
                <span className={styles.subtitle}>QUALITY ASSURANCE</span>
                <div className={styles.title}>
                  We Understand That Fashion Is An Expression Of Identity, And
                  We Take Pride In Delivering Products That Embody The Highest
                  Standards Of Quality.
                </div>
                <div className={styles.description}>
                  Our journey to excellence begins with meticulous sourcing,
                  where we carefully select materials that meet our stringent
                  criteria for durability, comfort, and style. Every garment is
                  crafted with precision in our state-of-the-art manufacturing
                  facilities, ensuring attention to detail at every stitch. Our
                  commitment to quality doesn't end there – rigorous quality
                  control processes guarantee that each piece meets our exacting
                  standards before it finds its way to your wardrobe. Trust in
                  FemmeWardrobe for fashion that not only captures attention but
                  withstands the test of time.
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div
        className={`${styles.containerA} flex flex-direction-column flex-justify-center flex-align-center `}
      >
        <div className="widthScreen ">
          <Grid container sx={{ color: "white" }}>
            <Grid item xs={5}>
              <div className={`${styles.storyContainer} `}>
                <span className={styles.subtitle}>
                  CUSTOMER-CENTRIC APPROACH
                </span>
                <div className={styles.title}>
                  Beyond Fashion: Nurturing A Customer-Centric Experience
                </div>
                <div className={styles.description}>
                  We believe that the essence of our success lies in the
                  satisfaction of our customers. Our commitment to providing an
                  exceptional shopping experience goes beyond trends and styles
                  – it's about understanding and meeting the unique needs of
                  every individual who chooses FemmeWardrobe. From personalized
                  recommendations to hassle-free returns, we've crafted every
                  aspect of our service with you in mind. Our dedicated customer
                  support team is here to ensure your journey with us is
                  seamless, enjoyable, and exceeds your expectations. Join our
                  community of empowered fashion enthusiasts, where your
                  satisfaction is not just a priority; it's our passion.
                </div>
              </div>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

const ContentAbout = () => {
  return (
    <div
      className={`${styles.contentAboutUs} flex flex-direction-column flex-justify-center flex-align-center`}
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
            textAlign: "center",
          }}
        >
          About us
        </span>
      </div>
    </div>
  );
};

const headerProps = {
  image: bgAboutUs,
  element: <ContentAbout />,
};

export default withLayout(AboutUs, headerProps);
