import React from "react";

const ReadBook = ({ readBook }) => {
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    tags,
    totalPages,
    yearOfPublishing,
  } = readBook;

  return (
    <div className="flex flex-col md:flex-row gap-5 m-[15px] md:m-[50px] border border-amber-300 rounded-2xl p-4">
      <div className=" md:w-1/5 bg-[#131313]/5 flex justify-center items-center">
        <img className="p-[15px]" src={image} alt="" />
      </div>
      <div className="md:w-4/5 space-y-2">
        <h3 className="font-bold text-[20px]">{bookName}</h3>
        <h1 className="font-medium text-[10px] text-red-500">By : {author}</h1>
        <p className="font-medium text-[20px] text-[#131313]/80">{category}</p>

        <div className="flex gap-5">
          <span className="font-bold text-[16px] text-[#131313]">Tag</span>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="font-medium text-[8px] text-[#23BE0A] "
            >
              {tag}
            </button>
          ))}
        </div>


        <div className="flex gap-15 items-center">
          <p className="font-normal text-[10px] ">Number of Pages:</p>
          <h1 className="font-semibold text-[10px] text-purple-500">{totalPages}</h1>
        </div>

        <div className="flex gap-15 items-center">
          <p className="font-normal text-[10px] ">Publisher:</p>
          <h1 className="font-semibold text-[10px] text-purple-500">{publisher}</h1>
        </div>

        <div className="flex gap-15 items-center">
          <p className="font-normal text-[10px] ">Year of Publishing:</p>
          <h1 className="font-semibold text-[10px] text-purple-500">{yearOfPublishing}</h1>
        </div>


        <div className="flex flex-col md:flex-row gap-7">
          <button className="bg-pink-300 px-2 py-2 rounded-2xl">
            <h1 className="font-semibold text-[10px] ">rating : {rating}</h1>
          </button>
          <button className="bg-gray-500 px-2 py-2 rounded-2xl">
            Mark as Read
          </button>
          <button className="bg-green-500 px-2 py-2 rounded-2xl">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
