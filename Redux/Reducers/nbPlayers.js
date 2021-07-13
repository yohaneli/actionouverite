import { GET_NB_PLAYERS } from "../Actions/types";

const initStateNbPlayers = {players:null}

const nbPlayers = (state = initStateNbPlayers,action) => {

    switch (action.type) {

        case GET_NB_PLAYERS:

            return action.payload;

            break;

        default:

            return state;

            break;
    }
}

export default nbPlayers;