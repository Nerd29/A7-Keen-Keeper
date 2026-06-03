// import React from 'react';

import { use, useContext } from "react";
import {  IoMdAdd } from "react-icons/io";
import { listedFriendContext } from "../../FriendContext/Context";

const friendsPromise=fetch('/friendsData.json').then(res => res.json()) ;

const Banner = () => {
    const {storedFriends}=useContext(listedFriendContext)

    const friends=use(friendsPromise)
    const onTrack=friends.filter((friend)=>friend.status==="on-track")
    const needAttention=friends.filter((friend)=>friend.status==="overdue")
    const interactionsThisMonth=storedFriends.length
    return (
        <div className="text-center space-y-5 mt-[80px]">
            <h2 className="font-bold text-3xl md:text-5xl ">Friends to keep close in your life</h2>
            <p className="text-[#64748B] text-sm md:text-[16px] max-w-2xl mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
               relationships that matter most.</p>
               <button className="btn bg-[#244D3F] text-white"><IoMdAdd />Add a friend</button>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto border-b border-gray-300 p-4">
             <div className="card bg-base-100 py-10 px-6 shadow text-center">
                <span className="font-bold text-4xl text-[#244D3F]">{friends.length}</span>
                <h3 className="font-semibold text-xl text-[#64748B]">Total Friends</h3>
             </div>
            <div className="card bg-base-100 py-10 px-6 shadow text-center">
                <span className="font-bold text-4xl text-[#244D3F]">{onTrack.length}</span>
                <h3 className="font-semibold text-xl text-[#64748B]">On Track</h3>
            </div>
            <div className="card bg-base-100 py-10 px-6 shadow text-center">
                <span className="font-bold text-4xl text-[#244D3F]">{needAttention.length}</span>
                <h3 className="font-semibold text-xl text-[#64748B]">Need Attention</h3>
            </div>
            <div className="card bg-base-100 py-10 px-6 shadow text-center">
                <span className="font-bold text-4xl text-[#244D3F]">{interactionsThisMonth}</span>
                <h3 className="font-semibold text-[16px] text-[#64748B]">Interactions this month</h3>
            </div>
           </div>
        </div>
    );
};

export default Banner;