import { DOM } from "./DOM.js";
import { displayToggle } from "./utilities.js";

// Verifica se já existe um localStorage chamado "user"
if (!localStorage.getItem("user")) {
  // Se não existe, inicializa com um objeto básico
  const user = {
    login: false,
    name: "",
    email: "",
    password: "",
  };

  localStorage.setItem("user", JSON.stringify(user));
}

const user = JSON.parse(localStorage.getItem("user"));

if (!user.login) {
  displayToggle("login", "none");
  displayToggle("register", "flex");
} else {
  displayToggle("register", "none");
  displayToggle("login", "flex");
}

DOM.btnRegister.addEventListener("click", () => {
  const name = DOM.nameRegister.value;
  const email = DOM.emailRegister.value;
  const password = DOM.passwordRegister.value;

  if (name !== "" && email !== "" && password !== "") {
    user.name = name;
    user.email = email;
    user.password = password;
    user.login = true;

    localStorage.setItem("user", JSON.stringify(user));

    displayToggle("login", "flex");
    displayToggle("register", "none");
  }
});

DOM.btnLogin.addEventListener("click", () => {
  if (
    DOM.emailLogin.value === user.email &&
    DOM.passwordLogin.value === user.password
  ) {
    // Cria elemento "fantasma"
    const a = document.createElement("a");
    a.href = "home.html";
    a.style.display = "none";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
});
