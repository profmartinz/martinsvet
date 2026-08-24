// pegar elementos
let botao = document.getElementById("chat-toggle");
let chat = document.getElementById("chat");
let fechar = document.getElementById("fechar");
let enviarBtn = document.getElementById("enviar");
let input = document.getElementById("input");
let chatBox = document.getElementById("chat-box");

// formulário de contato
let formulario = document.getElementById("form-contato");

// abrir/fechar chat
botao.addEventListener("click", function () {
    chat.classList.toggle("hidden");
});

// fechar pelo X
fechar.addEventListener("click", function () {
    chat.classList.add("hidden");
});

// botão enviar
enviarBtn.addEventListener("click", enviar);

// enviar com ENTER
input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        enviar();
    }
});

// formulário de contato
formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let assunto = document.getElementById("assunto");
    let mensagem = document.getElementById("mensagem");

    if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        assunto.value.trim() === "" ||
        mensagem.value.trim() === ""
    ) {
        alert("Preencha todos os campos.");
        return;
    }

    alert("Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.");

    formulario.reset();

});

// função principal
function enviar() {

    let texto = input.value.trim();

    if (texto === "") return;

    // mensagem do usuário
    chatBox.innerHTML += "<div class='usuario'>" + texto + "</div>";

    input.value = "";

    // mensagem "digitando..."
    chatBox.innerHTML += "<div id='digitando' class='bot'>Digitando...</div>";

    chatBox.scrollTop = chatBox.scrollHeight;

    // delay na resposta
    setTimeout(function () {

        // remover "digitando..."
        let digitando = document.getElementById("digitando");

        if (digitando) {
            digitando.remove();
        }

        let resposta = responder(texto);

        chatBox.innerHTML += "<div class='bot'>" + resposta + "</div>";

        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1000);

}

// lógica simples do chatbot
function responder(texto) {

    texto = texto.toLowerCase();

    // separa as palavras da frase
    let palavras = texto.split(" ");

    if (palavras.includes("oi") || palavras.includes("olá")) {
        return "Olá! Seja bem-vindo à MartinsVet. Como podemos ajudar você e seu pet?";
    }
    else if (
        palavras.includes("serviço") ||
        palavras.includes("serviços")
    ) {
        return "Oferecemos consultas veterinárias, banho e tosa e uma loja completa para seu pet.";
    }
    else if (
        palavras.includes("preço") ||
        palavras.includes("valor")
    ) {
        return "Os valores variam conforme o serviço. Entre em contato pelo formulário para receber um orçamento.";
    }
    else if (
        palavras.includes("contato") ||
        palavras.includes("telefone")
    ) {
        return "Preencha o formulário da página que nossa equipe retornará o mais breve possível.";
    }
    else if (
        palavras.includes("banho") ||
        palavras.includes("tosa")
    ) {
        return "Realizamos banho e tosa com segurança, conforto e muito carinho para seu pet.";
    }
    else if (
        palavras.includes("consulta") ||
        palavras.includes("veterinário") ||
        palavras.includes("veterinaria")
    ) {
        return "Nossa clínica veterinária realiza consultas, avaliações e acompanhamento da saúde do seu pet.";
    }
    else if (
        palavras.includes("ração") ||
        palavras.includes("racao") ||
        palavras.includes("produto")
    ) {
        return "Temos rações, medicamentos, brinquedos, acessórios e diversos produtos para cães e gatos.";
    }
    else {
        return "Desculpe, não entendi sua mensagem. Pode reformular sua pergunta? 🐶🐱";
    }

}