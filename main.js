const celulas = [
  "cell1b1",
  "cell2b1",
  "cell3b1",
  "cell4b1",
  "cell5b1",
  "cell6b1",
  "cell7b1",
  "cell8b1",
  "cell9b1"
]

function clicarCelula(celula, jogador = true) {
  const casa = document.getElementById(celula);

  if (casa.children.length > 0) {
    return false;
  }

  const dado = selecionaDado();
  let img = document.createElement("img");
  img.setAttribute("src", dado);
  img.setAttribute("width", "100px");

  casa.appendChild(img);
  return true;

}

function jogada(celula) {
  const validacaoJogada = clicarCelula(celula);
  if(validacaoJogada) jogadaMaquina();
}

function jogadaMaquina() {

  let casaID = Math.floor(Math.random() * 9);
  let validarJogada = clicarCelula(celulas[casaID], false)
  while(validarJogada == false){
    casaID = Math.floor(Math.random() * 9);
    validarJogada = clicarCelula(celulas[casaID], false)
  };
}

function selecionaDado() {
  let dadoRandom = Math.floor(Math.random() * 7);
  switch (dadoRandom) {
    case 1:
      return "images/dado1.png";

    case 2:
      return "images/dado2.png";

    case 3:
      return "images/dado3.png";

    case 4:
      return "images/dado4.png";

    case 5:
      return "images/dado5.png";

    case 6:
      return "images/dado6.png";

    default:
      return "images/dado6.png"

  }
}