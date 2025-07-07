import Redirecionar from "./redirecionar/Redirecionar.js";
const redirecionarLogout = new Redirecionar();

function logout() {
  const logoutBtn = document.querySelectorAll("[data-logout]");
  logoutBtn.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      window.localStorage.removeItem("token");
      redirecionarLogout.Redirecionar("/ranek/pages/login.html");
    });
  });
}

export default logout;
