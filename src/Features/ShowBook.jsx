import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Css/Home.css";
import { dleteBooks } from "./bookSlice";

const ShowBook = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(dleteBooks(id))
  }
  return (
    <div>
      <table className="table">
        <thead className="content">
          <tr>
            {/* <th>ID</th> */}
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  {/* <td>{id}</td> */}
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{id,title,author}}>
                      <button>Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBook;
