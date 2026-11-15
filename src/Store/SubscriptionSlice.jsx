import { createSlice } from "@reduxjs/toolkit";
var SubsSlice = createSlice({
    name:'subscription',
    initialState:{
        allSubscriptions:[],
        mySubscription:[]
    },
    reducers:{
        addToSubscription:(state,action)=>{
            state.allSubscriptions.push(action.payload);
            state.mySubscription=state.allSubscriptions.filter((obj)=>obj.username==action.payload.username)
        },
        getSubscriptionByUsername:(state,action)=>{
            state.mySubscription=state.allSubscriptions.filter((obj)=>obj.username==action.payload)
        }
    }
})
export const{addToSubscription,getSubscriptionByUsername}=SubsSlice.actions;
export default SubsSlice.reducer;