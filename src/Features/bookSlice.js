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
        const {id,title,author} = action.payload
        const isBook = state.books.filter(b => b.id === id)
        console.log(isBook[0]);
        if(isBook){
            isBook[0].title = title;
            isBook[0].author = author
        }
    }
  },
});

export const { showBooks, addBooks, dleteBooks,editBooks } = bookSlice.actions;
export default bookSlice.reducer;
