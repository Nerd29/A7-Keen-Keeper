import { use, useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoArchive } from "react-icons/io5";
import { MdDelete, MdOutlineTextsms } from "react-icons/md";
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { useParams } from "react-router";
import { listedFriendContext } from "../../../FriendContext/Context";

// import React from 'react';
const friendsPromise=fetch('/friendsData.json').then(res => res.json())
console.log(friendsPromise)
const FriendDetails = () => {

    const {friendId}=useParams();
    // console.log(params)
    const friends=use(friendsPromise)
    console.log(friends)

    const {handleCall,handleText,handleVideo}=useContext(listedFriendContext)
    // console.log(handleCall)

    const FriendDetails=friends.find(friend=>friend.id==friendId)
    console.log(FriendDetails)
    return (
        <div className="max-w-7xl mx-auto p-6">
  <div className="grid md:grid-cols-3 gap-6">

    {/* Left Sidebar */}
    <div>
      {/* Profile Card */}
      <div className="card bg-base-100 shadow-md p-6 text-center items-center">
  <img
    src={FriendDetails.picture}
    alt={FriendDetails.name}
    className="w-24 h-24 rounded-full mx-auto"
  />

  <h2 className="text-2xl font-bold mt-4">
    {FriendDetails.name}
  </h2>

  <div>
        <button className={`btn font-semibold py-1 px-3 rounded-full border-none text-white ${FriendDetails.status === 'overdue'?'bg-[#EF4444]':FriendDetails.status==="almost due"?'bg-[#EFAD44]':'bg-[#244D3F]'}`}>{FriendDetails.status}</button>
    
    </div>

  <div className="flex gap-3  p-4">
         {
            FriendDetails.tags.map((tag,index)=><button key={index} className="btn bg-green-100 text-[#244D3F]">{tag}</button>)
         }
    </div>
  <p className="italic mt-4 text-[#64748B]">
    {FriendDetails.bio}
  </p>

  <p className="text-gray-500">
    Email : {FriendDetails.email}
  </p>
</div>
      {/* Action Buttons */}
       <div className="card bg-base-100 p-4 shadow mt-4 text-center  text-[#244D3F]">
        <h2 className="flex items-center justify-center gap-2"><RiNotificationSnoozeFill />Snooze 2 weeks</h2>
       </div>
       <div className="card bg-base-100 p-4 shadow mt-4 text-center text-[#244D3F]">
        <h2 className="flex items-center justify-center gap-2"><IoArchive />Archive</h2>
       </div>
       <div className="card bg-base-100 p-4 shadow mt-4 text-center text-red-600">
        <h2 className="flex items-center justify-center gap-2"><MdDelete />Delete</h2>
       </div>
    </div>

    <div className="md:col-span-2 space-y-8.5">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className="card bg-base-100 p-9 shadow">
    <h3 className="text-4xl font-bold text-center">
      {FriendDetails.days_since_contact}
    </h3>
    <p className="text-center text-[#64748B]">
      Days Since Contact
    </p>
  </div>

  <div className="card bg-base-100 p-9 shadow">
    <h3 className="text-4xl font-bold text-center">
      {FriendDetails.goal}
    </h3>
    <p className="text-center text-[#64748B]">
      Goal (Days)
    </p>
  </div>

  <div className="card bg-base-100 p-9 shadow">
    <h3 className="text-2xl font-bold text-center">
      {FriendDetails.next_due_date}
    </h3>
    <p className="text-center text-[#64748B]">
      Next Due
    </p>
  </div>
</div>
      {/* Goal */}
      <div className="card bg-base-100 p-12 shadow ">
        <div className="flex flex-col gap-4 md:flex-row justify-between">
            <div className="space-y-4">
                <h2 className="font-bold">Relationship Goal</h2>
        <p className="text-[#64748B]">Connect every <span className="text-[#244D3F]">{FriendDetails.goal} days</span></p>
            </div>
            
        <div>
        <button className="btn bg-gray-100">Edit</button>

        </div>
        </div>
        
      </div>
      {/* Quick Check-In */}
      <div className="card bg-base-100 p-10 shadow">
        <h2 className="text-[#64748B] text-xl">Quick Check-In</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button onClick={()=>handleCall(FriendDetails)} className="btn h-[108px] bg-[#F8FAFC] p-8 shadow mt-6 text-center items-center text-xl">
            <FiPhoneCall />
            <h3>Call</h3>
        </button>
       <button onClick={()=>handleText(FriendDetails)} className="btn bg-[#F8FAFC] h-[108px] p-8 shadow mt-6 text-center items-center text-xl">
        <MdOutlineTextsms />
        <h3>Text</h3>
       </button>
       <button onClick={()=>handleVideo(FriendDetails)} className="btn h-[108px] bg-[#F8FAFC] p-8 shadow mt-6 text-center items-center text-xl">
        <GoDeviceCameraVideo />
        <h3>Video</h3>
       </button>
      </div>
      </div>
     
       
    </div>

  </div>
</div>
    );
};

export default FriendDetails;