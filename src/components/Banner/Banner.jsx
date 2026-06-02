// import React from 'react';

import {  IoMdAdd } from "react-icons/io";

const Banner = () => {
    return (
        <div className="text-center space-y-5 mt-[80px]">
            <h2 className="font-bold text-5xl">Friends to keep close in your life</h2>
            <p className="text-[#64748B] text-[16px]">Your personal shelf of meaningful connections. Browse, tend, and nurture the
               <br />relationships that matter most.</p>
               <button className="btn bg-[#244D3F] text-white"><IoMdAdd />Add a friend</button>
        </div>
    );
};

export default Banner;