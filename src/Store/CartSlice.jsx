import { createSlice } from "@reduxjs/toolkit";
var CartSlice=createSlice({
    name:'cart',
    initialState:{
        allCourses:[],
        myCourse:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            var ind=state.allCourses.findIndex((obj)=>(
                obj.id==action.payload.id && obj.username==action.payload.username
            ))
            if(ind==-1){
               state.allCourses.push(action.payload);
            }
            else{
                state.allCourses[ind].quantity=state.allCourses[ind].quantity+1;
            }
            state.myCourse=state.allCourses.filter((obj)=>obj.username==action.payload.username)
        },
        removeFromCart:(state,action)=>{
            var ind=state.allCourses.findIndex((obj)=>(
                obj.id==action.payload.id && obj.username==action.payload.username
            ))
            if(ind!=-1){
            state.allCourses.splice(ind,1);
            }
            state.myCourse=state.allCourses.filter((obj)=>obj.username==action.payload.username)
        },
        getCartByUsername:(state,action)=>{
            state.myCourse=state.allCourses.filter((obj)=>obj.username==action.payload)
        }
    }
})
export const{addToCart,getCartByUsername,removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;