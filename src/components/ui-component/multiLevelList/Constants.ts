import { TreeViewBaseItem } from '@mui/x-tree-view/models';

export const CATEGORIES: TreeViewBaseItem[] = [
  {
    id: 'shoes.0',
    label: 'Обувь',
    children: [
      {
        id: 'everyday.1',
        label: 'Повседневная обувь',
        children: [
          { id: 'kedy.2', label: 'Кеды' },
          { id: 'cross.2', label: 'Кроссовки' },
          { id: 'crossrolls.2', label: 'Кроссовки роликовые' },
          { id: 'lofers.2', label: 'Лоферы' },
          { id: 'moonmove.2', label: 'Луноходы' },
          { id: 'macasiny.2', label: 'Макасины' }
        ]
      },
      {
        id: 'sport.1',
        label: 'Спортивная обувь',
        children: [
          { id: 'running.2', label: 'Беговые кроссовки', children: [] },
          { id: 'training.2', label: 'Кроссовки для тренировок', children: [] },
          { id: 'basketball.2', label: 'Баскетбольные кроссовки', children: [] },
          { id: 'hiking.2', label: 'Трекинговые ботинки', children: [] }
        ]
      },
      {
        id: 'formal.1',
        label: 'Нарядная обувь',
        children: [
          { id: 'dressShoes.2', label: 'Классические туфли', children: [] },
          { id: 'oxfords.2', label: 'Оксфорды', children: [] },
          { id: 'boots.2', label: 'Нарядные ботинки', children: [] },
          { id: 'dressSandals.2', label: 'Нарядные босоножки', children: [] }
        ]
      },
      {
        id: 'winter.1',
        label: 'Зимняя обувь',
        children: [
          { id: 'winterBoots.2', label: 'Зимние ботинки', children: [] },
          { id: 'feltBoots.2', label: 'Валенки', children: [] },
          { id: 'uggs.2', label: 'Угги', children: [] }
        ]
      },
      {
        id: 'work.1',
        label: 'Рабочая обувь',
        children: [
          { id: 'safetyShoes.2', label: 'Спецобувь', children: [] },
          { id: 'workBoots.2', label: 'Рабочие ботинки', children: [] }
        ]
      },
      {
        id: 'other.1',
        label: 'Другое',
        children: [
          { id: 'slippers.2', label: 'Тапочки', children: [] },
          { id: 'houseShoes.2', label: 'Домашняя обувь', children: [] }
        ]
      }
    ]
  },
  {
    id: 'clothing.0',
    label: 'Одежда',
    children: [
      {
        id: 'tops.1',
        label: 'Верхняя одежда',
        children: [
          { id: 'jackets.2', label: 'Куртки', children: [] },
          { id: 'coats.2', label: 'Пальто', children: [] },
          { id: 'raincoats.2', label: 'Дождевики', children: [] },
          { id: 'vests.2', label: 'Жилеты', children: [] },
          { id: 'sweatshirts.2', label: 'Свитшоты', children: [] },
          { id: 'hoodies.2', label: 'Толстовки', children: [] }
        ]
      },
      {
        id: 'bottoms.1',
        label: 'Нижняя одежда',
        children: [
          { id: 'trousers.2', label: 'Брюки', children: [] },
          { id: 'jeans.2', label: 'Джинсы', children: [] },
          { id: 'skirts.2', label: 'Юбки', children: [] },
          { id: 'shorts.2', label: 'Шорты', children: [] },
          { id: 'leggings.2', label: 'Леггинсы', children: [] }
        ]
      },
      {
        id: 'shirts.1',
        label: 'Рубашки и блузки',
        children: [
          { id: 'shirts.2', label: 'Рубашки', children: [] },
          { id: 'blouses.2', label: 'Блузки', children: [] },
          { id: 'tShirts.2', label: 'Футболки', children: [] },
          { id: 'poloShirts.2', label: 'Поло', children: [] }
        ]
      },
      {
        id: 'dresses.1',
        label: 'Платья',
        children: [
          { id: 'sundresses.2', label: 'Летние платья', children: [] },
          { id: 'cocktailDresses.2', label: 'Коктейльные платья', children: [] },
          { id: 'eveningGowns.2', label: 'Вечерние платья', children: [] }
        ]
      },
      {
        id: 'accessories.1',
        label: 'Аксессуары',
        children: [
          { id: 'scarves.2', label: 'Шарфы', children: [] },
          { id: 'belts.2', label: 'Ремни', children: [] },
          { id: 'gloves.2', label: 'Перчатки', children: [] },
          { id: 'hats.2', label: 'Головные уборы', children: [] }
        ]
      }
    ]
  },
  {
    id: 'bags.0',
    label: 'Сумки'
  },
  {
    id: 'watches.0',
    label: 'Часы'
  },
  {
    id: 'glasses.0',
    label: 'Очки'
  }
];

export const shoeCategoryDictionary: Record<string, string> = {
  shoes: 'Обувь',
  everyday: 'Повседневная обувь',
  kedy: 'Кеды',
  cross: 'Кроссовки',
  crossrolls: 'Кроссовки роликовые',
  lofers: 'Лоферы',
  moonmove: 'Луноходы',
  macasiny: 'Макасины',
  sport: 'Спортивная обувь',
  running: 'Беговые кроссовки',
  training: 'Кроссовки для тренировок',
  basketball: 'Баскетбольные кроссовки',
  hiking: 'Трекинговые ботинки',
  formal: 'Нарядная обувь',
  dressShoes: 'Классические туфли',
  oxfords: 'Оксфорды',
  boots: 'Нарядные ботинки',
  dressSandals: 'Нарядные босоножки',
  winter: 'Зимняя обувь',
  winterBoots: 'Зимние ботинки',
  feltBoots: 'Валенки',
  uggs: 'Угги',
  work: 'Рабочая обувь',
  safetyShoes: 'Спецобувь',
  workBoots: 'Рабочие ботинки',
  other: 'Другое',
  slippers: 'Тапочки',
  houseshoes: 'Домашняя обувь',
  clothing: 'Одежда',
  tops: 'Верхняя одежда',
  jackets: 'Куртки',
  coats: 'Пальто',
  raincoats: 'Дождевики',
  vests: 'Жилеты',
  sweatshirts: 'Свитшоты',
  hoodies: 'Толстовки',
  bottoms: 'Нижняя одежда',
  trousers: 'Брюки',
  jeans: 'Джинсы',
  skirts: 'Юбки',
  shorts: 'Шорты',
  leggings: 'Леггинсы',
  shirts: 'Рубашки и блузки',
  blouses: 'Блузки',
  tShirts: 'Футболки',
  poloShirts: 'Поло',
  dresses: 'Платья',
  sundresses: 'Летние платья',
  cocktailDresses: 'Коктейльные платья',
  eveningGowns: 'Вечерние платья',
  accessories: 'Аксессуары',
  scarves: 'Шарфы',
  belts: 'Ремни',
  gloves: 'Перчатки',
  hats: 'Головные уборы',
  bags: 'Сумки',
  watches: 'Часы',
  glasses: 'Очки'
};
