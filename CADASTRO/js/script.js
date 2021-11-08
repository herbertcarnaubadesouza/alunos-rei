const formulario = document.getElementById("formCadastro");
formulario.addEventListener('submit',clickLogin);


function clickLogin(event){
    event.preventDefault();         
    if (document.getElementById("input-nome").value == "" ||
            document.getElementById("input-email").value == "" ||
            document.getElementById("input-senha").value == "" ||
            document.getElementById("input-senha2").value == "" ||
            document.getElementById("checkbox").checked == false){
        alert("Preencha todos os campos");
    }else{
        document.location.href = "../LOGIN"
    }

}