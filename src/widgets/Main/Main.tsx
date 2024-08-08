import React from "react";
import classes from "./Main.module.scss";
import PastryCard from "../../components/PastryCard/PastryCard.tsx";
import PromoBanner from "../../components/PromoCard/PromoBanner.tsx";

import { arrayCloud } from "../../assets/image/images.tsx";
import { arrayCard } from "../../assets/image/images.tsx";
// import { arraySweets } from "../../assets/image/images.tsx";
import phone from "../../assets/image/phone.png";
import woman from "../../assets/image/woman.png";

const Main: React.FC = () => {
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
          />
        </div>
      </section>

      <section className={classes.sectionSecond}>
        <h2>Для любых событий и дорогих вам людей</h2>

        <div className="container containerCenter">
          <div className={classes.grid}>
            <PastryCard
              id={arrayCard[0].id}
              image={arrayCard[0].image}
              name={arrayCard[0].name}
              description={arrayCard[0].description}
              price={arrayCard[0].price}
            />
            <PastryCard
              id={arrayCard[1].id}
              image={arrayCard[1].image}
              name={arrayCard[1].name}
              description={arrayCard[1].description}
              price={arrayCard[1].price}
            />
            <PastryCard
              id={arrayCard[2].id}
              image={arrayCard[2].image}
              name={arrayCard[2].name}
              description={arrayCard[2].description}
              price={arrayCard[2].price}
            />
            <PastryCard
              id={arrayCard[3].id}
              image={arrayCard[3].image}
              name={arrayCard[3].name}
              description={arrayCard[3].description}
              price={arrayCard[3].price}
            />
            <PastryCard
              id={arrayCard[4].id}
              image={arrayCard[4].image}
              name={arrayCard[4].name}
              description={arrayCard[4].description}
              price={arrayCard[4].price}
            />
            <PastryCard
              id={arrayCard[5].id}
              image={arrayCard[5].image}
              name={arrayCard[5].name}
              description={arrayCard[5].description}
              price={arrayCard[5].price}
            />
            <PastryCard
              id={arrayCard[6].id}
              image={arrayCard[6].image}
              name={arrayCard[6].name}
              description={arrayCard[6].description}
              price={arrayCard[6].price}
            />
            <PastryCard
              id={arrayCard[7].id}
              image={arrayCard[7].image}
              name={arrayCard[7].name}
              description={arrayCard[7].description}
              price={arrayCard[7].price}
            />
            <PastryCard
              id={arrayCard[8].id}
              image={arrayCard[8].image}
              name={arrayCard[8].name}
              description={arrayCard[8].description}
              price={arrayCard[8].price}
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

        <div className="container">
          <h1>5 отзывы</h1>
        </div>

        <img src={arrayCloud[3].image} className={classes.cloud} />
      </section>

      <section className={classes.sectionSixth}>
        <div className="container">
          <h1>6</h1>
        </div>
      </section>
    </main>
  );
};

export default Main;
