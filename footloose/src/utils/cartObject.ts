import { CartProductObject } from "./cartProductObject";

export interface CartObject{
    id: number;
    products: CartProductObject[];
    ownerId: number;
    subtotal: number;
    taxes: number;
    total: number;
}