import { createSlice } from "@reduxjs/toolkit";

export const GermanySlice = createSlice({
    name : 'GermanySlice',
    initialState : {
        users : localStorage.getItem("germany") ?
        JSON.parse(localStorage.getItem("germany")) : []

},
    reducers : {
        addUser : (state , action) =>{
           state.users.push(action.payload);
           localStorage.setItem("germany" , JSON.stringify(state.users));
        },
        deleteUser : (state ,action) =>{
          state.users = state.users.filter((user) => user.id !==action.payload)  
          localStorage.setItem("germany" , JSON.stringify(state.users));

        }
    }

})

export const {addUser , deleteUser} = GermanySlice.actions;
export default GermanySlice.reducer;