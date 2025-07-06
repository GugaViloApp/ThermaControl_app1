
function calcularTHI() {
  const t = parseFloat(document.getElementById('temp').value);
  const ur = parseFloat(document.getElementById('ur').value);

  if (isNaN(t) || isNaN(ur)) {
    alert("Preencha todos os campos");
    return;
  }

  const thi = Math.round(t + 0.36 * t + 41.2 * (ur / 100));
  document.getElementById('valTemp').textContent = t.toFixed(1);
  document.getElementById('valUR').textContent = ur.toFixed(0);
  document.getElementById('valITU').textContent = thi;

  desenharVelocimetro(thi);
}

function desenharVelocimetro(valor) {
  const canvas = document.getElementById("gauge");
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height;
  const radius = 90;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cores = [
    { lim: 73, cor: "#99C24D" },
    { lim: 77, cor: "#F3C969" },
    { lim: 81, cor: "#F08A24" },
    { lim: 85, cor: "#ED553B" },
    { lim: 100, cor: "#A4123F" }
  ];

  let startAngle = Math.PI;
  let endAngle;
  for (let i = 0; i < cores.length; i++) {
    endAngle = startAngle + Math.PI / cores.length;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 20;
    ctx.strokeStyle = cores[i].cor;
    ctx.stroke();
    startAngle = endAngle;
  }

  const angle = Math.PI + (valor - 70) * (Math.PI / 30);
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.stroke();
}
