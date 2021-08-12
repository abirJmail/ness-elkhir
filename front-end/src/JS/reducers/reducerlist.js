import { GET_USER, GET_USERS, TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/UserActionList";


const intialState = {
    users: [],
    userId: {},
    isEdit: false
}


const reducerlist = (state = intialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload };
//[0]
        case GET_USER:
           return { ...state, userId: action.payload } 

        case TOGGLE_TRUE:
            return { ...state, isEdit: true }
        case TOGGLE_FALSE:
            return { ...state, isEdit: false }

        default:
            return state;
    }
}

export default reducerlist