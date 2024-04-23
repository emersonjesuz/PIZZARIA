"use client";
import ProductShelf from "@/components/ProductShelf";
import ShoppingCar from "@/components/ShoppingCar";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";
import { FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { RemoveAllShoppingCar } from "@/redux/reducers/shoppingCarReducer";

export default function Loja() {
  const dispatch = useAppDispatch();
  const username = useAppSelector(({ user }) => user.username);
  const useShoppingCar = useAppSelector(({ shopping }) => shopping);
  const [showShoppingCar, setShowShoppingCar] = useState(true);
  const router = useRouter();

  function actionLogout() {
    Cookies.remove("token");
    router.push("/");
    dispatch(RemoveAllShoppingCar());
  }

  useEffect(() => {
    if (!username) {
      actionLogout();
    }
  });

  return (
    <div className="max-h-screen w-screen overflow-x-hidden">
      <div className="flex items-center justify-center w-full h-20 bg-vermelho_1 fixed z-50">
        <div className="flex  justify-between items-center w-[90%]">
          <div className="flex items-center">
            <h1 className="font-bold text-white text-lg">{username}</h1>
            <FaPizzaSlice className="ml-2 fill-white" />
          </div>
          <div className="flex items-center justify-between w-24">
            <div
              onClick={() => setShowShoppingCar(!showShoppingCar)}
              className="relative cursor-pointer hover:scale-105"
            >
              <FaShoppingCart className="fill-white w-6 h-6" />
              <span className="absolute left-[60%] top-0  px-2 bg-vermelho_3 text-white text-[12px] font-mono  rounded-[50%]">
                {useShoppingCar.list.length}
              </span>
            </div>
            <RiLogoutBoxLine
              onClick={() => actionLogout()}
              className="fill-white w-6 h-6 cursor-pointer hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-20" />
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10  px-1 py-3 ">
        <div
          data-show={!!showShoppingCar}
          className="data-[show=true]:block hidden"
        >
          <ShoppingCar />
          <div className="lg:block hidden min-w-[600px] h-screen mr-6" />
        </div>
        <ProductShelf />
      </div>
    </div>
  );
}
