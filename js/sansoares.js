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
        const btnHamburger = document.getElementById("btn-hamburger");
        const menuLinks = document.getElementById("menu-links");
        const linksWhats = document.querySelectorAll(".link-whats");

        // 1. Abre e fecha o menu hambúrguer ao clicar nas 3 barrinhas
        if (btnHamburger && menuLinks) {
            btnHamburger.addEventListener("click", function () {
                menuLinks.classList.toggle("active");
            });
        }

        // 2. Faz todos os 3 links do menu dispararem a função do WhatsApp
        linksWhats.forEach(function (link) {
            link.addEventListener("click", function (evento) {
                evento.preventDefault(); // Impede a página de pular para o topo
                const numeroTelefone = "5511931321975";
                const mensagemTexto = encodeURIComponent("Olá, gostaria de solicitar uma consultoria técnica sobre as soluções SaaS da San Soares Developers.");
                window.open("https://wa.me" + numeroTelefone + "?text=" + mensagemTexto, "_blank");
            });
        });
    });
    
});
