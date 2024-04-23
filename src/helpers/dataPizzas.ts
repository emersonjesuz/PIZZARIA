import pizzaChoco from "@/assets/pizza-chocolate.jpg";
import pizzaQueijo from "@/assets/pizza-queijo.jpg";
import pizzaCalabre from "@/assets/pizza-calabresa.jpg";
import pizzaModaDaCasa from "@/assets/pizza-moda-da-casa.jpg";

export const dataPizzas = [
  {
    id: 1,
    img: pizzaQueijo,
    titulo: "Pizza de Queijo",
    descricao: "Uma deliciosa pizza com generosas camadas de queijo derretido.",
    topicos: [
      "Sabor clássico e amado por todos.",
      "Feita com uma combinação especial de queijos.",
      "Massa crocante e cobertura abundante.",
      "Perfeita para os amantes de queijo.",
    ],
  },
  {
    id: 2,
    img: pizzaCalabre,
    titulo: "Pizza de Calabresa",
    descricao:
      "Uma pizza tradicional com fatias de calabresa defumada e queijo derretido.",
    topicos: [
      "Sabor marcante da calabresa defumada.",
      "Combinação perfeita com queijo derretido.",
      "Massa fina e crocante.",
      "Ideal para quem gosta de um toque levemente picante.",
    ],
  },
  {
    id: 3,
    img: pizzaChoco,
    titulo: "Pizza de Chocolate",
    descricao: "Uma pizza doce com chocolate derretido e cobertura de frutas.",
    topicos: [
      "Opção deliciosa para sobremesa ou lanche doce.",
      "Chocolate derretido em uma massa macia.",
      "Cobertura com frutas frescas como morangos ou banana.",
      "Uma experiência única para os amantes de chocolate.",
    ],
  },
  {
    id: 4,
    img: pizzaModaDaCasa,
    titulo: "Pizza Moda da Casa",
    descricao:
      "Nossa especialidade! Uma pizza única com ingredientes selecionados.",
    topicos: [
      "Receita exclusiva da pizzaria.",
      "Combinação de ingredientes frescos e saborosos.",
      "Massa artesanal feita no local.",
      "Uma escolha popular entre os clientes exigentes.",
    ],
  },
];
