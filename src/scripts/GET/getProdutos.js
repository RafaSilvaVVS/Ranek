import Requisicoes from "../endpointsRequisicao/endpoints.js";
import htmlProdutos from "../HTMLProdutos/HTMLProdutos.js";
const getProdutos = new Requisicoes();

const main = document.querySelector("[data-main]");
let arrayProdutos;
export default async function fetchProduto(array) {
  if (window.location.href === "http://127.0.0.1:5500/ranek/index.html") {
    arrayProdutos = await getProdutos.GetProdutos("produto");
    htmlProdutos(arrayProdutos);
    console.log(arrayProdutos);

    if (
      window.location.href !== "http://127.0.0.1:5500/ranek/pages/produto.html"
    ) {
      window.localStorage.setItem("produto", "");
    }
  }
}

async function init() {
  await fetchProduto();
}

init();
