import React, { useState } from 'react';
import Books from './Components/Books';
import BookInfo from './Components/BookInfo';
import './App.css';
import './style.css'

function App() {
  const [bookinfo, setBookInfo] = useState([]);
  return (
    <div>
      {bookinfo.length && (
        <BookInfo bookinfo={bookinfo} />
      )  
        }
        <Books setBookInfo={setBookInfo} bookinfo={bookinfo} />
    
    </div>
  );
}

export default App;

