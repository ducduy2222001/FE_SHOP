import React from "react";
import {
  LockOutlined,
  LocalShippingOutlined,
  AutorenewOutlined,
  ShareLocationOutlined,
} from "@mui/icons-material";

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
const ListServiceOfShop = () => {
  return (
    <div
      className=" flex flex-align-center flex-justify-space-between"
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
  );
};

const ServiceOfShop = (props: any) => {
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
      <span style={{ textAlign: "center" }}>{content}</span>
    </div>
  );
};

export default ListServiceOfShop;
