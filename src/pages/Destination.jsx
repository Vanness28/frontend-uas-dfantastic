import React from "react";
import Header from "../components/Header";
import DestinationList from "../components/DestinationList";
import Search from "../components/Search";
import DestinationImage1 from "../assets/wisata1.png";
import DestinationImage2 from "../assets/wisata2.png";
import DestinationImage3 from "../assets/wisata3.png";
import DestinationImage4 from "../assets/wisata4.png";
import DestinationImage5 from "../assets/wisata5.png";
import DestinationImage6 from "../assets/wisata6.png";
import DestinationImage7 from "../assets/wisata7.png";
import DestinationImage8 from "../assets/wisata8.png";
import DestinationImage9 from "../assets/wisata9.png";
import DestinationImage10 from "../assets/wisata10.png";
import Footer from "../components/Footer";

const Destination = () => {
    const rowOne = [
    {
      img: DestinationImage1,
      Name: "Air Terjun Tumimperas",
      Address: "Pinaras, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Air Terjun Tumimperas menjadi tempat berlibur wajib bagi wisatawan yang berada di Sulawesi Utara...",
    },
    {
      img: DestinationImage2,
      Name: "Amphitheater Woloan",
      Address: "Woloan I Utara, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Amphitheater Woloan dibangun pada tahun 2004, tempat ini memiliki sebuah perpustakaan yang...",
    },
    {
      img: DestinationImage3,
      Name: "Bukit Doa",
      Address: "Kakaskasen 3, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Bukit Doa Tomohon merupakan salah satu objek wisata alam yang juga menjadi tempat wisata...",
    },
    {
      img: DestinationImage4,
      Name: "Cartens Hills Wawo",
      Address: "Matani 2, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Cartens Hills Wawo merupakan salah satu destinasi wisata baru yang pastinya wajib Anda...",
    },
    {
      img: DestinationImage5,
      Name: "Danau Linow",
      Address: "Lahendong, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Kawasan Danau Linow memiliki udara sejuk dengan keindahan pemandangan alam di sekitarnya...",
    },
    {
      img: DestinationImage6,
      Name: "Kai'santi Garden",
      Address: "Jl. Woloan Kayawu, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Dari atas puncak bukit Kaisanti kamu dapat menyaksikan keindahan alam yang nyata...",
    },
    {
      img: DestinationImage7,
      Name: "Narwastu Hills",
      Address: "Jl. Wawo, Matani 3, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Narwastu hills merupakan wisata terbaru di Tomohon, Sulawesi Utara. Sebuah destinasi...",
    },
    {
      img: DestinationImage8,
      Name: "Pagoda Ekayana",
      Address: "Jl. Sunge No.57, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Berlokasi di Gunung Lokon, tepatnya satu kompleks dengan Vihara Buddhayana...",
    },
    {
      img: DestinationImage9,
      Name: "Puncak Melby'Ls",
      Address: "Kumelembuay, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Puncak Melby’ls menjadi destinasi menarik untuk dikunjungi di Kota Tomohon...",
    },
    {
      img: DestinationImage10,
      Name: "Puncak Temboan Rurukan",
      Address: "Rurukan I, Kota Tomohon, Sulawesi Utara",
      Deskripsi: "Bagi anda yang menyukai wisata alam, tempat wisata Rurukan menjadi tujuan...",
    },
  ]
    return (
        <>
        <Header/>
        <div className="flex flex-col">
            <h2 className="mt-8 ml-5 font-bold text-black text-xl md:mt-10 md:ml-9 md:text-2xl lg:text-3xl lg:mt-14 xl:ml-14 xl:text-4xl">Destinasi</h2>
            <Search />
        </div>
        <div className="flex flex-col space-y-10">
        {rowOne.map((data) => (
            <DestinationList 
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

export default Destination;