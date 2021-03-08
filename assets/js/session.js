


let cart = {
    produtos:[],
    quantidade: 0,
    total:0,
}



function setCart(item){


    if (getCart()) {

        const result = getCart().produtos.filter(function(r){

            return item.id == r.id;

        });

        if (result.length) {

            console.log("O item existe na sessão.");

            const todos = getCart().produtos.filter(function(r, i){

                return item.id != r.id;

            });

            const pro = getCart().produtos.filter(function(r, i){

                return item.id == r.id;

            });

            pro[0].qt += item.qt;
            pro[0].preco += item.preco;

            cart.produtos.push(pro[0]);
            cart.quantidade += item.qt;
            cart.total += item.preco;

            cart.produtos.push(...todos);
            cart.quantidade += (getCart().quantidade);
            cart.total += (getCart().total);

            sessionStorage.cart = JSON.stringify(cart);

            cart = {
                produtos:[],
                quantidade: 0,
                total:0,
            }
            
            console.log([
                pro, 
                todos
            ]);
           
            console.log(getCart().produtos)

        }else{

            console.log("O item não existe na sessão.");

            cart.produtos.push(item);
            cart.quantidade += item.qt;
            cart.total += item.preco;

            cart.produtos.push(...getCart().produtos);
            cart.quantidade += getCart().quantidade;
            cart.total += getCart().total;

            
            sessionStorage.cart = JSON.stringify(cart);

            cart = {
                produtos:[],
                quantidade: 0,
                total:0,
            }


        }
        
        
    }else{

        cart.produtos.push(item);
        cart.quantidade = item.qt;
        cart.total = item.preco
        sessionStorage.cart = JSON.stringify(cart);

        cart = {
            produtos:[],
            quantidade: 0,
            total:0,
        }
        

    }


    console.log(getCart());
    console.log("retorno sessionStorage");

}


function getCart(){

    if (sessionStorage.cart) {
        const c = JSON.parse(sessionStorage.cart);
        // console.log(c.produtos);
        return c;
    }
    
    
}




// sessionStorage.cart = "";
console.log(getCart());





