import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RemoveAllShoppingCar } from "@/redux/reducers/shoppingCarReducer";
import { useRouter } from "next/navigation";

export default function SubmitAlert({
  children,
  open,
  setOpen,
}: Readonly<{
  children: React.ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>) {
  const useShoppingCar = useAppSelector(({ shopping }) => shopping);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div>
      <AlertDialog open={open} onOpenChange={(event) => setOpen(event)}>
        <AlertDialogTrigger className="px-2 py-2 w-full lg:w-[250px] bg-green-600 rounded-lg">
          {children}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <div
            data-length={!!useShoppingCar.list.length}
            className="hidden data-[length=true]:flex flex-col justify-between w-[300px] h-[300px] m-auto bg-white/30"
          >
            <h1 className="text-2xl text-center font-bold text-vermelho_2">
              Pedido Concluido{" "}
            </h1>
            <p>
              Pedido confirmado! Agora é só esperar enquanto nossos mestres
              pizzaiolos preparam suas delícias. Sinta o aroma se espalhar e
              deixe a ansiedade aumentar a expectativa do sabor. Bom apetite e
              aproveite cada pedacinho! 🍕✨
            </p>
            <Button
              onClick={() => {
                setOpen(false);
                dispatch(RemoveAllShoppingCar());
                router.push("/loja");
              }}
            >
              Voltar
            </Button>
          </div>
          <div
            data-length={!!useShoppingCar.list.length}
            className="hidden data-[length=false]:flex flex-col justify-between w-[300px] h-[300px] m-auto bg-white/30"
          >
            <h1 className="text-2xl text-center font-bold text-vermelho_2">
              Carrinho vazio!
            </h1>
            <p>
              Oops! Parece que o carrinho está vazio. Não podemos confirmar o
              pedido sem itens selecionados. Que tal explorar nosso menu e
              adicionar algumas delícias? Estamos aqui para satisfazer seu
              paladar! 🍕🛒
            </p>
            <Button onClick={() => setOpen(false)}>Voltar</Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
