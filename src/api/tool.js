import axios from "axios";
import { BASE_URL } from "../config";

export async function validateEmail(email){
    try{
        const response = await axios.get(`${BASE_URL}user/email/${email}`);
        return response.data;
    }catch(error){
        console.error(error);
    }
}