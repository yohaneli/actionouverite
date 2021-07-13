import { NAME_PLAYERS } from "../Actions/types";

const initStateTabNamePlayers = [];

const namePlayers = (state = initStateTabNamePlayers, action) => {
    console.log(action,state);

    switch (action.type) {

        case NAME_PLAYERS:

            return [...state,action.payload];

            break;
    
        default:

            return state

            break;
    }
    
    
}

export default namePlayers;