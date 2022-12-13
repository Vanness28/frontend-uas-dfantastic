import React from "react";

const DetailDestination2 = ({img, Desk}) => {
    return(
    <>
        <div className="relative mt-7 ml-9 pr-8 md:pr-10 md:ml-1 md:left-10 lg:pr-10">
            <img src={img} alt="" className="rounded-lg w-screen"/>
            <div className="absolute bg-gradient-to-r from-[#241A1A] to-transparent rounded-bl-lg pl-20 md:px-20 bottom-0 py-1.5 lg:py-3 xl:py-4 text-white">
                <h1 className="font-semibold text-sm text-white md:text-base lg:text-xl xl:text-2xl -ml-16">{Desk}</h1>
            </div>
        </div>
    </>
    );
};

export default DetailDestination2;