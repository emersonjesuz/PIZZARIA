import Image from "next/image";
import pizzaImage from "@/assets/pizza-login.jpg";
import { FaPizzaSlice } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      <Image
        className="blur-[2px] object-cover"
        src={pizzaImage}
        alt=""
        layout="fill"
      />
      <div className="flex flex-col items-center justify-around lg:max-w-[500px] w-[100%] lg:h-[60vh] h-[100vh] bg-white/10 z-50 lg:rounded-lg">
        <div className="">
          <h1 className="text-green-500 text-2xl">Entrar</h1>
        </div>
        <div className="flex flex-col gap-10 w-[90%]">
          <div className="flex flex-col gap-1 ">
            <label className="text-white font-bold px-3" htmlFor="username">
              username*
            </label>
            <input
              className="border-[2px] border-zinc-400  w-full h-[50px] rounded-2xl bg-zinc-100/50 px-3"
              type="text"
              id="username"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-white font-bold px-3" htmlFor="password">
              Senha*
            </label>
            <input
              className="border-[2px] border-zinc-400  w-full h-[50px] rounded-2xl bg-zinc-100/50 px-3"
              type="text"
              id="password"
            />
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
      </div>
    </div>
  );
}
