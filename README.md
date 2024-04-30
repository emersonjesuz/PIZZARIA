This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# link do deploy

### Página Principal

Mobile / Desktop

Iniciamos com uma breve apresentação sobre a pizzaria do Zé, onde temos uma imagem buscada no Pinterest, um texto e um botão que leva para fazer o pedido abaixo das imagens.

![Imagem 1](image.png) ![Imagem 2](image-10.png) ![Imagem 3](image-1.png)

Logo após, temos imagens de pizzas com nome, descrição e tópicos.

![Imagem 4](image-2.png) ![Imagem 5](image-3.png)

Agora temos a seção de parceiros onde temos lojas fictícias representando nossas lojas parceiras. A intenção é mostrar que poderia existir uma lista de lojas.

![Imagem 6](image-4.png) ![Imagem 7](image-5.png)

Tem um breve texto explicando para os clientes que temos delivery também e podem clicar no botão para fazer o pedido.

![Imagem 8](image-6.png) ![Imagem 9](image-7.png)

E o nosso rodapé com ícones de redes sociais e links. Obs: todos estão estáticos.

![Imagem 10](image-8.png) ![Imagem 11](image-9.png)

### Login e Cadastro

A página de login e cadastro tem os formulários apenas para exibição, entretanto o login necessita que preencham para uma experiência melhor.

#### Login

![Imagem 12](image-11.png) ![Imagem 13](image-12.png)

#### Cadastro

![Imagem 14](image-13.png) ![Imagem 15](image-14.png)

## Página Sobre

Aqui explicamos sobre a pizzaria, trazendo um texto.

![Imagem 16](image-16.png) ![Imagem 17](image-15.png)

## Página Loja

Entrando na página irá exibir um modal solicitando ao cliente que escolha entre informar o CEP para uma busca ou entre as pizzarias. A intenção é mostrar a possibilidade da criação de um sistema de busca por mapa onde o cliente pode encontrar a loja mais próxima do seu endereço ou fornecer um CEP para o endereço onde quer retirar.

![Imagem 18](image-17.png) ![Imagem 19](image-18.png)

#### Loja Escolhida

Aqui seria onde ele teria os dados da loja escolhida no modal anterior. Obs: os dados estão estáticos por enquanto.

![Imagem 20](image-20.png) ![Imagem 21](image-19.png)

A seguir, temos uma lista com promoções ou produtos em destaque, na versão mobile ele tem a possibilidade de scroll com rolagem.

![Imagem 22](image-21.png) ![Imagem 23](image-22.png)

#### Produtos

Aqui temos a lista para fazer o pedido onde clicando na pizza desejada é acrescentado ao carrinho.

![Imagem 24](image-24.png) ![Imagem 25](image-23.png)

#### Botões Inferiores

O primeiro botão da pizza serve para abrir o modal trazendo ao usuário o poder de escolher a loja, o segundo leva para o carrinho.

![Imagem 26](image-25.png)

## Página de Carrinho

Aqui você vai poder encerrar o seu pedido.

Temos as informações do pedido, loja, cliente, itens, valor total.
Temos a possibilidade de escolher qual método deseja se é delivery ou retirada na loja e assim exibir um formulário para a opção escolhida.

![Imagem 27](image-26.png) ![Imagem 28](image-27.png)

## Melhorias a Serem Feitas

1. Escolher a unidade, tamanho.
2. Trazer um sistema backoffice para gerenciar e administrar.
3. Formas de pagamentos, cartão, pix, etc.
