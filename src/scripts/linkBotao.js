class Linkbotao {
  constructor(btn) {
    this.btn = document.querySelector(btn);
  }

  init() {
    if (window.localStorage.getItem('token')) {
    } else {
      this.btn.setAttribute('href', '../../../ranek/pages/Login.html');
    }
  }
}

export default Linkbotao;
