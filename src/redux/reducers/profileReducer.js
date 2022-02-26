import { ActionTypes } from "../constants/action-types";


//create state
const initialState = {
    profiles: [
        {
        id: 1,
        name: "Jigyashu Nager",
        phone: "7678577897",
        email: "jiagyshunager@gmail.com",
        website: "www.xyz.com",

        },
        {
        id: 2,
        name: "Amit Thakur",
        phone: "7678567897",
        email: "jiagyshunager@gmail.com",
        website: "www.xyz.com",
        },
        {
        id: 3,
        name: "Ji Nager",
        phone: "7678567897",
        email: "jiagyshunager@gmail.com",
        website: "www.xyz.com",

        },
    ],
};

export const profileReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PROFILES:
            return state; 
    
        default:
            return state;
    }
}