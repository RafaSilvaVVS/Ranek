import Fomatar from '../formatarMoeda/formatarMoeda.js';

class HTMLtransacao {
  constructor(dataHtml) {
    this.dataHtml = document.querySelector(dataHtml);
  }

  setar(elemento) {
    this.dataHtml?.appendChild(elemento);

    return this.dataHtml;
  }

  criarImagem(src) {
    const imagem = document.createElement('img');
    imagem.setAttribute('src', src);
    imagem.classList.add('w-[200px]', 'h-[100px]', 'object-cover');
    imagem.classList.add('rounded-2xl');
    this.dataHtml?.appendChild(imagem);
  }

  criarElementos(tag, texto, classe) {
    const elemento = document.createElement(tag);
    if (elemento.tagName == 'H3') {
      elemento.classList.add('text-2xl', 'text-[#333]', classe);
    }
    if (isNaN(+texto) == false) {
      const numeroPtbr = new Fomatar();
      elemento.innerText = numeroPtbr.formatar(+texto);
    } else {
      elemento.innerText = texto;
    }
    elemento.classList.add(`text-[${classe}]`);
    if (elemento.tagName == 'SPAN') {
      elemento.classList.add('text-[#333]', 'mx-1');
    }

    return elemento;
  }
}

export default HTMLtransacao;
