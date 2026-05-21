

// JavaScript para o direcionamento seguro do WhatsApp
function irParaWhatsApp() {
    var telefone = "5511946666328";
    var mensagem = encodeURIComponent("Olá, gostaria de solicitar uma consultoria técnica sobre as soluções SaaS da San Soares Developers.");
    window.open("https://wa.me" + telefone + "?text=" + mensagem, "_blank");
}