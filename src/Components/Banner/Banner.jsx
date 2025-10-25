import React from 'react';
import bookImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='bg-[#131313]/5 flex flex-col md:flex-row justify-between items-center p-[40px] md:p-[100px] my-[20px] md:my-[50px] rounded-2xl mx-4 md:mx-0 space-y-4'>
            <div className='space-y-4 md:space-y-10'>
                <h1 className='font-bold text-[56px]'>Books to freshen up your bookshelf</h1>
                <button className='font-bold text-[20px] text-white py-2 px-4 bg-[#23BE0A] rounded-[10px]'>View The List</button>
            </div>
            <div>
                <img src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;