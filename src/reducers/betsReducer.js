import {
  FETCH_BET_START,
  FETCH_BET_SUCCESS,
  FETCH_BET_ERROR,
} from "../actions/betsAction";

export const initialState = {
  places: [
    {
      restID: null,
      restName: "",
    },
  ],
  isLoading: true,
  error: null,
};

export function reducerList(state = initialState, action) {
  switch (action.type) {
    case FETCH_BET_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BET_SUCCESS:
      return {
        ...state,
        places: action.payload,
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
