import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import DestinationList from "../components/DestinationList";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Destination = () => {
  const [destinasi, setDestinasi] = useState([]);

  const getDestinasi = async () => {
    const response = await axios.get("http://localhost:5007/destinasis");
    setDestinasi(response.data);
  };

  useEffect(() => {
    getDestinasi();
  }, []);

    return (
        <>
        <Header/>
        <div className="flex flex-col">
            <h2 className="mt-8 ml-5 font-bold text-black text-xl md:mt-10 md:ml-9 md:text-2xl lg:text-3xl lg:mt-14 xl:ml-14 xl:text-4xl">Destinasi</h2>
            <Search />
        </div>
        <div className="flex flex-col space-y-10">
        {destinasi.map((item) => (
            <DestinationList 
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

export default Destination;