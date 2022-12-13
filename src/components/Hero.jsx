import React from "react";
import Pic from "../assets/walpaper.jpeg";
import Icon1 from "../assets/ic_destination.svg";
import Icon2 from "../assets/ic_culiner.svg";

const Hero = () => {
    return(
    <>
        <div className="">
            <div className="mt-4 pl-4 pr-4 min-[375px]:mt-5 min-[425px]:mt-6 md:mt-10 md:pl-8 md:pr-8 lg:mt-8 xl:mt-12 xl:pl-12 xl:pr-12">
                <img src={Pic} alt="" className="w-screen h-full rounded-lg md:rounded-xl"/>
            </div>
            <div className="absolute min-[320px]:-mt-4 min-[320px]:ml-12 min-[375px]:-mt-5 min-[375px]:ml-20 min-[425px]:ml-20 md:-mt-64 md:ml-4 lg:-ml-16 xl:-ml-4">
                <div className="bg-white shadow-md shadow-black rounded-md mx-auto w-56 mt-1 h-5 min-[375px]:h-7 min-[425px]:w-64 md:rounded-lg lg:rounded-xl md:w-96 md:h-12 md:ml-44 md:mt-56 lg:ml-64 lg:w-[650px] lg:h-16 xl:w-[950px] xl:h-20"></div>
                <div className="flex absolute top-0 md:mt-56 md:ml-40 lg:ml-64">
                <div className="absolute bg-black w-0.5 h-5 mt-1 ml-28 opacity-60 min-[375px]:h-7 min-[425px]:ml-32 md:ml-52 md:mt-0 md:h-12 lg:ml-80 lg:h-16 xl:h-20 xl:ml-[475px]"></div>
                    <p className="text-xs font-bold pt-1.5 ml-4 min-[375px]:pt-2.5 min-[425px]:ml-5 md:ml-14 md:text-base lg:ml-16 lg:text-2xl lg:pt-4 xl:text-3xl xl:pt-5 xl:ml-32">
                        10<span className="pl-2 lg:pl-3 xl:pl-4 font-normal">Destinasi</span>
                    </p>
                    <img src={Icon1} alt="" className="w-4 ml-2 pt-1.5 min-[375px]:pt-2.5 md:w-5 lg:w-8 lg:ml-4 lg:pt-4 xl:w-9 xl:pt-5 xl:ml-5"/>
                    <p className="ml-3 text-xs font-bold pt-1.5 min-[375px]:pt-2.5 min-[425px]:ml-8 md:text-base md:ml-16 lg:ml-36 lg:pt-4 lg:text-2xl xl:text-3xl xl:pt-5 xl:ml-60">
                        10<span className="pl-2 lg:pl-3 xl:pl-4 font-normal">Restoran</span>
                    </p>
                    <img src={Icon2} alt="" className="w-4 ml-2 pt-1.5 min-[375px]:pt-2.5 md:w-5 lg:w-8 lg:ml-4 lg:pt-4 xl:w-9 xl:pt-5 xl:ml-5"/>
                </div>
            </div>
        </div>
    </> 
    );
};

export default Hero;