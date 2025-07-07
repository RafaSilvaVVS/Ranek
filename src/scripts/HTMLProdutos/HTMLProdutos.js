const main = document.querySelector("[data-main]");
const formulario = document.querySelector("[data-form]");
const dataComprar = document.querySelector("[data-comprar]");

export default function htmlProdutos(objProdutos) {
  if (Array.isArray(objProdutos) == false) {
    htmlElementosUnico(objProdutos);
  } else {
    conteudoElementos(objProdutos);
  }
}

function criarElementos(tag, texto = null) {
  const tagElementt = document.createElement(tag);
  tagElementt.innerText = texto;
  return tagElementt;
}

function htmlElementosUnico(produto) {
  if (main !== null) {
    main.innerHTML = ``;
  }
  console.log(produto);
  const divProduto = document.createElement("a");
  if (window.location.pathname == "/ranek/pages/produto.html") {
    divProduto.classList.add("grid", "grid-cols-2", "gap-8");
  } else {
    divProduto.setAttribute("href", "../../../ranek/pages/produto.html");
  }
  const divConteudo = document.createElement("div");
  divProduto.classList.add("px-4", "py-6", "rounded-2xl");

  const elementoFoto = criarElementos("img");

  const nomeElemento = criarElementos("p", produto.nome);
  nomeElemento.classList.add("text-[#333]", "text-2xl", "mt-2");

  const precoElemento = criarElementos("p", produto.preco);
  precoElemento.classList.add("text-[#e80]", "bold", "text-[20px]");

  const descricaoElemento = criarElementos("p", produto.descricao);
  descricaoElemento.classList.add("mt-2");

  if (produto.img) {
    elementoFoto.setAttribute("src", produto.img);
  }

  if (!!produto.fotos) {
    elementoFoto.setAttribute("src", produto.fotos[0].src);
  }
  divProduto.appendChild(elementoFoto);
  divConteudo.appendChild(nomeElemento);
  divConteudo.appendChild(precoElemento);
  divConteudo.appendChild(descricaoElemento);
  divProduto.appendChild(divConteudo);
  main?.appendChild(divProduto);
  if (window.location.pathname === "/ranek/pages/produto.html") {
    divConteudo.appendChild(dataComprar);
    divConteudo.appendChild(formulario);
  }
}

function conteudoElementos(produto) {
  if (Array.isArray(produto)) {
    produto.map(({ fotos, preco, nome, descricao, id }) => {
      const linkProduto = document.createElement("a");
      linkProduto.setAttribute("href", `../../../ranek/pages/produto.html`);

      linkProduto.setAttribute("data-produto", `${id}`);
      linkProduto.addEventListener("click", () => {
        const nome = localStorage.setItem(
          "produto",
          linkProduto.dataset.produto
        );
      });

      linkProduto.classList.add(
        "shadow-2xl",
        "px-4",
        "py-6",
        "rounded-2xl",
        "hover:cursor-pointer",
        "hover:scale-120"
      );

      const elementoFoto = criarElementos("img");

      const nomeElemento = criarElementos("p", nome);
      nomeElemento.classList.add("text-[#333]", "text-2xl", "mt-2");

      const precoElemento = criarElementos("p", preco);
      precoElemento.classList.add("text-[#e80]", "bold", "text-[20px]");

      const descricaoElemento = criarElementos("p", descricao);
      descricaoElemento.classList.add("mt-2");
      if (fotos) {
        elementoFoto.setAttribute("src", fotos[0].src);
      }

      linkProduto.appendChild(elementoFoto);
      linkProduto.appendChild(nomeElemento);
      linkProduto.appendChild(precoElemento);
      linkProduto.appendChild(descricaoElemento);
      main?.appendChild(linkProduto);
    });
  }
}
