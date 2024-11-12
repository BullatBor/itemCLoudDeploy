import { IMySelectOptions } from 'types/product';

export const SIZE_COUNRY_DATA: IMySelectOptions[] = [
  {
    value: 'EU'
  },
  {
    value: 'US'
  },
  {
    value: 'UK'
  },
  {
    value: 'CM'
  }
];

export const getSizeCounry = (brand: string) => {
  switch (brand) {
    case 'ADIDAS': {
      const newSizeCountry = SIZE_COUNRY_DATA.filter((item) => item.value !== 'EU');
      newSizeCountry.push({ value: 'FR' });
      return newSizeCountry;
    }
    default:
      return SIZE_COUNRY_DATA;
  }
};

export const SIZE_COUNRY_DATA_ADIDAS = [
  {
    value: 'FR'
  },
  {
    value: 'US'
  },
  {
    value: 'UK'
  },
  {
    value: 'CM'
  }
];

const EU_SIZE_DATA: IMySelectOptions[] = [
  {
    value: '38'
  },
  {
    value: '39'
  },
  {
    value: '40'
  },
  {
    value: '41'
  },
  {
    value: '42'
  },
  {
    value: '43'
  },
  {
    value: '44'
  },
  {
    value: '45'
  },
  {
    value: '46'
  },
  {
    value: '47'
  }
];

const US_SIZE_DATA: IMySelectOptions[] = [
  {
    value: '6'
  },
  {
    value: '7'
  },
  {
    value: '8'
  },
  {
    value: '8.5'
  },
  {
    value: '9'
  },
  {
    value: '10'
  },
  {
    value: '11'
  },
  {
    value: '11.5'
  },
  {
    value: '12'
  },
  {
    value: '13'
  },
  {
    value: '14'
  },
  {
    value: '14.5'
  },
  {
    value: '15'
  }
];

const UK_SIZE_DATA: IMySelectOptions[] = [
  {
    value: '3'
  }
];

const CM_SIZE_DATA: IMySelectOptions[] = [
  {
    value: '20.5'
  },
  {
    value: '21'
  },
  {
    value: '21.5'
  },
  {
    value: '22'
  },
  {
    value: '22.5'
  },
  {
    value: '23.5'
  },
  {
    value: '24'
  },
  {
    value: '24.5'
  },
  {
    value: '25'
  },
  {
    value: '25.5'
  },
  {
    value: '26'
  },
  {
    value: '26.5'
  },
  {
    value: '27'
  },
  {
    value: '27.5'
  },
  {
    value: '28'
  },
  {
    value: '28.5'
  }
];

export const SHOES_SIZES: { [key: string]: IMySelectOptions[] } = {
  EU: EU_SIZE_DATA,
  US: US_SIZE_DATA,
  UK: UK_SIZE_DATA,
  CM: CM_SIZE_DATA,
  FR: EU_SIZE_DATA
};

export const SHOES_SPECIFICATION_RU: Record<string, string> = {
  weight: 'Вес',
  usage: 'Применение',
  top: 'Верх',
  sole: 'Подошва',
  features: 'Особенности',
  lacingMode: 'Тип шнуровки',
  soleType: 'Тип подошвы',
  sockType: 'Тип носка',
  mainColor: 'Основной цвет',
  height: 'Высота',
  season: 'Сезон',
  article: 'Артикул',
  officialPrice: 'Официальная цена',
  releaseDate: 'Дата выпуска',
  set: 'Комплект',
  materials: 'Материалы',
  style: 'Стиль',
  category: 'Категория'
};

export const SHOES_INFO_RU: Record<string, string> = {
  name: 'Наименование',
  brand: 'Брэнд',
  size: 'Размер',
  sizeCountry: 'Стандарт размеров',
  description: 'Описание'
};

export const STEPS_DATA = ['Информация о товаре', 'Характеристики', 'Итоговые данные'];
