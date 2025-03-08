var Produto;
(function (Produto) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Object.defineProperty(Pessoa.prototype, "nome", {
            get: function () {
                return this._nome;
            },
            set: function (nome) {
                this._nome = nome;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Pessoa.prototype, "preco", {
            get: function () {
                return this._preco;
            },
            set: function (preco) {
                this._preco = preco;
            },
            enumerable: false,
            configurable: true
        });
        Pessoa.prototype.calcularimposto = function (vlimposto) {
            return vlimposto + this._preco;
        };
        return Pessoa;
    }());
    Produto.Pessoa = Pessoa;
})(Produto || (Produto = {}));
