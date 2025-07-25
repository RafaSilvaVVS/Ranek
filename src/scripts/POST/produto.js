import Requisicoes from '../endpointsRequisicao/endpoints.js';
const postProduto = new Requisicoes();

class Postar {
  constructor(btnPostar, dados) {
    this.btnPostar = document.querySelector(btnPostar);
    this.dados = document.querySelectorAll(dados);
  }

  async Post() {
    const produto = {
      nome: this.dados[0].value,
      preco: this.dados[1].value,
      foto: this.dados[2].value,
      descricao: this.dados[3].value,
    };

    const response = await postProduto.Post('produto', produto);
  }

  init() {
    this.btnPostar?.addEventListener('click', (event) => {
      event.preventDefault();
      this.Post();
    });
  }
}

export default Postar;
