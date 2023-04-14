function numeroMaximo(array) {
    if (array.length === 0) {
      return null;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }

  
  const numeros = [1, 2, 3];
const maximo = numeroMaximo(numeros);
console.log(maximo); 
