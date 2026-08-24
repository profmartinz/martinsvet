🐾 MartinsVet — Projeto Final | Desenvolvimento Web para IA

Projeto final desenvolvido para a disciplina Desenvolvimento Web para IA, reunindo os principais conceitos de desenvolvimento web e sua aplicação no contexto de sistemas baseados em Inteligência Artificial.

O projeto consiste no desenvolvimento de uma aplicação web para a MartinsVet — Pet Shop & Clínica Veterinária, construída de forma progressiva a partir dos fundamentos de HTML, CSS e JavaScript, evoluindo para a criação de uma interface interativa com Flexbox, manipulação do DOM, eventos, formulários e chatbot.

O projeto também serve como base para a compreensão de conceitos relacionados à integração com APIs, sistemas de Inteligência Artificial, segurança e deploy de aplicações web para IA.

🎯 Objetivo do projeto

O objetivo do projeto é integrar, em uma única aplicação, os conhecimentos desenvolvidos ao longo da disciplina Desenvolvimento Web para IA.

A aplicação foi construída de maneira progressiva:

HTML
  ↓
CSS
  ↓
Flexbox
  ↓
JavaScript
  ↓
DOM + Eventos
  ↓
Formulários
  ↓
Aplicação Interativa
  ↓
Chatbot
  ↓
APIs
  ↓
Integração com IA
  ↓
Segurança
  ↓
Deploy

Dessa forma, o projeto permite compreender como uma página web pode evoluir de uma interface inicialmente estática para uma aplicação capaz de interagir com usuários e, posteriormente, integrar serviços de Inteligência Artificial.

📚 Relação com a ementa

A disciplina possui a seguinte ementa:

Fundamentos do desenvolvimento web e sua aplicação em inteligência artificial; conceitos básicos de front-end e back-end; criação e consumo de APIs para integração com sistemas de IA; manipulação de dados em aplicações web; desenvolvimento de aplicações interativas para consumo de modelos de IA; segurança e boas práticas no desenvolvimento web; deploy de aplicações web para IA em ambientes de produção.

O projeto MartinsVet foi desenvolvido de forma a contemplar esses conhecimentos por meio de diferentes etapas.

Conteúdo da ementa

Aplicação no projeto

Fundamentos do desenvolvimento web

HTML, CSS e JavaScript

Aplicação em Inteligência Artificial

Desenvolvimento de interface para chatbot e futura integração com IA

Front-end

HTML, CSS, Flexbox e JavaScript

Back-end

Conceitos de arquitetura e comunicação entre aplicação e serviços

APIs

Criação e consumo de serviços para integração com sistemas externos

Manipulação de dados

Processamento das mensagens do chatbot e dados de formulários

Aplicações interativas

Chatbot, formulário, eventos e manipulação do DOM

Modelos de IA

Integração do chatbot com modelos generativos como etapa de evolução

Segurança

Proteção de credenciais, validação de dados e boas práticas

Deploy

Publicação da aplicação em ambiente de produção

🌐 1. Fundamentos do desenvolvimento web e sua aplicação em IA

O projeto utiliza os três principais pilares do desenvolvimento Front-end:

HTML5 para estruturação;

CSS3 para apresentação e layout;

JavaScript para comportamento e interatividade.

Essas tecnologias permitem construir a interface que será utilizada pelo usuário para interagir com funcionalidades relacionadas à Inteligência Artificial.

No chatbot, por exemplo, temos o seguinte fluxo:

Usuário
   ↓
Interface Web
   ↓
Entrada de texto
   ↓
Processamento
   ↓
Resposta
   ↓
Interface Web

Esse fluxo representa uma estrutura básica de uma aplicação conversacional.

🖥️ 2. Front-end e Back-end

Front-end

O Front-end corresponde à parte da aplicação com a qual o usuário interage diretamente.

Neste projeto são utilizados:

HTML5;

CSS3;

Flexbox;

JavaScript;

DOM;

Eventos;

Formulários;

Interface do chatbot.

A aplicação possui:

Cabeçalho;

Menu de navegação;

Seção principal;

Seção institucional;

Cards de serviços;

Formulário;

Chatbot;

Rodapé.

Back-end

O Back-end corresponde à camada responsável pelo processamento realizado no servidor e pela comunicação com serviços externos.

Em uma aplicação web integrada à Inteligência Artificial, o Back-end pode funcionar como intermediário entre o Front-end e uma API de IA.

Uma arquitetura possível é:

┌──────────────────────┐
│      FRONT-END       │
│                      │
│ HTML + CSS + JS      │
└──────────┬───────────┘
           │
           │ HTTP
           ▼
┌──────────────────────┐
│       BACK-END       │
│                      │
│ API / Servidor       │
└──────────┬───────────┘
           │
           │ Requisição
           ▼
┌──────────────────────┐
│     MODELO DE IA     │
│                      │
│ Gemini / outro modelo│
└──────────────────────┘

A separação entre Front-end e Back-end é importante principalmente quando a aplicação precisa utilizar informações sensíveis, como chaves de APIs.

🔌 3. APIs e integração com sistemas de IA

Uma aplicação web pode utilizar APIs para se comunicar com serviços externos.

No contexto deste projeto, o chatbot representa a interface que pode ser conectada a um serviço de Inteligência Artificial.

O fluxo de uma integração pode ser representado da seguinte maneira:

Usuário envia mensagem
          ↓
JavaScript captura a mensagem
          ↓
Aplicação envia uma requisição
          ↓
API de IA
          ↓
Modelo de Inteligência Artificial
          ↓
Resposta
          ↓
JavaScript recebe os dados
          ↓
Chatbot apresenta a resposta

Os principais conceitos envolvidos são:

APIs;

HTTP;

Requisições;

Respostas;

JSON;

Integração entre sistemas;

Consumo de serviços externos;

Comunicação com modelos de IA.

📊 4. Manipulação de dados

O projeto trabalha com diferentes tipos de dados fornecidos pelo usuário.

Um exemplo é o formulário:

Nome
E-mail
Assunto
Mensagem

Esses dados são capturados e processados pelo JavaScript.

O chatbot também trabalha com dados fornecidos pelo usuário.

Por exemplo:

Usuário:
"Quais serviços vocês oferecem?"

A aplicação recebe essa informação, processa o conteúdo e determina como responder.

Manipulação de strings

O chatbot utiliza recursos do JavaScript para processar as mensagens.

Converter para letras minúsculas

texto.toLowerCase();

Dividir uma frase

texto.split(" ");

Verificar se uma palavra existe

palavras.includes("consulta");

Essas operações permitem que o programa analise a entrada do usuário.

💬 5. Desenvolvimento de aplicações interativas

O projeto utiliza JavaScript para transformar a página em uma aplicação interativa.

Entre as funcionalidades desenvolvidas estão:

Abrir o chatbot;

Fechar o chatbot;

Enviar mensagens;

Responder mensagens;

Pressionar Enter para enviar;

Exibir mensagens dinamicamente;

Simular digitação;

Fazer rolagem automática;

Validar o formulário;

Exibir mensagens de confirmação.

🤖 6. Chatbot

O chatbot é uma das principais funcionalidades do projeto.

Ele permite que o usuário envie mensagens e receba respostas automaticamente.

A versão inicial do chatbot utiliza uma lógica baseada em regras, implementada em JavaScript.

Exemplo:

if (palavras.includes("consulta")) {
    return "As consultas veterinárias são realizadas por nossa equipe especializada.";
}

Nesse caso, o programa verifica se a palavra consulta aparece na mensagem.

Caso apareça, uma resposta específica é apresentada.

🧠 7. Lógica de funcionamento do chatbot

O funcionamento básico pode ser representado assim:

┌─────────────────────┐
│ Usuário digita      │
│ uma mensagem        │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ JavaScript captura  │
│ a mensagem          │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Texto é processado  │
│ e analisado         │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ Verificação das     │
│ palavras-chave      │
└──────────┬──────────┘
           ↓
      ┌────┴────┐
      ↓         ↓
   Encontrou   Não encontrou
      ↓         ↓
 Resposta     Resposta
 específica   padrão

A aplicação utiliza estruturas de decisão como:

if
else if
else

🔎 8. Exemplos de intenções reconhecidas

O chatbot possui respostas associadas a diferentes tipos de mensagens.

👋 Saudações

oi
olá

🩺 Consultas

consulta
veterinário
veterinaria

✂️ Banho e Tosa

banho
tosa

🛍️ Produtos

ração
racao
produto

💰 Preços

preço
valor

📞 Contato

contato
telefone

Caso nenhuma condição seja identificada, o chatbot apresenta uma resposta padrão.

⚙️ 9. JavaScript e DOM

O projeto utiliza JavaScript para manipular elementos da página por meio do DOM — Document Object Model.

Elementos HTML são localizados através de:

document.getElementById()

Por exemplo:

let botao = document.getElementById("chat-toggle");
let chat = document.getElementById("chat");
let input = document.getElementById("input");
let chatBox = document.getElementById("chat-box");

A partir dessas referências, o JavaScript consegue modificar e controlar os elementos da página.

🖱️ 10. Eventos

Eventos permitem que a aplicação responda às ações realizadas pelo usuário.

Por exemplo:

botao.addEventListener("click", function () {
    chat.classList.toggle("hidden");
});

Nesse caso, o evento click é utilizado para abrir ou fechar o chatbot.

O projeto também utiliza eventos relacionados ao teclado:

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        enviar();
    }
});

Assim, o usuário pode enviar uma mensagem pressionando a tecla Enter.

⏳ 11. Simulação de digitação

Para tornar a experiência mais próxima de um chatbot real, a aplicação apresenta temporariamente uma mensagem indicando que o sistema está processando a solicitação.

Digitando...

O comportamento é controlado utilizando:

setTimeout()

Isso permite criar um pequeno intervalo antes da apresentação da resposta.

📜 12. Atualização dinâmica do chat

As mensagens são inseridas dinamicamente no HTML utilizando JavaScript.

Exemplo:

chatBox.innerHTML +=
    "<div class='usuario'>" + texto + "</div>";

A resposta do chatbot também é adicionada dinamicamente:

chatBox.innerHTML +=
    "<div class='bot'>" + resposta + "</div>";

Dessa forma, o histórico da conversa é construído diretamente na interface.

📋 13. Formulário e validação

O projeto possui um formulário de contato.

Antes de processar o envio, o JavaScript verifica se os campos foram preenchidos.

if (
    nome.value.trim() === "" ||
    email.value.trim() === "" ||
    assunto.value.trim() === "" ||
    mensagem.value.trim() === ""
) {
    alert("Preencha todos os campos.");
    return;
}

A função:

trim()

é utilizada para remover espaços em branco do início e do final do texto.

Após o preenchimento correto, uma mensagem de confirmação é apresentada ao usuário.

O formulário também pode ser limpo utilizando:

formulario.reset();

🎨 14. CSS

O projeto utiliza CSS3 para construir a identidade visual da MartinsVet.

Entre os recursos utilizados estão:

Seletores;

Classes;

IDs;

Variáveis CSS;

Cores;

Tipografia;

Margins;

Padding;

Box Model;

box-sizing;

Bordas;

border-radius;

Sombras;

Backgrounds;

:hover;

Transições;

Transformações;

Flexbox.

📦 15. Flexbox

O projeto utiliza CSS Flexbox para organizar diferentes partes da interface.

Menu de navegação

nav ul {
    display: flex;
    justify-content: center;
    gap: 20px;
}

Neste caso:

display: flex ativa o Flexbox;

justify-content: center centraliza os itens;

gap: 20px cria espaçamento entre eles.

Cards de serviços

.container-servicos {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

O:

flex-wrap: wrap;

permite que os cards ocupem novas linhas quando necessário.

Formulário

#form-contato {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

O:

flex-direction: column;

organiza os campos verticalmente.

🎨 16. Variáveis CSS

O projeto utiliza variáveis CSS para facilitar a manutenção das cores:

:root {
    --azul: #2E8BC0;
    --azul-claro: #73C2FB;
    --azul-hover-card: #EAF7FD;
    --verde-whatsapp: #4CAF50;
    --branco: #ffffff;
    --cinza: #f4f6f8;
    --preto: #2C3E50;
}

As variáveis podem ser reutilizadas em diferentes elementos:

background: var(--azul);

Isso evita a repetição dos mesmos valores no código.

🔐 17. Segurança e boas práticas

Aplicações web que utilizam Inteligência Artificial precisam considerar aspectos de segurança desde o desenvolvimento.

Entre as boas práticas abordadas na disciplina estão:

Não expor chaves de API no Front-end;

Utilizar variáveis de ambiente;

Validar dados recebidos;

Validar informações antes de enviá-las para APIs;

Separar Front-end e Back-end;

Utilizar HTTPS;

Controlar o acesso às APIs;

Evitar exposição de informações sensíveis;

Utilizar limites de requisições quando necessário;

Tratar adequadamente dados fornecidos pelos usuários.

Uma arquitetura recomendada para aplicações que consomem APIs de IA é:

❌ Evitar:

Front-end
    ↓
Chave da API
    ↓
Serviço de IA

Em uma aplicação com Back-end:

✅ Recomendado:

Front-end
    ↓
Back-end
    ↓
Chave protegida
    ↓
API de IA

Dessa forma, a chave da API não fica exposta diretamente no navegador do usuário.

🚀 18. Deploy

O deploy corresponde ao processo de disponibilizar uma aplicação em um ambiente de produção.

Durante o desenvolvimento, a aplicação pode ser executada localmente.

Após o desenvolvimento, ela pode ser publicada em um servidor ou plataforma de hospedagem.

Uma aplicação Web para IA pode seguir uma arquitetura como:

Usuário
   ↓
Aplicação Web
   ↓
Back-end
   ↓
API
   ↓
Modelo de IA

No processo de deploy devem ser considerados:

Configuração do ambiente;

Variáveis de ambiente;

Segurança das credenciais;

HTTPS;

Configuração do servidor;

Disponibilidade;

Organização dos arquivos;

Monitoramento;

Manutenção.

🏗️ 19. Arquitetura de uma aplicação Web para IA

A arquitetura completa trabalhada na disciplina pode ser representada da seguinte forma:

                         USUÁRIO
                            │
                            ▼
                  ┌─────────────────┐
                  │    FRONT-END    │
                  │                 │
                  │ HTML            │
                  │ CSS             │
                  │ Flexbox         │
                  │ JavaScript      │
                  │ DOM             │
                  └────────┬────────┘
                           │
                           │ HTTP
                           ▼
                  ┌─────────────────┐
                  │     BACK-END    │
                  │                 │
                  │ API             │
                  │ Validação       │
                  │ Segurança       │
                  └────────┬────────┘
                           │
                           │ API
                           ▼
                  ┌─────────────────┐
                  │   SERVIÇO DE IA │
                  │                 │
                  │ Modelo de IA    │
                  └────────┬────────┘
                           │
                           ▼
                       RESPOSTA
                           │
                           ▼
                  ┌─────────────────┐
                  │     CHATBOT     │
                  │                 │
                  │ Resposta ao     │
                  │ usuário         │
                  └─────────────────┘

🔄 20. Evolução do projeto

O projeto MartinsVet foi desenvolvido de maneira incremental.

A evolução pode ser representada da seguinte forma:

┌─────────────────────┐
│   MartinsVet 01     │
│                     │
│ HTML + CSS          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   MartinsVet 02     │
│                     │
│ HTML + CSS          │
│ + Flexbox           │
└──────────┬──────────┘
           │
           ▼
┌────────────────────────────┐
│       Projeto Final        │
│                            │
│ HTML                       │
│ CSS                        │
│ Flexbox                    │
│ JavaScript                 │
│ DOM                        │
│ Eventos                    │
│ Formulários                │
│ Chatbot                    │
│ APIs                       │
│ Inteligência Artificial    │
│ Segurança                  │
│ Deploy                     │
└────────────────────────────┘

Essa evolução demonstra como uma aplicação inicialmente simples pode receber novas funcionalidades e tecnologias ao longo do processo de desenvolvimento.

🧪 21. Etapas de desenvolvimento

O projeto pode ser dividido em diferentes etapas:

Etapa 1 — Fundamentos Web

Criação da estrutura HTML da aplicação.

Etapa 2 — Estilização

Aplicação de CSS, identidade visual, cores, espaçamentos e tipografia.

Etapa 3 — Layout

Utilização do Flexbox para organizar os elementos da interface.

Etapa 4 — JavaScript

Introdução da lógica de programação e da interatividade.

Etapa 5 — DOM e Eventos

Manipulação dos elementos HTML e tratamento das ações do usuário.

Etapa 6 — Chatbot

Desenvolvimento de uma interface conversacional utilizando JavaScript.

Etapa 7 — APIs

Estudo e implementação da comunicação entre aplicações por meio de APIs.

Etapa 8 — Inteligência Artificial

Integração do chatbot com modelos de IA para geração de respostas.

Etapa 9 — Segurança

Aplicação de boas práticas para proteção dos dados e credenciais.

Etapa 10 — Deploy

Publicação da aplicação em um ambiente de produção.

🧠 22. Chatbot baseado em regras x Chatbot com IA

A implementação inicial do chatbot utiliza regras:

Mensagem
   ↓
JavaScript
   ↓
Palavras-chave
   ↓
if / else
   ↓
Resposta predefinida

Uma evolução utilizando Inteligência Artificial seria:

Mensagem
   ↓
JavaScript
   ↓
API
   ↓
Modelo de IA
   ↓
Resposta gerada
   ↓
Chatbot

Essa evolução é importante para compreender a diferença entre um sistema conversacional baseado em regras e uma aplicação que utiliza um modelo de Inteligência Artificial.

📚 23. Conteúdos estudados

HTML

HTML5;

Estrutura básica;

Tags semânticas;

header;

nav;

main;

section;

footer;

Links;

Formulários;

Inputs;

Textarea;

Botões;

Classes;

IDs.

CSS

Seletores;

Classes;

IDs;

Variáveis CSS;

Cores;

Tipografia;

Margem;

Padding;

Box Model;

box-sizing;

Bordas;

border-radius;

Backgrounds;

Sombras;

:hover;

Transições;

Transformações.

Flexbox

display: flex;

flex-direction;

justify-content;

align-items;

gap;

flex-wrap;

Flex container;

Flex items;

Eixo principal;

Eixo transversal.

JavaScript

Variáveis;

Funções;

Condições;

if;

else if;

else;

Strings;

toLowerCase();

trim();

split();

includes();

DOM;

getElementById();

innerHTML;

classList;

Eventos;

addEventListener();

setTimeout();

Formulários;

Validação;

Interatividade.

Desenvolvimento Web para IA

Front-end;

Back-end;

APIs;

HTTP;

JSON;

Integração com serviços;

Modelos de IA;

Chatbots;

Segurança;

Variáveis de ambiente;

Deploy.

🛠️ 24. Tecnologias utilizadas

HTML5

CSS3

JavaScript

Flexbox

DOM

HTTP

JSON

APIs REST

Git

GitHub

Inteligência Artificial

📂 25. Estrutura do projeto

martinsvet/
│
├── index.html
├── style.css
├── script.js
├── martinsvet.webp
├── LICENSE
└── README.md

index.html

Responsável pela estrutura e pelo conteúdo da aplicação.

style.css

Responsável pela estilização, identidade visual e organização do layout.

script.js

Responsável pela lógica de programação e pelas funcionalidades interativas.

martinsvet.webp

Imagem utilizada na seção principal da aplicação.

README.md

Documentação do projeto.

▶️ 26. Como executar

Execução local

Não é necessário instalar dependências para executar a versão Front-end.

Basta abrir:

index.html

em um navegador.

Também é possível utilizar o Live Server no Visual Studio Code.

Execução com Back-end e IA

Caso a aplicação seja posteriormente integrada a um Back-end e a uma API de Inteligência Artificial, será necessário configurar:

Servidor;

Dependências;

Variáveis de ambiente;

Chaves de API;

Endpoints;

Configurações de segurança.

As credenciais de serviços externos não devem ser inseridas diretamente no código-fonte ou publicadas no GitHub.

🚀 27. Possíveis evoluções

O projeto pode continuar evoluindo com:

🤖 Integração com modelos generativos;

🔌 Consumo de APIs de Inteligência Artificial;

🖥️ Desenvolvimento de um Back-end;

💾 Banco de dados;

💬 Histórico de conversas;

👤 Autenticação de usuários;

🩺 Agendamento real de consultas;

📧 Envio real de mensagens;

🔐 Autenticação e autorização;

🛡️ Melhorias de segurança;

📊 Monitoramento;

☁️ Deploy em ambiente de produção.

🎓 28. Projeto Final da disciplina

O MartinsVet representa o projeto de encerramento da disciplina Desenvolvimento Web para IA.

A proposta é demonstrar como os conhecimentos de desenvolvimento web podem ser utilizados como base para a construção de aplicações que incorporam Inteligência Artificial.

O projeto reúne:

HTML
 ↓
CSS
 ↓
FLEXBOX
 ↓
JAVASCRIPT
 ↓
DOM
 ↓
EVENTOS
 ↓
FORMULÁRIOS
 ↓
CHATBOT
 ↓
APIs
 ↓
INTELIGÊNCIA ARTIFICIAL
 ↓
SEGURANÇA
 ↓
DEPLOY

Assim, o estudante compreende que desenvolver uma aplicação Web para IA não significa apenas utilizar um modelo de Inteligência Artificial.

É necessário construir toda a estrutura que permite ao usuário interagir com o sistema, enviar dados, receber respostas, consumir serviços, proteger informações e disponibilizar a aplicação em produção.

👨‍🏫 29. Finalidade acadêmica

Projeto desenvolvido para fins educacionais na disciplina:

Desenvolvimento Web para IA

O projeto tem como finalidade consolidar os conhecimentos de desenvolvimento web e demonstrar sua aplicação na construção de sistemas interativos relacionados à Inteligência Artificial.

📄 30. Licença

Este projeto está disponível sob a licença definida no arquivo LICENSE.

🐾 MartinsVet

Pet Shop & Clínica Veterinária

Cuidando da saúde e do bem-estar do seu melhor amigo. 🐶🐱
