document.querySelector(".btn-logar").addEventListener("click", () => {
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#password").value;

  const cadastros = JSON.parse(localStorage.getItem("Trilhas")) || [];

  let loginValido = false;

  for (let i = 0; i < cadastros.length; i++) {
    if (cadastros[i].email === email && cadastros[i].senha === senha) {
      loginValido = true;
      break;
    }
  }

  if (loginValido) {
    alert("Login realizado com sucesso!");
    // Redirecionar ou continuar o processo
  } else {
    alert("Email ou senha incorretos.");
  }
});
