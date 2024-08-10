import React from "react";

type CustomOptionProps = {
  option: string;
};

const CustomOption = ({ option }: CustomOptionProps) => {
  return <span>{option}</span>;
};

export default CustomOption;
