"use client";
import React, { useState } from "react";
import styles from "./CustomSelect.module.scss";
import { option } from "@/types/selectOption";

type CustomSelectProps = {
  options: option[];
  label: string;
  multiple?: boolean;
};

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  multiple = false,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (key: string) => {
    setSelectedOptions((prevSelected) =>
      multiple
        ? prevSelected.includes(key)
          ? prevSelected.filter((option) => option !== key)
          : [...prevSelected, key]
        : [key]
    );
    if (!multiple) setIsOpen(false);
  };

  const renderSelectedValues = () =>
    selectedOptions.map((key) => (
      <span key={key}>
        {options.find((option) => option.key === key)?.component}
      </span>
    ));

  return (
    <div className={styles["select-container"]}>
      <div
        className={`${styles["dropdown"]} ${isOpen ? styles["open"] : ""}`}
        onClick={toggleDropdown}
      >
        <span
          className={`${styles["dropdown-label"]} ${
            isOpen || selectedOptions.length > 0 ? styles["floating"] : ""
          }`}
        >
          {label}
        </span>
        <div className={styles["selected-values"]}>
          {renderSelectedValues()}
        </div>
        <span
          className={`${styles["arrow"]} ${isOpen ? styles["open"] : ""}`}
        ></span>
      </div>
      {isOpen && (
        <div className={styles["options-list"]}>
          {options.map((option) => (
            <div
              key={option.key}
              className={`${styles["option-item"]} ${
                selectedOptions.includes(option.key) ? styles["selected"] : ""
              }`}
              onClick={() => handleOptionClick(option.key)}
            >
              {option.component}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
