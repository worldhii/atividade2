namespace Produto{

        const calc = document.getElementById("calc") as HTMLButtonElement;
        const campoNome = document.getElementById("campoNome") as HTMLInputElement;
        const campoPreco = document.getElementById("campoPreco") as HTMLInputElement;
        const campoImposto = document.getElementById("campoImposto") as HTMLInputElement;
        const pd = document.getElementById("pd") as HTMLTextAreaElement;
        const pi = document.getElementById("pi") as HTMLTextAreaElement;
        const vi = document.getElementById("vi") as HTMLTextAreaElement;

        calc. addEventListener("click", ()=>{
     

        let p = new Produto();
        p.nome = campoNome.value;
        p.precoProd = parseInt(campoPreco.value);
        p._vlimpos =  parseInt(campoImposto.value);
        p._vlfinal =  parseInt(campoImposto.value);
      

        document.getElementById("nome").textContent = p.nome;
        document.getElementById("preço").textContent = p.precoProd.toString();
        document.getElementById("valorImpos").textContent = p._vlimpos.toString();
        document.getElementById("valorFinal").textContent = p._vlfinal.toString();
       

    });
}