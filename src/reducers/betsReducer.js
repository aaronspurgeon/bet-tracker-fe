import {
  FETCH_BET_START,
  FETCH_BET_SUCCESS,
  FETCH_BET_ERROR,
} from "../actions/betsAction";

export const initialState = {
  bets: [""],
  isLoading: true,
  error: null,
};

export function reducerList(state = initialState, action) {
  let bets = state.bets;
  switch (action.type) {
    case FETCH_BET_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BET_SUCCESS:
      bets = action.payload;
      return {
        ...state,
        bets: Object.assign(bets),
        isLoading: false,
      };
    case FETCH_BET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
