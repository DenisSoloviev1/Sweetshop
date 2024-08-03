import React from "react";
import classes from "./Header.module.scss";
import { Places } from "../../assets/svg.module";
import { Call } from "../../assets/svg.module";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <span className={classes.title}>
        <p>Сладкий сундук</p>
      </span>
      <div className={classes.address}>
        <Places />
        <p>
          г. Санкт Петербург,
          <br /> ул. Куйбышева 31
        </p>
      </div>
      <div className={classes.contact}>
        <Call />
        <div className={classes.wrap}>
          <span>
            <p>
              Телефон: <a href="tel:+78128449549">(812) 844-95-49</a>
            </p>
          </span>
          <p>Ежедневно с 9:00 до 20:00</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
