import type { ProductData } from '../types/product';

const meteorites: ProductData[] = [
    {
        id: '1',
        name: 'Campo del Cielo',
        support: 'Origem: Gran Chaco, Arg',
        description:
            'Meteorito de ferro Campo del Cielo, encontrado na região do Gran Chaco, na Argentina.',
        rating: '4.9',
        price: 2850,
        imageUrl:
            'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&q=80',
        category: 'Sideritos',
        detailRoute: '/produtos/produto_1',
    },
    {
        id: '2',
        name: 'Palasito Seymchan',
        support: 'Cristais de olivina',
        description:
            'Palasito Seymchan com cristais de olivina, conforme apresentado no catálogo.',
        rating: '5.0',
        price: 8900,
        imageUrl:
            'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=500&q=80',
        category: 'Palasitos',
        detailRoute: '/produtos/produto_2',
    },
    {
        id: '3',
        name: 'Gema Moldavita',
        support: 'Tektite de impacto raro',
        description:
            'Moldavita, uma tektite associada a um impacto, apresentada como gema no catálogo.',
        rating: '4.8',
        price: 3400,
        imageUrl:
            'https://i.pinimg.com/736x/ab/f4/44/abf44479ad1375cae78b60e185771aef.jpg',
        category: 'Moldavitas',
        detailRoute: '/produtos/produto_3',
    },
    {
        id: '4',
        name: 'Muonionalusta',
        support: 'Suécia • Widmanstätten',
        description:
            'Meteorito Muonionalusta da Suécia, apresentado no catálogo com referência a Widmanstätten.',
        rating: '4.9',
        price: 4100,
        imageUrl:
            'https://i.pinimg.com/736x/7e/9f/c1/7e9fc10d827864ddd33a977a478cf15e.jpg',
        category: 'Sideritos',
        detailRoute: '/produtos/produto_4',
    },
    {
        id: '5',
        name: 'Shergottita Marciano',
        support: 'Crosta do Planeta Vermelho',
        description:
            'Shergottita marciana, descrita no catálogo como fragmento da crosta do Planeta Vermelho.',
        rating: '5.0',
        price: 9400,
        imageUrl:
            'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500&q=80',
        category: 'Marcianos',
        detailRoute: '/produtos/produto_5',
    },
    {
        id: '6',
        name: 'Regolito Lunar NWA',
        support: 'Fragmento de brecha lunar',
        description:
            'Regolito lunar NWA, apresentado como fragmento de brecha lunar no catálogo.',
        rating: '5.0',
        price: 11200,
        imageUrl:
            'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&q=80',
        category: 'Lunares',
        detailRoute: '/produtos/produto_6',
    },
];

export const catalogProducts = meteorites;

export const products = {
    produto_1: meteorites[0],
    produto_2: meteorites[1],
    produto_3: meteorites[2],
    produto_4: meteorites[3],
    produto_5: meteorites[4],
    produto_6: meteorites[5],
    produto_7: meteorites[0],
    produto_8: meteorites[1],
} satisfies Record<`produto_${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`, ProductData>;
