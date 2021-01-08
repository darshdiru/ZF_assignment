import players from "../data/players.json";
import { FETCH_PLAYERS, REMOVE_PLAYER, ADD_PLAYER } from "./playerTypes";

const initialState = {
  players: [],
  team: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        players: players,
      };
    case ADD_PLAYER:
      return {
        ...state,
        team: [...state.team, action.payload],
      };
    case REMOVE_PLAYER:
      return {
        ...state,
        team: remove(state.team, action.payload.id),
      };

    default:
      return state;
  }
};

const remove = (team, action) => {
  let filterItem = team.filter((item) => item.id !== action);
  return filterItem;
};
