import { createSlice } from "@reduxjs/toolkit";


export const GraphicSlice = createSlice({
    name : 'GraphicSlice',
    initialState : {
        users : localStorage.getItem("graphic") ?
        JSON.parse(localStorage.getItem("graphic")) : []

},
    reducers : {
        addUser : (state , action) =>{
        state.users.push(action.payload);
        localStorage.setItem("graphic" , JSON.stringify(state.users));

        },
        
        deleteUser : (state , action) =>{
        state.users = state.users.filter((user) => user.id !== action.payload);
        localStorage.setItem("graphic" , JSON.stringify(state.users));

        }
    }
    
});

export const {addUser , deleteUser} = GraphicSlice.actions;
export default GraphicSlice.reducer;