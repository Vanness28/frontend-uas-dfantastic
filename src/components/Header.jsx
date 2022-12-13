import React from "react";
import Menu from "../assets/menu.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return(
    <>
        <div className="flex items-center px-4 py-3 md:px-10 border-b-2 border-[#E5E5E5]">
            <h1 className="text-[#3252DF] font-semibold md:text-xl xl:text-2xl">Tomohon<span className="text-[#152C5B]">Loka</span></h1>
            <nav className="hidden md:block ml-60 lg:ml-96">
                <ul className="flex space-x-14 lg:space-x-16 xl:space-x-24 text-[#152C5B] font-medium text-base lg:text-lg xl:text-2xl lg:ml-24 xl:ml-80">
                    <li className="hover:text-[#0066FE] cursor-pointer"><Link to={'/'}>Beranda</Link></li>
                    <li className="hover:text-[#0066FE] cursor-pointer"><Link to={'/destination'}>Destinasi</Link></li>
                    <li className="hover:text-[#0066FE] cursor-pointer"><Link to={'/restaurant'}>Restoran</Link></li>
                </ul>
            </nav>

            <div className="md:hidden relative">
                <button><img src={Menu} alt="" className="w-6 mt-1 min-[320px]:ml-40 min-[375px]:ml-52 min-[425px]:ml-64"/></button>
            </div>
        </div>
    </> 
    );
};

export default Header;