"use client";
import ProductShelf from "@/components/ProductShelf";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RemoveAllShoppingCar } from "@/redux/reducers/shoppingCarReducer";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import pizzaPromo1 from "@/assets/promo1.jpg";
import pizzaPromo2 from "@/assets/promo2.jpg";
import pizzaPromo3 from "@/assets/promo3.jpg";
import pizzaPromo4 from "@/assets/promo4.jpg";
import pizzaPromo5 from "@/assets/promo5.jpg";
import pizzaPromo6 from "@/assets/promo6.jpg";

export default function Loja() {
  const dispatch = useAppDispatch();
  const username = useAppSelector(({ user }) => user.username);
  const useShoppingCar = useAppSelector(({ shopping }) => shopping);
  const [showShoppingCar, setShowShoppingCar] = useState(true);
  const router = useRouter();

  const listImages = [
    pizzaPromo1,
    pizzaPromo2,
    pizzaPromo3,
    pizzaPromo4,
    pizzaPromo5,
    pizzaPromo6,
  ];

  function actionLogout() {
    Cookies.remove("token");
    router.push("/");
    dispatch(RemoveAllShoppingCar());
  }

  // useEffect(() => {
  //   if (!username) {
  //     actionLogout();
  //   }
  // });

  return (
    <div className="min-h-screen  relative">
      <div
        onClick={() => setShowShoppingCar(!showShoppingCar)}
        className="z-50 flex justify-center items-center fixed lg:bottom-[100px] bottom-[50px] lg:right-20 right-10 cursor-pointer hover:scale-105 bg-vermelho_3 w-12 h-12 rounded-full shadow-lg shadow-black/50"
      >
        <FaShoppingCart className="fill-white w-6 h-6" />
        <span className="absolute left-[60%] top-0  px-2 bg-vermelho_3 text-white text-[12px] font-mono  rounded-[50%]">
          {useShoppingCar.list.length}
        </span>
      </div>

      <div className="flex gap-3 overflow-x-auto  w-full lg:w-[80%] mx-auto px-1 mt-10   p-2">
        {listImages.map((item, index) => (
          <div key={index} className="min-w-[90%] lg:min-w-[100px] relative">
            <Image
              className="w-full h-[200px] object-cover rounded-lg shadow-md shadow-black/45"
              src={item}
              width={1000}
              height={1000}
              alt={`imagen da pizza`}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10  px-1 py-3 ">
        {/* <div
          data-show={!!showShoppingCar}
          className="data-[show=true]:block hidden"
        >
          <ShoppingCar />
          <div className="lg:block hidden min-w-[600px] h-screen mr-6" />
        </div> */}
        <ProductShelf />
      </div>
    </div>
  );
}
