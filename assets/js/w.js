

function currencyBrl(valor){

    if (!valor) {
        valor = 0;
    }


    const options = {style:"currency", currency:"BRL"};
    return valor.toLocaleString("pt-br", options);

}


let string = "";
const btn_whatsapp = document.getElementById("btn-w");
btn_whatsapp.addEventListener("click", function(){

    const product = [];
    const qunatidade = [];
    const preco = [];

    

    const data = JSON.parse(sessionStorage.cart);
    data.produtos.map(function(values, indice){
        string += values.qt+"%20"+values.product+"%20"+currencyBrl(values.preco)+",%20"
        // console.log(string);
    });
    
    window.location.href = `https://api.whatsapp.com/send?phone=5516982011978&text=${string}%20(Itens:%20${data.quantidade},%20Total do pedido:%20${currencyBrl(data.total)})`;

    console.log(string);
});






