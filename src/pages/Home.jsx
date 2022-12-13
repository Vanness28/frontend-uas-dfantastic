import React from "react";
import Header from '../components/Header'
import Hero from '../components/Hero'
import DestinationHome from "../components/DestinationHome";
import DestinationImage1 from "../assets/wisata1.png";
import DestinationImage2 from "../assets/wisata2.png";
import DestinationImage3 from "../assets/wisata3.png";
import DestinationImage4 from "../assets/wisata5.png";
import RestaurantImage1 from "../assets/restoran1.png";
import RestaurantImage2 from "../assets/restoran2.png";
import RestaurantImage3 from "../assets/restoran3.png";
import RestaurantImage4 from "../assets/restoran4.png";
import RestaurantHome from "../components/RestaurantHome";
import Recommendation1 from "../components/Recommendation1";
import Recommendation2 from "../components/Recommendation2";
import Recommendation3 from "../components/Recommendation3";
import Rekom2 from "../assets/rekom2.png";
import Rekom3 from "../assets/rekom3.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
    const rowOne = [
        {
          img: DestinationImage1,
          Name: "Air Terjun Tumimperas",
          Address: "Pinaras, Tomohon",
        },
        {
          img: DestinationImage2,
          Name: "Amphitheater Woloan",
          Address: "Woloan, Tomohon",
        },
        {
          img: DestinationImage3,
          Name: "Bukit Doa",
          Address: "Kakaskasen, Tomohon",
        },
        {
          img: DestinationImage4,
          Name: "Danau Linow",
          Address: "Lahendong, Tomohon",
        },
      ]
      const rowTwo = [
        {
          img: RestaurantImage1,
          Name: "Elmonts Coffee Resto",
          Address: "Kolongan 1, Tomohon",
        },
        {
          img: RestaurantImage3,
          Name: "Kelapa 17 Tomohon",
          Address: "Walian 1, Tomohon",
        },
        {
          img: RestaurantImage2,
          Name: "House of Kitty Resto",
          Address: "Kakaskasen 2, Tomohon",
        },
        {
          img: RestaurantImage4,
          Name: "Lemongrass Resto",
          Address: "Kawangkoan, Tomohon",
        },
      ]
      const rowThree = [
        {
          img: Rekom2,
          Name: "Puncak Narwastu",
        },
        {
          img: Rekom3,
          Name: "Puncak Melby'Ls",
        },
      ]
    return(
        <>
            <Header/>
            <Hero/>
            <div>
                <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-16 md:ml-9 md:text-2xl lg:text-3xl lg:mt-28 lg:ml-12 xl:mt-32 xl:ml-14 xl:text-4xl">Destinasi</h2>
                <button className="text-[#152C5B] text-sm font-semibold mt-5 ml-24 min-[375px]:ml-32 min-[425px]:ml-36 md:ml-[600px] lg:ml-[830px] lg:text-lg xl:ml-[1185px] xl:text-2xl md:text-md hover:text-[#0066FE] cursor-pointer"><Link to={'/destination'}>Lihat Selengkapnya</Link></button>
                <div className="flex flex-col ml-20 min-[375px]:ml-28 min-[425px]:ml-32 md:ml-0 md:flex-row md:space-x-7 xl:space-x-14">
                {rowOne.map((data) => (
                    <DestinationHome 
                        img={data.img}
                        Name={data.Name}
                        Address={data.Address}
                />
                ))}
                </div>
            </div>
            <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-14 md:ml-9 md:text-2xl lg:text-3xl lg:mt-16 xl:mt-20 xl:ml-12 xl:text-4xl">Rekomendasi</h2>
            <div className="grid grid-cols-1 gap-4">
                <Recommendation1 />  
            </div>  
            <div className="flex flex-col md:flex-row md:-space-x-3 lg:space-x-0.5 grid-cols-2 sm:grid-cols-1 ">
                {rowThree.map((data) => (
                    <Recommendation2 
                        img={data.img}
                        Name={data.Name}
                    />
                ))}
            </div>
            <div className="flex flex-col md:flex-row md:-space-x-10 lg:-space-x-8.5 xl:space-x-9 grid-cols-3 sm:grid-cols-1">
                    <Recommendation3 />
                </div>
            <div>
                <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-16 md:ml-9 md:text-2xl lg:text-3xl lg:mt-28 lg:ml-12 xl:mt-32 xl:ml-14 xl:text-4xl">Restoran</h2>
                <button className="text-[#152C5B] text-sm font-semibold mt-5 ml-24 min-[375px]:ml-32 min-[425px]:ml-36 md:ml-[600px] lg:ml-[830px] lg:text-lg xl:ml-[1185px] xl:text-2xl md:text-md hover:text-[#0066FE] cursor-pointer"><Link to={'/restaurant'}>Lihat Selengkapnya</Link></button>
                <div className="flex flex-col md:ml-0 md:flex-row md:space-x-0 xl:space-x-10">
                {rowTwo.map((data) => (
                    <RestaurantHome
                        img={data.img}
                        Name={data.Name}
                        Address={data.Address}
                />
                ))}
                </div>
                </div>
                <Footer/>
        </>
    )
}

export default Home;