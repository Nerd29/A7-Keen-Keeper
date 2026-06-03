// import React from 'react';

import { useContext, useState } from "react";
import { listedFriendContext } from "../../FriendContext/Context";
import FriendList from "../FriendList/FriendList";
import { RiArrowDropDownLine } from "react-icons/ri";

const TimeLine = () => {
    const {storedFriends}=useContext(listedFriendContext)

    const [sortType, setSortType] = useState("All");
    const [searchText, setSearchText] = useState("");
     const sortedFriends =
    sortType === "All"? storedFriends: storedFriends.sort((a,b) =>{if (a.actionType === sortType && b.actionType !== sortType)
          return -1;

        if (a.actionType !== sortType && b.actionType === sortType)
          return 1;

        return 0;
        });
        // console.log(storedFriends)
        if(storedFriends.length===0){
                return <div className='h-[50vh] flex items-center justify-center bg-gray-200'>
                    <h2 className='font-bold text-2xl'>No data is found</h2>
                </div>
            }

    const filteredFriends=sortedFriends.filter((friend)=>friend.actionType.toLowerCase().includes(searchText.toLowerCase()))

   
        
            
    return (
        <div>
            <h2 className="max-w-7xl mx-auto text-2xl text-[#244D3F] font-bold">Timeline</h2>

            <div className="flex justify-between items-center max-w-7xl mx-auto">
                 <div className="mt-4">
                <div className="dropdown  ">
                <div tabIndex={0} role="button" className="btn m-1 gap-9 text-gray-400">{sortType==="All"?"Filter TimeLine":sortType}<span className="text-2xl text-gray-400"><RiArrowDropDownLine /></span></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm font-semibold">
                    <li><a onClick={()=>setSortType("Call")}>Call</a></li>
                    <li><a onClick={()=>setSortType("Text")}>Text</a></li>
                    <li><a onClick={()=>setSortType("Video")}>Video</a></li>
                </ul>
            </div>
            </div>
            <div className="mt-4">
                <label className="input bg-gray-100">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required placeholder="Search"  onChange={(e) => setSearchText(e.target.value)} />
            </label>
            </div>
            
            </div>

           
            
        
        <div className='container mx-auto space-y-5'>
            {
            filteredFriends.map((friend,index)=>{
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