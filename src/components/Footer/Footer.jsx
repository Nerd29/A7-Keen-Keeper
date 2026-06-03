// import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#244D3F] text-center text-white space-y-4 mt-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl pt-[80px] px-4">KeenKeeper</h1>
            <p className=" font-medium text-[14px] text-gray-300">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div className="flex items-center justify-center gap-3 border-b border-gray-500 pb-10">
                <img src="/assets/facebook.png" alt="" />
                <img src="/assets/instagram.png" alt="" />
                <img src="/assets/twitter.png" alt="" />
            </div>
            <div className="mt-[40px] flex flex-col md:flex-row items-center justify-between container mx-auto pb-18">
                 <div class="copyright">
                <p className="text-gray-400 font-medium"><small>&copy; 2026 KeenKeeper.All Rights Reserved.</small></p>
            </div>
            <div className="flex flex-col  text-gray-400 font-medium sm:flex-row gap-4 ">
                <p>Privacy Policy</p>
                <p>Terms of services</p>
                <p>Cookies</p>
            </div>
            </div>
           

        </div>
    );
};

export default Footer;