import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    pets:[]
}

const petSlice = createSlice({
    name:"pet",
    initialState,
    reducers:{
        addAllPets:(state,action)=>{
            state.pets = action.payload.data;
        },
        updatePets:(state,action)=>{
            state.pets.push(action.payload.data);
        },
        deletePet:(state,action)=>{
            const id = action.payload.data
            state.pets = state.pets.filter((item)=> item._id !== id);
        },
    }
});

export const {addAllPets,updatePets,deletePet} = petSlice.actions;

export default petSlice.reducer;