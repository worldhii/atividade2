namespace Produto{

    export class Produto{
        private _nome:string;
        private _preco:number;
        private _vlimpos: number;
 
        get nome(){
            return this._nome;
        }
 
        set nome(nome:string){
            this._nome = nome;
        }
 
        get preco(){
            return this._preco;
        }
 
        set preco(preco:number){
            this._preco = preco;
            
        }


        get vlimpos(){
            return this._vlimpos;
        }
 
        set vlimpos(vlimpos:number){
            this._vlimpos = vlimpos;
        }
 
        public calcularimposto(vlimpos: number): number{
            return (this._vlimpos * this._preco) / 100;
          
        }

       /* public calcularImposto(vlimpos: number): number{
            return (this._vlimpos + this._vlimpos);
          
        } */
    }
 
}