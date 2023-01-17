const formulario = document.getElementById("formLogin");
formulario.addEventListener("submit", clickLogin);

function clickLogin(event) {
  event.preventDefault();
  if (
    document.getElementById("inputLogin").value == "" ||
    document.getElementById("inputSenha").value == ""
  ) {
    alert("Preencha todos os campos");
  } else {
    document.location.href = "..";
  }
}
