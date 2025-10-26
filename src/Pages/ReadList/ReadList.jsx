import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/AddToDB";
import ReadBook from "../ReadBook/ReadBook";

const ReadList = () => {
  const data = useLoaderData();

  const [readList, setReadList] = useState([]);
  const [sort , setSort] = useState("");

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedBook.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type)

    if(type === 'pages'){
      const sortedByPages = [...readList].sort( (a, b) => a.totalPages - b.totalPages);
      setReadList(sortedByPages);
    }

    if(type === 'ratings'){
      const sortedByRatings = [...readList].sort( (a, b) => a.rating - b.rating);
      setReadList(sortedByRatings);
    }
  }

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1 font-bold">Sort By : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={ () => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={ () => handleSort("ratings")}>Rating</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Whish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center mt-[15px] md:mt-[30px]">
            Book I read {readList.length}
          </h2>
          {readList.map((readBook) => (
            <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-center mt-[15px] md:mt-[30px]">My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
