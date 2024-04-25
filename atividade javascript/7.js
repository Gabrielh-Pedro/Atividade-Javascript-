function calcularCustoFinal() {
    let custoFabrica = parseFloat(document.getElementById("custoFabrica").value);
    let percDistribuidor = parseFloat(document.getElementById("percDistribuidor").value);
    let percImpostos = parseFloat(document.getElementById("percImpostos").value);
  
    let custoDistribuidor = custoFabrica * (percDistribuidor / 100);
    let custoImpostos = custoFabrica * (percImpostos / 100);
    let custoFinal = custoFabrica + custoDistribuidor + custoImpostos;
  
    document.getElementById("valorfinal").value = custoFinal.toFixed(2);
  }
  