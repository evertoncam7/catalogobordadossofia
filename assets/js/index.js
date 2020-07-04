





function menuDraw(id_cont){

    

    const container = document.getElementById(id_cont);

    console.log(container);

    const  menu = [
        {id:1, title: "Minha lista", icon: ""},
        {id:1, title: "Edredom", icon: ""},
        {id:1, title: "Cortina", icon: ""},
        {id:1, title: "Coberdrom", icon: ""},
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
                            
                            if (page == "products") {

                                const id_page_prod = document.getElementById("id_body_products");
                                id_page_prod.innerHTML = "";

                                bd.filter(function(d){
                                    // console.log(d.cat);
                                    console.log(item.title);
                                    return d.cat == item.title; 
                                }).map(function(){

                                    const card = document.createElement("div");
                                    card.setAttribute("class","card");

                                        const btn1 = document.createElement("div");
                                        btn1.setAttribute("class","btn1 plus-square");
                                        btn1.innerHTML = "Adicionar a lista de pedidos";

                                        const btn2 = document.createElement("div");
                                        btn2.setAttribute("class","btn2");
                                        btn2.innerHTML = "Detalhes do produto";

                                        card.appendChild(btn1);
                                        card.appendChild(btn2);

                                        

                                    id_page_prod.appendChild(card);
                                });

                                $(".draw").css({Transform:"translateX(-105%)"}).fadeOut(function(){
                                    $(".container_menu").fadeOut();
                                })


                                
                            }


                        }else{
                            location.href = "products.html#products#"+item.title;
                        }
                        
                        
                    });
                    menu_draw.innerHTML = item.title;
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

