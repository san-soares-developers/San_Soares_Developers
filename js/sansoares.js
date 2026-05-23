// Aguarda o navegador carregar a página por completo
document.addEventListener("DOMContentLoaded", function () {

    // Procura o botão no HTML pela classe dele
    const botaoWhats = document.querySelector(".btn-primary");

    // Se o botão existir na tela, ativa o evento de clique
    if (botaoWhats) {
        botaoWhats.addEventListener("click", function () {
            const numeroTelefone = "5511946666328";
            // const numeroTelefone = "+55111931321975";
            const mensagemTexto = encodeURIComponent("Olá, gostaria de solicitar uma consultoria técnica sobre as soluções SaaS da San Soares Developers.");

            // Abre o link oficial Click-to-Chat do WhatsApp em uma nova aba
            window.open("https://wa.me/" + numeroTelefone + "?text=" + mensagemTexto, "_blank");
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        console.log("--> SISTEMA DE CLIQUE ATIVADO COM SUCESSO!");

        const botaoHamburger = document.getElementById("btn-hamburger");
        const menuGaveta = document.getElementById("menu-links");

        if (botaoHamburger && menuGaveta) {
            botaoHamburger.addEventListener("click", function () {
                console.log("--> BOTAO CLICADO! ALTERNANDO CLASSES...");

                // Ativa/Desativa o X Vermelho no botão
                botaoHamburger.classList.toggle("active");

                // Ativa/Desativa a descida da gaveta de links
                menuGaveta.classList.toggle("active");
            });
        } else {
            console.log("--> ERRO: Elementos não encontrados na tela. Verifique os IDs do HTML.");
        }
    });
    
    
});
