import axios from "axios";

const api = axios.create({
    baseURL: "https://switch-gym.herokuapp.com/api/"
})

export default api