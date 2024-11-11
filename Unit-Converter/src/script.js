function convert() {
  let valor = document.getElementById("userInput").value;
  let opcao = document.getElementById("unit").value;
  let resultado = document.getElementById("resultElement");

  if (opcao === "milesToKm") {
    let convertido = valor * 1.609;
    resultado.innerHTML = valor + " milhas são " + convertido + " KMs";
  } else if (opcao === "kmToMiles") {
    convertido = valor / 1.609;
    resultado.innerHTML = valor + " KMs são " + convertido + " milhas";
  }
}
