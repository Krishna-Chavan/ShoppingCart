import { ADD_TO_CART } from "../constants/action-type";

export const addToCart = (data) =>{
    return {
        type: ADD_TO_CART,
        data: data
    }
}