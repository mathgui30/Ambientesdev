function charCount(str) {
    var charFrequency = {}; 
    
    
    for (var i = 0; i < str.length; i++) {
      var char = str[i].toLowerCase(); 
      
      
      if (/^[a-zA-Z]+$/.test(char)) {
        
        if (charFrequency[char]) {
          charFrequency[char]++;
        } else {
          charFrequency[char] = 1;
        }
      }
    }
    
    return charFrequency;
  }
  

  var str = "hello";
  var resultado = charCount(str);
  console.log(resultado);
