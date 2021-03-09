
window.personalbar.visible = !window.personalbar.visible;

console.log(window.location.pathname);


function count_products(){

    if (sessionStorage.cart) {
        const count_p = document.getElementById("count-p");
        const ss = JSON.parse(sessionStorage.cart);
        count_p.innerHTML = ss.quantidade;
    }
    
}


console.log($("[data-page]")[0].dataset.page);
console.log("Page =================");

function menu(conteiner){

    const list = [
        {id:0, title:"Home"},
        {id:1, title:"Cobreleito para Casal"},
        {id:2, title:"Cobreleito para Solteiro"},
        {id:3, title:"Cortinas"},
        {id:4, title:"Coberdrom casal"},
       
    ];


    const bxmenu = document.createElement("div");
    bxmenu.setAttribute("class", "bxmenu");
    bxmenu.setAttribute("id", "id-bxmenu");

        const menu = document.createElement("div");
        menu.setAttribute("class", "menu");
        menu.setAttribute("id", "id-menu");
        bxmenu.appendChild(menu);

        const bxavatar = document.createElement("div");
        bxavatar.setAttribute("class", "bxavatar");
        bxavatar.setAttribute("id", "id-bxavatar");
        menu.appendChild(bxavatar);
            const circleAvatar = document.createElement("div");
            circleAvatar.setAttribute("class", "circleAvatar");
            circleAvatar.setAttribute("id", "id-circleAvatar");
            circleAvatar.innerHTML = "S";
            bxavatar.appendChild(circleAvatar);



            list.map(function(value, indice){

                const menuItem = document.createElement("div");
                menuItem.setAttribute("class", "menuItem");
                menuItem.setAttribute("data-index", "index");
                menuItem.setAttribute("id", indice);
                menuItem.setAttribute("data-slug", slug(value.title));
                menuItem.innerHTML = value.title;
                menu.appendChild(menuItem);

            });



    conteiner.appendChild(bxmenu);

        const cont = document.getElementById("id-cont");


        $("#id-bxmenu").fadeIn(200, function(){
            $("#id-menu").animate({"left":"0px"}, 200);
        });

        




        $(".menuItem").click(function(){

            const slug  = this.dataset.slug;
            const uri = "/C:/Users/evert/Desktop/projetos/git_gitHub/bordadossofia/index.html";
            const uri2 = "/C:/Users/evert/Desktop/projetos/git_gitHub/bordadossofia/";
            // const uri = "https://evertoncam7.github.io/catalogobordadossofia/";
            // const uri = "/catalogobordadossofia/";

            if (slug == "home") {
                window.location.href = "index.html";
                return;
            }

            
                window.location.href = "p.html#"+slug;

        });



        function slug(texto){

            let text = '';
           
            for (let index = 0; index < texto.length; index++) {
            
                text += texto[index].replace(" ", "-");
                
            }

            return text.toLowerCase();

        }

    

}


function bxAddProducts(id, imagem, title, preco){

    console.log([
        id,
        imagem,
        title,
        preco
    ]);

    const cont = document.getElementById("id-cont");

    const bxt = document.createElement("div");
    bxt.setAttribute("class", "bxt");
    bxt.setAttribute("id", "id-bxt");

    cont.appendChild(bxt);

    const bx = document.createElement("div");
    bx.setAttribute("class", "bx-add-products");
    bx.setAttribute("id", "id-bx-add-products");
    bxt.appendChild(bx);

        const contAddHeader = document.createElement("div");
        contAddHeader.setAttribute("class", "contAddHeader");
        bx.appendChild(contAddHeader);

        const contAdd = document.createElement("div");
        contAdd.setAttribute("class", "contAdd");
        contAdd.setAttribute("id", "id-cont");
        bx.appendChild(contAdd);

            const contAddBxContImg = document.createElement("div");
            contAddBxContImg.setAttribute("class", "contAddBxContImg");
            contAddBxContImg.setAttribute("id", "id-contAddBxContImg");
            contAdd.appendChild(contAddBxContImg);

                const contAddProductImg = document.createElement("div");
                contAddProductImg.setAttribute("class", "contAddProductImg");
                contAddProductImg.setAttribute("id", "id-contAddProductImg");
                contAddBxContImg.appendChild(contAddProductImg);

                    const contAddProductImgImg = document.createElement("img");
                    contAddProductImgImg.setAttribute("class", "contAddProductImgImg");
                    contAddProductImgImg.setAttribute("id", "id-contAddProductImg");
                    contAddProductImgImg.setAttribute("src", imagem);
                    contAddProductImg.appendChild(contAddProductImgImg);

            const contAddProd = document.createElement("div");
            contAddProd.setAttribute("class", "contAddProd listAdd");
            contAddProd.setAttribute("id", "id-contAddProd");
            contAddProd.innerHTML = `PRODUTO: ${title}`;
            contAdd.appendChild(contAddProd);

            const contAddPreco = document.createElement("div");
            contAddPreco.setAttribute("class", "contAddPreco listAdd");
            contAddPreco.setAttribute("id", "id-contAddPreco");
            contAddPreco.innerHTML = `PREÇO: ${currencyBrl(preco)}`;
            contAdd.appendChild(contAddPreco);

            const contAddQuantidade = document.createElement("div");
            contAddQuantidade.setAttribute("class", "contAddQuantidade listAdd");
            contAddQuantidade.setAttribute("id", "id-contAddQuantidade");
            contAddQuantidade.innerHTML = `QUANTIDADE: <input id='id-inpn' class='inpn' value='1' type='number' min="0" max="4" maxlength="4" />`;
            contAdd.appendChild(contAddQuantidade);

            const contAddTotal = document.createElement("div");
            contAddTotal.setAttribute("class", "contAddTotal listAdd");
            contAddTotal.setAttribute("id", "id-contAddTotal");
            contAddTotal.innerHTML = `TOTAL: ${currencyBrl(preco)}`;
            

            const inp = document.getElementById("id-inpn");
            inp.addEventListener("change", function(e){
                const quantidade = e.target.value;
                const valor = quantidade * preco;
                contAddTotal.innerHTML = `TOTAL: ${currencyBrl(valor)}`;
            });

            contAdd.appendChild(contAddTotal);

            const contAddPedido = document.createElement("div");
            contAddPedido.setAttribute("class", "contAddPedido listPedido");
            contAddPedido.setAttribute("id", "id-contAddPedido");
            contAddPedido.innerHTML = `FAZER O PEDIDO <span class="icon-whatsapp-1"></span>`;
            contAdd.appendChild(contAddPedido);


        const bxContBtns = document.createElement("div");
        bxContBtns.setAttribute("class", "bxContBtns");
        bxContBtns.setAttribute("id", "id-bxContBtns");
        bx.appendChild(bxContBtns);

            const btnCont1 = document.createElement("div");
            btnCont1.setAttribute("class", "btnCont btnAdd");
            btnCont1.setAttribute("id", "id-btnCont1");
            btnCont1.innerHTML = "ADICIONAR";
            btnCont1.addEventListener("click", function(){

                const q = parseInt(document.getElementById("id-inpn").value);

                let p = q * preco;

                console.log(p);

                setCart({id:id, img:imagem, product:title, qt:q, preco:p})
                console.log("sdwwwwflm");

                count_products();

            });
            bxContBtns.appendChild(btnCont1);

            const btnCont2 = document.createElement("div");
            btnCont2.setAttribute("class", "btnCont btnCancel");
            btnCont2.setAttribute("id", "id-btnCont2");
            btnCont2.innerHTML = "CANCELAR";
            bxContBtns.appendChild(btnCont2);

        

}

$("body").on("click",".bxt" ,function(e){

    const btn = $(this);

    if (e.target.id == "id-bxt") {
        $(".bx-add-products").animate({bottom:"-70%"}, 200, function(){
            $(".bxt").fadeOut(function(){
                $(".bxt").remove();
            });
        });
    }

});




function currencyBrl(valor){

    if (!valor) {
        valor = 0;
    }


    const options = {style:"currency", currency:"BRL"};
    return valor.toLocaleString("pt-br", options);

}



