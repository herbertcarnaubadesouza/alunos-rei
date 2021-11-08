window.onload = function(){
    MontarCarrinho();
}  


function MontarCarrinho(){
    var caixa = JSON.parse(window.localStorage.getItem("carrinho"));    
    
    document.getElementById("divTitulo").innerHTML = "";
    document.getElementById("divProdutos").innerHTML = "";
    var titulo = "";
    var conteudo = ""   
    
    if(caixa != null){              
        titulo +='<h2 class ="Titulo" data-text="Carrinho">Carrinho</h2>'       
        for(var i = 0; i < caixa.length; i++){   
            conteudo += '<div class="card">';
            conteudo += `<img src="img/${caixa[i][2]}" class="photo">`;
            conteudo += '<div class="legenda">';
            conteudo += `<h2>${caixa[i][1]}</h2>`;
            conteudo += caixa[i][3];
            if(caixa[i][4] == false){
                conteudo += '</div>';
                conteudo += `<button onclick="comprar(${caixa[i][0]})">Comprar</button>`;
                conteudo += '</div>';
            }
            else{
                conteudo += '</div>';
                conteudo += `<button class="comprado">Comprado</button>`;
                conteudo += '</div>';
    
            }        
        }
        
    }
    else{
        titulo +='<h2 class ="Titulo-vazio" data-text="Carrinho vazio...">Carrinho vazio...</h2>'
    }
    
    document.getElementById("divTitulo").innerHTML += titulo;
    document.getElementById("divProdutos").innerHTML += conteudo;


}