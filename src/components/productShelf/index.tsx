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
    <div className="flex items-center justify-between  flex-col  lg:flex-row lg:flex-wrap  gap-6 lg:w-[80%] w-full  py-5  rounded-md">
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className=" flex items-center gap-2 md:w-[475px] w-full h-[220px] mb-4 bg-zinc-300 border-b border-b-vermelho_3 cursor-pointer hover:opacity-65 shadow-lg shadow-black/35 p-2 rounded-md"
          onClick={() => addItemInShoppingCar({ ...pizza })}
        >
          <Image
            className="w-[135px] h-[200px] lg:min-w-[150px] object-cover rounded-lg shadow-md shadow-black/45"
            src={pizza.image}
            width={1000}
            height={1000}
            alt={`imagen da pizza sabor ${pizza.name} `}
          />
          <div className="flex items-center flex-col justify-between py-2 h-full">
            <h3 className="font-bold text-center">{pizza.name}</h3>
            <p className="text-center">{pizza.description}</p>
            <p className="text-center font-bold bg-vermelho_1/90 text-white w-full rounded-sm">
              valor:R$ {pizza.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
