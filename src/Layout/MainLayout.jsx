// import React from 'react';

import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-[#F8FAFC]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;