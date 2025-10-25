import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({data}) => {
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect( () => {
  //     fetch('booksData.json').then(res => res.json())
  //     .then(data => setAllBooks(data))
  // }, [])

  // const bookPromise = fetch("booksData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="font-bold text-[20px] text-center p-6">Books</h1>
     
        <Suspense fallback={<span>Loading...</span>}>
        <div className="my-8 md:my-0 grid md:grid-cols-3 gap-4">
          {
            data.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </div>
              
        </Suspense>
    </div>
  );
};

export default Books;
