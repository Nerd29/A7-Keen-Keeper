// import React from 'react';

import { Link } from "react-router";

const Cards = ({friend}) => {
    return (
        <Link to={`/friendDetails/${friend.id}`} className="card bg-base-100  shadow-sm  rounded-xl p-4  hover:bg-green-100 transition ">
  <figure >
    <img className="rounded-full w-28 h-28"
      src={friend.picture}
      alt="Shoes" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-center">{friend.name}</h2>
    <p className="text-[#64748B] font-semibold">{friend.days_since_contact}d ago</p>
    <div className="flex gap-3 flex-wrap">
         {
            friend.tags.map((tag,index)=><button key={index} className="btn bg-[#CBFADB] text-[#1F2937] rounded-full">{tag}</button>)
         }
    </div>
    <div>
        <button className={`btn font-semibold py-1 px-3 rounded-full border-none text-white ${friend.status === 'overdue'?'bg-[#EF4444]':friend.status==="almost due"?'bg-[#EFAD44]':'bg-[#244D3F]'}`}>{friend.status}</button>
    
    </div>
    
  </div>
</Link>
    );
};

export default Cards;