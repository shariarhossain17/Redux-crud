
import { configureStore } from '@reduxjs/toolkit'
import bookReducer from '../Features/bookSlice'

const store = configureStore({
    reducer:{
        bookReducer:bookReducer
    }
})

export default store