import React from "react";
import Header from "../components/Header";
import DetailDestination1 from "../components/DetailDestination1";
import DetailDestination2 from "../components/DetailDestination2";
import DetailDestination3 from "../components/DetailDestination3";
import Footer from "../components/Footer";
import DetailWisata2 from "../assets/detailwisata2.png";
import DetailWisata3 from "../assets/detailwisata3.png";
import DetailWisata4 from "../assets/detailwisata4.png";
import DetailWisata5 from "../assets/detailwisata5.png";
import DetailWisata6 from "../assets/detailwisata6.png";
import DetailWisata7 from "../assets/detailwisata7.png";

function App() {
  const rowOne = [
    {
      img: DetailWisata2,
      Desk: "Area Samping Danau Linow",
    },
    {
      img: DetailWisata3,
      Desk: "Area Samping Danau Linow",
    },
    {
      img: DetailWisata4,
      Desk: "Danau Linow",
    },
    {
      img: DetailWisata5,
      Desk: "Panorama Waktu Petang",
    },{
      img: DetailWisata6,
      Desk: "Area Restoran",
    },
    {
      img: DetailWisata7,
      Desk: "Area Restoran",
    },
  ]
  return (
    <>
    <Header />
    <div className="flex flex-col space-y-10">
      <DetailDestination1 />
    </div>
    <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-16 md:ml-12 md:text-2xl lg:text-3xl lg:mt-20 xl:mt-24 xl:text-4xl">Area Tempat Wisata</h2>
    <div className="flex flex-col md:flex-row md:space-x-1 lg:space-x-0.5 md:grid md:grid-cols-2 sm:grid-cols-1 md:pr-10">
        {rowOne.map((data) => (
           <DetailDestination2
           img={data.img}
           Desk={data.Desk}
            />
        ))}
    </div>
    <h2 className="mt-12 font-bold text-center text-black text-2xl md:mt-16 md:ml-3 md:text-2xl lg:text-3xl lg:mt-20 xl:mt-24 xl:text-4xl">Album</h2>
    <DetailDestination3 />
    <Footer />
    </>
  );
}

export default App;
