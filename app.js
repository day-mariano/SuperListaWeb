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

  elementoLista.innerHTML += `<li id="liProduto${novoProduto}"> 
    <input class="check" type="checkbox" id="status">
    <input type="text" value="${novoProduto}" id="${novoProduto}">
    <button id="buttonApagar" onclick="apagarProduto(${novoProduto}, liProduto${novoProduto})"> Apagar </button>
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
