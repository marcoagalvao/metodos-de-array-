const elementoParaInserirLivros = document.getElementById('livros');

function exibirLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = '' // faz limpar a lista de livros mostrada toda vez que a função é chamada
    listaDeLivros.forEach(livro => {
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' //se for maior q zero retorna o primeiro, se for igual ou menor do que zero retorna o segundo (operador ternário)
    elementoParaInserirLivros.innerHTML += `
      <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        /h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}