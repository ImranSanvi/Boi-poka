import React from 'react';
import bookImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className='bg-[#131313]/5 flex justify-between items-center p-[100px] my-[50px] rounded-2xl '>
            <div className='space-y-10'>
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