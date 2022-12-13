import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header'
import Hero from '../components/Hero'
import DestinationHome from "../components/DestinationHome";
import RestaurantHome from "../components/RestaurantHome";
import Recommendation1 from "../components/Recommendation1";
import Recommendation2 from "../components/Recommendation2";
import Recommendation3 from "../components/Recommendation3";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [tomohonloka, setTomohonLoka] = useState([]);

  const getTomohonLoka = async () => {
    const response = await axios.get("http://localhost:5007/tomohonlokas");
    setTomohonLoka(response.data);
  };

  useEffect(() => {
    getTomohonLoka();
  }, []);

  const [restoran, setRestoran] = useState([]);

  const getRestoran = async () => {
    const response = await axios.get("http://localhost:5007/restorans");
    setRestoran(response.data);
  };

  useEffect(() => {
    getRestoran();
  }, []);

    return(
        <>
            <Header/>
            <Hero/>
            <div>
                <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-16 md:ml-9 md:text-2xl lg:text-3xl lg:mt-28 lg:ml-12 xl:mt-32 xl:ml-14 xl:text-4xl">Destinasi</h2>
                <button className="text-[#152C5B] text-sm font-semibold mt-5 ml-24 min-[375px]:ml-32 min-[425px]:ml-36 md:ml-[600px] lg:ml-[820px] lg:text-lg xl:ml-[1185px] xl:text-2xl md:text-md hover:text-[#0066FE] cursor-pointer"><Link to={'/destination'}>Lihat Selengkapnya</Link></button>
                <div className="flex flex-col ml-20 min-[375px]:ml-28 min-[425px]:ml-32 md:ml-0 md:flex-row md:space-x-7 xl:space-x-14 md:mr-9 lg:mr-10"> 
                    {tomohonloka.slice(4,8).map((item) => (
                      <DestinationHome
                      key={item.id} 
                      image={item.url}
                      name={item.name}
                      lokasi={item.lokasi}
                      id={item.id}
                      />
                    ))}
                </div>
            </div>
            <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-14 md:ml-9 md:text-2xl lg:text-3xl lg:mt-16 xl:mt-20 xl:ml-12 xl:text-4xl">Rekomendasi</h2>
            <div className="grid grid-cols-1 gap-4">
                <Recommendation1 />  
            </div>  
            <div className="flex flex-col md:flex-row md:-space-x-3 lg:space-x-0.5 grid-cols-2 sm:grid-cols-1 ">
                  {tomohonloka.slice(0,2).map((item) => (
                    <Recommendation2 
                      key={item.id}
                      image={item.url}
                      name={item.name}
                      id={item.id}
                      />
                  ))}
            </div>
            <div className="flex flex-col md:flex-row md:-space-x-10 lg:-space-x-8.5 xl:space-x-9 grid-cols-3 sm:grid-cols-1">
                    <Recommendation3 />
                </div>
            <div>
                <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-16 md:ml-9 md:text-2xl lg:text-3xl lg:mt-28 lg:ml-12 xl:mt-32 xl:ml-14 xl:text-4xl">Restoran</h2>
                <button className="text-[#152C5B] text-sm font-semibold mt-5 ml-24 min-[375px]:ml-32 min-[425px]:ml-36 md:ml-[600px] lg:ml-[830px] lg:text-lg xl:ml-[1185px] xl:text-2xl md:text-md hover:text-[#0066FE] cursor-pointer"><Link to={'/restaurant'}>Lihat Selengkapnya</Link></button>
                <div className="flex flex-col md:ml-0 md:flex-row md:space-x-0 xl:space-x-6 lg:-ml-3 xl:mr-8">
                  {restoran.slice(3,7).map((item) => (
                    <RestaurantHome
                      key={item.id}
                      image={item.url}
                      name={item.name}
                      lokasi={item.lokasi}
                      id={item.id}
                    />
                  ))}
                </div>
                </div>
                <Footer/>
        </>
    )
}

export default Home;