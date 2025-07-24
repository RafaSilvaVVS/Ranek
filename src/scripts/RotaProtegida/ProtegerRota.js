class RotaProteger {
  constructor() {}

  Rota() {
    if (
      !!localStorage.getItem('token') &&
      window.location.href == 'http://127.0.0.1:5500/ranek/pages/Login.html'
    ) {
      window.location = 'http://127.0.0.1:5500/ranek/pages/conta/produtos.html';
    } else if (
      !!localStorage.getItem('token') == false &&
      window.location.href !== 'http://127.0.0.1:5500/ranek/index.html' &&
      window.location.href !==
        'http://127.0.0.1:5500/ranek/pages/produto.html' &&
      window.location.href !== 'http://127.0.0.1:5500/ranek/pages/login.html'
    ) {
      window.location.href = 'http://127.0.0.1:5500/ranek/pages/login.html';
    }
  }
}

export default RotaProteger;
