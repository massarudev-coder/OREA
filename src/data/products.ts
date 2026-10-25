import type { ProductData } from '../types/product';

const description =
    'Professor de biologia, Mestre em ensino de Ciências e educação. Com mais de 15 anos de experiência em cursinhos, pré-vestibulares de Manaus. Trabalhei com pesquisas com ênfase em microbiologia e plantas por dois anos. Atualmente trabalho na Fundação Matias Machline com mais de 10 anos de experiência nessa instituição e sou professor concursado da Seduc-AM.';

const imageUrl =
    'https://www.fundacaomatiasmachline.org.br/wp-content/uploads/2020/07/IMG_0709-300x200.jpg';

const productPlaceholder = (number: number): ProductData => ({
    name: `Produto ${number}`,
    support: 'Preencha as informações deste produto',
    description: 'Adicione aqui a descrição deste produto.',
    rating: 'Sem avaliações',
    price: 'Preço a definir',
});

export const products = {
    produto_1: {
        name: 'Rafael Izackson',
        support: 'Manaus, Amazonas, Brasil',
        description,
        rating: '-4.8 (2,8M)',
        price: 'R$ -299,90',
        imageUrl,
    },
    produto_2: {
        name: 'Rafael Izackson',
        support: 'Manaus, Amazonas, Brasil',
        description,
        rating: '-4.8 (2,8M)',
        price: 'R$ -299,90',
        imageUrl,
    },
    produto_3: {
        name: 'Rafael Izackson',
        support: 'Manaus, Amazonas, Brasil',
        description,
        rating: '-4.8 (2,8M)',
        price: 'R$ -299,90',
        imageUrl,
    },
    produto_4: {
        name: 'Rafael Izackson',
        support: 'Manaus, Amazonas, Brasil',
        description,
        rating: '-4.8 (2,8M)',
        price: 'R$ -299,90',
        imageUrl,
    },
    produto_5: {
        name: 'Rafael Izackson',
        support: 'Manaus, Amazonas, Brasil',
        description,
        rating: '-4.8 (2,8M)',
        price: 'R$ -299,90',
        imageUrl,
    },
    produto_6: {
        name: 'Rafael Izackson',
        support: 'Manaus, Amazonas, Brasil',
        description,
        rating: '-4.8 (2,8M)',
        price: 'R$ -299,90',
        imageUrl,
    },
    produto_7: {
        name: 'Rafael Izackson',
        support: 'Manaus, Amazonas, Brasil',
        description,
        rating: '-4.8 (2,8M)',
        price: 'R$ -299,90',
        imageUrl,
    },
    produto_8: {
        name: 'Rafael Izackson',
        support: 'Manaus, Amazonas, Brasil',
        description,
        rating: '-4.8 (2,8M)',
        price: 'R$ -299,90',
        imageUrl,
    },
    // produto_4: productPlaceholder(4),
    // produto_5: productPlaceholder(5),
    // produto_6: productPlaceholder(6),
    // produto_7: productPlaceholder(7),
    // produto_8: productPlaceholder(8),
} satisfies Record<string, ProductData>;
