class Linkbotao {
  constructor(btn) {
    this.btn = document.querySelector(btn);
  }

  init() {
    if (window.localStorage.getItem('token')) {
      this.btn.innerText = window.localStorage.getItem('username');
    } else {
      this.btn.setAttribute('href', '../../../ranek/pages/Login.html');
    }
  }
}

export default Linkbotao;
