import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        { id:1, title: "Love Bangladesh", author: "Anisul Islam" },
        { id:2, title: "Bangladeshi", author: "Anisul Islam" },
      ],
}

export const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
        showBooks:state => state,
    }
})

export const {showBooks} = bookSlice.actions; 
export default bookSlice.reducer;
