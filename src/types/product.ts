export type ProductCategory =
    | 'Sideritos'
    | 'Palasitos'
    | 'Moldavitas'
    | 'Condritos'
    | 'Marcianos'
    | 'Lunares';

export type ProductRoute =
    | '/produtos/produto_1'
    | '/produtos/produto_2'
    | '/produtos/produto_3'
    | '/produtos/produto_4'
    | '/produtos/produto_5'
    | '/produtos/produto_6'
    | '/produtos/produto_7'
    | '/produtos/produto_8';

export type ProductData = {
    id: string;
    name: string;
    support: string;
    description: string;
    rating: string;
    price: number;
    imageUrl: string;
    category: ProductCategory;
    detailRoute: ProductRoute;
};
