import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { ConfigProvider, Table, TableColumnsType } from "antd";
import { withLayout } from "../../../layout";
import { ButtonCustom } from "../../../common/components/button";

import { contactUs } from "../../../assets/image";
import styles from "./cart.module.scss";
interface DataType {
  key: React.Key;
  image: ReactNode;
  product: string;
  price: number;
  quality: number;
  provisional: string;
  delete: ReactNode;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Image",
    dataIndex: "image",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quality",
    dataIndex: "quality",
  },
  {
    title: "Provisional",
    dataIndex: "provisional",
  },
  {
    title: "Action",
    dataIndex: "delete",
  },
];

const data: DataType[] = [];
for (let i = 1; i < 20; i++) {
  data.push({
    key: i,
    image: <img src={contactUs} style={{ width: "70px", height: "70px" }} />,
    product: `Edward King ${i}`,
    price: 32,
    quality: i * 70,
    provisional: `$ ${i * 10}`,
    delete: <Button variant="outlined">Delete</Button>,
  });
}

export const Cart = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"50px 0"}
    >
      <div
        className="padding-layout flex flex-direction-column"
        style={{ rowGap: "30px", width: "100%" }}
      >
        <h1>Cart</h1>
        <Paper>
          <ConfigProvider
            theme={{
              token: {
                fontSize: 16,
                padding: 12,
              },
            }}
          >
            <Table dataSource={data} columns={columns} />
          </ConfigProvider>
        </Paper>
        <Grid container direction={"row"} justifyContent={"right"}>
          <Grid item xs={6}>
            <Paper sx={{ border: "1px solid #78bcc4" }}>
              <Box borderBottom="1px solid var(--color-gray)">
                <Typography
                  variant="h4"
                  fontWeight={"600"}
                  component={"div"}
                  padding={"20px"}
                >
                  Total cart
                </Typography>
              </Box>
              <Grid item>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  padding={"10px 20px"}
                >
                  <Typography
                    variant="h6"
                    component="span"
                    fontWeight={"600"}
                    fontSize={"18px"}
                  >
                    Total:
                  </Typography>
                  <Typography
                    variant="h6"
                    component="span"
                    fontWeight={"600"}
                    fontSize={"18px"}
                  >
                    $1000
                  </Typography>
                </Box>
                <Box padding={"20px 20px"}>
                  <ButtonCustom
                    variant="outlined"
                    size="large"
                    className={styles.btnPayment}
                    onClick={() => {
                      navigate("/checkout");
                    }}
                    text="Proceed with payment"
                    style={{
                      width: "100%",
                      padding: "10px 30px",
                      color: "var(--color-blue-music)",
                      borderColor: "var(--color-blue-music)",
                    }}
                  />
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default withLayout(Cart, {});
