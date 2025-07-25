import Redirecionar from '../redirecionar/redirecionar.js';

class FazerLogin {
  constructor(formulario, btnLogin, dataErro) {
    this.formulario = document.querySelector(formulario);
    this.btnLogin = document.querySelector(btnLogin);
    this.dataErro = document.querySelector(dataErro);
    this.dados = {};
  }

  PegarDadosFormulario(event) {
    event.preventDefault();
    this.dados[event.target.name] = event.target.value;
    console.log(this.dados);
  }
  limparFormulario(formulario) {
    formulario.elements[0].value = '';
    formulario.elements[1].value = '';
  }

  async FazerLoginUsuarioAutomatico(dadosLogin) {
    const corpo = {
      username: dadosLogin ? dadosLogin.email : this.dados.email,
      password: dadosLogin ? dadosLogin.senha : this.dados.password,
    };

    const response = await fetch(
      'https://ranekapi.origamid.dev/json/jwt-auth/v1/token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(corpo),
      },
    );
    const dados = await response.json();
    if (!!dados.token) {
      window.localStorage.setItem('token', dados.token);
      window.localStorage.setItem('username', dados.user_display_name);
      const redirecionarPagina = new Redirecionar();
      redirecionarPagina.Redirecionar(
        '../../../ranek/pages/conta/produtos.html',
      );
    } else
      this.dataErro.innerText = dados.message
        .replace('<strong>', '')
        .replace('</strong>', '');
  }

  init() {
    this.formulario?.addEventListener('change', (event) => {
      this.PegarDadosFormulario(event);
    });
    this.btnLogin?.addEventListener('click', (event) => {
      this.FazerLoginUsuarioAutomatico();
      this.limparFormulario(this.formulario);
    });
  }
}

export default FazerLogin;
