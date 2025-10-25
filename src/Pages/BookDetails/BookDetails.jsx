import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const ID = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === ID);

  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = singleBook;

  return (
    <div className="flexJ">
        <img className="w-[200px]" src={image} alt="" />
        <div>
            <h3>{bookName}</h3>
            <h1>By : {author}</h1>
            <div className="border-t-2 border-gray-300"></div>
            <p>{category}</p>
            <div className="border-t-2 border-gray-300"></div>
        </div>
    </div>
  );
};

export default BookDetails;
