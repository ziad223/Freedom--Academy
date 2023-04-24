import { createSlice } from "@reduxjs/toolkit";

export const IcdlSlice = createSlice({
    name : 'IcdlSlice',
    initialState : {
        users : localStorage.getItem("icdl") ?
        JSON.parse(localStorage.getItem("icdl")) : []

},
    reducers : {
        addUser : (state , action) =>{
           state.users.push(action.payload);
           localStorage.setItem("icdl" , JSON.stringify(state.users));
        },
        deleteUser : (state ,action) =>{
          state.users = state.users.filter((user) => user.id !==action.payload)  
          localStorage.setItem("icdl" , JSON.stringify(state.users));

        }
    }

})

export const {addUser , deleteUser} = IcdlSlice.actions;
export default IcdlSlice.reducer;