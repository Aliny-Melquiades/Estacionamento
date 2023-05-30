let valorTotalArrecadado = 0;
let quantidadeIsentos = 0;
let quantidadeMotocicletas = 0;
let quantidadeCarrosPasseio = 0;
let quantidadeCamionetes = 0;

function calcularCobranca(tempoPermanencia) {
  if (tempoPermanencia <= 15) {
    return 0.0; // Cliente isento de pagamento
  } else if (tempoPermanencia <= 60) {
    return 1.5; // Cobrança de R$ 1,50
  } else {
    // Cobrança com adicional de R$ 1,00 por hora
    const horasExcedentes = Math.ceil((tempoPermanencia - 60) / 60);
    return 1.5 + horasExcedentes * 1.0;
  }
}

function registrarEntradaVeiculo(tipoVeiculo) {
  switch (tipoVeiculo) {
    case "motocicleta":
      quantidadeMotocicletas++;
      break;
    case "carro de passeio":
      quantidadeCarrosPasseio++;
      break;
    case "camionete":
      quantidadeCamionetes++;
      break;
  }
}

function registrarSaidaVeiculo(tipoVeiculo, tempoPermanencia) {
  switch (tipoVeiculo) {
    case "motocicleta":
      quantidadeMotocicletas--;
      break;
    case "carro de passeio":
      quantidadeCarrosPasseio--;
      break;
    case "camionete":
      quantidadeCamionetes--;
      break;
  }

  if (tempoPermanencia <= 15) {
    quantidadeIsentos++; // Registro de isentos
  } else {
    const valorCobranca = calcularCobranca(tempoPermanencia);
    valorTotalArrecadado += valorCobranca;
  }
}

// Exibir resultados
console.log("Quantidade de motocicletas estacionadas:", quantidadeMotocicletas);
console.log(
  "Quantidade de carros de passeio estacionados:",
  quantidadeCarrosPasseio
);
console.log("Quantidade de camionetes estacionadas:", quantidadeCamionetes);
console.log("Valor total arrecadado:", valorTotalArrecadado);
console.log("Quantidade de clientes isentos:", quantidadeIsentos);
