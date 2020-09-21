import api from "../utils/api";

export const FETCH_BET_START = "FETCH_BET_START";
export const FETCH_BET_SUCCESS = "FETCH_BET_SUCCESS";
export const FETCH_BET_ERROR = "FETCH_BET_ERROR";

export function fetchBets(id, sport) {
  return (dispatch) => {
    dispatch({ type: FETCH_BET_START });
    api()
      .get(`/bets/${sport}/${id}`)
      .then((res) => {
        dispatch({ type: FETCH_BET_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_BET_ERROR, payload: err });
      });
  };
}
