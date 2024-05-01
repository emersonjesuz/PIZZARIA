"use client";
import bonecoImg from "@/assets/chef.jpg";
import delivery from "@/assets/pizza-delivery-man-thinking.jpg";
import { Button } from "@/components/ui/button";
import { dataPizzas } from "@/helpers/dataPizzas";
import { partners } from "@/helpers/dataStores";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col ">
      <main className="flex flex-col min-h-screen bg-slate-100 pb-10">
        <div className="flex items-center justify-center flex-col-reverse lg:flex-row gap-4 px-8 py-10 mt-4 bg-white w-full min-h-[80vh]">
          <div className="flex flex-col gap-3 w-[300px] lg:w-[400px]">
            <h1 className="text-[35px] text-vermelho_3 font-bold">
              Olá! Eu sou o <span className="text-red-900">Zé</span> e dou as
              boas-vindas à nossa pizzaria!
            </h1>
            <p>
              Faça seu pedido diretamente em uma de nossas lojas e aproveite
              nossas deliciosas pizzas feitas na hora.
            </p>
            <Button
              onClick={() => router.push("/loja")}
              className="hover:bg-vermelho_3 mt-[30px] lg:w-[200px]"
            >
              Fazer Pedido
            </Button>
          </div>
          <div>
            <Suspense
              fallback={
                <div className="h-[300px] w-[300px]  rounded-lg shadow-lg shadow-black/50   bg-gray-600 animate-pulse" />
              }
            >
              {" "}
              <Image
                className="h-[300px] lg:h-[500px] w-auto object-cover"
                src={bonecoImg}
                width={1000}
                height={1000}
                alt=""
              />
            </Suspense>
          </div>
        </div>
        {dataPizzas.map((item, index) => (
          <div
            key={item.id}
            data-impar={index % 2 !== 0}
            className="flex items-center flex-col-reverse lg:data-[impar=true]:flex-row-reverse lg:flex-row  lg:justify-center gap-5 w-full lg:h-[700px] py-10 bg-black data-[impar=true]:bg-white px-5"
          >
            <div className="flex flex-col items-center gap-5 w-full lg:w-[50%] ">
              <h2
                data-impar={index % 2 !== 0}
                className="text-white data-[impar=true]:text-black text-2xl"
              >
                {item.titulo}
              </h2>
              <p
                data-impar={index % 2 !== 0}
                className="text-white/40 data-[impar=true]:text-black/40 text-center"
              >
                {item.descricao}
              </p>
              <div>
                <ul className="text-stone-600 list-disc px-10">
                  {item.topicos.map((topic, indexTopic) => (
                    <li
                      key={indexTopic}
                      data-impar={index % 2 !== 0}
                      className="text-white/70 data-[impar=true]:text-black text-sm"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Suspense
              fallback={
                <div className="h-[300px] w-[300px]  rounded-lg shadow-lg shadow-black/50   bg-gray-600 animate-pulse" />
              }
            >
              {" "}
              <Image
                className="h-[300px] w-auto object-cover rounded-lg shadow-lg shadow-black/50 data-[impar=true]:shadow-lg data-[impar=true]:shadow-white/70"
                src={item.img}
                width={1000}
                height={1000}
                alt=""
              />
            </Suspense>
          </div>
        ))}
        <div className="px-4 py-10 bg-black w-full h-auto ">
          <h1 className="text-[35px] text-center text-amber-400/20 font-sans font-bold mb-[90px]  ">
            Parcerias
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:justify-evenly gap-4 lg:w-full  mx-auto">
            {partners.map((partner, index) => (
              <div
                className="flex items-center lg:flex-col-reverse gap-2 lg:gap-11 w-[300px]"
                key={index}
              >
                <div>
                  <h1 className="text-yellow-300 capitalize">
                    {partner.title}
                  </h1>
                  <p className="text-red-100 text-[10px] lg:text-[15px] capitalize">
                    {partner.address}
                  </p>
                </div>
                <Suspense
                  fallback={
                    <div className="h-[300px] w-[300px]  rounded-lg shadow-lg shadow-black/50   bg-gray-600 animate-pulse" />
                  }
                >
                  <Image
                    className="h-[200px] w-[150px]  lg:w-auto lg:h-[300px]  hover:translate-y-[-10px] transition-all   object-cover rounded-lg "
                    src={partner.img}
                    width={1000}
                    height={1000}
                    alt=""
                  />
                </Suspense>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-row flex-col-reverse gap-10 w-full min-h-[500px] py-11">
          <div className="flex flex-col lg:w-[500px] w-[90%]">
            <h1 className="text-[35px] font-sans capitalize text-vermelho_3 font-bold lg:text-start text-center mb-3">
              Pediu? Chegou! Agora o Zé tem delivery.
            </h1>
            <div>
              <p>Agora oferecemos entrega rápida e segura!</p>
              <p>
                Peça suas pizzas favoritas e receba em casa com toda comodidade.
                Garantimos um serviço de entrega eficiente para que você
                desfrute do melhor sabor onde estiver.
              </p>
              <p>
                Faça seu pedido hoje mesmo e experimente a praticidade do nosso
                delivery. Estamos aqui para atendê-lo com rapidez e qualidade!
              </p>
            </div>
            <Button
              onClick={() => router.push("/loja")}
              className="hover:bg-vermelho_3 mt-[30px] lg:w-[200px]"
            >
              Pedir delivery
            </Button>
          </div>
          <Suspense
            fallback={
              <div className="h-[300px] w-[300px]  rounded-lg shadow-lg shadow-black/50   bg-gray-600 animate-pulse" />
            }
          >
            <Image
              className="h-[200px] w-[150px] lg:h-[300px] lg:w-[250px]   object-cover rounded-lg"
              src={delivery}
              width={1000}
              height={1000}
              alt=""
            />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
