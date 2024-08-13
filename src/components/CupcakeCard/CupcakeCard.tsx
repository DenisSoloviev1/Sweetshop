import React from "react";
import classes from "./CupcakeCard.module.scss";
import CustomButton from "../CustomButton/CustomButton.tsx";

interface CupcakeCardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
  onClick: () => void;
}

const CupcakeCard: React.FC<CupcakeCardProps> = ({ id, image, name, description, price, onClick }) => {
  return (
    <figure className={classes.card}>
      <img id={id} src={image} alt="photo" />

      <div className={classes.content}>
        <div className={classes.info}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>

        <div className={classes.priceAndButton}>
          <span className={classes.price}>
            <p>{price} ₽/шт.</p>
          </span>
          <CustomButton text={"Заказать"} className={"small"} onClick={onClick}/>
        </div>
      </div>
    </figure>
  );
};

export default CupcakeCard;
