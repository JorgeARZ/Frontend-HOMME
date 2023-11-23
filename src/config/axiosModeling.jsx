import axios from "axios";

const axiosModeling = axios.create({
    baseURL:`${import.meta.env.VITE_MODELING_URL}`
})

export default axiosModeling