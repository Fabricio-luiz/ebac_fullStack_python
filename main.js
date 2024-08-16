function Veiculo(nome, marca, preco) {
    this.nome = nome;
    this.marca = marca;
    this.preco = preco;
}

function Carro(nome, marca, preco, numeroDeRodas, potencia) {
    Veiculo.call(this, nome, marca, preco);
    this.numeroDeRodas = numeroDeRodas;
    this.potencia = potencia;
}

function Moto(nome, marca, preco, numeroDeRodas, potencia) {
    Veiculo.call(this, nome, marca, preco);
    this.numeroDeRodas = numeroDeRodas;
    this.potencia = potencia;
}

function Patinete(nome, marca, preco, numeroDeRodas, autonomia) {
    Veiculo.call(this, nome, marca, preco);
    this.numeroDeRodas = numeroDeRodas;
    this.autonomia = autonomia;
}

const Carro1 = new Carro("Civic Touring", "Honda", "R$ 260.000", 4, "155cv");
const Moto1 = new Moto("CBR", "Honda", "R$ 80.000", 2, "649cc");
const PatineteElt = new Patinete("Striemo", "Honda", "R$9.800", 3, "30km");

console.log(Carro1);
console.log(Moto1);
console.log(PatineteElt);
