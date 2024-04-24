"use client";
import pizzaImage from "@/assets/pizza-login.jpg";
import { useAppDispatch } from "@/redux/hook";
import { UserRedux } from "@/redux/reducers/userReducer";
import showToast from "@/utils/showToast";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaPizzaSlice } from "react-icons/fa";
import { PiLockKeyFill } from "react-icons/pi";

export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  function onsubmit(event: FormEvent) {
    event.preventDefault();
    if (!username) {
      return showToast("Todos os campos são obrigatorios.", "error");
    }
    dispatch(UserRedux(username));
    showToast("Login feito com sucesso.", "success");
    router.push("/");
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
        onSubmit={onsubmit}
        className="flex flex-col items-center justify-around lg:max-w-[500px] w-[100%] lg:h-[60vh] h-[100vh] bg-white/10 z-50 lg:rounded-lg"
      >
        <div className="">
          <h1 className="text-green-500 text-3xl">Entrar</h1>
        </div>
        <div className="flex flex-col gap-10 w-[90%]">
          <div className="flex flex-col gap-1 ">
            <label className="text-white font-bold px-3" htmlFor="username">
              username*
            </label>

            <div className="w-full relative">
              <input
                className="border-[2px] border-zinc-400  w-full h-[50px] rounded-2xl bg-zinc-100/50 pl-8"
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <CgProfile className="absolute top-[50%] left-2 translate-y-[-50%] text-green-500 w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-white font-bold px-3" htmlFor="password">
              Senha*
            </label>

            <div className="w-full relative">
              <input
                className="border-[2px] border-zinc-400  w-full h-[50px] rounded-2xl bg-zinc-100/50 pl-8"
                type="password"
                id="password"
              />
              <PiLockKeyFill className="absolute top-[50%] left-2 translate-y-[-50%] text-green-500 w-5 h-5" />
            </div>
            <div className="flex items-center justify-end w-full">
              <Link href={""} className="text-white text-[12px] pr-3 underline">
                Esqueci minha senha
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 w-[90%]">
          <button className="flex items-center gap-2 justify-center w-full h-[50px] rounded-2xl text-white bg-green-600 shadow-sm shadow-black/50">
            Confirmar <FaPizzaSlice />
          </button>
          <p className="text-white/70">
            Ainda nao tem uma conta?
            <Link href={"/cadastro"} className="text-green-500">
              {" "}
              cadastrar-se
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
