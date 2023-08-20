import {createSlice} from "@reduxjs/toolkit"

const initialState={
        data:0,
}


export const countSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
             state.data += 1;
        },
        decrement:(state,action)=>{
          state.data -= 1;
        },

        addbyvalue:(state,action)=>{
          state.data += action.payload;
        }


    }

})

export const {increment,decrement, addbyvalue} = countSlice.actions;
export default countSlice.reducer;