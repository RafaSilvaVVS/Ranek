import Requisicoes from "../endpointsRequisicao/endpoints.js";
import HTMLtransacao from "../HtmlTransacoes/Htmltransacoes.js";

const getVendas = new Requisicoes();

class Vendas {
  constructor() {}

  async Get() {
    const response = await getVendas.GetProdutos("transacao?tipo=vendedor_id");
    const arrayVendas = response.map(({ comprador_id, produto, endereco }) => {
      return {
        comprador_id,
        dados: {
          nome: produto.nome,
          preco: produto.preco,
          img: produto.fotos ? produto.fotos[0].src : false,
        },
        endereco: {
          cep: endereco.cep,
          bairro: endereco.bairro,
          numero: endereco.numero,
          rua: endereco.rua,
          estado: endereco.estado,
          cidade: endereco.cidade,
        },
      };
    });
    this.HTMLVendas(arrayVendas);
  }

  HTMLVendas(vendasDados) {
    vendasDados.forEach(({ comprador_id, dados, endereco }) => {
      const divElemento = document.createElement("div");
      divElemento.setAttribute("data-elemento",'')
      const elementoClick = document.querySelectorAll('[data-elemento]')
      
      divElemento.innerHTML = ``;
      const divEndereco2 = document.createElement("div");
      const divEndereco = document.createElement("div");
      const html = new HTMLtransacao("[data-vendas]");
      if (dados.img) {
        html.criarImagem(dados.img);
      } else {
      }
      divElemento.append(html.criarElementos("p", dados.preco));
      divElemento.append(html.criarElementos("h3", dados.nome));
      divElemento.append(html.criarElementos("span", "comprador", "#e80"));
      divElemento.append(html.criarElementos("span", comprador_id));
      html.setar(divElemento);
      divEndereco.append(html.criarElementos("h3", "Endereco", "text-right"));
      divEndereco2.append(html.criarElementos("p", "cep : " + endereco.cep));
      divEndereco2.append(
        html.criarElementos("p", "numero: " + endereco.numero)
      );
      divEndereco2.append(html.criarElementos("p", "rua : " + endereco.rua));
      divEndereco2.append(
        html.criarElementos("p", "numero : " + endereco.numero)
      );
      divEndereco2.append(
        html.criarElementos("p", "bairro : " + endereco.bairro)
      );
      divEndereco2.append(
        html.criarElementos("p", "estado : " + endereco.estado)
      );
      divEndereco2.append(
        html.criarElementos("p", "cidade : " + endereco.cidade)
      );
      html.setar(divEndereco);
      html.setar(divEndereco2);
    });
  }

  init() {
    this.Get();
  }
}

export default Vendas;
