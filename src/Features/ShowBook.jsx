import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Css/Home.css";

const ShowBook = () => {
  const books = useSelector((state) => state.bookReducer.books);
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
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button>Edit</button>
                    </Link>
                    <button>
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
