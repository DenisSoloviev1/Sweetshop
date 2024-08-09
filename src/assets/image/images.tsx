import imgCloud1 from './imgCloud/imgCloud1.png';
import imgCloud2 from './imgCloud/imgCloud2.png';
import imgCloud3 from './imgCloud/imgCloud3.png';
import imgCloud4 from './imgCloud/imgCloud4.png';
import imgCloud5 from './imgCloud/imgCloud5.png';

import imgCupcake1 from './imgCupcake/imgCupcake1.png';
import imgCupcake2 from './imgCupcake/imgCupcake2.png';
import imgCupcake3 from './imgCupcake/imgCupcake3.png';
import imgCupcake4 from './imgCupcake/imgCupcake4.png';
import imgCupcake5 from './imgCupcake/imgCupcake5.png';
import imgCupcake6 from './imgCupcake/imgCupcake6.png';
import imgCupcake7 from './imgCupcake/imgCupcake7.png';
import imgCupcake8 from './imgCupcake/imgCupcake8.png';
import imgCupcake9 from './imgCupcake/imgCupcake9.png';

import imgCupcakeCard1 from './imgCupcakeCard/imgCupcakeCard1.png';
import imgCupcakeCard2 from './imgCupcakeCard/imgCupcakeCard2.png';
import imgCupcakeCard3 from './imgCupcakeCard/imgCupcakeCard3.png';
import imgCupcakeCard4 from './imgCupcakeCard/imgCupcakeCard4.png';
import imgCupcakeCard5 from './imgCupcakeCard/imgCupcakeCard5.png';
import imgCupcakeCard6 from './imgCupcakeCard/imgCupcakeCard6.png';
import imgCupcakeCard7 from './imgCupcakeCard/imgCupcakeCard7.png';
import imgCupcakeCard8 from './imgCupcakeCard/imgCupcakeCard8.png';
import imgCupcakeCard9 from './imgCupcakeCard/imgCupcakeCard9.png';

interface ArrayImg {
  id: string;
  image: string;
  name?: string;
  description?: string;
  price?: string;
}

interface ArrayCupcakeCard{
  id: string;
  image: string;
  name: string;
  description: string;
  price: string;
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
  { id: "1", image: imgCupcakeCard1, name: "Кремовый замок", description: "Нежный крем любого цвета на выбор, вафельная основа", price: "150" },
  { id: "2", image: imgCupcakeCard2, name: "Малиновый рай", description: "Воздушный крем, темная основа и ягода малины", price: "150" },
  { id: "3", image: imgCupcakeCard3, name: "Фейерверк", description: "Разноцветные крем, с бисквитной основой", price: "150" },
  { id: "4", image: imgCupcakeCard4, name: "Шоколадный мир", description: "Ореховая стружка, нежный крем и шоколадная основа", price: "150" },
  { id: "5", image: imgCupcakeCard5, name: "Слезы дракона", description: "Нежный крем любого цвета на выбор, вафельная основа", price: "150" },
  { id: "6", image: imgCupcakeCard6, name: "Летняя фантазия", description: "Украшения в форме сердец, для любимого человека", price: "150" },
  { id: "7", image: imgCupcakeCard7, name: "Мыс безумия", description: "Разноцветная основа, стружка и нежный крем", price: "150" },
  { id: "8", image: imgCupcakeCard8, name: "Облачная сказка", description: "Светлая основа, нежный крем со стружкой сверху", price: "150" },
  { id: "9", image: imgCupcakeCard9, name: "Темный рыцарь", description: "Тёмная основа, нежный крем и вкусные шарики", price: "150" },
];

