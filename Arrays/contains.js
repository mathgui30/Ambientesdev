function verificaElemento(array, elemento) {
    return array.includes(elemento);
  }


  const meuArray = [10,15,20];
const meuElemento = 15;

if (verificaElemento(meuArray, meuElemento)) {
  console.log("O elemento " + meuElemento + " está presente no array");
} else {
  console.log("O elemento " + meuElemento + " não está presente no array");
}

