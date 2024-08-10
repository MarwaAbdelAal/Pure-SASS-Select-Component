import React from "react";
import styles from "./CustomOption.module.scss";

type CustomOptionProps = {
  option: string;
};

const CustomOption = ({ option }: CustomOptionProps) => {
  console.log(option);
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
