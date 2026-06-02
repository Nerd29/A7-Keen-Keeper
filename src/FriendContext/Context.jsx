// import React from 'react';

import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const listedFriendContext=createContext()

const Context = ({children}) => {

    const [storedFriends,setStoredFriends]=useState([])
    
    // console.log(storedFriends)

   const handleCall=(currentFriend)=>{
                console.log(currentFriend)
                const isExistFriend=storedFriends.find((friend)=>friend.id=== currentFriend.id &&
                friend.actionType === "Call")
                if(isExistFriend){
                    toast.error(`${currentFriend.name} is already called`)
        
                }
                else{
                    toast.success(`Call with ${currentFriend.name}`)
                   setStoredFriends([...storedFriends,{
                        ...currentFriend,
                        actionType: "Call",
                        actionTime: new Date().toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                    })
                     }])
                }
        }
    const handleText=(currentFriend)=>{
                console.log(currentFriend)
                const isExistFriend=storedFriends.find((friend)=>friend.id=== currentFriend.id &&
                friend.actionType === "Text")
                if(isExistFriend){
                     toast.error(`${currentFriend.name} is already texted`)
        
                }
                else{
                     toast.success(`Text with ${currentFriend.name}`)
                   setStoredFriends([...storedFriends,{
                        ...currentFriend,
                        actionType: "Text",
                        actionTime: new Date().toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                    })
                     }])
                }
        }
   const handleVideo=(currentFriend)=>{
                console.log(currentFriend)
                const isExistFriend=storedFriends.find((friend)=>friend.id=== currentFriend.id &&
                friend.actionType === "Video")
                if(isExistFriend){
                    toast.error(`Already video with ${currentFriend.name}`)
        
                }
                else{
                    toast.success(`Video with ${currentFriend.name}`)
                   setStoredFriends([...storedFriends,{
                        ...currentFriend,
                        actionType: "Video",
                        actionTime: new Date().toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                    })
                     }])
                }
        }
        const data={
            handleCall,storedFriends,setStoredFriends,handleText,handleVideo
        }
    return <listedFriendContext.Provider value={data}>
        {children}
    </listedFriendContext.Provider>
};

export default Context;