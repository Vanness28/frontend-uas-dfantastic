import React from "react";
import Rekom4 from "../assets/rekom4.png";
import Rekom5 from "../assets/rekom5.png";
import Rekom6 from "../assets/rekom6.png";
import { Link } from "react-router-dom";

const Recommendation3 = () => {
    return(
    <>
    <div className="grid grid-cols-1 mt-3 gap-3 md:mt-0 md:grid md:grid-cols-3 md:gap-9 lg:gap-3 xl:gap-1 md:pr-20 lg:pr-12 xl:pr-10">
        <div className="relative mt-4 md:mt-8 xl:mt-12 ml-9 pr-8 md:w-60 lg:w-80 xl:w-full">
                <img src={Rekom4} alt="" className="rounded-lg w-screen h-36 min-[375px]:h-40 min-[425px]:h-48 md:h-full"/>
            <div className="absolute bg-gradient-to-r from-[#0066FE] to-transparent rounded-bl-lg px-20 bottom-0 py-1.5 md:py-2 lg:py-3 md:pr-16 text-white">
                <h1 className="font-semibold text-sm lg:text-xl xl:text-2xl -ml-16"><Link to={'/detailrestaurant'}>Gardenia Country Inn</Link></h1>
                <p className="text-xs lg:text-base xl:text-lg -ml-16">Restoran</p>
            </div>
        </div>
        <div className="relative mt-4 md:mt-8 xl:mt-12 ml-9 pr-8 md:w-60 lg:w-80 xl:w-full">
                <img src={Rekom5} alt="" className="rounded-lg w-screen h-36 min-[375px]:h-40 min-[425px]:h-48 md:h-full"/>
            <div className="absolute bg-gradient-to-r from-[#0066FE] to-transparent rounded-bl-lg px-20 bottom-0 py-1.5 md:py-2 lg:py-3 md:pr-16 text-white">
                <h1 className="font-semibold text-sm lg:text-xl xl:text-2xl -ml-16"><Link to={'/detailrestaurant'}>Green Garden Restoran</Link></h1>
                <p className="text-xs lg:text-base xl:text-lg -ml-16">Restoran</p>
            </div>
        </div>
        <div className="relative mt-4 md:mt-8 xl:mt-12 ml-9 pr-8 md:w-60 lg:w-80 xl:w-full">
                <img src={Rekom6} alt="" className="rounded-lg w-screen h-36 min-[375px]:h-40 min-[425px]:h-48 md:h-full"/>
            <div className="absolute bg-gradient-to-r from-[#0066FE] to-transparent rounded-bl-lg px-20 bottom-0 py-1.5 md:py-2 lg:py-3 md:pr-16 text-white">
                <h1 className="font-semibold text-sm lg:text-xl xl:text-2xl -ml-16"><Link to={'/detailrestaurant'}>D-Linow Restoran</Link></h1>
                <p className="text-xs lg:text-base xl:text-lg -ml-16">Restoran</p>
            </div>
        </div>
    </div>
    </>    
    );
};

export default Recommendation3;