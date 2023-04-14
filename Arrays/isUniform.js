function saoElementosIguais(array) {
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[0]) {
        return false;
      }
    }
    return true;
  }

  const meuArray = [2, 1, 1, 1];
console.log(saoElementosIguais(meuArray)); 
