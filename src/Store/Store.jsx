import { configureStore } from '@reduxjs/toolkit'
import courseS from './CoursesSlice'
import cartS from './CartSlice'
import subS from './SubscriptionSlice'
export const Store=configureStore({
    reducer:{
        courses:courseS,
        cart:cartS,
        subs:subS
    }
})