// import React from 'react';

import { Suspense } from "react";
import AllFriends from "../../AllFriends/AllFriends";
import Banner from "../../Banner/Banner";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-[50vh]">
                    <span className="loading loading-spinner text-success"></span>
                </div>
                }>
                 <AllFriends></AllFriends>
            </Suspense>
           
        </div>
    );
};

export default HomePage;