function calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) {
    return livrosFiltrados.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2) // o zero é pro valor iniciar em zero
}