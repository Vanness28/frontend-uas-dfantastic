import React from "react";
import R_Pic1 from "../assets/r_pic1.png";
import Star from "../assets/star.svg";

const RestaurantDetail = () => {
    return (
    <>
        <div className="flex flex-row space-x-3 md:space-x-6 xl:space-x-12 ml-4 md:ml-10 xl:ml-12 mt-8 md:mt-12 lg:mt-16 xl:mt-24"> 
            <img src={R_Pic1} alt="" className="w-36 md:w-[320px] lg:w-[470px] xl:w-[700px] rounded-md"/>
            <div className="flex flex-col space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-12 mt-0 md:mt-2 lg:mt-5 xl:mt-7">
                <h2 className="font-bold text-black text-base md:text-3xl lg:text-4xl xl:text-5xl">Green Garden</h2>
                <p className="text-xs md:text-sm lg:text-xl xl:text-2xl text-[#808080] pr-12 xl:pr-16 hidden md:block">Jl. Smp No.2, Kakaskasen Satu,  Kota Tomohon, Sulawesi Utara</p>
                <p className="text-xs md:text-sm lg:text-xl xl:text-2xl text-[#808080] xl:pr-16 md:hidden">Tomohon, Sulawesi Utara</p>
                <div className="flex flex-row space-x-1 lg:space-x-2 xl:space-x-3 w-4 md:w-5 lg:w-7 xl:w-10">
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                </div>
                <p className="text-xs lg:text-base xl:text-2xl text-[#808080] md:pr-9 lg:pr-14 xl:pr-16 hidden md:block">Restoran ini menyediakan babi panggang dan menu ikan yang enak. Lokasi restoran ini sangat asri dan ditambah dengan pemandangan Gunung Lokon yang tampak jelas dari restoran ini.</p>
                <p className="text-xs lg:text-base xl:text-2xl text-[#808080] pr-3 md:pr-6 lg:pr-14 xl:pr-16 md:hidden">Restoran ini menyediakan babi panggang dan menu ikan yang enak.</p>
            </div>        
        </div>
    </>
    );
};

export default RestaurantDetail;