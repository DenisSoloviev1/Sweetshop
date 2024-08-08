import React from "react";
import classes from "./PastryCard.module.scss";
import CustomButton from "../CustomButton/CustomButton.tsx";

interface CardProps {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ id, image, name, description, price }) => {
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
          <CustomButton text={"Заказать"} className={"small"} />
        </div>
      </div>
    </figure>
  );
};

export default Card;
