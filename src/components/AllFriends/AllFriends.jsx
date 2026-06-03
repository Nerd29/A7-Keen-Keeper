// import React from 'react';

import { use } from "react";
import Cards from "../Cards/Cards";

const friendsPromise=fetch('/friendsData.json').then(res => res.json()) ;
const AllFriends = () => {

    const friends=use(friendsPromise)
    console.log(friends)

    return (
        <div className="max-w-7xl mx-auto mt-9 px-3">
            <h2 className="font-semibold text-[#1F2937] text-2xl">Your Friends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {
                    friends.map((friend,index)=>{
                        return(
                            <Cards key={index} friend={friend}></Cards>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;