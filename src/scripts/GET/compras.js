import Requisicoes from "../endpointsRequisicao/endpoints.js";
const Get = new Requisicoes();
import HTMLtransacao from "../HtmlTransacoes/Htmltransacoes.js";

class Compras {
  constructor() {}

  async GetCompras() {
    const response = await Get.GetProdutos("transacao?tipo=comprador_id");
    const mapArray = response.map(({ vendedor_id, produto }) => {
      return {
        vendedor_id,
        dados: {
          nome: produto.nome,
          preco: produto.preco,
          img: produto.fotos[0].src,
        },
      };
    });

    mapArray.forEach((item) => {
      const divElemento = document.createElement("div");
      const html = new HTMLtransacao("[data-compras]");
      html.criarImagem(item.dados.img);
      divElemento.append(html.criarElementos("span", item.dados.preco));
      divElemento.append(html.criarElementos("h3", item.dados.nome));
      divElemento.append(html.criarElementos("span", "vendedor:", "#e80"));
      divElemento.append(html.criarElementos("span", item.vendedor_id));
      html.setar(divElemento);
    });
  }

  init() {
    if (window.localStorage.getItem("token")) this.GetCompras();
  }
}

export default Compras;
