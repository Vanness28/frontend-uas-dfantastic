import React from "react";
import { Link } from "react-router-dom";
import Star from "../assets/star.svg";

const DestinationHome = ({ img, Name, Address }) => {
    return (
    <>
        <div className="mt-7 md:ml-9 xl:mt-9 xl:ml-12 bg-[#0066FE] px-3 py-3 mr-24 ml-4 min-[375px]:mr-28 min-[375px]:ml-0 min-[425px]:mr-36 min-[425px]:ml-4 md:mr-0 lg:px-5 lg:py-5 xl:px-6 xl:py-6 rounded-lg"> 
            <img src={img} alt="" className="w-32 lg:w-44 xl:w-60 rounded-md"/>
            <div className="mt-2 lg:mt-3 xl:mt-5 space-y-3 xl:space-y-4">
                <h3 className="font-bold text-white text-xs lg:text-base xl:text-2xl">{Name}</h3>
                <div className="flex flex-row space-x-1 lg:space-x-1.5 xl:space-x-2">
                    <img src={Star} alt="" className="w-4 lg:w-6 xl:w-8" />
                    <img src={Star} alt="" className="w-4 lg:w-6 xl:w-8" />
                    <img src={Star} alt="" className="w-4 lg:w-6 xl:w-8" />
                    <img src={Star} alt="" className="w-4 lg:w-6 xl:w-8" />
                    <img src={Star} alt="" className="w-4 lg:w-6 xl:w-8" />
                </div>
                <p className="text-xs lg:text-base xl:text-lg text-white">{Address}</p>
                <button className="hover:bg-black hover:text-white cursor-pointer bg-white rounded-md text-xs lg:text-base xl:text-xl text-black font-semibold text-center px-4 py-1 lg:py-1.5 lg:px-7 xl:py-2 xl:px-8 ml-10 min-[375px]:ml-16 min-[425px]:ml-14 md:ml-16 lg:ml-20 xl:ml-32"><Link to={'/detaildestination'}>Detail</Link></button>
            </div>        
        </div>
    </>
    );
};

export default DestinationHome;