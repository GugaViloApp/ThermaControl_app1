
function calcularTHI() {
  const temp = parseFloat(document.getElementById("temp").value);
  const ur = parseFloat(document.getElementById("ur").value);
  if (isNaN(temp) || isNaN(ur)) {
    alert("Por favor, insira valores válidos.");
    return;
  }
  const thi = temp - ((0.55 - 0.0055 * ur) * (temp - 14.5));
  let classificacao = "";
  if (thi <= 72) classificacao = "Sem estresse";
  else if (thi <= 77) classificacao = "Estresse leve";
  else if (thi <= 82) classificacao = "Estresse moderado";
  else classificacao = "Estresse severo";

  document.getElementById("resultado").innerHTML = `
    <p>THI: ${thi.toFixed(1)}</p>
    <p>Classificação: <strong>${classificacao}</strong></p>
  `;
}
