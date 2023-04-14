let filmes = [
    { 
      titulo: "O Poderoso Chefão",
      classificacao: "4 estrelas",
      hasWatched: true
    },
    {
      titulo: "Matrix",
      classificacao: "2 estrelas",
      hasWatched: false
    },
    {
      titulo: "De Volta para o Futuro",
      classificacao: "5 estrelas",
      hasWatched: true
    },
    {
      titulo: "Jurassic Park",
      classificacao: "5.5 estrelas",
      hasWatched: true
    },
    {
      titulo: "Os Vingadores",
      classificacao: "1 estrelas",
      hasWatched: false
    }
  ];

  for (let i = 0; i < filmes.length; i++) {
    let filme = filmes[i];
    let status = filme.hasWatched ? "assistido" : "não assistido";
    console.log(`${filme.titulo} (${filme.classificacao}) - ${status}`);
  }
  

  