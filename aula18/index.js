/**
 * JSON
 * JSON significa Javascript object Notation 
 * Basicamente ele serve para converter obejeto em texto e vice-versa
 * Ele é usado para transmitir dados entre sistemas 
 * Temos dois métodos:
 * JSON.parse() -> converte em objetos
 * JSON.stringfy() -> converte obejetos em texto
 */

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor : ["1,6", "1.4", "1.0"],
    ano: 2001
};

//convertendo para texto
//se eu quiser mostrar o objeto como um todo tem que converter para texto
let carro_texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = carro_texto;

//convertendo para objeto
//se eu quiser mostrar partes do objeto preciso converter ele para objeto
let carro_obj = JSON.parse(texto);
console.log(carro_obj.marca);

