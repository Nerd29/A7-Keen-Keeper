// import React from 'react';

import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { listedFriendContext } from "../../../FriendContext/Context";



const Stats = () => {

    const {storedFriends}=useContext(listedFriendContext)
    const data = [
        { name: 'Call', value: storedFriends.filter((friend) => friend.actionType === "Call").length, fill: '#0088FE' },
        { name: 'Text', value: storedFriends.filter((friend)=>friend.actionType==="Text").length, fill: '#00C49F' },
        { name: 'Video', value: storedFriends.filter((friend)=>friend.actionType==="Video").length, fill: '#FFBB28' },
        ];
    return (
         
        <div className="m-30">
            <h2 className="text-4xl font-bold max-w-7xl mx-auto mb-5">Friendship Analytics</h2>
            <div className="bg-white shadow-sm p-9 max-w-7xl mx-auto ">
            <h2 className="font-semibold text-2xl">By Interaction type</h2>
            <PieChart style={{ width: '100%', maxWidth: '500px',margin:'auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend/>
      <Tooltip/>
    </PieChart>
         </div>
        </div>
    );
};

export default Stats;