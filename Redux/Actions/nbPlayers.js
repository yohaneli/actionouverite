import { GET_NB_PLAYERS } from "./types";

export const recupNbPlayers = (payload) => ({
    type: GET_NB_PLAYERS,
    payload
})