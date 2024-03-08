export interface ProductListResponse {
    result: 'success' | 'Failure';
    data: Product[];
}

export interface Product {
    id: number;
    SKU: number;
    name: string;
    brandName: string;
    mainImage: string;
    price: {
        amount: number;
        currency: string;
    };
    sizes: number[];
    stockStatus: string;
    colour: string;
    description: string;
}
