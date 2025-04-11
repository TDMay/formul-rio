const erroTel = document.getElementById("erroTelefone");

document.querySelector(".btn-proximo").addEventListener("click",() => {
  if(
    document.querySelector("#name").value != "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.querySelector("#email").value) &&
    document.querySelector("#cpf").value != "" &&
    checarTel(document.querySelector("#phone").value) &&
    document.querySelector("#sexo").value != ""
  ){
    trocarPage(".page1", ".page2");
  }
})

document.querySelector(".btn-voltar").addEventListener("click", () =>{
  trocarPage(".page2",".page1");
})

document.querySelector(".btn-cadastrar").addEventListener("click", () =>{
  cadastrar();
})

const trocarPage = (page1, page2) =>{
  before = document.querySelector(page1).classList.add("off");
  after = document.querySelector(page2).classList.remove("off");
}

const cadastrar = () => {
  let cadastro = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    cpf: document.querySelector("#cpf").value,
    phone: document.querySelector("#phone").value,
    sexo: document.querySelector("#sexo").value,
    date: document.querySelector("#data").value,
    cep: document.querySelector("#cep").value,
    logradouro: document.querySelector("#logra").value,
    trilha: document.querySelector("#trilha").value,
    senha: document.querySelector("#senha").value
  }

  // Verifica se já existe algum dado no localStorage
  let cadastros = JSON.parse(localStorage.getItem("Trilhas")) || [];

  // Adiciona o novo cadastro
  cadastros.push(cadastro);

  // Salva de volta no localStorage
  localStorage.setItem("Trilhas", JSON.stringify(cadastros));

  console.log("Dados salvos:", cadastro);
  alert("Cadastro Realizado com Sucesso!");
}

const checarTel = (tel) =>{
  if(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(tel)){
    erroTel.textContent = "";
    return true;
  }else{
    erroTel.textContent = "Digite um telefone válido com DDD.";
  }
}

