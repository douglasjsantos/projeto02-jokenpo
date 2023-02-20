function getComputerChoice() {
  const ppt = ["Pedra", "Papel", "Tesoura"];
  const pptNumber = Math.floor(Math.random(ppt) * 3);
  return ppt[pptNumber].toUpperCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "PEDRA" && computerSelection == "TESOURA") {
    return `Você ganhou! Pedra ganha de Tesoura`;
  } else if (playerSelection == "PEDRA" && computerSelection == "PAPEL") {
    return `Você perdeu! Pedra perde de Tesoura`;
  }
  if (playerSelection == "TESOURA" && computerSelection == "PAPEL") {
    return `Você ganhou! Tesoura ganha de Papel`;
  } else if (playerSelection == "TESOURA" && computerSelection == "PEDRA") {
    return `Você perdeu! Tesoura perde para Pedra`;
  }
  if (playerSelection == "PAPEL" && computerSelection == "PEDRA") {
    return `Você ganhou! Papel ganha de Pedra`;
  } else if (playerSelection == "PAPEL" && computerSelection == "Tesoura") {
    return `Você perdeu! Papel perde para Tesoura`;
  }
  if (playerSelection == computerSelection) {
    return `Empate`;
  }
}

let playerSelection;

while (
  playerSelection !== "TESOURA" &&
  playerSelection !== "PEDRA" &&
  playerSelection !== "PAPEL"
) {
  playerSelection = prompt("Digite: Pedra, Papel ou Tesoura")
    .toUpperCase()
    .trim();
}

alert("Boa sorte!");

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
