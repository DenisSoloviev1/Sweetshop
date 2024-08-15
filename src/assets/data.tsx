import imgCloud1 from "./image/imgCloud/imgCloud1.png";
import imgCloud2 from "./image/imgCloud/imgCloud2.png";
import imgCloud3 from "./image/imgCloud/imgCloud3.png";
import imgCloud4 from "./image/imgCloud/imgCloud4.png";
import imgCloud5 from "./image/imgCloud/imgCloud5.png";

import imgCupcake1 from "./image/imgCupcake/imgCupcake1.png";
import imgCupcake2 from "./image/imgCupcake/imgCupcake2.png";
import imgCupcake3 from "./image/imgCupcake/imgCupcake3.png";
import imgCupcake4 from "./image/imgCupcake/imgCupcake4.png";
import imgCupcake5 from "./image/imgCupcake/imgCupcake5.png";
import imgCupcake6 from "./image/imgCupcake/imgCupcake6.png";
import imgCupcake7 from "./image/imgCupcake/imgCupcake7.png";
import imgCupcake8 from "./image/imgCupcake/imgCupcake8.png";
import imgCupcake9 from "./image/imgCupcake/imgCupcake9.png";

import imgCupcakeCard1 from "./image/imgCupcakeCard/imgCupcakeCard1.png";
import imgCupcakeCard2 from "./image/imgCupcakeCard/imgCupcakeCard2.png";
import imgCupcakeCard3 from "./image/imgCupcakeCard/imgCupcakeCard3.png";
import imgCupcakeCard4 from "./image/imgCupcakeCard/imgCupcakeCard4.png";
import imgCupcakeCard5 from "./image/imgCupcakeCard/imgCupcakeCard5.png";
import imgCupcakeCard6 from "./image/imgCupcakeCard/imgCupcakeCard6.png";
import imgCupcakeCard7 from "./image/imgCupcakeCard/imgCupcakeCard7.png";
import imgCupcakeCard8 from "./image/imgCupcakeCard/imgCupcakeCard8.png";
import imgCupcakeCard9 from "./image/imgCupcakeCard/imgCupcakeCard9.png";

import avatar1 from "../assets/image/avatar1.jpg";
import avatar2 from "../assets/image/avatar2.jpg";
import avatar3 from "../assets/image/avatar3.jpg";

interface ArrayImg {
  id: string;
  image: string;
  name?: string;
  description?: string;
  price?: string;
}

interface ArrayCupcakeCard {
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
}

interface ArrayFeedback {
  id: string;
  title: string;
  text: string;
  photo: string;
  name: string;
  city: string;
}

export const arrayCloud: ArrayImg[] = [
  { id: "1", image: imgCloud1 },
  { id: "2", image: imgCloud2 },
  { id: "3", image: imgCloud3 },
  { id: "4", image: imgCloud4 },
  { id: "5", image: imgCloud5 },
];

export const arrayImgCupcake: ArrayImg[] = [
  { id: "1", image: imgCupcake1 },
  { id: "2", image: imgCupcake2 },
  { id: "3", image: imgCupcake3 },
  { id: "4", image: imgCupcake4 },
  { id: "5", image: imgCupcake5 },
  { id: "6", image: imgCupcake6 },
  { id: "7", image: imgCupcake7 },
  { id: "8", image: imgCupcake8 },
  { id: "9", image: imgCupcake9 },
];

export const arrayCupcakeCard: ArrayCupcakeCard[] = [
  {
    id: "1",
    image: imgCupcakeCard1,
    name: "Кремовый замок",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    price: "150",
  },
  {
    id: "2",
    image: imgCupcakeCard2,
    name: "Малиновый рай",
    description: "Воздушный крем, темная основа и ягода малины",
    price: "150",
  },
  {
    id: "3",
    image: imgCupcakeCard3,
    name: "Фейерверк",
    description: "Разноцветные крем, с бисквитной основой",
    price: "150",
  },
  {
    id: "4",
    image: imgCupcakeCard4,
    name: "Шоколадный мир",
    description: "Ореховая стружка, нежный крем и шоколадная основа",
    price: "150",
  },
  {
    id: "5",
    image: imgCupcakeCard5,
    name: "Слезы дракона",
    description: "Нежный крем любого цвета на выбор, вафельная основа",
    price: "150",
  },
  {
    id: "6",
    image: imgCupcakeCard6,
    name: "Летняя фантазия",
    description: "Украшения в форме сердец, для любимого человека",
    price: "150",
  },
  {
    id: "7",
    image: imgCupcakeCard7,
    name: "Мыс безумия",
    description: "Разноцветная основа, стружка и нежный крем",
    price: "150",
  },
  {
    id: "8",
    image: imgCupcakeCard8,
    name: "Облачная сказка",
    description: "Светлая основа, нежный крем со стружкой сверху",
    price: "150",
  },
  {
    id: "9",
    image: imgCupcakeCard9,
    name: "Темный рыцарь",
    description: "Тёмная основа, нежный крем и вкусные шарики",
    price: "150",
  },
];

export const arrayFeedback: ArrayFeedback[] = [
  {
    id: "1",
    title: "Результат дико порадовал, друзья были в восторге",
    text: "Заказала капкейки, как подарок на новый год. Делать заказ было легко и приятно, ну а результат дико порадовал, друзья были в восторге. И оформление, и на вкус капкейки были просто замечательные. Обязательно буду заказывать еще)) Уже строю планы, чтобы попробовать все начинки. Они восхитительны!) Даже кушать было жалко, такая красота!) Они превзошли все ожидания и стали настоящим украшением праздника. Огромное спасибо за такие невероятные эмоции!",
    photo: avatar1,
    name: "Ирина Ларионова",
    city: "Санкт-Петербург",
  },
  {
    id: "2",
    title: "Спасибо за прекрасные капкейки",
    text: "Спасибо за прекрасные капкейки, все на высоте! Сначала нас приятно удивила скорость доставки — всё прибыло в идеальном состоянии и даже раньше, чем мы ожидали. Капкейки были не только визуально потрясающими, но и вкусными до невозможности! Тесто получилось воздушным и мягким, а крем был просто на высоте: нежный, не слишком сладкий, с отличным вкусом. Каждое угощение было настоящим произведением искусства. Обязательно будем заказывать снова и советуем всем, кто ценит вкусные и качественные сладости!",
    photo: avatar2,
    name: "Елена Демидова",
    city: "Санкт-Петербург",
  },
  {
    id: "3",
    title: "Вкус оказался слишком сладким, как по мне",
    text: "Недавно заказали капкейки через сайт. В целом, впечатление положительное: доставка немного задержалась, зато капкейки пришли в хорошем состоянии. Они выглядели аккуратно и привлекательно, а тесто было мягким и свежим. Однако вкус оказался слишком сладким, как по мне, и крем показался немного тяжёлым. В целом, это хорошие капкейки, но, возможно, стоит немного доработать рецептуру. В любом случае, есть желание попробовать ещё раз и надеемся на улучшения.",
    photo: avatar3,
    name: "Евгений Савченко",
    city: "Санкт-Петербург",
  },
];
