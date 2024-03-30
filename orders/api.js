import axios from "axios"
import { API_URL } from "../urls"

export const getOrders = async (user_id) => {
    const response = await axios.get(`${API_URL}/orders?user_id=${user_id}`);
    return response.data;
}