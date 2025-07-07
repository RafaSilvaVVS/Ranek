class FetchCep {
  constructor(inputCep, changeCep) {
    this.inputCep = document.querySelectorAll(inputCep);
    this.changeCep = document.querySelector(changeCep);
  }

  async RequisisaoCep() {
    const response = await fetch(
      `https://viacep.com.br/ws/${this.changeCep.value}/json/`
    );
    const dados = await response.json();

    console.log(dados);
    const { logradouro, localidade, bairro, estado } = dados;
    this.inputCep[0].value = logradouro;
    this.inputCep[1].value = localidade;
    this.inputCep[2].value = bairro;
    this.inputCep[3].value = estado;
  }

  Init() {
    this.changeCep?.addEventListener("change", () => {
      this.RequisisaoCep();
    });
  }
}

export default FetchCep;
