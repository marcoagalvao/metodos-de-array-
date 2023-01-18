const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const tipoBotao = elementoBtn.value
    let livrosFiltrados = tipoBotao == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(tipoBotao)
    exibirLivrosNaTela(livrosFiltrados)
    if (tipoBotao == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(tipoBotao) {
    return livros.filter(livro => livro.categoria == tipoBotao)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
     </div>
    `
}