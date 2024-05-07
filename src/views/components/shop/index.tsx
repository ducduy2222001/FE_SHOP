import React, { useState } from "react";
import { withLayout } from "../../../layout";

import bgShop from "../../../assets/image/shop.png";

import "../../../assets/scss/common.scss";
import styles from "./shop.module.scss";
import { Grid } from "@mui/material";
import { Button, Form, Select } from "antd";

interface Option {
  label: string;
  value: string;
}

interface Select {
  defaultValue: string;
  options: Option[];
}

interface Selects {
  [key: string]: Select;
}

const selects: Selects = {
  0: {
    defaultValue: "Size",
    options: [
      {
        label: "S",
        value: "s",
      },
      {
        label: "M",
        value: "m",
      },
      {
        label: "L",
        value: "l",
      },
      {
        label: "XL",
        value: "xl",
      },
    ],
  },
  1: {
    defaultValue: "Color",
    options: [
      {
        label: "RED",
        value: "red",
      },
      {
        label: "WHITE",
        value: "white",
      },
      {
        label: "BLACK",
        value: "black",
      },
      {
        label: "GRAY",
        value: "gray",
      },
      {
        label: "GREEN",
        value: "green",
      },
    ],
  },
};

function Shop() {
  const [form] = Form.useForm();

  const handleChange = (name: any, value: any) => {
    form.setFieldValue(name, value);
  };

  const onFinish = () => {
    const values = form.getFieldsValue();
    console.log("Received values:", values);
  };

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
              <Form layout="inline" form={form} onFinish={onFinish}>
                {Object.keys(selects).map((key) => (
                  <Form.Item name={selects[key].defaultValue}>
                    <Select
                      defaultValue={selects[key].defaultValue}
                      className="btn-select"
                      size="large"
                      options={selects[key].options}
                      onChange={(name, value) => handleChange(name, value)}
                    />
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    ghost={true}
                    style={{
                      color: "#002c3e",
                      borderColor: "#002c3e",
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: "100vh" }}></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

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
