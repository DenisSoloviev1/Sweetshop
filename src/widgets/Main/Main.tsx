import React from "react";
import classes from "./Main.module.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title.tsx";

import { arrayCloud } from "../../assets/image/images.tsx";
import { arrayCard } from "../../assets/image/images.tsx";
// import { arraySweets } from "../../assets/image/images.tsx";
import phone from "../../assets/image/phone.png";

const Main: React.FC = () => {
  return (
    <main className={classes.main}>
      <section className={classes.sectionFirst}>
        <div className="container">
          <div className={classes.content}>
            <header className={classes.info}>
              <Title text={"вкуснейшие"} />

              <h2>
                Пирожные и капкейки <br />
                от 150 ₽/шт. с доставкой
                <br /> по Санкт Петербургу
              </h2>

              <h3>
                Приготовим за 3 часа в день заказа. <br /> Доставка на авто в
                холодильнике.
              </h3>
            </header>

            <div className={classes.textAndButton}>
              <CustomButton text={"Перейти в каталог"} />
              <p>
                9 различных <br />
                видов на выбор
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.sectionSecond}>
        <div className="container">
          <h2>Для любых событий и дорогих вам людей</h2>

          <div className={classes.grid}>
            <Card
              id={arrayCard[0].id}
              image={arrayCard[0].image}
              name={arrayCard[0].name}
              description={arrayCard[0].description}
              price={arrayCard[0].price}
            />
            <Card
              id={arrayCard[1].id}
              image={arrayCard[1].image}
              name={arrayCard[1].name}
              description={arrayCard[1].description}
              price={arrayCard[1].price}
            />
            <Card
              id={arrayCard[2].id}
              image={arrayCard[2].image}
              name={arrayCard[2].name}
              description={arrayCard[2].description}
              price={arrayCard[2].price}
            />
            <Card
              id={arrayCard[3].id}
              image={arrayCard[3].image}
              name={arrayCard[3].name}
              description={arrayCard[3].description}
              price={arrayCard[3].price}
            />
            <Card
              id={arrayCard[4].id}
              image={arrayCard[4].image}
              name={arrayCard[4].name}
              description={arrayCard[4].description}
              price={arrayCard[4].price}
            />
            <Card
              id={arrayCard[5].id}
              image={arrayCard[5].image}
              name={arrayCard[5].name}
              description={arrayCard[5].description}
              price={arrayCard[5].price}
            />
            <Card
              id={arrayCard[6].id}
              image={arrayCard[6].image}
              name={arrayCard[6].name}
              description={arrayCard[6].description}
              price={arrayCard[6].price}
            />
            <Card
              id={arrayCard[7].id}
              image={arrayCard[7].image}
              name={arrayCard[7].name}
              description={arrayCard[7].description}
              price={arrayCard[7].price}
            />
            <Card
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

        <div className="container">
          <div className={classes.content}>
            <header className={classes.info}>
              <Title text={"Не нашли то что нужно?"} />

              <h2>
                Приготовим заказ
                <br /> любой сложности <br />
                по фото или эскизу
              </h2>

              <h3>
                Загрузите фотографию или эскиз капкейков
                <br /> и мы рассчитаем стоимость за 30 минут
              </h3>
            </header>

            <CustomButton text={"Загрузить фотографию"} />
          </div>
        </div>

        <div className={classes.bottom}>
          <img src={phone} alt="phone" className={classes.phone} />
          <img src={arrayCloud[1].image} className={classes.cloud} />
        </div>
       
      </section>

      <section className={classes.sectionFourth}>
        <div className="container">
          <h1>4</h1>
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
