const botaoConverter = document.querySelector(".converter");
const qualMoeda = document.querySelector(".select-moeda");

function converterValor() {
    const QuantidadeMoedaParaConverter =
        document.querySelector(
            ".input-valor"
        ).value; /* Pegou apenas o valor do input */

    const valorMoedaParaConverter = document.querySelector(
        ".valor-da-moeda-converter"
    ); /* Valor em real por exemplo */
    const valorMoedaConvertido = document.querySelector(
        ".valor-da-moeda-convertido"
    ); /* Valor convertido para Dólar por exemplo */

    const valorDolar = 5;
    const valorEuro = 6;
    const valorLibra = 7;

    /*Para deixar o valor certo e com números inteiros, tudo segundo a documentação do INTL : */

    if (qualMoeda.value == "dolar") { /* Se o select estiver em dolar */
        valorMoedaConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(QuantidadeMoedaParaConverter / valorDolar);
    }

    if (qualMoeda.value == "euro") { /* Se o select estiver em euro */
        valorMoedaConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(QuantidadeMoedaParaConverter / valorEuro);
    }

    if (qualMoeda.value == "libra") { /* Se o select estiver em libra */
        valorMoedaConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(QuantidadeMoedaParaConverter / valorLibra);
    }

    valorMoedaParaConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(QuantidadeMoedaParaConverter);
}

function mudancaDeMoeda() {
    const nomeDaMoeda = document.getElementById("nome-da-moeda");
    const imagemDaMoeda = document.querySelector(".moeda-img");

    if (qualMoeda.value == "dolar") {
        nomeDaMoeda.innerHTML = "Dólar Americano";
        imagemDaMoeda.src = "./assets/eua.png";
    }
    if (qualMoeda.value == "euro") {
        nomeDaMoeda.innerHTML = "Euro";
        imagemDaMoeda.src = "./assets/euro.png";
    }
    if (qualMoeda.value == "libra") {
        nomeDaMoeda.innerHTML = "Libra";
        imagemDaMoeda.src = "./assets/libra.png";
    }

    converterValor(); /* Para trocar o valor quando tiver a mudança na escolha da moeda */

}


qualMoeda.addEventListener("change", mudancaDeMoeda);
botaoConverter.addEventListener("click", converterValor);
