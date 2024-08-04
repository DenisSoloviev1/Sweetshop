import React from "react";
import classes from "./Card.module.scss";
import CustomButton from "../CustomButton/CustomButton";

interface CardProps {
  image: string;
  name: string;
  description: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ image, name, description, price }) => {
  return (
    <figure className={classes.card}>
      <img src={image} alt="photo" />

      <div className={classes.content}>
        <div className={classes.info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>

        <div className={classes.priceAndButton}>
          <span className={classes.price}>
            <p>{price} ₽/шт.</p>
          </span>
          <CustomButton text={"Заказать"} className="small" />
        </div>
      </div>
    </figure>
  );
};

export default Card;
