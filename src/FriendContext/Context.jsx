// import React from 'react';

import { createContext, useState } from "react";

export const listedFriendContext=createContext()

const Context = ({children}) => {

    const [storedFriends,setStoredFriends]=useState([])
    
    // console.log(storedFriends)

   const handleCall=(currentFriend)=>{
                console.log(currentFriend)
                const isExistFriend=storedFriends.find((friend)=>friend.id=== currentFriend.id &&
                friend.actionType === "Call")
                if(isExistFriend){
                    alert('This friend is already in timeline')
        
                }
                else{
                    alert('This friend is successfully saved in timeline')
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
                    alert(`Already texted ${currentFriend.name}`)
        
                }
                else{
                    alert(`Texted ${currentFriend.name}`)
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
                    alert(`Already video with ${currentFriend.name}`)
        
                }
                else{
                    alert(`${currentFriend.name} is  Video Called`)
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