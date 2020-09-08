import api from "../utils/api";

export const FETCH_BET_START = "FETCH_BET_START";
export const FETCH_BET_SUCCESS = "FETCH_BET_SUCCESS";
export const FETCH_BET_ERROR = "FETCH_BET_ERROR";

export function fetchBets() {
  return (dispatch) => {
    dispatch({ type: FETCH_BET_START });
    api()
      .get("/bets/all")
      .then((res) => {
        dispatch({ type: FETCH_BET_SUCCESS, payload: res.data.restaurants });
      })
      .catch((err) => {
        dispatch({ type: FETCH_BET_ERROR, payload: err });
      });
  };
}
