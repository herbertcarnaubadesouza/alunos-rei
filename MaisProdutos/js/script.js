var listaProdutos = [[0,'Banana','bananas.jpg','A banana da quitanda é especial! Estamos te esperando...',false,'3,44'],
[1,'Café','cafe.jpg','O café da quitanda é especial! Estamos te esperando...',false,'5,55'],
[2,'Batata','batata.jpg','A batata da quitanda é especial! Estamos te esperando...',false,'6,00'],
[3,'Brocolis','brocolis.jpg','O brócolis da quitanda é especial! Estamos te esperando...',false,'10,52'],
[4,'Figo','figo.jpg','O figo da quitanda é especial! Estamos te esperando...',false,'0,85'],
[5,'Macarrão','macarrao.jpg','O macarrão da quitanda é especial! Estamos te esperando...',false,'0,85'],
[6,'Morango','morango.jpg','O morango da quitanda é especial! Estamos te esperando...',false,'4,23'],
[7,'Tomate','tomate.jpg','O tomate da quitanda é especial! Estamos te esperando...',false,'3,00']]

var carrinho = [];

window.onload = function(){
    montarCardProdutos();
}


function montarCardProdutos(){
    
    document.getElementById("divProdutos").innerHTML = "";

    for (var i = 0;i<listaProdutos.length;i++){        
        var conteudo = "";        
        conteudo += '<div class="card">';
        conteudo += `<img src="img/${listaProdutos[i][2]}" class="photo">`;
        conteudo += '<div class="legenda">';
        conteudo += `<h2>${listaProdutos[i][1]}</h2>`;
        conteudo += listaProdutos[i][3];
        if(listaProdutos[i][4] == false){
            conteudo += '</div>';
            conteudo += `<button onclick="comprar(${listaProdutos[i][0]})">Comprar</button>`;
            conteudo += '</div>';
        }
        else{
            conteudo += '</div>';
            conteudo += `<button class="comprado">Comprado</button>`;
            conteudo += '</div>';

        }

       
        document.getElementById("divProdutos").innerHTML += conteudo;
    } 
}

function comprar(id){

    listaProdutos[id][4] = true;

    carrinho.push(listaProdutos[id]);

    window.localStorage.setItem("carrinho",JSON.stringify(carrinho));

    montarCardProdutos();
}


