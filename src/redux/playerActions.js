import { ADD_PLAYER, REMOVE_PLAYER, FETCH_PLAYERS } from "./playerTypes";

const fetchPlayers = () => {
  return {
    type: FETCH_PLAYERS,
  };
};

const addPlayer = (player) => {
  return {
    type: ADD_PLAYER,
    payload: player,
  };
};

const removePlayer = (id) => {
  return {
    type: REMOVE_PLAYER,
    payload: { id: id },
  };
};

export { addPlayer, removePlayer, fetchPlayers };
