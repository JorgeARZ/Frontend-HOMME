import axios from "axios";

const axiosRequest = axios.create({
    baseURL:`${import.meta.env.VITE_REQUEST_URL}`
})

export default axiosRequest