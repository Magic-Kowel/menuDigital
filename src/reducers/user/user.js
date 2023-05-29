import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    token:"",
    users:[]
}
const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token;
        },
        createUser: async (state, action) => {
            try {
                console.log(`${BASE_URL}user`);
                const response = await axios.post(`${BASE_URL}user`, action.payload);
                return response.status;
            } catch (error) {
                console.error(error);
            }
        },
        loginUser: async(state, action)=>{
            try{
                const response = await axios.post(`${BASE_URL}user/login`, action.payload);
                return response.data;
            }catch(error){
                console.error(error);
            }
        }
    },
});
export const {createUser, loginUser, setUser} = userSlice.actions;
export default userSlice.reducer;