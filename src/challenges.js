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
  let ultimoPrimeiro = arrayDeStrings[arrayDeStrings.length - 1] + ', ' + arrayDeStrings[0];
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  let totalDePontos = wins + ties;
  return totalDePontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorRepete = 0;
  let maior = Math.max(...arrayDeNumeros);
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if (arrayDeNumeros[index] === maior) {
      maiorRepete += 1;
    }
  }
  return maiorRepete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaMouseCat1 = 0;
  if (cat1 > mouse) {
    distanciaMouseCat1 = cat1 - mouse;
  } else {
    distanciaMouseCat1 = mouse - cat1;
  }
  let distanciaMouseCat2 = 0;
  if (cat2 > mouse) {
    distanciaMouseCat2 = cat2 - mouse;
  } else {
    distanciaMouseCat2 = mouse - cat2;
  }
  if (distanciaMouseCat1 < distanciaMouseCat2) {
    return 'cat1';
  } if (distanciaMouseCat1 > distanciaMouseCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
