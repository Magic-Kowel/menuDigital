import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    users:[]
}
const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{

    },
    reducers: {
        createUser: async (state, action) => {
            try {
                console.log(`${BASE_URL}usuarios`);
                const response = await axios.post(`${BASE_URL}usuarios`, action.payload);
                return response.status;
            } catch (error) {
                console.error(error);
            }
        },
        loginUser: async(state, action)=>{
            try{
                const response = await axios.post(`${BASE_URL}usuarios/login`, action.payload);
                return response.data;
            }catch(error){
                console.error(error);
            }
        }
    },
});
export const {createUser, loginUser} = userSlice.actions;
export default userSlice.reducer;