class Requisicoes {
  constructor() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.header = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      };
    } else {
      this.header = {
        'Content-Type': 'application/json',
      };
    }
  }

  async GetProdutos(endpoint, token) {
    let response;
    response = await fetch(
      `https://ranekapi.origamid.dev/json/api/${endpoint}`,
      {
        method: 'GET',
        headers: this.header,
      },
    );

    const dados = await response.json();
    return dados;
  }

  async Post(endpoint, corpo) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/${endpoint}`,
      {
        method: 'POST',
        headers: this.header,
        body: JSON.stringify(corpo),
      },
    );
    const dados = await response.json();

    return dados;
  }

  async PUT(endpoint, corpo) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/${endpoint}`,
      {
        method: 'PUT',
        headers: this.header,
        body: JSON.stringify(corpo),
      },
    );
    const dados = await response.json();

    return dados;
  }
}
export default Requisicoes;
