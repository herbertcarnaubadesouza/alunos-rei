window.onload = function(){
    MontarCarrinho();
}  


function MontarCarrinho(){
    var caixa = JSON.parse(window.localStorage.getItem("carrinho"));

    document.getElementById("tabelaCarrinho").innerHTML = "";
    document.getElementById("divTitulo").innerHTML = "";

    var titulo = "";
    var conteudo = ""
    if(caixa != null){

        titulo +='<h2 class ="Titulo" data-text="Carrinho...">Carrinho...</h2>'
        conteudo += '<table>';
        conteudo += '<tr>';
        conteudo += '<td>' + 'Imagem do produto' + '</td>';
        conteudo += '<td>' + 'Você está comprando' + '</td>';   
        conteudo += '<td>' + 'Preço (R$)' + '</td>';
        conteudo += '<td>' + 'Total (R$)' + '</td>';
        conteudo += '</tr>';
        document.getElementById("tabelaCarrinho").innerHTML += conteudo;    
        for(var i = 0; i < caixa.length; i++){
            conteudo = ""
            conteudo += '<tr>';
            conteudo += '<td>';
            conteudo += `<img src="img/${caixa[i][2]}" class="photo"/>`;
            conteudo += '</td>';
            conteudo += '<td>';
            conteudo += caixa[i][1];
            conteudo += '</td>';            
            conteudo += '<td>';
            conteudo += caixa[i][4];
            conteudo += '</td>';
            conteudo += '<td>';
            conteudo += caixa[i][4]*caixa[i][4];
            conteudo += '</td>';
            conteudo += '</tr>';
            conteudo += '</table>';
        }
        
    }
    else{
        titulo +='<h2 class ="Titulo-vazio" data-text="Carrinho vazio...">Carrinho vazio...</h2>'
    }
    document.getElementById("divTitulo").innerHTML += titulo;
    document.getElementById("tabelaCarrinho").innerHTML += conteudo;

}