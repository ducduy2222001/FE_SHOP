import React from "react";
import { withLayout } from "../../../layout";
import bgAboutUs from "../../../assets/image/aboutus.jpg";

import styles from "./aboutUs.module.scss";
import { Grid } from "@mui/material";

const AboutUs = () => {
  return (
    <div
      className={`${styles.aboutUs} flex flex-direction-column flex-align-center`}
    >
      <div className="widthScreen">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "50px 0px" }}
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
                Fueled by a passion for style and a commitment to individuality,
                we embarked on a mission to curate a collection that speaks to
                the diverse tastes and personalities of our cherished customers.
                From our humble beginnings to the vibrant online space we
                inhabit today, each milestone represents a chapter in our story.
                Join us on this fashion-forward adventure, where every piece
                tells a tale of inspiration, dedication, and sartorial elegance.
              </div>
            </div>
          </Grid>
        </Grid>
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
