const salario = 3300.0;

//Anterior
// if (salario < 2600.0)
//     console.log("A sua aliquota é de 15%");
// console.log("Você pode deduzir até R$ 350");

// if (salario < 3750.0)
//     console.log("A sua aliquota é de 22,5%");
// console.log("Você pode deduzir até R$ 636");

if (salario < 2600.0) {
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");
} else if (salario < 3750.0) {
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
}