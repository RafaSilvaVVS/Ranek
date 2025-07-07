import Requisicoes from "../endpointsRequisicao/endpoints.js";
import FazerLogin from "./fazerLogin.js";
const fazerLogin = new FazerLogin("[data-form-login]", "[data-btn-login]");
const PostUsuario = new Requisicoes();
export let dadosLogin = {};
class POSTusuario {
  constructor(formulario, btnCriar, mensagemDeErro) {
    this.formulario = document.querySelector(formulario);
    this.btnCriar = document.querySelector(btnCriar);
    this.mensagemDeErro = document.querySelector(mensagemDeErro);
    this.dados = {};
  }

  async pegarDadosForm(event) {
    event.preventDefault();
    if (event.target.name == "email")
      dadosLogin[event.target.name] = event.target.value;

    if (event.target.name == "senha")
      dadosLogin[event.target.name] = event.target.value;

    this.dados[event.target.name] = event.target.value;
  }

  async criarUsuario(event) {
    event.preventDefault();
    const response = await PostUsuario.Post(`usuario`, this.dados);
    if (response.message) {
      if (!!this.mensagemDeErro) {
        this.mensagemDeErro.innerText = response.message;
      }
    } else {
      if (!!this.mensagemDeErro) {
        this.mensagemDeErro.innerText = "";
      }
      fazerLogin.FazerLoginUsuarioAutomatico(dadosLogin);
    }
  }

  init() {
    this.formulario?.addEventListener("change", (event) => {
      this.pegarDadosForm(event);
    });
    this.btnCriar?.addEventListener("click", (event) => {
      this.criarUsuario(event);
    });
  }
}

export default POSTusuario;
