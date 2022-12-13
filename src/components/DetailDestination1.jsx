import React from "react";
import DestinationImage1 from "../assets/detailwisata1.png";
import Star from "../assets/star.svg";

const DetailDestination1 = () => {
    return(
    <>
        <div className="flex flex-row space-x-3 md:space-x-6 xl:space-x-12 ml-4 md:ml-10 xl:ml-12 mt-8 md:mt-12 lg:mt-16 xl:mt-24">
            <img src={DestinationImage1} alt="" className="w-36 md:w-[320px] lg:w-[470px] xl:w-[700px] rounded-md"/>
            <div className="flex flex-col space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-12 mt-0 md:mt-2 lg:mt-5 xl:mt-7">
                <h2 className="font-bold text-black text-base md:text-3xl lg:text-4xl xl:text-5xl">Danau Linow</h2>
                <h3 className="text-xs md:text-sm lg:text-xl xl:text-2xl text-[#808080] pr-12 xl:pr-16">Rp 35.000 / orang</h3>
                <h3 className="text-xs md:text-sm lg:text-xl xl:text-2xl text-[#808080] pr-12 xl:pr-16 hidden md:block">Lahendong, Kota Tomohon, Sulawesi Utara</h3>
                <p className="text-xs md:text-sm lg:text-xl xl:text-2xl text-[#808080] xl:pr-16 md:hidden">Tomohon, Sulawesi Utara</p>
                <div className="flex flex-row space-x-1 lg:space-x-2 xl:space-x-3 w-4 md:w-5 lg:w-7 xl:w-10">
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                    <img src={Star} alt="" className="" />
                </div>
                <p className="text-xs lg:text-base xl:text-2xl text-[#808080] md:pr-9 lg:pr-14 xl:pr-16 hidden md:block">Kawasan Danau Linow memiliki udara sejuk dengan keindahan alam dan memiliki kadar belerang menyebabkan warna air danau berubah warna.</p>
                <p className="text-xs lg:text-base xl:text-2xl text-[#808080] pr-3 md:pr-6 lg:pr-14 xl:pr-16 md:hidden">Kawasan Danau Linow memiliki udara sejuk.</p>
            </div>
        </div>  
    </>
    );
};

export default DetailDestination1;