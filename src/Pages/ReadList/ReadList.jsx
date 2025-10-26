import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/AddToDB";
import ReadBook from "../ReadBook/ReadBook";

const ReadList = () => {

  const data = useLoaderData();

  const [readList, setReadList] = useState([])
  
  useEffect( () =>{
    const storedBookData = getStoredBook();
    const convertedBook = storedBookData.map(id => parseInt(id));
    const myReadList = data.filter(book => convertedBook.includes(book.bookId));
    setReadList(myReadList);
  },[])

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Whish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-center mt-[15px] md:mt-[30px]">Book I read {readList.length}</h2>
          {
            readList.map(readBook => <ReadBook key={readBook.bookId} readBook={readBook}></ReadBook>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-center mt-[15px] md:mt-[30px]" >My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
