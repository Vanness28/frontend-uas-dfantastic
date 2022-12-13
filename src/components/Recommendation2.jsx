import React from "react";
import { Link } from "react-router-dom";

const Recommendation2 = ({ img, Name }) => {
    return(
    <>
        <div className="relative mt-8 xl:mt-12 ml-9 pr-8 md:pr-10 lg:pr-10">
                <img src={img} alt="" className="rounded-lg w-screen "/>
                <div className="absolute bg-gradient-to-r from-[#0066FE] to-transparent rounded-bl-lg px-20 bottom-0 py-1.5 md:py-2 lg:py-3 text-white">
                <h1 className="font-semibold text-sm lg:text-xl xl:text-2xl -ml-16"><Link to={'/detaildestination'}>{Name}</Link></h1>
                <p className="text-xs lg:text-base xl:text-lg -ml-16">Destinasi</p>
            </div>
        </div>
    </>    
    );
};

export default Recommendation2;