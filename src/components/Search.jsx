import React from "react";
import IconSearch from "../assets/search.svg";

const Search = () => {
    return(
    <>
        <div class="mt-8 md:mt-10 lg:mt-12">
            <div class="flex bg-[#C4C4C4] opacity-80 ml-5 md:ml-9 xl:ml-14 mb-10 w-64 md:w-[370px] lg:w-[450px] xl:w-[550px] h-6 md:h-7 lg:h-10 xl:h-12 rounded-md">
                <p class="pl-2 pt-0.5 md:pt-1 lg:pt-2 pr-36 md:pr-64 lg:pr-80 xl:pr-[380px] text-black text-sm xl:text-xl font-bold">Search.....</p>
                <img src={IconSearch} alt="" className="" />
            </div>
        </div>
    </> 
    );
};

export default Search;