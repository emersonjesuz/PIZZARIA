import { pizzas } from "@/database";
import { useAppDispatch } from "@/redux/hook";
import {
  AddShoppingCar,
  SomePriceAllShoppingCar,
} from "@/redux/reducers/shoppingCarReducer";
import showToast from "@/utils/showToast";
import Image from "next/image";
interface Pizza {
  id: number;
  name: string;
  description: string;
  unit: number;
  price: number;
  image: any;
}

export default function ProductShelf() {
  const dispatch = useAppDispatch();

  function addItemInShoppingCar(pizza: Pizza) {
    dispatch(AddShoppingCar({ ...pizza, action: true }));
    dispatch(SomePriceAllShoppingCar());
    showToast("Item Novo No Carrinho 😍", "success");
  }
  return (
    <div className="flex items-center  flex-col lg:justify-center lg:flex-row lg:flex-wrap  gap-6 w-full py-5 md:bg-slate-200 bg-slate-300 ">
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className=" md:w-[475px] w-full mb-4 bg-white border-b border-b-vermelho_3 cursor-pointer hover:opacity-65"
          onClick={() => addItemInShoppingCar({ ...pizza })}
        >
          <Image
            className="w-full h-[200px] object-cover rounded-lg shadow-md shadow-black/45"
            src={pizza.image}
            width={1000}
            height={1000}
            alt={`imagen da pizza sabor ${pizza.name} `}
          />
          <div className="py-2">
            <h3 className="font-bold text-center">{pizza.name}</h3>
            <p className="text-center">{pizza.description}</p>
            <p className="text-center font-bold text-vermelho_1">
              valor:R$ {pizza.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
