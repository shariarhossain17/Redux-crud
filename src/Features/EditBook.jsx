import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBooks } from "./bookSlice";

const EditBook = () => {
  const location = useLocation();
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const [id, setId] = useState(location.state.id);
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(editBooks({ title, author, id }));
    navigate('/')
  };
  return (
    <div className="home">
      <div className="home">
        <h1> Add book</h1>

        <div>
          <span>Title:</span>
          <input
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <br />
          <span>Author:</span>
          <input
            type="text"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />{" "}
          <br />
          <button className="edit-btn" onClick={handleAddBook}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
