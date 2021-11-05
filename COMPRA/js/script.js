// window.onload = function(){
//     MontarCarrinho();
// }  


// function MontarCarrinho(){
//     var caixa = JSON.parse(window.localStorage.getItem("carrinho"));

//     document.getElementById("tabelaCarrinho").innerHTML = "";

//     var conteudo = ""
//     conteudo += '<table>';
//     conteudo += '<tr>';
//     conteudo += '<td>' + 'Imagem do produto' + '</td>';
//     conteudo += '<td>' + 'Você está comprando' + '</td>';
//     conteudo += '<td>' + 'Unidades' + '</td>';
//     conteudo += '<td>' + 'Preço (R$)' + '</td>';
//     conteudo += '<td>' + 'Total (R$)' + '</td>';
//     conteudo += '</tr>';
//     document.getElementById("tabelaCarrinho").innerHTML += conteudo;
//     if(caixa != null){
//         for(var i = 0; i < caixa.length; i++){
//             conteudo = ""
//             conteudo += '<tr>';
//             conteudo += '<td>';
//             conteudo += '<img src="CSS/' + caixa[i][2] + '"/>';
//             conteudo += '</td>';
//             conteudo += '<td>';
//             conteudo += caixa[i][1];
//             conteudo += '</td>';
//             conteudo += '<td>';
//             conteudo += caixa[i][4];
//             conteudo += '</td>';
//             conteudo += '<td>';
//             conteudo += caixa[i][5];
//             conteudo += '</td>';
//             conteudo += '<td>';
//             conteudo += caixa[i][5]*caixa[i][4];
//             conteudo += '</td>';
//             conteudo += '</tr>';
//         }
//     }
//     document.getElementById("tabelaCarrinho").innerHTML += conteudo;

// }