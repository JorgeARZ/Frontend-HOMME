import axios from 'axios'

const axiosUsers = axios.create({
    baseURL: `${import.meta.env.VITE_USERS_URL}`
})

export default axiosUsers;

