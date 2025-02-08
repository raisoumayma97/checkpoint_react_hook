import axios from "axios";

const httpClient =axios.create({
    baseURL:'http://localhost:5173'
})

export default httpClient;