import {createSlice} from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name  : "user" , 
    initialState : [] , 
    reducers : {
     addUser(state , action){
        state.push(action.payload);
     }  ,
     deleteUser (state , action){
        state.splice(action.payload , 1);
     }  ,
     deleteAllUser(state , action){
        return state = [];
     }  
    }
});

console.log("these are the actions in userSlice " , UserSlice.actions)
console.log(UserSlice);
export const {addUser , deleteUser , deleteAllUser} = UserSlice.actions;

export default  UserSlice.reducer;