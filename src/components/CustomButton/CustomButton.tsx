import React from "react";
import classNames from "classnames";
import classes from "./CustomButton.module.scss";

interface CustomButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ className, text, onClick }) => {
  return (
    <button className={classNames(classes.button, className && classes[className])} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;