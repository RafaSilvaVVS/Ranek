import Requisicoes from '../endpointsRequisicao/endpoints.js';
import htmlProdutos from '../HTMLProdutos/HTMLProdutos.js';
const getProduto = new Requisicoes();
class produtoUnico {
  constructor(dataFinalizar) {
    this.dataFinalizar = document.querySelector(dataFinalizar);
  }
  async fetch() {
    const nomeProduto = window.localStorage.getItem('produto');
    if (nomeProduto !== null) {
      const response = await getProduto.GetProdutos(`produto/${nomeProduto}`);
      htmlProdutos(response);
      if (response.vendido == 'true') {
        this.dataFinalizar.disabled = true;
        this.dataFinalizar.innerText = 'produto vendido';
      } else {
        this.dataFinalizar.disabled = false;
        this.dataFinalizar.innerText = 'COMPRAR';
      }
    }
  }

  init() {
    if (
      window.location.href === 'http://127.0.0.1:5500/ranek/pages/produto.html'
    )
      this.fetch();
  }
}

export default produtoUnico;
