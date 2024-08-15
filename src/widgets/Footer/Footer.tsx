import React from "react";
import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className="container containerCenter">
        <div className={classes.links}>
          <a href="" target="_blanck">
            Согласие на обработку данных
          </a>
          <a href="" target="_blanck">
            Служба поддержки
          </a>
          <a href="" target="_blanck">
            Политика конфиденциальности
          </a>
        </div>
      </div>

      <div className="container containerCenter">
        <p>
          © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 0000000000000
        </p>
      </div>
    </footer>
  );
};

export default Footer;
