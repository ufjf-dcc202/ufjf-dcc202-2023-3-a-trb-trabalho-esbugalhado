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