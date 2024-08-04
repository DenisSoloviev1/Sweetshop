import React from "react";
import classes from "./Header.module.scss";
import { Places } from "../../assets/svg.module";
import { Call } from "../../assets/svg.module";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.header__content}>
          <span className={classes.title}>
            <p>Сладкий сундук</p>
          </span>

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
                  <p>
                    <a href="tel:88128449549">8 (812) 844-95-49</a>
                  </p>
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
