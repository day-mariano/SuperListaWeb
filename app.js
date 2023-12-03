const listaCompras = [];
const elementoLista = document.getElementById("lista")

document
  .getElementById("formAdicionar")
  .addEventListener("submit", adicionarProduto);

function adicionarProduto(event) {
  event.preventDefault();

  const elementoProduto = document.getElementById("inputAdicionar"); //input


  const novoProduto = elementoProduto.value;

  listaCompras.push(novoProduto);

  elementoLista.innerHTML += `<li id="liProduto${novoProduto}" class="liProdutos"> 
    <input class="check" type="checkbox" id="status">
    <input type="text" value="${novoProduto}" id="${novoProduto}" class="inputProdutos">
    <button id="buttonApagar" onclick="apagarProduto(${novoProduto}, liProduto${novoProduto})"> x </button>
  </li>`;
  elementoProduto.value = "";
}

function apagarProduto(novoProduto) {
  let produtoApagado = novoProduto.value
  listaCompras.splice(produtoApagado, 1)

  let nomeDoLi = "liProduto" + novoProduto.value
  let elementoLiAtual = document.getElementById(nomeDoLi)
   
  elementoLista.removeChild(elementoLiAtual)
}
