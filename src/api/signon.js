import axios from "axios";
import { BASE_URL } from "../config";

export async function signon(data){
    try{
        const response = await axios.post(`${BASE_URL}usuarios`, data);
        return response.data;
    }catch(error){
        console.error(error);
    }
}