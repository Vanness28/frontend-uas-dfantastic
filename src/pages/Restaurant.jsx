import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Restaurant = () => {
  const [restoran, setRestoran] = useState([]);

  const getRestoran = async () => {
    const response = await axios.get("http://localhost:5007/restorans");
    setRestoran(response.data);
  };

  useEffect(() => {
    getRestoran();
  }, []);
    return (
        <>
        <Header/>
        <div className="flex flex-col">
            <h2 className="mt-8 ml-5 font-bold text-black text-xl md:mt-10 md:ml-9 md:text-2xl lg:text-3xl lg:mt-14 xl:ml-14 xl:text-4xl">Restoran</h2>
            <Search />
        </div>
        <div className="flex flex-col space-y-10">
        {restoran.map((item) => (
            <RestaurantList 
            key={item.id}
            image={item.url}
            name={item.name}
            lokasi={item.lokasi}
            desk={item.desk}
            id={item.id}
        />
        ))}
        </div>
        <Footer/>
        </>
    )
}

export default Restaurant;