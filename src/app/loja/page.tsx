"use client";
import pizzaPromo1 from "@/assets/promo1.jpg";
import pizzaPromo2 from "@/assets/promo2.jpg";
import pizzaPromo3 from "@/assets/promo3.jpg";
import pizzaPromo4 from "@/assets/promo4.jpg";
import pizzaPromo5 from "@/assets/promo5.jpg";
import pizzaPromo6 from "@/assets/promo6.jpg";
import ProductShelf from "../../components/ProductShelf";
import { partners } from "@/helpers/dataStores";
import { useAppSelector } from "@/redux/hook";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { FaPizzaSlice, FaShoppingCart } from "react-icons/fa";

export default function Loja() {
  const useShoppingCar = useAppSelector(({ shopping }) => shopping);
  const router = useRouter();
  const [showSelectStore, setShowSelectStore] = useState(true);

  const listImages = [
    pizzaPromo1,
    pizzaPromo2,
    pizzaPromo3,
    pizzaPromo4,
    pizzaPromo5,
    pizzaPromo6,
    pizzaPromo1,
  ];

  return (
    <div className="min-h-screen  relative py-10 lg:py-0 ">
      {showSelectStore && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-[55]  bg-black/60">
          <div className="flex items-center justify-center gap-1 flex-col w-[90%] lg:w-[500px] h-[450px] bg-white rounded-lg px-3">
            <p className="text-zinc-700 text-sm text-center lg:w-[90%]">
              Deseja encontrar a pizzaria mais próxima? Você pode escolher a
              opção de colocar seu CEP para encontar a mais proxima ou escolher
              uma das nossas pizzarias.
            </p>
            <div className="flex flex-col gap-2 w-[90%] mt-6">
              <label className="text-black text-[12px]" htmlFor="cep">
                CEP
              </label>
              <input
                id="cep"
                type="text"
                placeholder="Informe um cep valido."
                className="w-full py-2 border border-vermelho_3  text-vermelho_3 px-2 rounded-md"
              />
            </div>
            <div className="flex items-center gap-1 w-[90%]">
              <div className="w-full h-[1px] bg-black" />
              <span className="pb-2">ou</span>
              <div className="w-full h-[1px] bg-black" />
            </div>
            <div className="flex flex-col gap-2 w-[90%]">
              <label
                className="text-black text-[12px] uppercase"
                htmlFor="pizza"
              >
                Pizzarias
              </label>
              <select
                className="w-full py-2 border border-vermelho_3  text-vermelho_3 px-2 rounded-md checked:bg-vermelho_1 "
                name=""
                id="pizza"
              >
                <option
                  className="bg-vermelho_1 text-white font-bold checked:bg-vermelho_1 "
                  value=" "
                >
                  pizzaria do ze
                </option>
                <option className="bg-vermelho_1 text-white font-bold" value="">
                  pizzaria do peu
                </option>
                <option className="bg-vermelho_1 text-white font-bold" value="">
                  pizzaria do zeca
                </option>
                <option
                  className="bg-vermelho_1 text-white font-bold  "
                  value=""
                >
                  pizzaria do zullu
                </option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => setShowSelectStore(false)}
              className="bg-vermelho_1 hover:bg-black text-white font-bold  shadow-xl shadow-black/30 w-[90%] mt-11 py-2 rounded-lg"
            >
              Buscar
            </button>
          </div>
        </div>
      )}
      <div>
        <div
          onClick={() => setShowSelectStore(true)}
          className="z-50 flex justify-center items-center fixed lg:bottom-[160px] bottom-[110px] lg:right-20 right-10 cursor-pointer hover:scale-105 bg-vermelho_3 w-12 h-12 rounded-full shadow-lg shadow-black/50"
        >
          <FaPizzaSlice className="fill-white w-6 h-6" />
        </div>
        <div
          onClick={() => router.push("/carrinho")}
          className="z-50 flex justify-center items-center fixed lg:bottom-[100px] bottom-[50px] lg:right-20 right-10 cursor-pointer hover:scale-105 bg-vermelho_3 w-12 h-12 rounded-full shadow-lg shadow-black/50"
        >
          <FaShoppingCart className="fill-white w-6 h-6" />
          <span className="absolute left-[60%] top-0  px-2 bg-vermelho_3 text-white text-[12px] font-mono  rounded-[50%]">
            {useShoppingCar.list.length}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-around w-[100%] lg:w-[80%] mx-auto mt-9 bg-zinc-800 rounded-lg">
        <div className="flex items-center  gap-2 lg:gap-11 w-[300px] lg:w-[70%]">
          <div>
            <h1 className="text-yellow-300 capitalize">{partners[0].title}</h1>
            <p className="text-red-100 text-[10px] lg:text-[15px] capitalize">
              {partners[0].address}
            </p>
          </div>
          <Suspense
            fallback={
              <div className="h-[300px] w-[300px]  rounded-lg shadow-lg shadow-black/50   bg-gray-600 animate-pulse" />
            }
          >
            <Image
              className="h-[200px] w-[150px]  lg:w-auto lg:h-[300px]  hover:translate-y-[-10px] transition-all   object-cover rounded-lg "
              src={partners[0].img}
              width={1000}
              height={1000}
              alt=""
            />
          </Suspense>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto  w-full lg:w-[80%] mx-auto px-1 mt-10 bg-black  p-2 lg:rounded-md">
        {listImages.map((item, index) => (
          <div key={index} className="min-w-[90%] lg:min-w-[150px] relative">
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
      <div className="flex flex-col lg:flex-row justify-center py-3 ">
        <ProductShelf />
      </div>
    </div>
  );
}
