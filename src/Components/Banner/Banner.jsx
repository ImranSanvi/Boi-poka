import React from 'react';
import bookImg from '../../assets/books.jpg';
import Books from '../../Pages/Books/Books';
import { useNavigate } from 'react-router';

const Banner = () => {

    const navigate = useNavigate();

    const handleViewList = () => {
        navigate("/books");
    }

    return (
        <div className='bg-[#131313]/5 flex flex-col md:flex-row gap-7 justify-between items-center p-[40px] md:p-0 md:pl-[100px] my-[20px] md:my-[50px] rounded-2xl mx-4 md:mx-0 md:h-[400px]'>
            <div className='space-y-4 md:space-y-10'>
                <h1 className='font-bold text-[56px]'>Books to freshen up your bookshelf</h1>
                <button onClick={handleViewList} className='font-bold text-[20px] text-white py-2 px-4 bg-[#23BE0A] rounded-[10px]'>View The List</button>
            </div>
            <div>
                <img className='md:rounded-r-2xl md:h-[400px]' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;