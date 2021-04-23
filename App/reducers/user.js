import { USER_DETAILS } from "../action/type";

export default function user(state = null, action = {}) {

    switch (action.type) {
        case USER_DETAILS: {
            return {
                ...state,
                userData: action.payload
            };
        }
        default:
            return state;
    }
}