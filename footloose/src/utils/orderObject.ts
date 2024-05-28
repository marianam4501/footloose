import { CartProductObject } from "./cartProductObject";

export interface OrderObject {
    id: number;
    owner: number;
    address: string;
    address2: string;
    city: string;
    province: string;
    zipCode: string; 
    cardName: string;
    cardNumber: string;
    cvv: string;
    expiryDate: string;
    subtotal: number;
    taxes: number;
    total: number;
    orderStatus: string; 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createdAt: any;
    products: CartProductObject[];
}