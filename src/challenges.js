// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let fraseDividida = [];
  fraseDividida = string.split(" ");
  return fraseDividida;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let ultimoPrimeiro = arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0];
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3;
  let totalDePontos = wins + ties;
  return totalDePontos;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
