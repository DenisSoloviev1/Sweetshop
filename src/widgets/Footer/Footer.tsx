import React from "react";
import classes from "./Footer.module.scss";

import { arrayCloud } from "../../assets/image/images.tsx";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img src={arrayCloud[4].image} className={classes.cloud} />
    </footer>
  );
};

export default Footer;
