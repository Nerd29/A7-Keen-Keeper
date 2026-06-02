// import React from 'react';

const FriendList = ({friend}) => {
    return (
        <div  className="card bg-base-100 p-4 shadow mt-4  text-[#244D3F] max-w-7xl mx-auto">
        <div className="flex gap-3">
                 <span className="text-3xl">
      <img
    className=""
    src={
      friend.actionType === "Call"
        ? "/assets/call.png"
        : friend.actionType === "Text"
        ? "/assets/text.png"
        : "/assets/video.png"
    }
    alt={friend.actionType}
  />
    </span>

    <div>
      <h3 className="font-bold">
        {friend.actionType} with <span className="font-semibold text-[12px] text-[#64748B]">{friend.name}</span>
      </h3>

      <p className="text-sm text-[#64748B] font-semibold">
        {friend.actionTime}
      </p>
    </div>
        </div>
        </div>
    );
};

export default FriendList;