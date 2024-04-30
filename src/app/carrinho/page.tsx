"use client";
import { useAppSelector } from "@/redux/hook";
import showToast from "@/utils/showToast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function Carrinho() {
  const useShoppingCar = useAppSelector(({ shopping }) => shopping);
  const useUserName = useAppSelector(({ user }) => user.username);
  const router = useRouter();

  const [modelOrder, setModelOrder] = useState(false);

  function showOrder() {
    showToast("Pedido Feito Com sucesso", "success");
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center  min-h-screen pb-10">
      <div className="flex items-center pl-3 relative w-full  h-[70px] mb-4 bg-white shadow-lg shadow-black/30 z-30">
        <Link
          className="flex items-center text-vermelho_3 font-bold"
          href={"/loja"}
        >
          <IoIosArrowBack /> Voltar
        </Link>
      </div>

      <div className="flex flex-col items-center  w-full lg:w-[500px] h-full py-5 bg-zinc-300 mb-4 lg:rounded-lg">
        <div className="flex items-center justify-between w-[90%] mb-2">
          <h1 className="text-yellow-700">{useUserName}</h1>
          <div>
            <span>valor total:</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-[90%]  mb-4">
          <span> Zulu pizzaria</span>
          <strong> R$ {useShoppingCar.somePrice.toFixed(2)}</strong>
        </div>
        {useShoppingCar.list.map((item) => (
          <div
            className="flex items-center justify-between w-[90%] border border-zinc-700/25 p-1"
            key={item.id}
          >
            <div>
              <span className="w-[10%] mr-2">{item.unit}x</span>
              <span className="w-[60%]">{item.name}</span>
            </div>
            <span className="w-[30%] text-end">
              {" "}
              R$ {item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-2xl p-1 w-[90%] lg:w-[500px] h-14 bg-zinc-300 mb-10">
        <div
          onClick={() => setModelOrder(false)}
          data-model={modelOrder}
          className="cursor-pointer hover:bg-slate-600 flex items-center pl-6 data-[model=false]:bg-vermelho_1 bg-transparent w-full h-full rounded-2xl data-[model=false]:shadow-lg data-[model=false]:shadow-black/30"
        >
          <span data-model={modelOrder} className="text-white font-bold">
            Retirada
          </span>
        </div>
        <div
          onClick={() => setModelOrder(true)}
          data-model={modelOrder}
          className="cursor-pointer hover:bg-slate-600  flex items-center pl-6 data-[model=true]:bg-vermelho_1 bg-transparent w-full h-full rounded-2xl data-[model=true]:shadow-lg data-[model=true]:shadow-black/30"
        >
          <span data-model={modelOrder} className="text-white font-bold">
            Delivery
          </span>
        </div>
      </div>

      {!modelOrder && (
        <div className="flex flex-col items-center gap-1 w-[90%] lg:w-[500px] mb-10">
          <p className="text-zinc-400 text-center mb-2">
            Informe o endereco de entrega para nossa equipe te encontrar
            responsável por retirar o pedido em uma das nossas lojas, ou o
            pedido não será entregue.
          </p>
          <div className="w-full">
            <label htmlFor="time">Horario de Retirada</label>
            <select
              className="w-full h-10 border border-slate-600 rounded-md"
              name=""
              id="time"
            >
              <option value="">18:00</option>
              <option value="">19:00</option>
              <option value="">20:00</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="person">Quem vai retirar?</label>
            <input
              className="w-full h-10 border border-slate-600 rounded-md"
              id="person"
            />
          </div>
          <div className="w-full">
            <label htmlFor="person">Documento rg/cpf</label>
            <input
              className="w-full h-10 border border-slate-600 rounded-md"
              id="person"
            />
          </div>
        </div>
      )}

      {modelOrder && (
        <div className="flex flex-col items-center gap-1 w-[90%] lg:w-[500px] mb-10">
          <p className="text-zinc-400 text-center mb-2">
            Informe o endereço de entrega para que nossa equipe possa
            encontrá-lo.
          </p>
          <div className="w-full">
            <label htmlFor="city">Endereço</label>
            <input
              className="w-full h-10 border border-slate-600 rounded-md"
              id="city"
            />
          </div>
          <div className="w-full">
            <label htmlFor="cep">Rua</label>
            <input
              className="w-full h-10 border border-slate-600 rounded-md"
              id="cep"
            />
          </div>
          <div className="w-full">
            <label htmlFor="descript">Complemento</label>
            <input
              className="w-full h-10 border border-slate-600 rounded-md"
              id="descript"
            />
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 w-[90%] lg:w-[500px]">
        <button className="px-4 py-2 w-full bg-zinc-500 text-white rounded-lg mx-auto">
          Editar Pedido
        </button>
        <button
          onClick={() => {
            showOrder();
          }}
          className="px-4 py-2 w-full bg-green-600 text-white rounded-lg mx-auto"
        >
          Confirma compra
        </button>
      </div>
    </div>
  );
}
