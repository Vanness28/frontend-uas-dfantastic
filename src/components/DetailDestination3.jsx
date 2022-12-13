import React from "react";
import DetailWisata8 from "../assets/detailwisata8.jpeg";
import ArrowLeft from "../assets/arrowLeft.png";
import ArrowRight from "../assets/arrowRight.png";

const DetailDestination3 = () => {
    return(
    <>
        <div className="relative ml-2 md:-ml-7 px-7 md:px-14 mt-8">
            <img src={DetailWisata8} alt="" className="rounded-md w-screen md:ml-4 md:h-[400px] lg:h-[550px] xl:h-[780px]" />
            <div className="flex absolute top-16 min-[375px]:top-20 min-[425px]:top-24 md:top-40 lg:top-56 xl:top-80">
                <button><img src={ArrowLeft} alt="" className="w-14 mr-12 min-[375px]:mr-24 min-[425px]:w-16 md:w-24 md:mr-40 lg:w-28 lg:mr-96 xl:w-36 xl:mr-96" /></button>
                <button><img src={ArrowRight} alt="" className="w-14 ml-24 min-[375px]:ml-28 min-[425px]:ml-36 min-[425px]:w-16 md:w-24 md:ml-[360px] lg:w-28 xl:w-36 xl:ml-[715px]" /></button>
            </div>
        </div>
    </>
    );
};

export default DetailDestination3;