import React from "react";

import styles from "./footer.module.scss";
import Logo from "../../../common/components/logo/Logo";

const TITLES = {
  introduction: "Introduction",
  information: "Information of store",
  customerPolicy: "Customer service",
  socialMedia: "Social media",
};

const INTRODUCTION = [
  {
    id: 1,
    content:
      " Clothes Luxury, where sophistication and elegance converge in every design. At Clothes Luxury, we take pride in offering our customers a collection of high-end fashion, meticulously selected from the world's leading designers.",
  },
  {
    id: 2,
    content:
      "  Visit us to experience attentive customer service and enjoy a shopping space of distinction, where each visit is a journey of discovery into the beauty of fashion.",
  },
];

const INFORMATION = [
  {
    id: 1,
    address: "Ha Noi",
  },
  {
    id: 2,
    address: "Da Nang",
  },
  {
    id: 3,
    address: "Sai Gon",
  },
];

const CUSTOMERPOLICY = [
  { id: 1, policy: "Customer loyalty policy" },
  { id: 2, policy: "Return policy" },
  { id: 3, policy: "Privacy Policy" },
  { id: 4, policy: "Warranty Policy" },
  { id: 5, policy: "Frequently asked questions" },
  { id: 6, policy: "Guide to check membership tier" },
  { id: 7, policy: "Instructions for online shopping" },
];

const SOCIALMEDIA = [
  { id: 1, social: "Facebook" },
  { id: 2, social: "Twitter" },
  { id: 3, social: "Instagram" },
];

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${styles.gridContainer}`}>
      <div
        className={`${styles.introduction} flex flex-direction-column flex-align-flex-start`}
      >
        <Logo color={false} />
        <h3 style={{ fontSize: "20px" }}>{TITLES.introduction}</h3>
        {INTRODUCTION.map((item) => {
          return (
            <div
              key={item.id}
              className="text-align-left flex flex-direction-column"
            >
              {item.content}
            </div>
          );
        })}
      </div>
      <div
        className={`${styles.information} flex flex-direction-column flex-align-flex-start`}
      >
        <h3 style={{ fontSize: "20px" }}>{TITLES.information}</h3>
        {INFORMATION.map((item) => {
          return (
            <div
              key={item.id}
              className="text-align-left flex flex-direction-column"
            >
              {item.address}
            </div>
          );
        })}
      </div>
      <div
        className={`${styles.customerPolicy} flex flex-direction-column flex-align-flex-start`}
      >
        <h3 style={{ fontSize: "20px" }}>{TITLES.customerPolicy}</h3>
        {CUSTOMERPOLICY.map((item) => {
          return (
            <div
              key={item.id}
              className="text-align-left flex flex-direction-column"
            >
              {item.policy}
            </div>
          );
        })}
      </div>
      <div
        className={`${styles.socialMedia} flex flex-direction-column flex-align-flex-start`}
      >
        <h3 style={{ fontSize: "20px" }}>{TITLES.socialMedia}</h3>
        {SOCIALMEDIA.map((item) => {
          return (
            <div
              key={item.id}
              className="text-align-left flex flex-direction-column"
            >
              {item.social}
            </div>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
