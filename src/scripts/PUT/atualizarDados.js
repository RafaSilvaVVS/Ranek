import requisicoes from '../endpointsRequisicao/endpoints.js';

class AtualizarDados {
  constructor(btnAtualizar, formulario) {
    this.btnAtualizar = document.querySelector(btnAtualizar);
    this.formulario = document.querySelectorAll(formulario);
    this.dados;
  }

  async atualizar() {
    this.dados = {
      nome: this.formulario[0]?.value,
      email: this.formulario[1]?.value,
      senha: this.formulario[2]?.value,
      cep: this.formulario[3]?.value,
      rua: this.formulario[4]?.value,
      numero: this.formulario[5]?.value,
      bairro: this.formulario[6]?.value,
      cidade: this.formulario[7]?.value,
      estado: this.formulario[8]?.value,
    };

    const Put = new requisicoes();
    const response = await Put.PUT('usuario', this.dados);
  }

  init() {
    this.btnAtualizar?.addEventListener('click', () => {
      this.atualizar();
    });
  }
}

export default AtualizarDados;
