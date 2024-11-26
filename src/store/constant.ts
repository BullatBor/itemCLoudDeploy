// theme constant
export const gridSpacing = 3;
export const drawerWidth = 260;
export const appDrawerWidth = 320;

export const NIKE_SHOES = {
    id: 1,
    name: 'Кроссовки Nike Air Max 90',
    brand: 'Nike',
    size: [{ value: '42' }],
    sizeCountry: 'EU',
    category: { value: '', path: [] },
    gender: { value: 'male', label: 'мужской' },
    description:
        'Классические кроссовки Nike Air Max 90 с воздушной подушкой для комфорта и амортизации. Идеально подходят для повседневной носки.',
    additionalMaterials: [],
    image: 'https://outmaxshop.ru/components/com_jshopping/files/img_products/22300/nike-air-max-90-22300-1.jpg',
    combinedProducts: [],
    relatedProducts: [],
    sameCollectionProducts: [],
    sameModelProducts: [],
    imgFiles: []
}

export const TIMBERLAND = {
    id: 2,
    name: 'Ботинки Timberland',
    brand: 'Timberland',
    size: [{ value: '43' }],
    sizeCountry: 'US',
    category: { value: '', path: [] },
    gender: { value: 'male', label: 'мужской' },
    description:
        'Прочные кожаные ботинки Timberland с водонепроницаемой мембраной. Идеально подходят для прогулок по пересеченной местности.',
    additionalMaterials: [],
    image: 'https://cdn1.ozone.ru/s3/multimedia-r/6857424447.jpg',
    combinedProducts: [NIKE_SHOES],
    relatedProducts: [],
    sameCollectionProducts: [],
    sameModelProducts: [],
    imgFiles: []
}

export const BIRKENSTON = {
    id: 3,
    name: 'Сандалии Birkenstock',
    brand: 'Birkenstock',
    size: [{ value: '40' }],
    sizeCountry: 'EU',
    category: { value: '', path: [] },
    gender: { value: 'male', label: 'мужской' },
    description: 'Комфортные сандалии Birkenstock из натуральной кожи с анатомической стелькой. Идеально подходят для жаркой погоды.',
    additionalMaterials: [],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe33krC5jK7eX5tDcja46B1KTW22lxr_5Pow&s',
    combinedProducts: [TIMBERLAND, NIKE_SHOES],
    relatedProducts: [],
    sameCollectionProducts: [],
    sameModelProducts: [],
    imgFiles: []
}