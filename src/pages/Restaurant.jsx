import React from "react";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";
import Search from "../components/Search";
import CulinerImage1 from "../assets/culiner1.png";
import CulinerImage2 from "../assets/culiner2.png";
import CulinerImage3 from "../assets/culiner3.png";
import CulinerImage4 from "../assets/culiner4.png";
import CulinerImage5 from "../assets/culiner5.png";
import CulinerImage6 from "../assets/culiner6.png";
import CulinerImage7 from "../assets/culiner7.png";
import CulinerImage8 from "../assets/culiner8.png";
import CulinerImage9 from "../assets/culiner9.png";
import CulinerImage10 from "../assets/culiner10.png";
import Footer from "../components/Footer";

const Restaurant = () => {
    const rowOne = [
    {
      img: CulinerImage1,
      Name: "Alang Alang Cafe & Resto",
      Address: "Kakaskasen 3, Kota Tomohon, Sulawesi utara",
      Deskripsi: "Salah satu cafe dan resto di Tomohon yang direkomentasi untuk dikunjungi adalah cafe alang-alang...",
    },
    {
      img: CulinerImage2,
      Name: "D-Linow Restaurant",
      Address: "Lahendong 7, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "D-Linow Restaurant merupakan tempat kuliner di Tomohon yang paling indah dan hits. Anda dapat...",
    },
    {
      img: CulinerImage3,
      Name: "Elmonts Coffee and Resto",
      Address: "Kolongan 1, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Tempat yang indah untuk minum kopi nikmat dari berbagai daerah tersedia. Kopi yang enak karena...",
    },
    {
      img: CulinerImage4,
      Name: "Gardenia Restaurant",
      Address: "Jl.Kakaskasen 2, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Sesuai dengan namanya, Gardenia, restoran ini memang terletak di tengah kebun bunga yang indah...",
    },
    {
      img: CulinerImage5,
      Name: "Green Garden",
      Address: "Jl.Smp No.2, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Restoran ini menyediakan babi panggang yang enak. Selain itu, menu ikannya juga segar dan...",
    },
    {
      img: CulinerImage6,
      Name: "House of Kitty",
      Address: "Kakaskasen 2, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Terletak di kota Tomohon dengan lokasi strategis, cafenya menampilkan tema Hello Kitty...",
    },
    {
      img: CulinerImage7,
      Name: "Kelapa 17 Tomohon",
      Address: "Walian, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Rumah makan yang pertama kali menyajikan menu kepala babi tore. Tidak hanya itu...",
    },
    {
      img: CulinerImage8,
      Name: "Ohana Ikan Bakar Seafood",
      Address: "Paslaten Dua, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Restoran yang menyediakan banyak sekali menu seafood dan terkenal dengan ikan...",
    },
    {
      img: CulinerImage9,
      Name: "Sineleyan Restaurant",
      Address: "Talete 1, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Restoran halal yang menyajikan makanan dengan spesialisasi ikan air tawar...",
    },
    {
      img: CulinerImage10,
      Name: "Waroeng Mie Djakarta",
      Address: "Matani 3, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Jika Anda pencinta mie, maka Waroeng Mie Djakarta bisa menjadi...",
    },
  ]
    return (
        <>
        <Header/>
        <div className="flex flex-col">
            <h2 className="mt-8 ml-5 font-bold text-black text-xl md:mt-10 md:ml-9 md:text-2xl lg:text-3xl lg:mt-14 xl:ml-14 xl:text-4xl">Restoran</h2>
            <Search />
        </div>
        <div className="flex flex-col space-y-10">
        {rowOne.map((data) => (
            <RestaurantList 
                img={data.img}
                Name={data.Name}
                Address={data.Address}
                Deskripsi={data.Deskripsi}
        />
        ))}
        </div>
        <Footer/>
        </>
    )
}

export default Restaurant;