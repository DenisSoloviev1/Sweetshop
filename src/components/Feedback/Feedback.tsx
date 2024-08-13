import React, { useState } from "react";
import classes from "./Feedback.module.scss";
import quotes from "../../assets/image/quotes.png";

interface FeedbackProps {
  title: string;
  text: string;
  photo: string;
  name: string;
  city: string;
  maxLength?: number;
}

const Feedback: React.FC<FeedbackProps> = ({
  title,
  text,
  photo,
  name,
  city,
  maxLength = 350,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText =
    isExpanded || text.length <= maxLength
      ? text
      : text.slice(0, maxLength) + "...";

  return (
      <div className={classes.feedback}>
        <div className={classes.info}>
          <img src={quotes} alt="quotes" />

          <h3 className={classes.title}>{`«${title}»`}</h3>

          <div className={classes.text}>
            <p>{`«${displayedText}»`}</p>
            {text.length > maxLength && (
              <a onClick={toggleExpand}>
                {isExpanded ? "Скрыть" : "Читать отзыв полностью"}
              </a>
            )}
          </div>
        </div>

        <div className={classes.person}>
          <img src={photo} alt="фото комментатора" className={classes.avatar} />

          <div className={classes.bio}>
            <h3>{name}</h3>
            <span>{city}</span>
          </div>
        </div>
      </div>
  );
};

export default Feedback;
