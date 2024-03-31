import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  RemoveShoppingCar,
  SomePriceAllShoppingCar,
  UpdateShoppingCar,
} from "@/redux/reducers/shoppingCarReducer";
import showToast from "@/utils/showToast";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import AlertSubmit from "../alertSubmit";
import { Button } from "../ui/button";

export default function ShoppingCar() {
  const dispatch = useAppDispatch();
  const useShoppingCar = useAppSelector(({ shopping }) => shopping);
  const [open, setOpen] = useState(false);

  function someUnitShoppingCar(type: "+" | "-", id: number) {
    if (type === "+") {
      dispatch(
        UpdateShoppingCar({
          id: id,
          type: "+",
        })
      );
    }
    if (type === "-") {
      dispatch(
        UpdateShoppingCar({
          id: id,
          type: "-",
        })
      );
    }
    dispatch(SomePriceAllShoppingCar());
  }

  function removeItemInShoppingCar(id: number) {
    dispatch(RemoveShoppingCar({ id }));
    dispatch(SomePriceAllShoppingCar());
    showToast("Item Removido Do Carrinho 😪", "success");
  }

  return (
    <div className="lg:fixed flex justify-between lg:gap-5 lg:justify-start flex-col lg:max-w-[600px] w-[95%] min-h-28 lg:h-[90vh] py-3 px-2 mx-auto bg-vermelho_3 rounded-lg">
      <div className="flex items-center gap-2 w-full h-12 mb-4 px-2  bg-white/50 rounded-md">
        <h1 className=" text-lg text-white ">Pedidos</h1>
        <FaCartShopping className="fill-white" />
      </div>
      <div className="flex  justify-start flex-col gap-3 h-full overflow-auto scroll-m-0 ">
        {useShoppingCar.list.map((shopping) => (
          <div
            key={shopping.id}
            className="flex items-center justify-between bg-white/55 border-b border-b-white p-1 rounded-md"
          >
            <IoMdCloseCircle
              className="cursor-pointer hover:scale-105"
              onClick={() => removeItemInShoppingCar(shopping.id)}
            />
            <p className="md:w-[70%] w-[200px]"> {shopping.name}</p>
            <div className="flex items-center justify-between md:w-[100px] w-[40%]">
              <Button
                className="w-5 h-5"
                onClick={() => someUnitShoppingCar("-", shopping.id)}
              >
                -
              </Button>
              <span>{shopping.unit}</span>
              <Button
                className="w-5 h-5"
                onClick={() => someUnitShoppingCar("+", shopping.id)}
              >
                +
              </Button>
            </div>
          </div>
        ))}

        <div
          data-length={!useShoppingCar.list.length}
          className="hidden data-[length=true]:block w-full py-3 rounded-md bg-white/50"
        >
          <p className="text-center">Carrinho vazio.</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 w-full mt-4">
        <AlertSubmit open={open} setOpen={setOpen}>
          <Button className="lg:block hidden  h-12 bg-white text-vermelho_3 font-bold shadow-lg shadow-black/30">
            Confirmar comprar
          </Button>
          <Button
            type="button"
            className="lg:hidden block h-12 bg-white text-vermelho_3 font-bold shadow-lg shadow-black/30"
          >
            Confirmar
          </Button>
        </AlertSubmit>
        <div className="flex items-center justify-end w-full h-12 px-2 pt-2  bg-white/50 rounded-md">
          <h1 className="lg:block hidden text-lg text-white ">Valor Tortal</h1>
          <h1 className="lg:hidden block text-lg mr-3 text-white ">Tortal</h1>
          <span className=" text-base lg:text-lg text-white ">
            R$ {useShoppingCar.somePrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
