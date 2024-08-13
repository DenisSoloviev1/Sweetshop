import React from "react";
import classes from "./ModalWindow.module.scss";
import CustomButton from "../CustomButton/CustomButton.tsx";
import { Telegram } from "../../assets/svg/svg.tsx";
import { WhatsApp } from "../../assets/svg/svg.tsx";

interface ModalWindowProps {
  show: boolean;
  handleClose: () => void;
}

const ModalWindow: React.FC<ModalWindowProps> = ({ show, handleClose }) => {
  return (
    <div
      className={`${classes.modalWindow} ${show ? classes.show : ""}`}
      onClick={handleClose}
    >
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        <h2>Выберите где продолжить</h2>

        <div className={classes.wrapper}>
          <a
            href="https://t.me/sweet_chest"
            className={classes.messenger}
            target="_blank"
          >
            <Telegram />
            <h3>Telegram</h3>
          </a>

          <a
            href="https://wa.me/79384350750"
            className={classes.messenger}
            target="_blank"
          >
            <WhatsApp />
            <h3>WhatsApp</h3>
          </a>
        </div>
        <CustomButton
          className={"small"}
          text={"Закрыть"}
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default ModalWindow;
