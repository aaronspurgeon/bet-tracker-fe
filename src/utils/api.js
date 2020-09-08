import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  return axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
      userId: `${user}`,
    },
  });
};

export default axiosWithAuth;
