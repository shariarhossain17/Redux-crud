import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "shariar" },
    { id: 2, title: "Bangladeshi", author: "Sh" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    dleteBooks: (state, action) => {
        const id = action.payload
      state.books = state.books.filter((b) => b.id !== id);
    },
    editBooks:(state,action) => {
        
    }
  },
});

export const { showBooks, addBooks, dleteBooks } = bookSlice.actions;
export default bookSlice.reducer;
