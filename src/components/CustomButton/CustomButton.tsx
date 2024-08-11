import React from "react";
import classNames from "classnames";
import classes from "./CustomButton.module.scss";

interface CustomButtonProps {
  className: string;
  text: string;
  targetId?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  text,
  targetId,
  onClick,
}) => {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView();
      }
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={classNames(classes.button, className && classes[className])}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
