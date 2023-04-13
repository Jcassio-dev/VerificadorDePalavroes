<p align="center">
 <a href="#Description">Descrição</a> •
 <a href="#Features">características</a> • 
 <a href="#Technologies">Tecnologias</a> •
 <a href="#How to use">Como usar</a> •
 <a href="#Software">Software</a> 
</p>

Seleção - BitLab 2023 - Detector de textos impróprios

## Instruções
- 1 - Acesse a aplicação em: https://selecao-2023-jcassio-dev.vercel.app/;
- 2 - Digite no campo de texto, que tem escrito "digite seu texto aqui";
- 3 - Aperte em verificar texto;

- 3.1 - Caso o texto possua palavras ofensivas, ele irá retornar uma notificação dizendo quais foram as palavras ofensivas utilizas e vai censurá-las no texto digitado, substituindo as letras por asteriscos;
- 3.2 - Caso não seja observada nenhuma palavra ofensiva, o programa retornará uma notificação com a mensagem "Texto Seguro";

### Feature Extra: 
- 4 - Acesse as informações da API, clicando no botão de texto no canto superior direito da tela;
- 4.1 - É possível observar uma lista com todas as palavras que serão filtradas;
- 4.2 - É possível oberservar, também, uma outra lista com todas as palavras sugeridas pelos usuários que serão revisadas e adicionadas;
- 4.3 - Caso queira sugerir uma nova palavra basta digitá-la no campo de sugestão e enviá-la;
- 4.4 - Recarregue a página e veja se sua sugestão foi adicionada ao campo de sugestões.

<div align="center">

https://user-images.githubusercontent.com/62391659/231818520-d2face79-ab10-40ad-a3df-2308c168e26a.mp4

</div>
<div id="Description">

## Descrição
Projeto desenvolvido para a seleção do BitLab 2023, a proposta do projeto era desenvolver um detector de palavras ofensivas e de baixo calão dentro de um texto. Desenvolvi uma solução com base em uma lista de palavras impróprias já predefinidas em um banco de dados, onde o texto do usuário passa por um filtro verificando sem alguma das palavras digitadas se encontra nessa lista. Caso encontre, o programa irá substituir as letras da palavra por "*" e retornará ao usuário quais foram as palavras de baixo calão utilizadas.

Todas as palavras a serem censuradas estão no banco de dados da API criada para o desafio. A API foi criado em NodeJS e utiliza o banco SQLite e está públicada no render(https://profanitywords-api.onrender.com). Ela conta com uma tabela para palavras a serem censuradas e também com uma tabela de sugestão para palavras ainda não adicionadas. Para mais informações sobre, por favor, acesse o repositório https://github.com/Jcassio-dev/ProfanityWords-API.
</div> 
<div id="Features">

### Aspectos

- [x] React
- [x] SPA
- [x] Responsiviness
- [x] Typing

</div>
<div id="Characteristics">

## Caracteristicas:
- React + Vite;
- Component elements;
- CSS-in-JS;
- global styles;
- Array methods;

</div>
<div id="Technologies">

## Tecnologias:

- Languages: `typescript` `CSS` `HTML`
- Libraries: `react` `react-icons` `styled-components` `react-toastify`
- Version control: `Git & Github`

</div>
<div id="How to use">

## Como usar localmente:

#### Clone esse repositório

```bash
$ git clone https://github.com/bitlab-ufrn/selecao-2023-Jcassio-dev.git
```

#### Acesse a pasta do projeto no terminal/cmd

```bash
$ cd /selecao-2023-Jcassio-dev
```

#### Instale as dependências

```bash
$ npm install
```

#### Execute a aplicação no modo de desenvolvimento

```bash
$ npm run dev
```
#### O server será iniciado - Vá até a porta informada
```bash
localhost:port
```
</div>
<div id="Software">

## Software

VSCode
</div>
