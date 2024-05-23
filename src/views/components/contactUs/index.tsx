import React from "react";
import { withLayout } from "../../../layout";
import bgContactUs from "../../../assets/image/home.png";
const ContactUs = () => {
  return <div>ContactUs</div>;
};

const ContentAbout = () => {
  return (
    <div
      className={` flex flex-direction-column flex-justify-center flex-align-center`}
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
