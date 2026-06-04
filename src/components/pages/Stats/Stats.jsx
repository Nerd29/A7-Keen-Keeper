// import React from 'react';

import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip,ResponsiveContainer } from "recharts";
import { listedFriendContext } from "../../../FriendContext/Context";



const Stats = () => {

    const {storedFriends}=useContext(listedFriendContext)
    const data = [
        { name: 'Call', value: storedFriends.filter((friend) => friend.actionType === "Call").length, fill: '#0088FE' },
        { name: 'Text', value: storedFriends.filter((friend)=>friend.actionType==="Text").length, fill: '#00C49F' },
        { name: 'Video', value: storedFriends.filter((friend)=>friend.actionType==="Video").length, fill: '#FFBB28' },
        ];
    return (
         
        <div className="my-10 md:my-20 px-4">
            <h2 className="text-2xl md:text-4xl font-bold max-w-7xl mx-auto mb-5">Friendship Analytics</h2>
            <div className="bg-white shadow-sm p-4 md:p-9 max-w-7xl mx-auto rounded-xl">
            <h2 className="font-semibold text-2xl">By Interaction type</h2>
            <div className="w-full h-[300px] md:h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius="60%"
                        outerRadius="85%"
                        paddingAngle={5}
                        cornerRadius={10}
                    />
                        <Tooltip />
                        <Legend />
                        </PieChart>
                    </ResponsiveContainer>
            </div>
         </div>
        </div>
    );
};

export default Stats;