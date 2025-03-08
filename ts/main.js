var Produto;
(function (Produto) {
    var calc = document.getElementById("calc");
    var campoNome = document.getElementById("campoNome");
    var campoPreco = document.getElementById("campoPreco");
    var campoImposto = document.getElementById("campoImposto");
   
    calc.addEventListener("click", function () {
       
        var p = new Produto();
        p.nome = campoNome.value;
        p.precoProd = parseInt(campoPreco.value);
        p.impostProd = parseInt(campoImposto.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preço").textContent = p.precoProd.toString();
        document.getElementById("valorImpos").textContent = p.calcularimposto.toString();
        
    });
})(Produto || (Produto = {}));
