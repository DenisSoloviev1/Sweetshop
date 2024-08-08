import React from "react";
import classes from "./Feedback.module.scss";
import quotes from "../../assets/image/quotes.png";

interface FeedbackProps {
  title: string;
  text: string;
  photo: string;
  name: string;
  city: string;
}

const Feedback: React.FC<FeedbackProps> = ({
  title,
  text,
  photo,
  name,
  city,
}) => {
  return (
    <div className="container">
      <div className={classes.info}>
        <img src={quotes} />

        <h2 className={classes.title}>{`«${title}»`}</h2>

        <div className={classes.text}>
          <p>{`«${text}»`}</p>
          <a href="#">Читать отзыв полностью</a>
        </div>
      </div>
      <div className={classes.person}>
        <img src={photo} alt="фото комментатора" />

        <h3>{name}</h3>

        <span>{city}</span>
      </div>
    </div>
  );
};

export default Feedback;
