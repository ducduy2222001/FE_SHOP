import React from "react";
import styles from "./logo.module.scss";
import "../../scss/common.scss";
const NAME_BRANCH = {
  name1: "Luxury",
  name2: "Clothes",
};

function Logo(color: any) {
  return (
    <div
      className={`${styles.logo} flex flex-align-center flex-direction-column flex-justify-center`}
      style={{ color: `${color ? "var($color-white)" : "var($color-black)"}` }}
    >
      <span className={`${styles.nameBranch2}`}>{NAME_BRANCH.name1}</span>
      <span className={`${styles.nameBranch1}`}>{NAME_BRANCH.name2}</span>
      <hr style={{ width: "50px", marginTop: "5px" }} />
    </div>
  );
}

export default Logo;
