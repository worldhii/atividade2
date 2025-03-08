"use strict";
var Produto;
(function (Produto_1) {
    class Produto {
        get nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get preco() {
            return this._preco;
        }
        set preco(preco) {
            this._preco = preco;
        }
        get vlimpos() {
            return this._vlimpos;
        }
        set vlimpos(vlimpos) {
            this._vlimpos = vlimpos;
        }
        calcularimposto(vlimpos) {
            return (this._vlimpos * this._preco) / 100;
        }
    }
    Produto_1.Produto = Produto;
})(Produto || (Produto = {}));
