// import React from 'react';

import { useContext } from "react";
import { listedFriendContext } from "../../FriendContext/Context";
import FriendList from "../FriendList/FriendList";

const TimeLine = () => {
    const {storedFriends}=useContext(listedFriendContext)
        // console.log(storedFriends)
        if(storedFriends.length===0){
                return <div className='h-[50vh] flex items-center justify-center bg-gray-200'>
                    <h2 className='font-bold text-2xl'>No data is found</h2>
                </div>
            }
        
            
    return (
        <div>
            <h2 className="max-w-7xl mx-auto text-2xl text-[#244D3F] font-bold">Timeline</h2>
        
        <div className='container mx-auto space-y-5'>
            {
            storedFriends.map((friend,index)=>{
                return (
                   <FriendList key={index} friend={friend}></FriendList>
                )
            })
        }
           
        </div>
        </div>
    )
};

export default TimeLine;