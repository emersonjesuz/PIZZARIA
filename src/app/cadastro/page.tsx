"use client";
import Image from "next/image";
import pizzaImage from "@/assets/pizza-login.jpg";
import { FaPizzaSlice } from "react-icons/fa";
import Link from "next/link";
import { PiLockKeyFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoAtCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import showToast from "@/utils/showToast";
import { FormEvent } from "react";

export default function Cadastro() {
  const router = useRouter();

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    showToast("Cadastro feito com sucesso", "success");
    router.push("/login");
  }

  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <Image
        className="blur-[2px] object-cover"
        src={pizzaImage}
        alt=""
        layout="fill"
      />
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-around lg:max-w-[500px] w-[100%] lg:h-[60vh] h-[100vh] bg-white/10 z-50 lg:rounded-lg"
      >
        <div className="">
          <h1 className="text-orange-500 text-3xl">Cadastrar-se</h1>
        </div>
        <div className="flex flex-col gap-3 w-[90%]">
          <div className="flex flex-col gap-1 ">
            <label className="text-white font-bold px-3" htmlFor="username">
              username*
            </label>
            <div className="w-full relative">
              <input
                className="border-[2px] border-zinc-400  w-full h-[40px] rounded-lg bg-zinc-100/50 pl-8"
                type="username"
                id="username"
              />
              <CgProfile className="absolute top-[50%] left-2 translate-y-[-50%] text-orange-600" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-white font-bold px-3" htmlFor="email">
              E-mail*
            </label>
            <div className="w-full relative">
              <input
                className="border-[2px] border-zinc-400  w-full h-[40px] rounded-lg bg-zinc-100/50 pl-8"
                type="email"
                id="email"
              />
              <IoAtCircleOutline className="absolute top-[50%] left-2 translate-y-[-50%] text-orange-600" />
            </div>
          </div>

          <div className="flex flex-col gap-1 ">
            <label className="text-white font-bold px-3" htmlFor="password1">
              Senha*
            </label>
            <div className="w-full relative">
              <input
                className="border-[2px] border-zinc-400  w-full h-[40px] rounded-lg bg-zinc-100/50 pl-8"
                type="password1"
                id="password1"
              />
              <PiLockKeyFill className="absolute top-[50%] left-2 translate-y-[-50%] fill-orange-600" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-white font-bold px-3" htmlFor="password2">
              Confirmar senha*
            </label>
            <div className="w-full relative">
              <input
                className="border-[2px] border-zinc-400  w-full h-[40px] rounded-lg bg-zinc-100/50 pl-8"
                type="password2"
                id="password2"
              />
              <PiLockKeyFill className="absolute top-[50%] left-2 translate-y-[-50%] fill-orange-600" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-[90%]">
          <button className="flex items-center gap-2 justify-center w-full h-[40px] rounded-2xl text-white bg-orange-500 shadow-sm shadow-black/50">
            Confirmar <FaPizzaSlice />
          </button>
          <p className="text-white/70">
            Ja possui uma conta?
            <Link href={"/login"} className="text-orange-500">
              Entrar
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
