let btnOdernarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livrosComDesconto.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}