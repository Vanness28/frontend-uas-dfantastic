import React from "react";
import { Link } from "react-router-dom";

const RestaurantHome = ({ image, name, lokasi}) => {
    return (
        <>
            <div className="mt-7 px-9 min-[375px]:px-12 min-[425px]:px-20 md:px-0 md:ml-9 md:pr-8 md:mt-9 lg:mt-12 lg:px-5 xl:mt-14 xl:px-7">
                <img src={image} alt="" className="-my-3"/>
                <div className="bg-[#0066FE] px-5 py-6 md:py-5 space-y-2.5 xl:space-y-5 rounded-b-lg md:px-2 lg:py-6 lg:px-4">
                    <h3 className="text-white font-bold text-md md:text-sm xl:text-2xl lg:text-lg">{name}</h3>
                    <p className="text-white text-sm md:text-xs lg:text-base xl:text-lg">{lokasi}</p>
                    <button className="bg-white hover:bg-black hover:text-white cursor-pointer rounded-md font-semibold text-sm lg:text-base xl:text-xl text-black text-center px-6 py-1.5 md:px-5 md:py-1 lg:py-1.5 lg:px-7 xl:py-2 xl:px-8 ml-32 min-[375px]:ml-40 min-[425px]:ml-36 md:ml-14 lg:ml-20 xl:ml-32"><Link to={'/detailrestaurant'}>Detail</Link></button>
                </div>
            </div>
        </>
    );
};

export default RestaurantHome;