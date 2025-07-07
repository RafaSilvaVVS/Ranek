class FormularioAbrir {
  constructor(elemento, click) {
    this.elemento = document.querySelector(elemento);
    this.click = document.querySelector(click);
  }

  abrirFormulario() {
    this.elemento.classList.add("block");
    this.elemento.classList.remove("hidden");
    this.click.classList.remove("block");
    this.click.classList.add("hidden");
  }

  init() {
    this.click?.addEventListener("click", () => {
      this.abrirFormulario();
    });
  }
}

export default FormularioAbrir;
