import axios from 'axios'

const apiClient = axios.create({
    baseURL: "http://134.209.223.106/api",
    headers: {
        "Content-Type": "Application/json"
    }
})

export default apiClient