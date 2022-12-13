import React from "react";
import Header from "../components/Header";
import RestaurantDetail from "../components/RestaurantDetail";
import Food from "../components/Food";
import Drink from "../components/Drink";
import Footer from "../components/Footer";
import Food1 from "../assets/food1.png";
import Food2 from "../assets/food2.png";
import Food3 from "../assets/food3.png";
import Drink1 from "../assets/drink1.png";
import Drink2 from "../assets/drink2.png";
import Drink3 from "../assets/drink3.png";


const DetailRestaurant = () => {
    const rowOne = [
        {
          img: Food1,
          name: "Nasi Hongkong",
          price: "32.000",
          isPopular: true,
        },
        {
          img: Food2,
          name: "Bubur Ayam",
          price: "29.000",
          isPopular: false,
        },
        {
          img: Food3,
          name: "Nasi Rahang Tuna",
          price: "45.000",
          isPopular: false,
        },
      ]
      const rowTwo = [
        {
          img: Drink1,
          name: "Es Teh Manis",
          price: "9.000",
          isPopular: true,
        },
        {
          img: Drink2,
          name: "Es Kelapa Muda",
          price: "22.000",
          isPopular: false,
        },
        {
          img: Drink3,
          name: "Es Kacang Advokat",
          price: "26.000",
          isPopular: false,
        },
      ]
    return (
        <>
        <Header/>
        <RestaurantDetail/>
        <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-16 md:ml-10 md:text-2xl lg:text-3xl lg:mt-20 lg:ml-12 xl:mt-28 xl:ml-14 xl:text-5xl">Makanan</h2>
        <div className="flex flex-col md:flex-row min-[320px]:space-y-6 min-[375px]:space-y-8 md:space-x-5 lg:space-x-8 xl:space-x-14 xl:mt-7">
        {rowOne.map((data) => (
            <Food
                img={data.img}
                name={data.name}
                price={data.price}
                isPopular={data.isPopular}
            />
        ))}
        </div>
        <h2 className="mt-12 font-bold text-center text-black text-2xl md:text-left md:mt-16 md:ml-10 md:text-2xl lg:text-3xl lg:mt-20 lg:ml-12 xl:mt-28 xl:ml-14 xl:text-5xl">Minuman</h2>
        <div className="flex flex-col md:flex-row min-[320px]:space-y-6 min-[375px]:space-y-8 md:space-x-5 lg:space-x-8 xl:space-x-14 xl:mt-7">
        {rowTwo.map((data) => (
            <Drink
                img={data.img}
                name={data.name}
                price={data.price}
                isPopular={data.isPopular}
            />
        ))}
        </div>
        <Footer/>
        </>
    )
}

export default DetailRestaurant;