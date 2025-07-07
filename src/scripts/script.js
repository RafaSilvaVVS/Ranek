import getPesquisaProduto from "./GET/getPesquisaProduto.js";
import produtoUnico from "./GET/getProdutoUnico.js";
getPesquisaProduto();
import FormularioAbrir from "./AbrirModal.js";
import POSTusuario from "./POST/criarUsuario.js";
import FazerLogin from "./POST/fazerLogin.js";
import Redirecionar from "./redirecionar/Redirecionar.js";
import FetchCep from "./GETCep/cep.js";
import RotaProteger from "./RotaProtegida/ProtegerRota.js";
import Transacao from "./POST/Transacao.js";
import DadosUsuario from "./GET/getdados.js";
import AtualizarDados from "./PUT/atualizarDados.js";
import Postar from "./POST/produto.js";
import Compras from "./GET/compras.js";
import logout from "./logout.js";
logout();
import Vendas from "./GET/vendas.js";

const produtoUnicoInit = new produtoUnico();
produtoUnicoInit.init();

const form = new FormularioAbrir("[data-form]", "[data-btn-comprar]");
form.init();

const postUsuario = new POSTusuario(
  "[data-form]",
  "[data-criar]",
  "[data-erro]"
);
postUsuario.init();

const fazerLogin = new FazerLogin(
  "[data-form-login]",
  "[data-btn-login]",
  "[data-erro-login]"
);
fazerLogin.init();

const redirecionar = new Redirecionar();

const cep = new FetchCep("[data-cep]", "[data-change-cep]");
cep.Init();

const rota = new RotaProteger();
rota.Rota();

const transacaoInit = new Transacao(
  "[data-finalizar]",
  "[data-dados]",
  "[data-form]"
);
transacaoInit.Init();

const dadosUsuarioInit = new DadosUsuario("[data-dados ]");
dadosUsuarioInit.Init();

const atualizrDadosConta = new AtualizarDados("[data-btn]", "[data-dados]");
atualizrDadosConta.init();

const postProduto = new Postar("[data-btn-postar]", "[data-conteudo]");
postProduto.init();

const comprasGet = new Compras();
comprasGet.init();

const vendas = new Vendas();
vendas.init();
