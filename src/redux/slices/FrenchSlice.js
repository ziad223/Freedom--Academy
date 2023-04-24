import { createSlice } from "@reduxjs/toolkit";


export const  FrenchSlice = createSlice({
    name : 'roomThreeSlice',
    initialState : {
        users : localStorage.getItem("french") ?
        JSON.parse(localStorage.getItem("french")) : []

},
    reducers : {
        addUser : (state , action) =>{
            state.users.push(action.payload);
            localStorage.setItem("french" , JSON.stringify(state.users))
        },
        deleteUser : (state , action) =>{
            state.users = state.users.filter((user) => user.id !== action.payload);
            localStorage.setItem("french" , JSON.stringify(state.users))

        }
    }
});

export const {addUser , deleteUser} =  FrenchSlice.actions;
export default FrenchSlice.reducer;