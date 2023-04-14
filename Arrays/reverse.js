var array = ["a","b","c","d","e"];

array.arrayreverse = function () {
    var esquerda = 0;
    var direita = this.length-1;

    while (esquerda < direita) {
        var atual = this[esquerda];
        this[esquerda] = this[direita];
        this[direita] = atual;
        
        esquerda++;
        direita--;
    }
    return this;
}

console.log(array.arrayreverse());