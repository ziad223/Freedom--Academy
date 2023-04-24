import { createSlice } from "@reduxjs/toolkit";


export const EnglishSlice = createSlice({
    name : 'EnglishSlice',
    initialState : {
            users : localStorage.getItem("english") ? 
            JSON.parse(localStorage.getItem("english")) : []

    },
    reducers : {
        addUser : (state , action)=>{
             state.users.push(action.payload);
            localStorage.setItem("english" , JSON.stringify(state.users));
       
        },
        deleteUser : (state , action) =>{
         state.users =  state.users.filter((user) => user.id !== action.payload);
         localStorage.setItem("english" , JSON.stringify(state.users));

         
        }
    }
})

export const {addUser , deleteUser} = EnglishSlice.actions;

export default EnglishSlice.reducer