import { createStore } from "redux"


const initialState = {
    basket: [],
    user:""

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET": return {
            ...state, basket: [...state.basket, action.item]
        }  
            // break;
        case "REMOVE_FROM_BASKET": return {
            ...state, basket: action.payload
        }
            // break;
            case "ASSIGN_USER": return {
                ...state, user: action.payload
            }
                // break;
        default: return state
            // break;
    }
}
export const store = createStore(reducer)