import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import classes from "./ScrollAnimation.module.scss";

interface ScrollAnimationProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  fromDirection?: "upperLeft" | "lowerLeft" | "upperRight" | "lowerRight"; // Направление анимации
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  style,
  fromDirection = "left",
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInViewport =
        rect.top < window.innerHeight &&
        rect.bottom >= 0 &&
        rect.left < window.innerWidth &&
        rect.right >= 0;
      setIsVisible(isInViewport);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initialTransform = () => {
    switch (fromDirection) {
      case "upperLeft":
        return "translateX(50px) translateY(50px)"; // Смещение в верхний левый угол
      case "lowerLeft":
        return "translateX(50px) translateY(-50px)"; // Смещение в нижний левый угол
      case "upperRight":
        return "translateX(-50px) translateY(50px)"; // Смещение в верхний правый угол
      case "lowerRight":
        return "translateX(-50px) translateY(-50px)"; // Смещение в нижний правый угол
      default:
        return "translateX(0) translateY(0)";
    }
  };

  return (
    <div
      ref={ref}
      className={classNames(
        classes.scrollAnimation,
        isVisible ? classes.visible : classes.hidden
      )}
      style={{
        ...style,
        transform: isVisible
          ? "translateX(0) translateY(0)"
          : initialTransform(),
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
