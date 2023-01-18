function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // faz uma copia do livro todo, mas so altera o preco
    })
    return livrosComDesconto
}