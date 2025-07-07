import Requisicoes from "../endpointsRequisicao/endpoints.js";
import endpoints from "../endpointsRequisicao/endpoints.js";
const getDados = new Requisicoes();
export let dados;
class DadosUsuario {
  constructor(dadosElement) {
    this.dadosElement = document.querySelectorAll(dadosElement);
  }

  async DadosGet() {
    const token = window.localStorage.getItem("token");
    const response = await getDados.GetProdutos("usuario", token);
    this.dadosElement.forEach((item) => {
      item.value = response[item.dataset.dados];
    });
  }

  Init() {
    if (localStorage.getItem("token")) this.DadosGet();
  }
}

export default DadosUsuario;
