"use client";
import Image from "next/image";
import logoImg from "@/assets/pizzar-logo-fundo-branco.jpg";
import { Button } from "../ui/button";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hook";

export default function Header() {
  const path = usePathname();
  const useUserRedux = useAppSelector(({ user }) => user);

  return (
    <div className=" fixed top-0 left-0 lg:relative flex justify-center items-center w-full  h-[70px] bg-white shadow-lg shadow-black/30 z-50 ">
      <div className="flex items-center justify-between lg:w-[80%] w-full px-2 lg:px-0">
        <div>
          <Image
            className="h-10 w-auto object-cover"
            src={logoImg}
            width={1000}
            height={1000}
            alt=""
          />
        </div>
        <div className="lg:flex hidden items-center gap-4 ">
          <Link
            data-path={path === "/"}
            href={"/"}
            className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer  border-b data-[path=true]:border-b-vermelho_3 border-transparent"
          >
            Home
          </Link>
          <Link
            data-path={path === "/loja"}
            href={"/loja"}
            className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer border-b data-[path=true]:border-b-vermelho_3 border-transparent"
          >
            Fazer pedido
          </Link>
          <Link
            data-path={path === "/sobre"}
            href={"/sobre"}
            className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer border-b data-[path=true]:border-b-vermelho_3 border-transparent"
          >
            Sobre
          </Link>
        </div>
        <div
          data-login={!!useUserRedux.username}
          className="flex data-[login=true]:hidden items-center gap-3"
        >
          <Link
            href={"/login"}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-200 text-vermelho_3 shadow-lg shadow-black/30 hover:scale-105 border-[2px] border-vermelho_3"
          >
            Entrar
          </Link>
          <Link
            href={"/cadastro"}
            className="px-4 py-2 rounded-lg text-vermelho_1 shadow-lg shadow-black/30 hover:scale-105 bg-black"
          >
            Cadastrer-se
          </Link>
        </div>
        <h1
          data-login={!!useUserRedux.username}
          className="hidden data-[login=true]:block text-vermelho_3 font-bold capitalize line-clamp-1"
        >
          {useUserRedux.username}
        </h1>
        <div className="block lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <TiThMenu className="w-[30px] h-auto" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  data-path={path === "/"}
                  href={"/"}
                  className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer  border-b data-[path=true]:border-b-vermelho_3 border-transparent"
                >
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  data-path={path === "/loja"}
                  href={"/loja"}
                  className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer border-b data-[path=true]:border-b-vermelho_3 border-transparent"
                >
                  Fazer pedido
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  data-path={path === "/sobre"}
                  href={"/sobre"}
                  className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer border-b data-[path=true]:border-b-vermelho_3 border-transparent"
                >
                  Sobre
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
