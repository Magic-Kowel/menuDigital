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
export async function createRestaurant(restaurant){
    try{
            const token = sessionStorage.getItem(NAME_TOKEN);
            const {name,img} = restaurant;
            const formdata = new FormData()
            formdata.append('file', img)
            formdata.append('name', name)
            console.log(formdata.getAll("file"));
            const response = await axios.post(`${BASE_URL}restaurant`, formdata,  {
                headers: {
                    "x-access-token": token,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            return response;
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
export async function updateRestaurant(restaurant,path){
    const {nombre,restaurante_id} = restaurant;
    try{
        const formdata = new FormData()
        if(path  instanceof File){
            formdata.append('file', path);
        }else{
            formdata.append('file', null);
        }
        formdata.append('name', nombre)
        // console.log(formdata.getAll("file"));
        const token = sessionStorage.getItem(NAME_TOKEN);
        const response = await axios.patch(
            `${BASE_URL}restaurant/${restaurante_id}`,
            formdata,
            {
              headers: {
                "x-access-token": token,
                'Content-Type': 'multipart/form-data'
              }
            }
          );
        return response.data;
    }catch(error){
        console.error(error);
    }
}