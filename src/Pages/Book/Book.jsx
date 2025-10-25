import { Star } from "lucide-react";
import { Link } from "react-router";

const Book = ({ book }) => {
  // const data = use(bookPromise)
  // console.log(data)

  const { bookId, image, bookName, author, tags, rating } = book;
  console.log(book);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="mx-4 md:mx-0 p-5 rounded-2xl border-2 border-gray-300 space-y-5">
        <div className="bg-[#F3F3F3] flex justify-center items-center p-3 rounded-2xl">
          <img className="w-[134px] h-[166px]" src={image} alt="" />
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-[24px]">{bookName}</h1>
          <h3 className="font-medium text-[16px]">BY:{author}</h3>
          <div className="border-1 border-dashed"></div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center gap-3 ">
              {tags.map((tag) => (
                <button className="bg-green-300 p-2 rounded-2xl">{tag}</button>
              ))}
            </div>
            <p className="font-medium text-[24px] flex justify-center items-center gap-2">
              {rating} <Star></Star>{" "}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
