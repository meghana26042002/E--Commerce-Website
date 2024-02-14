import {createSlice} from "@reduxjs/toolkit";
const userslice=createSlice({
    name:'userslice',
    initialState:{
        firstname:"meghana",

    },
    reducers:{
        updatefirstname:(state,action)=>{
            const newfirstname=action?.payload;
            return{...state,firstname:newfirstname}
        }
    }
})
export default userslice.reducer;
export const {updatefirstname}=userslice.actions





