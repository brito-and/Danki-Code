var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    let produtos = document.querySelector('.produtos');
    let soma = 0;
    produtos.innerHTML="";
    items.map((val)=>{
        soma+=parseFloat(val.valor);
        produtos.innerHTML+=`
        <div class="produto-single">
            <button class="deletar" name="deletar">Deletar</button>
            <h3>`+val.nome+`</h3>
            <span>R$`+val.valor+`</span>
        </div>
        `
    })

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.total h1');
    elementoSoma.innerHTML = 'Total: R$'+soma;


    document.querySelector('button[name=deletar]')
    .addEventListener('click',()=>{
        items = [];

        document.querySelector('.produto-single').innerHTML = "";
    })

});


document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];

    document.querySelector('.produtos').innerHTML = "";
    document.querySelector('.total h1').innerHTML = "Total: R$0";
})