import axios from "axios";
import { BASE_URL } from "../config";

export async function loginUser(data){
    try{
        const response = await axios.post(`${BASE_URL}user/login`, data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}