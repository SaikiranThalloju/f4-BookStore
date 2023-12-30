import React, { useState, useEffect } from "react";
import axios from "axios";
import x from "../Images/Group.png";
import y from "../Images/bx_bx-book-heart.png";
import z from "../Images/fluent_premium-person-20-regular.png";
import p from "../Images/ic_round-notifications-none.png";
import r from "../Images/IMG20210528181544.png";
import s from "../Images/KeazoNBOOKS.png";

const Books = ({ setBookInfo, bookinfo }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const randomQuery = "sherlock";

    setQuery(randomQuery);
    fetchDetails(randomQuery);
  }, []);

  async function fetchDetails(query) {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: { q: query },
        }
      );
      console.log(response.data.items);
      setBooks(response.data.items);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      <div className="inputdata">
        <img src={x} alt="My Image" />
        <img src={s} alt="My Image" />

        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for the book you want to read..."
        />
        <button onClick={() => fetchDetails(query)}>Search</button>
        <img src={y} alt="My Image" />
        <img src={z} alt="My Image" />
        <img src={p} alt="My Image" />
        <img src={r} alt="My Image" />
      </div>
      <div>
        {books.map((book) => (
          <div key={book.id} className="books">
            <img
              src={book.volumeInfo.imageLinks?.smallThumbnail}
              alt={book.volumeInfo.title}
              onClick={() => setBookInfo([...bookinfo, book])}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
