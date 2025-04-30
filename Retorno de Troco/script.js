let Pago = document.querySelector("#Pago");
let Preco = document.querySelector("#Preco");
let btTroco = document.querySelector("#btTroco");
let Resultado = document.querySelector("#Resultado");

function Troco() {
    let valorPago = parseFloat(Pago.value.replace(",", "."));
    let precoProduto = parseFloat(Preco.value.replace(",", "."));
    Resultado.textContent = (valorPago - precoProduto);
    Resultado.textContent = "Troco: R$: " + Resultado.textContent
}

btTroco.onclick = function() {
    Troco();
}