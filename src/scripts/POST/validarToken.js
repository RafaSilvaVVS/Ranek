class validarToken {
  constructor() {}

  async init() {
    if (window.localStorage.getItem('token')) {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/jwt-auth/v1/token/validate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${window.localStorage.getItem('token')}`,
          },
        },
      );
      const dados = await response.json();
    }
  }
}

export default validarToken;
