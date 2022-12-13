import React from "react";
import { Link } from "react-router-dom";

const RestaurantHome = ({ img, Name, Address }) => {
    return (
        <>
            <div className="mt-7 px-9 min-[375px]:px-12 min-[425px]:px-20 md:px-0 md:ml-9 md:pr-8">
                <img src={img} alt="" className=""/>
                <div className="bg-[#0066FE] px-5 py-3 space-y-2.5 rounded-b-lg md:px-2 lg:py-4 lg:px-4">
                    <h3 className="text-white font-bold text-md md:text-xs xl:text-xl lg:text-base">{Name}</h3>
                    <p className="text-white text-sm md:text-xs xl:text-lg">{Address}</p>
                    <button className="bg-white hover:bg-black hover:text-white cursor-pointer rounded-md font-semibold text-sm lg:text-base xl:text-xl text-black text-center px-6 py-1.5 md:px-5 md:py-1 lg:py-1.5 lg:px-7 xl:py-2 xl:px-8 ml-32 min-[375px]:ml-40 min-[425px]:ml-36 md:ml-14 lg:ml-20 xl:ml-32"><Link to={'/detailrestaurant'}>Detail</Link></button>
                </div>
            </div>
        </>
    );
};

export default RestaurantHome;