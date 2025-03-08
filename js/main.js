"use strict";
var Produto;
(function (Produto) {
    const calc = document.getElementById("calc");
    const campoNome = document.getElementById("campoNome");
    const campoPreco = document.getElementById("campoPreco");
    const campoImposto = document.getElementById("campoImposto");
    const pd = document.getElementById("pd");
    const pi = document.getElementById("pi");
    const vi = document.getElementById("vi");
    calc.addEventListener("click", () => {
        let p = new Produto.Produto();
        p.nome = campoNome.value;
        p.precoProd = parseInt(campoPreco.value);
        p._vlimpos = parseInt(campoImposto.value);
        p._vlfinal = parseInt(campoImposto.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preço").textContent = p.precoProd.toString();
        document.getElementById("valorImpos").textContent = p._vlimpos.toString();
        document.getElementById("valorFinal").textContent = p._vlfinal.toString();
    });
})(Produto || (Produto = {}));
