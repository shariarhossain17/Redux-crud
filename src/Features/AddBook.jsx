import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import '../Css/Home.css';
import { addBooks } from './bookSlice';
const AddBook = () => {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const navigate = useNavigate()
    
    const state = useSelector(state => state.bookReducer.books)
    const dispatch = useDispatch()
    const handleAddBook = e => {
        e.preventDefault()
        const book = {
            id:state.length + 1,
            title,
            author
        }
        dispatch(addBooks(book))
        navigate('/')
    }
    return (
        <div className='home'>
            <h1> Add book</h1>

            <div>
                <span>Title:</span>
                <input type="text" 
                required
                onChange={(e) => setTitle(e.target.value)}
                
                /> <br />
                <span>Author:</span>
                <input type="text" 
                required
                onChange={(e) => setAuthor(e.target.value)}
                /> <br />
                <button className='edit-btn' onClick={handleAddBook}>Add</button>
            </div>
        </div>
    );
};

export default AddBook;