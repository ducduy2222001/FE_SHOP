import React from "react";
import { emptyBox } from "../../../assets/image";

const NoResults = () => {
  return (
    <div className="flex flex-justify-center" style={{ width: "100%" }}>
      <div className="flex flex-direction-column flex-align-center">
        <img
          src={emptyBox}
          alt="no results"
          style={{ width: "100px", height: "auto" }}
        />
        <div>Sorry, we couldn't find any results</div>
      </div>
    </div>
  );
};

export default NoResults;
