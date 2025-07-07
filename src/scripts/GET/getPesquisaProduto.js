import Requisicoes from "../endpointsRequisicao/endpoints.js";
import endpoints from "../endpointsRequisicao/endpoints.js";
import fetchProduto from "./getProdutos.js";
const getProduto = new Requisicoes();
export default function getPesquisaProduto() {
  const pesquisinput = document.querySelector("[data-pesquisa-input]");
  let arrayProdutos = [];
  async function GetPesquisa(valorPesquisa) {
    const produtosPesquisa = await getProduto.GetProdutos(
      `produto/${valorPesquisa}`
    );
    arrayProdutos = produtosPesquisa;
    fetchProduto(produtosPesquisa);
  }
  function init() {
    pesquisinput?.addEventListener("keyup", (event) => {
      if (event.key == "Enter") {
        GetPesquisa(pesquisinput.value);
      }
    });
  }

  init();
  return arrayProdutos;
}
