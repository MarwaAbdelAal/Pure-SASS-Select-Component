import React from "react";
import styles from "./CustomOption.module.scss";

type CustomOptionProps = {
  option: string;
};

const CustomOption = ({ option }: CustomOptionProps) => {
  return (
    <div className={styles.container}>
      <span
        className={`${styles.customOption} ${styles[option.toLowerCase()]}`}
      >
        {option}
      </span>
    </div>
  );
};

export default CustomOption;
