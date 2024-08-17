import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import classes from './ScrollAnimation.module.scss';

interface ScrollAnimationProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, style }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const element = document.getElementById("scrollAnimation");
    if (element) {
      const rect = element.getBoundingClientRect();
      const isInViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
      setIsVisible(isInViewport);
    }
  };

  useEffect(() => {
    handleScroll(); // Проверить видимость при загрузке
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='scrollAnimation' className={classNames(classes.scrollAnimation, isVisible ? classes.visible : classes.hidden)} style={style}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
