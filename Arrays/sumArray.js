var array = [1,2,3,4,5,6];

sum = 0;

array.sumArray = function() {
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        
    }
    return sum;
}
console.log (array.sumArray());