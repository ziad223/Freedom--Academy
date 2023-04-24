import { createSlice } from "@reduxjs/toolkit";


export const TrakingSlice = createSlice({
    name : 'trakingSlice',
    initialState : {
        users : localStorage.getItem("frorntend") ?
        JSON.parse(localStorage.getItem("frorntend")) : []

},
    reducers : {
        addUser : (state , action) =>{
        state.users.push(action.payload);
        localStorage.setItem("frorntend" , JSON.stringify(state.users));

        },
        
        deleteUser : (state , action) =>{
        state.users = state.users.filter((user) => user.id !== action.payload);
        localStorage.setItem("frorntend" , JSON.stringify(state.users));

        }
    }
    
});

export const {addUser , deleteUser} = TrakingSlice.actions;
export default TrakingSlice.reducer;