class HTMLtransacao {
  constructor(dataHtml) {
    this.dataHtml = document.querySelector(dataHtml);
  }

  setar(elemento) {
    this.dataHtml?.appendChild(elemento);
  }

  criarImagem(src) {
    const imagem = document.createElement("img");
    imagem.setAttribute("src", src);
    imagem.classList.add("w-[200px]", "h-[100px]", "object-cover");
    imagem.classList.add("rounded-2xl");
    this.dataHtml?.appendChild(imagem);
  }

  criarElementos(tag, texto, classe) {
    const elemento = document.createElement(tag);
    if (elemento.tagName == "H3") {
      elemento.classList.add("text-2xl", "text-[#333]", classe);
    }
    elemento.classList.add(`text-[${classe}]`);
    if (elemento.tagName == "SPAN") {
      elemento.classList.add("text-[#333]", "mx-1");
    }
    elemento.innerText = texto;
    return elemento;
  }
}

export default HTMLtransacao;
