import axios from "axios";
import { BASE_URL } from "../../config";
import { NAME_TOKEN, NAME_HEADER_TOKEN } from "../../config";
export async function getRestaurantsUser(){
    try{
        const token = sessionStorage.getItem(NAME_TOKEN);
        const response = await axios.get(`${BASE_URL}restaurants/user`,{
            headers: {
                "x-access-token": token
            }
        });
        return response.data;
    }catch(error){
        console.error(error);
    }
}
export async function getRestaurant(idRestaurand){
    try {
        const token = sessionStorage.getItem(NAME_TOKEN);
        const response = await axios.get(`${BASE_URL}restaurant/${idRestaurand}`,
        {
            headers:{
                "x-access-token": token
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
export async function createRestaurant(name){
    try{
        const token = sessionStorage.getItem(NAME_TOKEN);
        const response = await axios.post(
            `${BASE_URL}restaurant`,
            {
              name: name
            },
            {
              headers: {
                "x-access-token": token
              }
            }
          );
        return response.data;
    }catch(error){
        console.error(error);
    }
}
export async function deleteRestaurant(idRestaurand){
    const token = sessionStorage.getItem(NAME_TOKEN);
    const response = await axios.delete(`${BASE_URL}restaurant/${idRestaurand}`,{
        headers: {
            "x-access-token": token
        }
    });
    return response.status;
}