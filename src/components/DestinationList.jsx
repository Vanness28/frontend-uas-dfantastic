import React from "react";
import { Link } from "react-router-dom";

const DestinationList = ({ img, Name, Address, Deskripsi }) => {
    return (
    <>
        <div className="flex flex-row space-x-4 md:space-x-5 xl:space-x-7 ml-3 md:ml-7 xl:ml-12"> 
            <img src={img} alt="" className="w-28 md:w-40 lg:w-48 xl:w-56 rounded-lg"/>
            <div className="flex flex-col space-y-2 md:space-y-5 lg:space-y-6 xl:space-y-8 mt-1 md:mt-2 xl:mt-4">
                <h2 className="hover:text-[#0066FE] cursor-pointer font-bold text-black text-sm md:text-xl lg:text-2xl xl:text-3xl"><Link to={'/detaildestination'}>{Name}</Link></h2>
                <p className="text-xs md:text-sm lg:text-xl xl:text-2xl text-[#808080]">{Address}</p>
                <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-[#808080] md:pr-40">{Deskripsi}</p>
            </div>        
        </div>
    </>
    );
};

export default DestinationList;