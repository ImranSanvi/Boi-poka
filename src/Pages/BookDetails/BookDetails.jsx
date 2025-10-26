import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToDB } from "../../Utility/AddToDB";

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

  const handleMarkAsRead = (id) => {
    addToDB(id)
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 m-[30px] md:m-[100px]">
        <div className=" md:w-1/2 bg-[#131313]/5 flex justify-center items-center">
          <img className="p-[75px]" src={image} alt="" />
        </div>
        <div className="md:w-1/2 space-y-4">
            <h3 className="font-bold text-[40px]">{bookName}</h3>
            <h1 className="font-medium text-[20px]">By : {author}</h1>
            <div className="border-t-2 border-gray-300"></div>
            <p className="font-medium text-[20px] text-[#131313]/80">{category}</p>
            <div className="border-t-2 border-gray-300"></div>

            <p className="font-normal text-[16px] text-[#131313]/70"> <span className="font-bold text-[16px] text-[#131313]">Review:</span> {review}</p>

            <div className="flex gap-10">
              <span className="font-bold text-[16px] text-[#131313]">Tag</span>
             {
                 tags.map((tag, index) => <button key={index} className="font-medium text-[16px] text-[#23BE0A] ">{tag}</button>)
             }
            </div>

        <div className="border-t-2 border-gray-300"></div>

        <div className='flex gap-15 items-center'>
          <p className="font-normal text-[16px] ">Number of Pages:</p>
          <h1 className="font-semibold text-[16px] ">{totalPages}</h1>
        </div>

        <div className='flex gap-15 items-center'>
          <p className="font-normal text-[16px] ">Publisher:</p>
          <h1 className="font-semibold text-[16px] ">{publisher}</h1>
        </div>

        <div className='flex gap-15 items-center'>
          <p className="font-normal text-[16px] ">Year of Publishing:</p>
          <h1 className="font-semibold text-[16px] ">{yearOfPublishing}</h1>
        </div>

        <div className='flex gap-15 items-center'>
          <p className="font-normal text-[16px] ">Rating:</p>
          <h1 className="font-semibold text-[16px] ">{rating}</h1>
        </div>


        <div className="flex flex-col md:flex-row gap-10">
             <button onClick={() => handleMarkAsRead(id)} className="bg-gray-500 px-5 py-3 rounded-2xl">Mark as Read</button>
            <button className="bg-green-500 px-5 py-3 rounded-2xl">Add to Wishlist</button>
        </div>
        </div>
    </div>
  );
};

export default BookDetails;
