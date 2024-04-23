import logoImg from "@/assets/chef.jpg";
import Image from "next/image";
export default function Sobre() {
  return (
    <div className="flex items-center justify-between flex-col  gap-10 w-full  py-10 px-0  lg:px-20 ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full  py-10 lg:px-10 bg-black rounded-xl shadow-sm shadow-black/50">
        <Image
          className="h-[200px] w-auto object-cover rounded-full"
          src={logoImg}
          width={1000}
          height={1000}
          alt=""
        />
        <div className="container mx-auto py-8">
          <h1 className="lg:text-4xl text-2xl font-bold mb-4 text-white">
            Bem-vindo à Pizzaria do Zé!
          </h1>

          <div className="flex flex-col gap-2 lg:text-lg text-sm mb-4 text-white/50">
            <p>
              A Pizzaria do Zé é o lugar perfeito para os amantes de pizza em
              busca de uma experiência gastronômica autêntica e saborosa.
            </p>
            <p>
              Localizada no coração da cidade, nossa pizzaria oferece uma
              variedade de sabores tradicionais e especialidades exclusivas
              preparadas com ingredientes frescos e de qualidade.
            </p>
            <p>
              Nosso cardápio inclui pizzas clássicas como Margherita, Calabresa
              e Quatro Queijos, além de opções especiais como a nossa famosa
              Pizza do Zé, com uma combinação única de ingredientes que você só
              encontra aqui.
            </p>
            <p>
              Oferecemos também serviço de entrega (delivery) para que você
              possa desfrutar das nossas pizzas no conforto da sua casa.
            </p>
          </div>

          <p className="text-lg text-white/70">
            Venha nos visitar e saborear a melhor pizza da cidade na Pizzaria do
            Zé!
          </p>
        </div>{" "}
      </div>
      <div className="flex flex-col gap-4 px-3">
        <h1 className="text-4xl font-bold mb-4 text-vermelho_3">
          A História da Pizzaria do Zé
        </h1>
        <p className="text-lg text-black/55">
          A Pizzaria do Zé nasceu em 1995, quando o Zé decidiu transformar sua
          paixão por pizza em um negócio. Com um pequeno investimento e muita
          determinação, ele abriu as portas em um cantinho do bairro, com mesas
          simples e um forno a lenha.
        </p>

        <p className="text-lg text-black/55">
          As pizzas caseiras do Zé logo conquistaram os moradores locais com sua
          massa fininha e ingredientes frescos. O boca a boca fez com que a
          Pizzaria do Zé crescesse rapidamente, tornando-se o ponto de encontro
          favorito da vizinhança.
        </p>

        <p className="text-lg text-black/55">
          Hoje, a Pizzaria do Zé continua a ser um sucesso, com o Zé ainda no
          comando da cozinha e uma equipe dedicada. O segredo? Receitas
          tradicionais e muito carinho em cada fatia!
        </p>
      </div>
    </div>
  );
}
