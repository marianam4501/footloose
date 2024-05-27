import { ProductObject } from '../utils/productObject';
import { UserObject } from '../utils/userObject';

export interface CartProductObject {
    id: number,
    product: ProductObject,
    user: UserObject,
    quantity: number,
    size: string,
}