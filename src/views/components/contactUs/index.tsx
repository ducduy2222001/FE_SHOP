import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { withLayout } from "../../../layout";
import Map from "../../../common/components/mapLeaflet";
import { DATA_SERVICE, ServiceOfShop } from "../home";

import bgContactUs from "../../../assets/image/image1.png";

import styles from "./contactUs.module.scss";

const ContactUs = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const text = data.get("text");

    console.log({
      email: email,
      text: text,
    });
  };
  return (
    <div
      className={`${styles.contactUs} flex flex-direction-column flex-align-center`}
    >
      <div className="widthScreen">
        <Grid container gap={5} sx={{ padding: "50px 0px" }}>
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <div className={styles.title}>GET IN TOUCH </div>
            </Grid>
            <Grid item>
              <div className={styles.content}>
                We Value The Connection With Our Community And Are Here To
                Assist In Any Way We Can. Feel Free To Reach Out Through The
                Following Channels:
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                textAlign: "center",
                width: "600px",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontFamily: "serif",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                CONTACT US
              </Typography>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                type="email"
              />
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Map />
      <div
        className="widthScreen flex flex-align-center flex-justify-space-between"
        style={{ paddingTop: "50px" }}
      >
        {DATA_SERVICE.map((item, index) => {
          return (
            <ServiceOfShop
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
};

const ContentAbout = () => {
  return (
    <div
      className={`${styles.contentContact} flex flex-direction-column flex-justify-center flex-align-center`}
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
            fontWeight: "600",
            fontFamily: "serif",
            textAlign: "center",
          }}
        >
          Contact us
        </span>
      </div>
    </div>
  );
};

const headerProps = {
  image: bgContactUs,
  element: <ContentAbout />,
};

export default withLayout(ContactUs, headerProps);
