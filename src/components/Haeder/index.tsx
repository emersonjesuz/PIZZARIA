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

export default function Header() {
  const path = usePathname();

  return (
    <div className="relative flex justify-between items-center w-full lg:px-10 px-4 h-[70px] bg-white shadow-lg shadow-black/30 z-50">
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

      <div className="flex items-center gap-3">
        <Link
          href={"/login"}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-200 text-vermelho_3 shadow-lg shadow-black/30 hover:scale-105 border-[2px] border-vermelho_3"
        >
          Entrar
        </Link>
        <Link
          href={"/login"}
          className="px-4 py-2 rounded-lg text-vermelho_1 shadow-lg shadow-black/30 hover:scale-105 bg-black"
        >
          Cadastrer-se
        </Link>
      </div>
      <div className="block lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <TiThMenu className="w-[30px] h-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link
                href={"/"}
                className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer  border-b border-b-vermelho_3"
              >
                Home
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={""}
                className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer"
              >
                Fazer pedido
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                href={"/sobre"}
                className="text-vermelho_1 font-bold hover:scale-105 cursor-pointer"
              >
                Sobre
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
