import React from "react";
import classes from "./Title.module.scss";

interface TitleProps {
  text: string;
}
const Title: React.FC<TitleProps> = ({ text }) => {
  return <div className={classes.title}>{text}</div>;
};

export default Title;
