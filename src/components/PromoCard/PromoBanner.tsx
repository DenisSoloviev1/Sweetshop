import React from "react";
import classNames from "classnames";
import classes from "./PromoBanner.module.scss";
import CustomButton from "../CustomButton/CustomButton";

interface PromoBannerProps {
  label: string;
  title: string;
  description?: string;
  child?: React.ReactNode;
  buttonText: string;
  subText?: string;
  className?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({
  label,
  title,
  description,
  child,
  buttonText,
  subText,
  className,
}) => {
  return (
    <div className={classes.promoBanner}>
      <header className={classNames(classes.info, className && classes[className])}>
        <div className={classes.label}>{label}</div>

        <h2>{title}</h2>

        <p>{description}</p>
        {child}
      </header>

      <div className={classes.textAndButton}>
        <CustomButton text={buttonText} />
        <span>{subText}</span>
      </div>
    </div>
  );
};

export default PromoBanner;
