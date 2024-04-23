import logoImg from "@/assets/pizzar-logo-fundo-branco.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-10 w-full lg:h-[200px] py-10 px-10 lg:px-20 bg-black">
      <div className="">
        <Image
          className="h-20 w-auto object-cover rounded-full"
          src={logoImg}
          width={1000}
          height={1000}
          alt=""
        />
      </div>
      <div className="flex flex-col  lg:flex-row items-center gap-3 lg:gap-10">
        <Link
          className="text-white text-lg underline pb-1 hover:opacity-35"
          href=""
        >
          Lojas
        </Link>
        <Link
          className="text-white text-lg underline pb-1 hover:opacity-35"
          href=""
        >
          Fale conosco
        </Link>
        <Link
          className="text-white text-lg underline pb-1 hover:opacity-35"
          href=""
        >
          Politica de privacidade
        </Link>
      </div>
      <div className="flex  gap-6">
        <Link className="text-white hover:opacity-35" href="">
          <FaTiktok className="w-5 h-5" />
        </Link>
        <Link className="text-white hover:opacity-35" href="">
          <FaFacebook className="w-5 h-5" />
        </Link>
        <Link className="text-white hover:opacity-35" href="">
          <FaInstagram className="w-5 h-5" />
        </Link>
        <Link className="text-white hover:opacity-35" href="">
          <FaWhatsapp className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
