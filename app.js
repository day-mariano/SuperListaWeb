const listaCompras = [];
document
  .getElementById("formAdicionar")
  .addEventListener("submit", adicionarProduto);

function adicionarProduto(event) {
  event.preventDefault();
  const elementoLista = document.getElementById("lista"); //ul
  const elementoProduto = document.getElementById("novoProduto"); //input

  const novoProduto = {
    nome: elementoProduto.value,
    status: "pendente",
  };

  listaCompras.push(novoProduto);

  elementoLista.innerHTML += `<li> 
    ${novoProduto.nome}
  </li>`;
  elementoProduto.value = "";
}
