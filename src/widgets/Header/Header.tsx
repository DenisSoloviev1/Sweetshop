import React from "react";
import classes from "./Header.module.scss";
import { Places } from "../../assets/svg/svg.tsx";
import { Call } from "../../assets/svg/svg.tsx";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.content}>
          <span className={classes.title}>Сладкий сундук</span>

          <div className={classes.wrap}>
            <div className={classes.address}>
              <Places />
              <p>
                г. Санкт Петербург,
                <br /> ул. Куйбышева 31
              </p>
            </div>

            <div className={classes.contact}>
              <Call />
              <div>
                <span className={classes.phone}>
                  <a href="tel:88128449549">8 (812) 844-95-49</a>
                </span>
                <p>Ежедневно с 9:00 до 20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
