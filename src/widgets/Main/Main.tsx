import React from "react";
import classes from "./Main.module.scss";
import CupcakeCard from "../../components/CupcakeCard/CupcakeCard.tsx";
import PromoBanner from "../../components/PromoCard/PromoBanner.tsx";
import Feedback from "../../components/Feedback/Feedback.tsx";
import CustomButton from "../../components/CustomButton/CustomButton.tsx";

import { arrayCloud } from "../../assets/image/images.tsx";
import { arrayCupcakeCard } from "../../assets/image/images.tsx";
import { arrayImgCupcake } from "../../assets/image/images.tsx";
import phone from "../../assets/image/phone.png";
import woman from "../../assets/image/woman.png";
import avatar0 from "../../assets/image/avatar0.jpg";
import { Call } from "../../assets/svg/svg.tsx";

const Main: React.FC = () => {
  const inputClick = () => {
    const inputElement = document.getElementById("input");
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <main className={classes.main}>
      <section className={classes.sectionFirst}>
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
      </section>

      <section className={classes.sectionSecond}>
        <h2>Для любых событий и дорогих вам людей</h2>

        <div className="container containerCenter">
          <div className={classes.gridCupcakeCard} id="catalog">
            <CupcakeCard
              id={arrayCupcakeCard[0].id}
              image={arrayCupcakeCard[0].image}
              name={arrayCupcakeCard[0].name}
              description={arrayCupcakeCard[0].description}
              price={arrayCupcakeCard[0].price}
            />
            <CupcakeCard
              id={arrayCupcakeCard[1].id}
              image={arrayCupcakeCard[1].image}
              name={arrayCupcakeCard[1].name}
              description={arrayCupcakeCard[1].description}
              price={arrayCupcakeCard[1].price}
            />
            <CupcakeCard
              id={arrayCupcakeCard[2].id}
              image={arrayCupcakeCard[2].image}
              name={arrayCupcakeCard[2].name}
              description={arrayCupcakeCard[2].description}
              price={arrayCupcakeCard[2].price}
            />
            <CupcakeCard
              id={arrayCupcakeCard[3].id}
              image={arrayCupcakeCard[3].image}
              name={arrayCupcakeCard[3].name}
              description={arrayCupcakeCard[3].description}
              price={arrayCupcakeCard[3].price}
            />
            <CupcakeCard
              id={arrayCupcakeCard[4].id}
              image={arrayCupcakeCard[4].image}
              name={arrayCupcakeCard[4].name}
              description={arrayCupcakeCard[4].description}
              price={arrayCupcakeCard[4].price}
            />
            <CupcakeCard
              id={arrayCupcakeCard[5].id}
              image={arrayCupcakeCard[5].image}
              name={arrayCupcakeCard[5].name}
              description={arrayCupcakeCard[5].description}
              price={arrayCupcakeCard[5].price}
            />
            <CupcakeCard
              id={arrayCupcakeCard[6].id}
              image={arrayCupcakeCard[6].image}
              name={arrayCupcakeCard[6].name}
              description={arrayCupcakeCard[6].description}
              price={arrayCupcakeCard[6].price}
            />
            <CupcakeCard
              id={arrayCupcakeCard[7].id}
              image={arrayCupcakeCard[7].image}
              name={arrayCupcakeCard[7].name}
              description={arrayCupcakeCard[7].description}
              price={arrayCupcakeCard[7].price}
            />
            <CupcakeCard
              id={arrayCupcakeCard[8].id}
              image={arrayCupcakeCard[8].image}
              name={arrayCupcakeCard[8].name}
              description={arrayCupcakeCard[8].description}
              price={arrayCupcakeCard[8].price}
            />
          </div>
        </div>
      </section>

      <section className={classes.sectionThird}>
        <img src={arrayCloud[0].image} className={classes.cloud} />

        <div className="container containerRight">
          <PromoBanner
            label={"Не нашли то что нужно?"}
            title={"Приготовим заказ \n любой сложности \n по фото или эскизу"}
            description={
              "Загрузите фотографию или эскиз капкейков \n и мы рассчитаем стоимость за 30 минут"
            }
            buttonText={"Загрузить фотографию"}
          />
        </div>

        <div className={classes.bottom}>
          <img src={phone} alt="phone" className={classes.phone} />
          <img src={arrayCloud[1].image} className={classes.cloud} />
        </div>
      </section>

      <section className={classes.sectionFourth}>
        <div className="container">
          <PromoBanner
            label={"Не нашли то что нужно?"}
            title={"Приготовим заказ \n любой сложности \n по фото или эскизу"}
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
        <img src={arrayCloud[2].image} className={classes.cloud} />

        <h2>Почитайте отзывы довольных клиентов</h2>

        <Feedback
          title={"Результат дико порадовал, друзья были в восторге"}
          text={
            "Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) Они превзошли все ожидания и стали настоящим украшением праздника. Огромное спасибо за такие невероятные эмоции!"
          }
          photo={avatar0}
          name={"Ирина Ларионова"}
          city={"Санкт-Петербург"}
        />

        <img src={arrayCloud[3].image} className={classes.cloud} />
      </section>
      {/* доделать карусель */}
      <section className={classes.sectionSixth}>
        <h2>Сделали более 3.000 заказов за 2 года</h2>

        <h3>Посмотрите фото реальных заказов из нашего instagram</h3>

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
                    maxLength={12}
                    id="input"
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
    </main>
  );
};

export default Main;
