import React from "react";
import styles from "./logo.module.scss";
const NAME_BRANCH = {
  name1: "Luxury",
  name2: "Clothes",
};

function Logo() {
  return (
    <div
      className={`${styles.logo} flex flex-align-center flex-direction-column flex-justify-center`}
    >
      <span className={`${styles.nameBranch2}`}>{NAME_BRANCH.name1}</span>
      <span className={`${styles.nameBranch1}`}>{NAME_BRANCH.name2}</span>
      <hr style={{ width: "50px", marginTop: "5px" }} />
    </div>
  );
}

export default Logo;
