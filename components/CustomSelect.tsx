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
    if (multiple) {
      if (selectedOptions.includes(key)) {
        setSelectedOptions(selectedOptions.filter((option) => option !== key));
      } else {
        setSelectedOptions([...selectedOptions, key]);
      }
    } else {
      setSelectedOptions([key]);
      setIsOpen(false);
    }
  };

  const renderSelectedValues = () =>
    selectedOptions.map((key) => (
      <span key={key} className={`${styles["selected-item"]} ${key}`}>
        {options.find((option) => option.key === key)?.component}
      </span>
    ));

  return (
    <div className={styles["select-container"]}>
      <div className={styles["dropdown"]} onClick={toggleDropdown}>
        <span className={styles["dropdown-label"]}>{label}:</span>
        <div className={styles["selected-values"]}>
          {selectedOptions.length > 0 ? renderSelectedValues() : "Select..."}
        </div>
      </div>
      {isOpen && (
        <div className={styles["options-list"]}>
          {options.map((option) => (
            <div
              key={option.key}
              className={styles["option-item"]}
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
