import React from "react";
import Rekom1 from "../assets/rekom1.png";
import { Link } from "react-router-dom";

const Recommendation1 = () => {
    return(
    <>
        <div className="relative mt-7 ml-9 pr-8">
            <img src={Rekom1} alt="" className="rounded-lg w-screen h-36 min-[375px]:h-40 min-[425px]:h-48 md:h-44 lg:h-60 xl:h-96"/>
            <div className="absolute bg-gradient-to-r from-[#0066FE] to-transparent rounded-bl-lg px-20 bottom-0 py-1.5 md:py-2 lg:py-3 text-white">
                <h1 className="font-semibold text-sm lg:text-xl xl:text-2xl -ml-16"><Link to={'/detaildestination'}>Danau Linow</Link></h1>
                <p className="text-xs lg:text-base xl:text-lg -ml-16">Destinasi</p>
            </div>
        </div>
    </>    
    );
};

export default Recommendation1;