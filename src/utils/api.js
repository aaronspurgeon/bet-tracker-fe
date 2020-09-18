import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user_data");
  const bets = localStorage.getItem("bet_list");

  return axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
      user: `${user}`,
      bets: `${bets}`,
    },
  });
};

export default axiosWithAuth;
