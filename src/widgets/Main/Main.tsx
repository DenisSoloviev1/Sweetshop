import React, { useState } from "react";
import classes from "./Main.module.scss";
import CupcakeCard from "../../components/CupcakeCard/CupcakeCard.tsx";
import PromoBanner from "../../components/PromoBanner/PromoBanner.tsx";
import FeedbackCarousel from "../FeedbackCarousel/FeedbackCarousel.tsx";
import CustomButton from "../../components/CustomButton/CustomButton.tsx";
import ModalWindow from "../../components/ModalWindow/ModalWindow.tsx";
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation.tsx";
//import img
import { arrayCloud } from "../../assets/data.tsx";
import { arrayCupcakeCard } from "../../assets/data.tsx";
import { arrayImgCupcake } from "../../assets/data.tsx";
import { arrayFeedback } from "../../assets/data.tsx";
import { Call } from "../../assets/svg/svg.tsx";
import woman from "../../assets/image/woman.png";
import berry from "../../assets/image/berry.png";
import leaf from "../../assets/image/leaf.png";
import leafGroup from "../../assets/image/leafGroup.png";

const Main: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };

  const inputClick = () => {
    const inputElement = document.getElementById("input");
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <main className={classes.main}>
      <section className={classes.sectionFirst}>
        <ScrollAnimation
          style={{
            position: "absolute",
            top: "150px",
            left: "0",
          }}
          fromDirection="upperLeft"
        >
          {<img src={berry} id={classes.obj1} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            top: "150px",
            right: "20px",
          }}
          fromDirection="upperRight"
        >
          {<img src={berry} id={classes.obj2} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            bottom: "20%",
            left: "50px",
          }}
          fromDirection="lowerLeft"
        >
          {<img src={leaf} id={classes.obj3} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            bottom: "25%",
            right: "10%",
          }}
          fromDirection="lowerRight"
        >
          {<img src={berry} id={classes.obj4} />}
        </ScrollAnimation>

        <div className="container">
          <PromoBanner
            label={"вкуснейшие"}
            title={
              "Пирожные и капкейки \n от 150 ₽/шт. с доставкой \n по Санкт Петербургу"
            }
            description={
              "Приготовим за 3 часа в день заказа. \n Доставка на авто вхолодильнике."
            }
            buttonText={"Перейти в каталог"}
            subText={"9 различных \n видов на выбор"}
            targetId={"catalog"}
          />
        </div>
        <img src={arrayCloud[1].image} className={classes.cloud} />
      </section>

      <section className={classes.sectionSecond}>
        <ScrollAnimation
          style={{
            position: "absolute",
            top: "15%",
            left: "7%",
            zIndex: "3",
          }}
          fromDirection="upperLeft"
        >
          {<img src={berry} id={classes.obj5} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            top: "50%",
            right: "30px",
            zIndex: "3",
          }}
          fromDirection="lowerLeft"
        >
          {<img src={leaf} id={classes.obj6} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            bottom: "20%",
            left: "70px",
            zIndex: "3",
          }}
          fromDirection="upperLeft"
        >
          {<img src={leaf} id={classes.obj7} />}
        </ScrollAnimation>

        <div className="container containerCenter">
          <h2>Для любых событий и дорогих вам людей</h2>
        </div>

        <div className="container containerCenter">
          <div className={classes.gridCupcakeCard} id="catalog">
            <CupcakeCard
              id={arrayCupcakeCard[0].id}
              image={arrayCupcakeCard[0].image}
              name={arrayCupcakeCard[0].name}
              description={arrayCupcakeCard[0].description}
              price={arrayCupcakeCard[0].price}
              onClick={handleClick}
            />
            <CupcakeCard
              id={arrayCupcakeCard[1].id}
              image={arrayCupcakeCard[1].image}
              name={arrayCupcakeCard[1].name}
              description={arrayCupcakeCard[1].description}
              price={arrayCupcakeCard[1].price}
              onClick={handleClick}
            />
            <CupcakeCard
              id={arrayCupcakeCard[2].id}
              image={arrayCupcakeCard[2].image}
              name={arrayCupcakeCard[2].name}
              description={arrayCupcakeCard[2].description}
              price={arrayCupcakeCard[2].price}
              onClick={handleClick}
            />
            <CupcakeCard
              id={arrayCupcakeCard[3].id}
              image={arrayCupcakeCard[3].image}
              name={arrayCupcakeCard[3].name}
              description={arrayCupcakeCard[3].description}
              price={arrayCupcakeCard[3].price}
              onClick={handleClick}
            />
            <CupcakeCard
              id={arrayCupcakeCard[4].id}
              image={arrayCupcakeCard[4].image}
              name={arrayCupcakeCard[4].name}
              description={arrayCupcakeCard[4].description}
              price={arrayCupcakeCard[4].price}
              onClick={handleClick}
            />
            <CupcakeCard
              id={arrayCupcakeCard[5].id}
              image={arrayCupcakeCard[5].image}
              name={arrayCupcakeCard[5].name}
              description={arrayCupcakeCard[5].description}
              price={arrayCupcakeCard[5].price}
              onClick={handleClick}
            />
            <CupcakeCard
              id={arrayCupcakeCard[6].id}
              image={arrayCupcakeCard[6].image}
              name={arrayCupcakeCard[6].name}
              description={arrayCupcakeCard[6].description}
              price={arrayCupcakeCard[6].price}
              onClick={handleClick}
            />
            <CupcakeCard
              id={arrayCupcakeCard[7].id}
              image={arrayCupcakeCard[7].image}
              name={arrayCupcakeCard[7].name}
              description={arrayCupcakeCard[7].description}
              price={arrayCupcakeCard[7].price}
              onClick={handleClick}
            />
            <CupcakeCard
              id={arrayCupcakeCard[8].id}
              image={arrayCupcakeCard[8].image}
              name={arrayCupcakeCard[8].name}
              description={arrayCupcakeCard[8].description}
              price={arrayCupcakeCard[8].price}
              onClick={handleClick}
            />
          </div>
        </div>
      </section>

      <section className={classes.sectionThird}>
        <ScrollAnimation
          style={{
            position: "absolute",
            top: "25%",
            left: "15%",
            zIndex: "3",
          }}
          fromDirection="upperLeft"
        >
          {<img src={leaf} id={classes.obj8} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            top: "20%",
            right: "7%",
            zIndex: "3",
          }}
          fromDirection="upperRight"
        >
          {<img src={berry} id={classes.obj9} />}
        </ScrollAnimation>

        <img src={arrayCloud[0].image} className={classes.cloud} />

        <div className="container containerEnd">
          <PromoBanner
            label={"Не нашли то что нужно?"}
            title={"Приготовим заказ \n любой сложности \n по фото или эскизу"}
            description={
              "Загрузите фотографию или эскиз капкейков \n и мы рассчитаем стоимость за 30 минут"
            }
            buttonText={"Загрузить фотографию"}
            onClick={handleClick}
          />
        </div>

        <img src={arrayCloud[1].image} className={classes.cloud} />
      </section>

      <section className={classes.sectionFourth}>
        <ScrollAnimation
          style={{
            position: "absolute",
            top: "15%",
            right: "35%",
          }}
          fromDirection="lowerRight"
        >
          {<img src={berry} id={classes.obj10} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            top: "15%",
            right: "10%",
          }}
          fromDirection="lowerLeft"
        >
          {<img src={leafGroup} id={classes.obj11} />}
        </ScrollAnimation>

        <div className="container">
          <PromoBanner
            label={"Не нашли то что нужно?"}
            title={
              "Лично приготовлю \n и всё красиво упакую \n для вашего события"
            }
            child={
              <ul>
                <li>
                  Проконсультирую по выбору капкейков <br />и придумаю
                  нестандартную идею
                </li>
                <li>
                  Приготовлю капкейки для вашего события, <br />
                  которые обязательно всем понравятся
                </li>
                <li>
                  Аккуратно и красиво всё упакую, если <br />
                  вы хотите сделать приятный подарок
                </li>
              </ul>
            }
            buttonText={"Задать вопрос Юлии"}
            className={"text-black"}
            onClick={handleClick}
          />

          <div className={classes.woman}>
            <div className={classes.parallelograms}>
              <div className={classes.name}> Юлия Кондратьева</div>
              <div className={classes.text}>ваш кондитер</div>
            </div>

            <img src={woman} alt="фото кондитера" />
          </div>
        </div>
      </section>

      <section className={classes.sectionFifth}>
        <ScrollAnimation
          style={{
            position: "absolute",
            top: "20%",
            left: "3%",
          }}
          fromDirection="upperLeft"
        >
          {<img src={leaf} id={classes.obj12} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            top: "28%",
            right: "7%",
            zIndex: "3",
          }}
          fromDirection="lowerRight"
        >
          {<img src={berry} id={classes.obj13} />}
        </ScrollAnimation>

        <img src={arrayCloud[2].image} className={classes.cloud} />

        <div className="container containerCenter">
          <h2>Почитайте отзывы довольных клиентов</h2>
        </div>

        <div className="container">
          <FeedbackCarousel arrayFeedback={arrayFeedback} />
        </div>

        <img src={arrayCloud[3].image} className={classes.cloud} />
      </section>

      <section className={classes.sectionSixth}>
        <div className="container containerCenter">
          <h2>Сделали более 3.000 заказов за 2 года</h2>
        </div>

        <div className="container containerCenter">
          <h3>
            Посмотрите фото реальных заказов из нашего &thinsp;
            <a href="https://www.instagram.com/sweet_chest" target="_blank">
              instagram
            </a>
          </h3>
        </div>

        <div className={classes.gridImgCupcake}>
          <img
            src={arrayImgCupcake[0].image}
            alt={`image: ${arrayImgCupcake[0].id}`}
          />
          <img
            src={arrayImgCupcake[1].image}
            alt={`image: ${arrayImgCupcake[1].id}`}
          />
          <img
            src={arrayImgCupcake[2].image}
            alt={`image: ${arrayImgCupcake[2].id}`}
          />
          <img
            src={arrayImgCupcake[3].image}
            alt={`image: ${arrayImgCupcake[3].id}`}
          />
          <img
            src={arrayImgCupcake[4].image}
            alt={`image: ${arrayImgCupcake[4].id}`}
          />
          <img
            src={arrayImgCupcake[5].image}
            alt={`image: ${arrayImgCupcake[5].id}`}
          />
          <img
            src={arrayImgCupcake[6].image}
            alt={`image: ${arrayImgCupcake[6].id}`}
          />
          <img
            src={arrayImgCupcake[7].image}
            alt={`image: ${arrayImgCupcake[7].id}`}
          />
          <img
            src={arrayImgCupcake[8].image}
            alt={`image: ${arrayImgCupcake[8].id}`}
          />
        </div>
      </section>

      <section className={classes.sectionSeventh}>
      <ScrollAnimation
          style={{
            position: "absolute",
            top: "23%",
            left: "5%",
            zIndex: "3",
          }}
          fromDirection="upperLeft"
        >
          {<img src={leaf} id={classes.obj14} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            top: "28%",
            right: "7%",
            zIndex: "3",
          }}
          fromDirection="upperRight"
        >
          {<img src={berry} id={classes.obj15} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            bottom: "5%",
            left: "7%",
            zIndex: "3",
          }}
          fromDirection="lowerLeft"
        >
          {<img src={berry} id={classes.obj16} />}
        </ScrollAnimation>

        <ScrollAnimation
          style={{
            position: "absolute",
            bottom: "3%",
            right: "7%",
            zIndex: "3",
          }}
          fromDirection="lowerRight"
        >
          {<img src={leaf} id={classes.obj17} />}
        </ScrollAnimation>

        <img src={arrayCloud[4].image} className={classes.cloud} />

        <div className="container containerCenter">
          <form action="" className={classes.form}>
            <header className={classes.header}>
              <h2>Чтобы сделать заказ, укажите ваш телефон</h2>

              <p>
                Мы перезвоним в течении 15 минут, чтобы уточнить ваши пожелания
              </p>
            </header>

            <div className={classes.actions}>
              <div className={classes.inputAndButton}>
                <div className={classes.inputContainet} onClick={inputClick}>
                  <Call />

                  <input
                    type="tel"
                    placeholder="Номер телефона"
                    maxLength={11}
                    minLength={11}
                    pattern="[\+]*[7-8]{1}\s?[\(]*9[0-9]{2}[\)]*\s?\d{3}[-]*\d{2}[-]*\d{2}"
                    id="input"
                    required
                    autoComplete="off"
                  />
                </div>

                <CustomButton text={"Сделать заказ"} className={"medium"} />
              </div>

              <div className={classes.checkbox}>
                <input type="checkbox" id="consent" />

                <label htmlFor="consent">
                  Нажимая на кнопку, вы соглашаетесь с &thinsp;
                  <a href="https://your-link.com" target="_blank">
                    условиями обработки персональных данных
                  </a>
                </label>
              </div>
            </div>
          </form>
        </div>
      </section>

      <ModalWindow show={showModal} handleClose={handleClick} />
    </main>
  );
};

export default Main;
