import Requisicoes from '../endpointsRequisicao/endpoints.js';
import POSTusuario from './criarUsuario.js';
const fazerCompra = new Requisicoes();
const postUsuario = new POSTusuario(
  '[data-form]',
  '[data-criar]',
  '[data-erro]',
);

class Transacao {
  constructor(btnTransacao, dados, formulario) {
    this.btnTransacao = document.querySelector(btnTransacao);
    this.dados = document.querySelectorAll(dados);
    this.formulario = document.querySelector(formulario);
    this.FazerTransacao = this.FazerTransacao.bind(this);
  }

  pegarDadosUsuario(event) {
    postUsuario.pegarDadosForm(event);
  }

  async FazerTransacao(e) {
    e.preventDefault();
    const respo = new Requisicoes();
    const pr = await respo.GetProdutos(
      'produto/' + window.localStorage.getItem('produto'),
    );
    const endereco = {
      cep: this.dados[3].value,
      rua: this.dados[4].value,
      numero: this.dados[5].value,
      bairro: this.dados[6].value,
      cidade: this.dados[7].value,
      estado: this.dados[8].value,
    };
    const corpo = {
      produto: pr,
      comprador_id: this.dados[1].value,
      vendedor_id: 'lobo@origamid.com',
      endereco,
    };
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/transacao',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        },
        body: JSON.stringify(corpo),
      },
    );
    const dados = await response.json();
  }

  Init() {
    this.btnTransacao?.addEventListener('click', (event) => {
      this.FazerTransacao(event);
    });
    this.formulario?.addEventListener('change', (event) => {
      this.pegarDadosUsuario(event);
    });
  }
}

export default Transacao;
