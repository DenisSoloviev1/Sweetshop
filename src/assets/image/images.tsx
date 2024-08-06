import imgCloud1 from './imgCloud/imgCloud1.png';
import imgCloud2 from './imgCloud/imgCloud2.png';
import imgCloud3 from './imgCloud/imgCloud3.png';
import imgCloud4 from './imgCloud/imgCloud4.png';
import imgCloud5 from './imgCloud/imgCloud5.png';

import imgSweets1 from './imgSweets/imgSweets1.png';
import imgSweets2 from './imgSweets/imgSweets2.png';
import imgSweets3 from './imgSweets/imgSweets3.png';
import imgSweets4 from './imgSweets/imgSweets4.png';
import imgSweets5 from './imgSweets/imgSweets5.png';
import imgSweets6 from './imgSweets/imgSweets6.png';
import imgSweets7 from './imgSweets/imgSweets7.png';
import imgSweets8 from './imgSweets/imgSweets8.png';
import imgSweets9 from './imgSweets/imgSweets9.png';

import imgCard1 from './imgCard/imgCard1.png';
import imgCard2 from './imgCard/imgCard2.png';
import imgCard3 from './imgCard/imgCard3.png';
import imgCard4 from './imgCard/imgCard4.png';
import imgCard5 from './imgCard/imgCard5.png';
import imgCard6 from './imgCard/imgCard6.png';
import imgCard7 from './imgCard/imgCard7.png';
import imgCard8 from './imgCard/imgCard8.png';
import imgCard9 from './imgCard/imgCard9.png';

interface ArrayImg {
  id: string;
  image: string;
  name?: string;
  description?: string;
  price?: string;
}

interface Card {
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

export const arraySweets: ArrayImg[] = [
  { id: "1", image: imgSweets1 },
  { id: "2", image: imgSweets2 },
  { id: "3", image: imgSweets3 },
  { id: "4", image: imgSweets4 },
  { id: "5", image: imgSweets5 },
  { id: "6", image: imgSweets6 },
  { id: "7", image: imgSweets7 },
  { id: "8", image: imgSweets8 },
  { id: "9", image: imgSweets9 },
];

export const arrayCard: Card[] = [
  { id: "1", image: imgCard1, name: "Кремовый замок", description: "Нежный крем любого цвета на выбор, вафельная основа", price: "150" },
  { id: "2", image: imgCard2, name: "Малиновый рай", description: "Воздушный крем, темная основа и ягода малины", price: "150" },
  { id: "3", image: imgCard3, name: "Фейерверк", description: "Разноцветные крем, с бисквитной основой", price: "150" },
  { id: "4", image: imgCard4, name: "Шоколадный мир", description: "Ореховая стружка, нежный крем и шоколадная основа", price: "150" },
  { id: "5", image: imgCard5, name: "Слезы дракона", description: "Нежный крем любого цвета на выбор, вафельная основа", price: "150" },
  { id: "6", image: imgCard6, name: "Летняя фантазия", description: "Украшения в форме сердец, для любимого человека", price: "150" },
  { id: "7", image: imgCard7, name: "Мыс безумия", description: "Разноцветная основа, стружка и нежный крем", price: "150" },
  { id: "8", image: imgCard8, name: "Облачная сказка", description: "Светлая основа, нежный крем со стружкой сверху", price: "150" },
  { id: "9", image: imgCard9, name: "Темный рыцарь", description: "Тёмная основа, нежный крем и вкусные шарики", price: "150" },
];

