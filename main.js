function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz olá");
    }
}