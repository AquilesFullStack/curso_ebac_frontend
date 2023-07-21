function Veiculo(fabricante,modelo){
    this.fabricante = fabricante;
    this.modelo= modelo;

}

function Carro(fabricante, modelo,serial){
    this.serial = serial
    Veiculo.call(this,fabricante,modelo)

}

function Bike (fabricante, modelo, tipo){
    this.tipo = tipo;
    Veiculo.call(this,fabricante, modelo)
}

function Moto (fabricante,modelo, chassi){
    this.chassi = chassi;
    Veiculo.call(this,fabricante, modelo)
}

const carro1 = new Carro('Volkswagen','gol bolinha', 43543245);
const bike1 = new Bike('k9','Aro29', 'adulto');
const moto1 = new Moto ('honda', 'xj1000', 12312);

console.log(carro1);
console.log(bike1);
console.log(moto1);