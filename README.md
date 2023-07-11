<p align="center">
 <a href="#Description">Descrição</a> •
 <a href="#Features">características</a> • 
 <a href="#Technologies">Tecnologias</a> •
 <a href="#How to use">Como usar</a> •
 <a href="#Software">Software</a> 
</p>

Seleção - Detector de textos impróprios

## Instruções
- 1 - Acesse a aplicação em: https://verificadordeofensas.netlify.app/;
- 1.1 - Espere a aplicação terminar de consultar a API, pode demorar entre 1 à 3 minutos caso seja a primeira consulta do dia.
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

## Vídeo demonstração:

https://user-images.githubusercontent.com/62391659/232137027-f936064f-1332-4683-a54f-fd5f33c4591f.mp4


</div>
<div id="Description">

## Descrição

### Solução para o problema: 
Projeto desenvolvido para a seleção do BitLab 2023, a proposta do projeto era desenvolver um detector de palavras ofensivas e de baixo calão dentro de um texto. Desenvolvi uma solução com base em uma lista de palavras impróprias já predefinidas em um banco de dados, onde o texto do usuário passa por um filtro verificando sem alguma das palavras digitadas se encontra nessa lista. Caso encontre, o programa irá substituir as letras da palavra por "*" e retornará ao usuário quais foram as palavras de baixo calão utilizadas.

### Solução para o problema (Tecnicamente):

Através de uma API, a aplicação vai consultar um banco de dados com uma lista de palavras. Enquanto essa lista não é recebida, o botão de verificação ficará desabilitado para que o usuário não utilize ainda a aplicação. Ao receber essa lista ele armazenará em um Array e também habilitará o botão.

Ao apertar o botão, uma função de verificação será acionada, que irá receber o texto digitado e percorrer com o método __some__, verificarando se existe alguma palavra do texto que seja correspondente a alguma da lista recebida do banco. Caso ela ache, a palavra será adicionada em um outro array e através do método __repliceAll__  substituirá a palavra do texto que corresponde por asteríscos - é utilizado o metodo __repeat(string.lenth)__ para que o número de asteriscos sejam iguais ao tamanho da palavra. Por fim as palavras que são correspondentes no texto serão substituidas e será retornado uma notifição dizendo "conteúdo impróprio: palavra 1, palavra 2...".

### Sobre a API:
Todas as palavras a serem censuradas estão no banco de dados da API criada para o desafio. A API foi criado em NodeJS e utiliza o banco SQLite e está públicada no render(https://profanitywords-api.onrender.com). Ela conta com uma tabela para palavras a serem censuradas e também com uma tabela de sugestão para palavras ainda não adicionadas. Para mais informações sobre, por favor, acesse o repositório https://github.com/Jcassio-dev/ProfanityWords-API.

### Sobre a feature extra: 
Clicando em "sugerir palavra" no canto superior direito, o usuário é encaminhado para uma tela que tem algumas informações sobre a API, uma seção com todas as palavras que são bloqueadas pela API e outra com sugestões de outros usuários. Caso ele queria deixar uma sugestão, basta digitar na caixa de sugestão e enviar que em instantes aparecerá uma notificação para ele que sua sugestão foi enviada e quando atualizar a página estará na seção de sugestões.

### Da administação do banco:
Os usuários tem apenas o acesso a consulta da tabela de palavrões, consulta e inserção de dados na tabela de sugestões. São funções exclusivas do administrador:
1. Inserir novos palavrões na tabela de palavrões
2. Acatar ou não as sugestões dos usuários e após a revisão limpar a tabela de sugestões.
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
- Libraries: `react` `react-icons` `styled-components` `react-toastify` `axios`
- Version control: `Git & Github`

</div>
<div id="How to use">

## Como usar localmente:

#### Clone esse repositório

```bash
$ git clone https://github.com/Jcassio-dev/VerificadorDePalavroes
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
