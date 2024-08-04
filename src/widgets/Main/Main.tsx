import React from "react";
import classes from "./Main.module.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import Card from "../../components/Card/Card";
import img from "../../assets/img.png";
import firstCloud from "../../assets/image/01.png";
import secondCloud from "../../assets/image/02.png";
import thirdCloud from "../../assets/image/03.png";
import fourthCloud from "../../assets/image/04.png";

const Main: React.FC = () => {
  return (
    <main className={classes.main}>
      <section className={classes.sectionFirst}>
        <div className="container">
          <div className={classes.content}>
            <header className={classes.info}>
              <h1>
                Пирожные и капкейки <br />
                от 150 ₽/шт. с доставкой
                <br /> по Санкт Петербургу
              </h1>

              <h2>
                Приготовим за 3 часа в день заказа. <br /> Доставка на авто в
                холодильнике.
              </h2>
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
          <h1>Для любых событий и дорогих вам людей</h1>

          <div className="container">
            <div className={classes.grid}>
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
              <Card
                image={img}
                name={"name"}
                description={"description"}
                price={150}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={classes.sectionThird}>
        <img src={firstCloud} alt="Cloud" className={classes.cloud} />

        <div className="container">
          <h1>3</h1>
        </div>

        <img src={secondCloud} alt="Cloud" className={classes.cloud} />
      </section>

      <section className={classes.sectionFourth}>
        <div className="container">
          <h1>4</h1>
        </div>
      </section>

      <section className={classes.sectionFifth}>
        <img src={thirdCloud} alt="Cloud" className={classes.cloud} />

        <div className="container">
          <h1>5 отзывы</h1>
        </div>

        <img src={fourthCloud} alt="Cloud" className={classes.cloud} />
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
