export interface IProduct {
    title: string;
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
}

export interface ICartData extends IProduct {
    quantity: number;
}

export interface IApiCartData {
    productId: number;
    quantity: number;
}

export interface IRootApiCartData {
    id: number;
    userId: number;
    date: Date;
    products: IApiCartData[];
    __v: number;
}
