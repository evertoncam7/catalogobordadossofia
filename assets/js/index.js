





function menuDraw(id_cont){

    

    const container = document.getElementById(id_cont);

    console.log(container);

    const  menu = [
        {id:1, title: "Minha lista",nomeProd:"Minha Lista", icon: "", slogan:"Casal"},
        {id:1, title: "Edredom",nomeProd:"Edredom Casal", icon: "", slogan:"Casal"},
        {id:1, title: "Edredom",nomeProd:"Edredom Solteiro", icon: "", slogan:"Solteiro"},
        {id:1, title: "Cortina",nomeProd:"Cortina", icon: "", slogan:"Cortina"},
        {id:1, title: "Coberdrom",nomeProd:"Coberdrom Casal", icon: "", slogan:"Casal"},
        {id:1, title: "Coberdrom",nomeProd:"Coberdrom Solteiro", icon: "", slogan:"Solteiro"},
    ]

    const container_menu = document.createElement("div");
    container_menu.setAttribute("class","container_menu");
    container.appendChild(container_menu);

        const draw = document.createElement("div");
        draw.setAttribute("class","draw");

            const header_draw = document.createElement("div");
            header_draw.setAttribute("class","header_draw");
            header_draw.innerHTML = "BORDADOS SOFIA";
            draw.appendChild(header_draw);

            const body_draw = document.createElement("div");
            body_draw.setAttribute("class","body_draw");
            draw.appendChild(body_draw);

                menu.map(function(item){

                   

                    const menu_draw = document.createElement("div");
                    if (item.title == "Minha lista") {
                        menu_draw.setAttribute("class","menu_draw icon-basket");
                    }else{
                        menu_draw.setAttribute("class","menu_draw icon-tag");
                    }
                    
                    menu_draw.addEventListener("click", function(){

                        if (location.hash) {

                            const hash = location.hash;
                            const pages = hash.split("#");
                            const page = pages[1];
                            const sc = pages[2];
                            
                            if (page == "products") {

                                const id_page_prod = document.getElementById("id_body_products");
                                id_page_prod.innerHTML = "";

                                bd.filter(function(d){
                                    // console.log(d.cat);
                                    console.log(item.title);
                                    return d.cat == item.title && d.slogan == item.slogan; 

                                }).map(function(item){

                                    const card = document.createElement("div");
                                    card.setAttribute("class","card");

                                        const header_card = document.createElement("div");
                                        header_card.setAttribute("class","header_card");
                                        card.appendChild(header_card);
                                            const header_card_span = document.createElement("div");
                                            header_card_span.setAttribute("class","icon-ellipsis-v");
                                            header_card_span.addEventListener("click", function(){
                                                // alert("Download da foto e compartilhar no Facebook");

                                                const bx_header = document.createElement("div");
                                                bx_header.setAttribute("class","bx_header");
                                                card.appendChild(bx_header);

                                                    const bx_header_header = document.createElement("div");
                                                    bx_header_header.setAttribute("class","bx_header_header");
                                                    bx_header.appendChild(bx_header_header);

                                                        const bx_header_header_closed = document.createElement("span");
                                                        bx_header_header_closed.setAttribute("class","icon-times-circle");
                                                        bx_header_header.appendChild(bx_header_header_closed);

                                                    const bx_header_body = document.createElement("div");
                                                    bx_header_body.setAttribute("class","bx_header_body");
                                                    bx_header.appendChild(bx_header_body);

                                                        const bx_header_body_btn = document.createElement("div");
                                                        bx_header_body_btn.setAttribute("class","bx_header_body_btn");
                                                        bx_header_body.appendChild(bx_header_body_btn);

                                                            const bx_header_body_btn_span = document.createElement("div");
                                                            bx_header_body_btn_span.setAttribute("class","icon-facebook-square");
                                                            bx_header_body_btn_span.innerHTML = "COMPARTILHAR NO FACEBOOK";
                                                            bx_header_body_btn.appendChild(bx_header_body_btn_span);

                                                        const bx_header_body_btn2 = document.createElement("div");
                                                        bx_header_body_btn2.setAttribute("class","bx_header_body_btn");
                                                        bx_header_body.appendChild(bx_header_body_btn2);
                                                        
                                                            const bx_header_body_btn_span2 = document.createElement("div");
                                                            bx_header_body_btn_span2.setAttribute("class","icon-download");
                                                            
                                                            const a = document.createElement("a");
                                                            a.setAttribute("class", "a");
                                                            a.setAttribute("href", item.url);
                                                            a.setAttribute("download", "download");

                                                                const label = document.createElement("label");
                                                                label.setAttribute("class","label");
                                                                label.setAttribute("src",item.url);
                                                                label.setAttribute("ref",item.id);
                                                                label.innerHTML = "BAIXAR ESTA FOTO";
                                                                a.appendChild(label);

                                                                const img = document.createElement("img");
                                                                img.setAttribute("id",item.id);
                                                                label.appendChild(img);

                                                                
                                                            bx_header_body_btn_span2.appendChild(a);
                                                           
                                                            // bx_header_body_btn_span2.innerHTML = "BAIXAR ESTA FOTO";
                                                            bx_header_body_btn2.appendChild(bx_header_body_btn_span2);


                                               
                                                


                                            });
                                            header_card.appendChild(header_card_span);

                                        const body_card = document.createElement("div");
                                        body_card.setAttribute("class","body_card");
                                        card.appendChild(body_card);

                                            const body_bx_img = document.createElement("img");
                                            body_bx_img.setAttribute("class","body_bx_img");
                                            body_bx_img.setAttribute("src", item.url);
                                            body_card.appendChild(body_bx_img);

                                        const description_card = document.createElement("div");
                                        description_card.setAttribute("class","description_card");
                                        description_card.innerHTML = item.nomeProd;
                                        card.appendChild(description_card);

                                        
                                        const footer_card = document.createElement("div");
                                        footer_card.setAttribute("class","footer_card");
                                        card.appendChild(footer_card);
                                        
                                            const btn1 = document.createElement("div");
                                            btn1.setAttribute("class","btn-in plus-square");
                                            btn1.innerHTML = "Adicionar a lista de pedidos";

                                            const btn2 = document.createElement("div");
                                            btn2.setAttribute("class","btn-out");
                                            btn2.innerHTML = "Detalhes do produto";

                                        footer_card.appendChild(btn1);
                                        footer_card.appendChild(btn2);

                                        

                                    id_page_prod.appendChild(card);
                                });

                                $(".draw").css({Transform:"translateX(-105%)"}).fadeOut(function(){
                                    $(".container_menu").fadeOut();
                                })


                                
                            }


                        }else{
                            
                            location.href = "products.html#products#"+item.title+"#"+item.slogan;

                        }
                        
                        
                    });
                    menu_draw.innerHTML = item.nomeProd;
                    body_draw.appendChild(menu_draw);

                })




        container_menu.appendChild(draw);

}


// BOTÃO MENU BARS

$(".icon-bars").on("click", function(){
    $(".container_menu").fadeIn(function(){
        $(".draw").fadeIn(0, function(){
            $(this).css({
                Transform:"translateX(0px)",
                transition:"0.5s all"
            })
        })
    });
});


$("body").click(function(e){

    if ($(e.target).attr("class") === "container_menu") {

        $(".draw").css({Transform:"translateX(-105%)"}).fadeOut(function(){
            $(".container_menu").fadeOut();
        })
        
    }
});


$("body").on("click", ".icon-times-circle",function(){
    $(this).parent().parent().fadeOut(function(){
        $(this).remove();
    });
});

