const botoes = document.querySelectorAll("button");
const span = document.getElementById("vc");
const span2 = document.getElementById("cpu");

let contadorUsuario = 0;
let contadorPC = 0;
let partidas = 0;

const respostaPc = function getComputerChoice() {
  const ppt = ["Pedra", "Papel", "Tesoura"];
  const pptNumber = Math.floor(Math.random(ppt) * 3);
  return ppt[pptNumber].toUpperCase();
};

const atualizaPlacar = function () {
  span.innerHTML = contadorUsuario;
  span2.innerHTML = contadorPC;
};

const reiniciarPlacar = function () {
  contadorUsuario = 0;
  contadorPC = 0;
  partidas = 0;
  atualizaPlacar();
};

botoes.forEach((item) => {
  item.addEventListener("click", (e) => {
    const usuario = e.target.innerHTML.toUpperCase();
    const pc = respostaPc();
    if (usuario === pc) {
      contadorUsuario++;
      contadorPC++;
      if (contadorUsuario === 1) {
        atualizaPlacar();
      }
    } else {
      if (usuario === "PEDRA" && pc === "TESOURA") {
        contadorUsuario++;
      } else if (usuario === "PAPEL" && pc === "PEDRA") {
        contadorUsuario++;
      } else if (usuario === "TESOURA" && pc === "PAPEL") {
        contadorUsuario++;
      } else {
        contadorPC++;
      }
      partidas++;
      if (contadorUsuario === 5 || contadorPC === 5) {
        reiniciarPlacar();
      } else {
        atualizaPlacar();
      }
    }
  });
});
