"use client";
import { pizzas } from "@/database";
import { useAppDispatch } from "@/redux/hook";
import {
  AddShoppingCar,
  RemoveShoppingCar,
  SomePriceAllShoppingCar,
  UpdateShoppingCar,
} from "@/redux/reducers/shoppingCarReducer";
import showToast from "@/utils/showToast";
import Image from "next/image";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "../ui/button";
interface Pizza {
  id: number;
  name: string;
  description: string;
  unit: number;
  price: number;
  image: any;
  active: boolean;
}

export default function Product() {
  const dispatch = useAppDispatch();
  const [listProducts, setListProducts] = useState<Pizza[]>([...pizzas]);

  function addItemInShoppingCar(pizza: Pizza) {
    dispatch(AddShoppingCar({ ...pizza, action: true }));
    dispatch(SomePriceAllShoppingCar());

    const list = listProducts.map((item) => {
      if (item.id === pizza.id) {
        item = {
          ...item,
          active: true,
        };
      }
      return item;
    });

    setListProducts(list);
    showToast("Item Novo No Carrinho 😍", "success");
  }

  function someUnitShoppingCar(type: "+" | "-", id: number, unit: number) {
    console.log(type, id, unit);
    const getItem = pizzas.find((item) => item.id === id);
    let list = listProducts;
    if (type === "+") {
      dispatch(
        UpdateShoppingCar({
          id: id,
          type: "+",
        })
      );

      list = list.map((item) => {
        if (item.id === id) {
          item = {
            ...item,
            unit: item.unit + 1,
          };
        }
        return item;
      });
    }
    if (type === "-" && unit > 1) {
      dispatch(
        UpdateShoppingCar({
          id: id,
          type: "-",
        })
      );

      list = list.map((item) => {
        if (item.id === id) {
          item = {
            ...item,
            unit: item.unit - 1,
          };
        }
        return item;
      });
    }
    dispatch(SomePriceAllShoppingCar());

    list = list.map((item) => {
      if (item.id === id && getItem) {
        item = {
          ...item,
          price: getItem.price * item.unit,
        };
      }
      return item;
    });

    setListProducts(list);
  }

  function removeItemInShoppingCar(id: number) {
    dispatch(RemoveShoppingCar({ id }));
    dispatch(SomePriceAllShoppingCar());
    showToast("Item Removido Do Carrinho 😪", "success");
    const getItem = pizzas.find((item) => item.id === id);
    const list = listProducts.map((item) => {
      if (item.id === id && getItem) {
        item = {
          ...getItem,
        };
      }
      return item;
    });

    setListProducts(list);
  }

  return (
    <div className="flex items-center justify-between flex-col lg:flex-row lg:flex-wrap  gap-6 lg:w-[80%] w-full  py-5  rounded-md">
      {listProducts.map((pizza) => (
        <div
          key={pizza.id}
          className=" flex items-center gap-2 md:w-[475px] w-full h-[220px] mb-4 bg-zinc-300 border-b border-b-vermelho_3 cursor-pointer  shadow-lg shadow-black/35 p-2 rounded-md"
        >
          <Image
            className="w-[135px] h-[200px] lg:min-w-[150px] object-cover rounded-lg shadow-md shadow-black/45"
            src={pizza.image}
            width={1000}
            height={1000}
            alt={`imagen da pizza sabor ${pizza.name} `}
          />
          <div className="relative flex items-center flex-col justify-between py-2 h-full">
            <IoMdCloseCircle
              data-active={pizza.active}
              className="data-[active=true]:block hidden cursor-pointer hover:scale-110 absolute top-0 right-0 "
              onClick={() => removeItemInShoppingCar(pizza.id)}
            />
            <h3 className="font-bold text-center mt-2">{pizza.name}</h3>
            <p className="text-center">{pizza.description}</p>
            <p
              onClick={() => addItemInShoppingCar({ ...pizza })}
              data-active={pizza.active}
              className=" data-[active=true]:hidden text-center font-bold py-2  bg-vermelho_1/90 text-white w-full rounded-sm"
            >
              R$ {pizza.price.toFixed(2)}
            </p>
            <div
              data-active={pizza.active}
              className=" hidden data-[active=true]:flex items-center justify-between gap-2 p-1 rounded-md w-full"
            >
              <div className="flex items-center justify-between md:w-[100px] w-[70%]">
                <Button
                  className="w-5 h-5 py-4"
                  onClick={() => someUnitShoppingCar("-", pizza.id, pizza.unit)}
                >
                  -
                </Button>
                <span>{pizza.unit}</span>
                <Button
                  className="w-5 h-5 py-4"
                  onClick={() => someUnitShoppingCar("+", pizza.id, pizza.unit)}
                >
                  +
                </Button>
              </div>
              <p className=" w-[50%] text-center font-bold py-1 bg-vermelho_1/90 text-white  rounded-sm">
                R$ {pizza.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
