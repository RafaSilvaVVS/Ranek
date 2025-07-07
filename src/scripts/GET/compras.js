import Requisicoes from "../endpointsRequisicao/endpoints.js";
const Get = new Requisicoes();
import HTMLtransacao from "../HtmlTransacoes/Htmltransacoes.js";
import redirecionar from "../redirecionar/redirecionar.js";

class Compras {
  constructor() {}

  async GetCompras() {
    const response = await Get.GetProdutos("transacao?tipo=comprador_id");
    const mapArray = response.map(({ vendedor_id, produto }) => {
      return {
        vendedor_id,
        id: produto.id,
        dados: {
          nome: produto.nome,
          preco: produto.preco,
          img: produto.fotos[0].src,
        },
      };
    });

    console.log(response);
    mapArray.forEach((item) => {
      const divElemento = document.createElement("div");
      const html = new HTMLtransacao("[data-compras]");
      html.criarImagem(item.dados.img);
      divElemento.append(html.criarElementos("span", item.dados.preco));
      divElemento.append(html.criarElementos("h3", item.dados.nome));
      divElemento.append(html.criarElementos("span", "vendedor:", "#e80"));
      divElemento.append(html.criarElementos("span", item.vendedor_id));
      const containerPai = html.setar(divElemento);
      const clickProduto = containerPai.querySelectorAll("img");
      const paginaProduto = new redirecionar();
      clickProduto.forEach((item, index) => {
        clickProduto[index].addEventListener("click", () => {
          window.localStorage.setItem("produto", mapArray[index].id);
          paginaProduto.Redirecionar("/ranek/pages/produto.html");
        });
      });
    });
  }

  init() {
    if (window.localStorage.getItem("token")) this.GetCompras();
  }
}

export default Compras;
