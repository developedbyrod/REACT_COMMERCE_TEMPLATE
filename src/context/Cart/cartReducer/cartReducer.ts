import { ActionType, CartStateType } from "../../../types"

export const initialState : CartStateType = {
    cart: [],
    total: 0
}

export const cartReducer = (state : CartStateType , action : ActionType) => {
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state
    }
}