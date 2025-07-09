class Fomatar {
  constructor() {}

  formatar(formatar) {
    const numeroFormatado = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(+formatar);
    return numeroFormatado;
  }
}

export default Fomatar;
