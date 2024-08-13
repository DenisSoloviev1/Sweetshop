import React, { useState } from "react";
import classNames from "classnames";
import classes from "./FeedbackCarousel.module.scss";
import Feedback from "../../components/Feedback/Feedback";

interface ArrayFeedback {
  id: string;
  title: string;
  text: string;
  photo: string;
  name: string;
  city: string;
}

interface FeedbackCarouselProps {
  arrayFeedback: ArrayFeedback[];
}

const FeedbackCarousel: React.FC<FeedbackCarouselProps> = ({
  arrayFeedback,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === arrayFeedback.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arrayFeedback.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={classes.carousel}>
      <div
        className={classes.carouselSlides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {arrayFeedback.map((feedback, index) => (
          <div
            key={feedback.id}
            className={classNames(classes.carouselSlide, {
              [classes.active]: index === currentIndex,
            })}
          >
            <Feedback
              title={feedback.title}
              text={feedback.text}
              photo={feedback.photo}
              name={feedback.name}
              city={feedback.city}
            />
          </div>
        ))}
      </div>

      <div className={classes.switch}>
        <button
          className={classNames(classes.carouselButton, classes.prev)}
          onClick={prevSlide}
        >
          &#10094;
        </button>

        <button
          className={classNames(classes.carouselButton, classes.next)}
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
