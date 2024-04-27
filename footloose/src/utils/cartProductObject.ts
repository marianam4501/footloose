import { ProductObject } from '../utils/productObject';
import { UserObject } from '../utils/userObject';

export interface CartProductObject {
    id: string,
    product: ProductObject,
    user: UserObject,
    quantity: number,
    size: string,
}