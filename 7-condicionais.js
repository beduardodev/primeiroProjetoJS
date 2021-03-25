console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    listaDeDestinos.splice(2, 1);
    console.log('Boa Viagem!');
} else {
    console.log('Comprador não é maior idade!');
}

console.log("\nEmbarque:");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!");
} else {
    console.log("Voce nao pode embarcar!");
}

console.log(listaDeDestinos);