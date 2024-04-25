let numeroTabuada = prompt("Qual tabuada você quer ver?");

if (!isNaN(numeroTabuada)) {
  numeroTabuada = parseInt(numeroTabuada);

  for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
  }
} else {
  alert("Por favor, digite um número válido!");
}
