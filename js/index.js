
const container = document.getElementById("id-cont");

const dados = [

    // CORTINA

    {
        id:1, nomeProd:"Cobre Leito Casal", price:{m2:"45,00", m3:"65,00"}, categoria:"Edredom", cores:
            [
                {cor:"#ca6d4a",url:"imagens/r/edredom_m01.jpg"}, 
                {cor:"#7f7900",url:"imagens/img/vermelho.jpg"}
            ], 
        url:"imagens/r/IMG-20200616-WA0016.jpg",descriptions:
            [

                // title, sub-title, old-price e new-price

                {contem:"Cobre Leito Casal King 8 peças", title:"title"},
                {contem:"1 cobreleito 2,90m x 2,80", title:"sub-title"},
                {contem:"4 Porta travesseiro 70cm x 50cm", title:"sub-title"},
                {contem:"02 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 2,60m x 48cm", title:"sub-title"},
                {contem:"R$ 130,00", title:"old-price"},
                {contem:"R$ 120,00", title:"new-price"},
                

                {contem:"Cobre Leito Queen 08 peças", title:"title"},
                {contem:"01 Cobre Leito 2,60m x 2,60m", title:"sub-title"},
                {contem:"02 Porta Travesseiros 70cm x 50cm", title:"sub-title"},
                {contem:"02 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 2,20m x 48cm", title:"sub-title"},
                {contem:"R$ 130,00", title:"old-price"},
                {contem:"R$ 110,90", title:"new-price"},

                {contem:"Cobre Leito Solteiro 05 Peças", title:"title"},
                {contem:"01 Cobre Leito 2,50m x 1,90m", title:"sub-title"},
                {contem:"02 Porta Travesseiros 70cm x 50cm", title:"sub-title"},
                {contem:"01 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 1,50m x 48cm", title:"sub-title"},
                {contem:"R$ 49,00", title:"old-price"},
                {contem:"R$ 39,90", title:"new-price"},

                {contem:"Composição:", title:"title"},
                {contem:"Tecido 100% Poliéster", title:"sub-title"},
                {contem:"Enchimento 100% Poliéster", title:"sub-title"},

                {contem:"Composição dos refis", title:"title"},
                {contem:"Tecido 100% Polipropileno", title:"sub-title"},
                {contem:"Enchimento 100% Poliuretano", title:"sub-title"},

                {contem:"Instruções de lavagem:", title:"title"},
                {contem:"Vide etiqueta interna do produto", title:"sub-title"},

            ]
    },
    {
        id:1, nomeProd:"Cobre Leito Casal", price:{m2:"45,00", m3:"65,00"}, categoria:"Edredom", cores:
            [
                {cor:"#ca6d4a",url:"imagens/r/edredom_m1.png"}, 
                {cor:"#7f7900",url:"imagens/img/vermelho.jpg"}
            ], 
        url:"imagens/r/IMG-20200616-WA0017.jpg",descriptions:
            [

                {contem:"Cobre Leito Casal King 8 peças", title:"title"},
                {contem:"1 cobreleito 2,90m x 2,80", title:"sub-title"},
                {contem:"4 Porta travesseiro 70cm x 50cm", title:"sub-title"},
                {contem:"02 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 2,60m x 48cm", title:"sub-title"},

                {contem:"Cobre Leito Queen 08 peças", title:"title"},
                {contem:"01 Cobre Leito 2,60m x 2,60m", title:"sub-title"},
                {contem:"02 Porta Travesseiros 70cm x 50cm", title:"sub-title"},
                {contem:"02 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 2,20m x 48cm", title:"sub-title"},

                {contem:"Cobre Leito Solteiro 05 Peças", title:"title"},
                {contem:"01 Cobre Leito 2,50m x 1,90m", title:"sub-title"},
                {contem:"02 Porta Travesseiros 70cm x 50cm", title:"sub-title"},
                {contem:"01 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 1,50m x 48cm", title:"sub-title"},

                {contem:"Composição:", title:"title"},
                {contem:"Tecido 100% Poliéster", title:"sub-title"},
                {contem:"Enchimento 100% Poliéster", title:"sub-title"},

                {contem:"Composição dos refis", title:"title"},
                {contem:"Tecido 100% Polipropileno", title:"sub-title"},
                {contem:"Enchimento 100% Poliuretano", title:"sub-title"},

                {contem:"Instruções de lavagem:", title:"title"},
                {contem:"Vide etiqueta interna do produto", title:"sub-title"},

            ]
    },
    {
        id:1, nomeProd:"Cobre Leito Casal", price:{m2:"45,00", m3:"65,00"}, categoria:"Edredom", cores:
            [
                {cor:"#ca6d4a",url:"imagens/r/edredom_m1.png"}, 
                {cor:"#7f7900",url:"imagens/img/vermelho.jpg"}
            ], 
        url:"imagens/r/IMG-20200616-WA0018.jpg",descriptions:
            [

                {contem:"Cobre Leito Casal King 8 peças", title:"title"},
                {contem:"1 cobreleito 2,90m x 2,80", title:"sub-title"},
                {contem:"4 Porta travesseiro 70cm x 50cm", title:"sub-title"},
                {contem:"02 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 2,60m x 48cm", title:"sub-title"},

                {contem:"Cobre Leito Queen 08 peças", title:"title"},
                {contem:"01 Cobre Leito 2,60m x 2,60m", title:"sub-title"},
                {contem:"02 Porta Travesseiros 70cm x 50cm", title:"sub-title"},
                {contem:"02 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 2,20m x 48cm", title:"sub-title"},

                {contem:"Cobre Leito Solteiro 05 Peças", title:"title"},
                {contem:"01 Cobre Leito 2,50m x 1,90m", title:"sub-title"},
                {contem:"02 Porta Travesseiros 70cm x 50cm", title:"sub-title"},
                {contem:"01 Refis de Travesseiros 65cm x 45cm", title:"sub-title"},
                {contem:"01 Xale 1,50m x 48cm", title:"sub-title"},

                {contem:"Composição:", title:"title"},
                {contem:"Tecido 100% Poliéster", title:"sub-title"},
                {contem:"Enchimento 100% Poliéster", title:"sub-title"},

                {contem:"Composição dos refis", title:"title"},
                {contem:"Tecido 100% Polipropileno", title:"sub-title"},
                {contem:"Enchimento 100% Poliuretano", title:"sub-title"},

                {contem:"Instruções de lavagem:", title:"title"},
                {contem:"Vide etiqueta interna do produto", title:"sub-title"},

            ]
    },
    {
        id:2, nomeProd:"Cortina BlackOut", price:{m2:"45,00", m3:"65,00"}, categoria:"Cortina", cores:
            [
                {cor:"#ca6d4a",url:"imagens/r/edredom_m1.png"}, 
                {cor:"#7f7900",url:"imagens/img/vermelho.jpg"}
            ], 
        url:"imagens/cortina1.jpg",descriptions:
            [

                {contem:"Cortina Blackout 02 Metros", title:"title"},
                {contem:"01 Cortina 2,00m x 2,70m", title:"sub-title"},
                

                {contem:"Cortina Blackout 03 Metros", title:"title"},
                {contem:"01 Cortina 3,00m x 2,70m", title:"sub-title"},
                

                {contem:"Cortina Blackout 04 Metros", title:"title"},
                {contem:"01 Cortina 4,00m x 2,70m", title:"sub-title"},
               

                {contem:"Composição:", title:"title"},
                {contem:"Tecido 100% Poliéster", title:"sub-title"},

                {contem:"Instruções de lavagem:", title:"title"},
                {contem:"Vide etiqueta interna do produto", title:"sub-title"},

            ]
    },
    {
        id:3, nomeProd:"Cortina BlackOut", price:{m2:"45,00", m3:"65,00"}, categoria:"Cortina", cores:
            [
                {cor:"#ca6d4a",url:"imagens/r/edredom_m1.png"}, 
                {cor:"#7f7900",url:"imagens/img/vermelho.jpg"}
            ], 
        url:"imagens/cortina2.jpg",descriptions:
            [

                {contem:"Cortina Blackout 02 Metros", title:"title"},
                {contem:"01 Cortina 2,00m x 2,70m", title:"sub-title"},
                

                {contem:"Cortina Blackout 03 Metros", title:"title"},
                {contem:"01 Cortina 3,00m x 2,70m", title:"sub-title"},
                

                {contem:"Cortina Blackout 04 Metros", title:"title"},
                {contem:"01 Cortina 4,00m x 2,70m", title:"sub-title"},
               

                {contem:"Composição:", title:"title"},
                {contem:"Tecido 100% Poliéster", title:"sub-title"},

                {contem:"Instruções de lavagem:", title:"title"},
                {contem:"Vide etiqueta interna do produto", title:"sub-title"},

            ]
    }

   
]
 

//  const heightContainer = 400*dados.length; 



 

 

 let limite = 3;
 let contItem = 0;
 

 const dadosLength = dados.length;

 const c = document.getElementById("id-container");

 const menu_initial = [
     {id:1, title:"EDREDOM", cat:"Edredom"},
     {id:2, title:"CORTINA", cat:"Cortina"},
 ]


    
 function modal(ddd){

    // console.log(ddd.url);
    
    const bx_mod = document.createElement("div");
    bx_mod.setAttribute("class","bx_mod");
    c.appendChild(bx_mod);

    const mod = document.createElement("div");
    mod.setAttribute("class", "mod");

        const header = document.createElement('div');
        header.setAttribute("class","header-mod");
        header.innerHTML = "<span class='closed-mod'>X</span>";
        mod.appendChild(header);

        const body = document.createElement('div');
        body.setAttribute("class","body-mod");
        mod.appendChild(body);
            const imgModal = document.createElement("img");
            imgModal.setAttribute("src", ddd.url);
            imgModal.setAttribute("class","imgModal");
            body.appendChild(imgModal);

            const bx_descriptions = document.createElement("div");
            bx_descriptions.setAttribute("class","bx_descriptions");

            console.log(ddd.desc);

            if (ddd.desc) {
                console.log("contem");

                ddd.desc.map(function(itens){

                    console.log(itens);

                    const list_desc = document.createElement("div");

                    if (itens.title == "title") {

                        list_desc.setAttribute("class","list_desc title-contem");

                    }else if(itens.title == "sub-title"){

                        list_desc.setAttribute("class","list_desc");

                    }else if(itens.title == "new-price"){

                        list_desc.setAttribute("class","list_desc new-price");

                    }else if(itens.title == "old-price"){

                        list_desc.setAttribute("class","list_desc old-price");

                    }else if(itens.title == "separator"){
                        list_desc.setAttribute("class","list_desc separator");
                    }
                    
                    list_desc.innerHTML = itens.contem;

                    bx_descriptions.appendChild(list_desc);
                });


            }else{
                console.log("não contem descrição.");
            }


            body.appendChild(bx_descriptions)

            const btn_whats = document.createElement("div");
            btn_whats.setAttribute("class","btn_whats");
                const img_whats = document.createElement("img");
                img_whats.setAttribute("src","icons/w.png");
                img_whats.setAttribute("class","img_whats");
                const btn_whats_message = document.createElement("div");
                btn_whats_message.setAttribute("class","btn_whats_message");
                btn_whats_message.innerHTML = "ME INTERESSEI";
                

                btn_whats.appendChild(img_whats);
                btn_whats.appendChild(btn_whats_message);

            body.appendChild(btn_whats);


    bx_mod.appendChild(mod);

 }

 const itemMenu = [
    {id:1, nome:"CORTINA", cat:"Cortina"},
    {id:2, nome:"EDREDOM", cat:"Edredom"},
    {id:2, nome:"COBERDROM", cat:"Coberdrom"},
]

 function menu_dinamico(menu = null){
     

    const bx_menu = document.createElement("div");
    bx_menu.setAttribute("class","bx_menu");

        itemMenu.map(function(item){
            const itemM= document.createElement("div");
            itemM.setAttribute("class","itemM");
            itemM.addEventListener("click", function(){

                // menu topo

                if (item.id == 1) {
                    f1(item.cat);
                }else if(item.id == 2){
                    f1(item.cat);
                }
                
                $(".initial").fadeOut();
            });
            itemM.innerHTML = item.nome;
            bx_menu.appendChild(itemM);
        });

    c.appendChild(bx_menu);

 }

 menu_dinamico();

 

 let chaveMenu = 0;

 $(".menu").on("click", function(){

    if (chaveMenu) {
        $(".bx_menu").animate({top:"-50px"}, 250);
        chaveMenu = 0;
    }else{
        $(".bx_menu").animate({top:"100px"}, 250);
        chaveMenu = 1;
    }

 });

 $(".itemM").on("click", function(){
    $(".bx_menu").animate({top:"-50px"}, 250);
    chaveMenu = 0;
 });


 $("body").on("click", ".closed-mod", function(){
    $(".mod").fadeOut(function(){
        $(".bx_mod").remove();
        $(".mod").remove();
    });
    
 })


 $("body").on("click", ".circle_cores" ,function(){

    const este = $(this);
    const data = este.data();

    console.log(data.url);
    
    $(".circle_cores2").removeClass("ativacao");
    $(".circle_cores").removeClass("ativacao");
    $(this).addClass("ativacao");

 });

 $("body").on("click", ".circle_cores2" ,function(){

    $(".circle_cores2").removeClass("ativacao");
    $(".circle_cores").removeClass("ativacao");
    $(this).addClass("ativacao");

 });

 const valor = "Edredom";





let filter_cat = " ";


 function f1(cate = null){

   
    container.innerHTML = " ";

    filter_cat = dados.filter(function(cat){
        return cat.categoria === cate;
    }).map(function(item, index){

        let imagemAtual = item.url;

    if (index < limite ){
        
        contItem++;

        const idI = item.id;
    
        const card = document.createElement("div");
        card.setAttribute("class","card");
        card.setAttribute("id", index+1);
            const bx_foto = document.createElement("div");
            bx_foto.setAttribute("class","bx_foto");
            bx_foto.setAttribute("id","id-bx_foto");
            
                const img = document.createElement("img");
                img.setAttribute("class","img");
                img.setAttribute("src", item.url);
                img.addEventListener("click", function(){

                    const obj = {id:item.id, nome:item.nomeProd, url:imagemAtual, desc:item.descriptions}

                    modal(obj);
                    $(".mod").fadeIn();

                });
                
            
            const bx_cores = document.createElement("div");
            bx_cores.setAttribute("class","bx_cores");

            const circle_cores2 = document.createElement("div");
            circle_cores2.setAttribute("class","circle_cores2 ativacao");
            
            circle_cores2.style.background = "#fff";
            circle_cores2.addEventListener("click", function(){
                
                imagemAtual = item.url;
                img.setAttribute("src", item.url);

            });
            bx_cores.appendChild(circle_cores2);

            for (let indCores = 0; indCores < item.cores.length; indCores++) {
                const element = item.cores[indCores];
                
                const circle_cores = document.createElement("div");
                circle_cores.setAttribute("class","circle_cores");
                circle_cores.setAttribute("data-url",element.url);
                circle_cores.style.background = element.cor;

                circle_cores.addEventListener("click", function(){

                        imagemAtual = element.url;
                        img.setAttribute("src", element.url);
        
                });

                bx_cores.appendChild(circle_cores);
                
            }

            const desc = document.createElement("div");
            desc.setAttribute("class","desc");

            console.log("desc "+item.categoria);

                if (item.categoria) {

                    if (item.categoria == "Edredom") {

                        const li_catDesc = document.createElement("div");
                        li_catDesc.setAttribute("class","li_catDesc");
                        li_catDesc.innerHTML = item.nomeProd;
                        desc.appendChild(li_catDesc);


                    }else if(item.categoria == "Cortina"){

                        const li_catDesc = document.createElement("div");
                        li_catDesc.setAttribute("class","li_catDesc");
                        li_catDesc.innerHTML = item.nomeProd;
                        desc.appendChild(li_catDesc);

                    }
                    
                }

        
            const btn_detalis = document.createElement("div");
            btn_detalis.setAttribute("class","btn_detalis");
            btn_detalis.innerHTML = "DETALHES";
            
        
        card.appendChild(bx_foto);
        card.appendChild(bx_cores);

        card.appendChild(desc);
        card.appendChild(btn_detalis);
        bx_foto.appendChild(img);
        container.appendChild(card);

    }

}); // fim do if

}

f1();

// const index_home = function(menu_initial){
//     menu_initial.map(function(item){
//         const initial = document.createElement("div");
//         initial.setAttribute("class","initial");
//         initial.addEventListener("click", function(){

//         //    menu centro

//             if (item.id == 1) {
//                 f1(item.cat);
//             }else if(item.id == 2){
//                 f1(item.cat);
//                 console.log(item.cat);
//             }

//             $(".initial").fadeOut();
        
//         });
//         initial.innerHTML = item.title;
//         c.appendChild(initial);
//     });
//  }

//  index_home(menu_initial);


   
    window.addEventListener("scroll", function(){

        const v = window.pageYOffset;
        // console.log(v);
           
    })


    function cardf(item){

        let image = item.url;
        
        let card =  "<div class='card'>";
            card += "<div class='bx_foto'>";
                card += "<img  class='img img2' src='"+image+"' />";
            card += "</div>";

            card += "<div class='bx_cores'>";

                card += "<div data-imagePr='"+image+"' class='circle_cores'></div>";
               
                item.cores.map(function(e){
                    console.log(e);
                    card += "<div data-image='"+e.url+"' class='circle_cores c2' style='background-color:"+e.cor+";' ></div>";
                    
                });

            card += "</div>";

            card += "<div class='bx_desc'>";
                card += "<div class='desc'>";
                    card += "<h2>"+item.nomeProd+"</h2><div><div class='col50'><p class='price'><span class='priceof'>2 Metros </span>"+item.price.m2+"</p></div><div class='col50'><p class='price'><span class='priceof'>3 Metros </span>"+item.price.m3+"</p></div></div>";
                card += "</div>";
            card += "</div>";
        card += "</div>";


        $(".c2").on("click", function(){
            alert("deu certo!");
        })

        return {
            card
        }

    }

    

    let ac = true;
    let indiceDados = contItem;

    console.log("window "+ $(window).height());
    console.log("document "+$(document).height());
    // console.log(dadosLength);
    console.log(contItem);

    

    $(window).scroll(function(){

        if ( $(window).scrollTop() >=  $(window).height() - 50 && indiceDados <= dadosLength) {

            if (filter_cat[indiceDados]) {

                console.log("segundo");

                const obj2 = {id:filter_cat[indiceDados].id, nome:filter_cat[indiceDados].nomeProd, url:filter_cat[indiceDados].url};
            
                const card = document.createElement("div");
                card.setAttribute("class","card");
                card.setAttribute("id", indiceDados+1);
                    const bx_foto = document.createElement("div");
                    bx_foto.setAttribute("class","bx_foto");
                    bx_foto.setAttribute("id","id-bx_foto");
                    
                        const img2 = document.createElement("img");
                        img2.setAttribute("class","img");
                        img2.addEventListener("click", function(){

                            modal(obj2);
                            $(".mod").fadeIn();

                        });

                        const url22 = filter_cat[indiceDados].url;
                        img2.setAttribute("src", filter_cat[indiceDados].url);
                    
                    const bx_cores = document.createElement("div");
                    bx_cores.setAttribute("class","bx_cores");
        
                    const circle_cores2 = document.createElement("div");
                    circle_cores2.setAttribute("class","circle_cores2 ativacao");
                    circle_cores2.setAttribute("data-ur", filter_cat[indiceDados].url);
                    circle_cores2.style.background = "#fff";
                    circle_cores2.addEventListener("click", function(e){

                        img2.setAttribute("src", url22);
        
                    });

                    bx_cores.appendChild(circle_cores2);
        
                    for (let indCores = 0; indCores < dados[indiceDados].cores.length; indCores++) {

                        const element = dados[indiceDados].cores[indCores];
                        
                        const circle_cores = document.createElement("div");
                        circle_cores.setAttribute("class","circle_cores");
                        circle_cores.style.background = element.cor;
        
                        circle_cores.addEventListener("click", function(){
         
                                img2.setAttribute("src", element.url);
                
                        });
        
                        bx_cores.appendChild(circle_cores);
                        
                    }
        
                    const desc = document.createElement("div");
                    desc.setAttribute("class","desc");
                    desc.innerHTML = "<h2>"+filter_cat[indiceDados].nomeProd+"</h2><div><div class='col50'><p class='price'><span class='priceof'>2 Metros</span>R$ "+filter_cat[indiceDados].price.m2+"</p></div><div class='col50'></h2><p class='price'><span class='priceof'>3 Metros </span>R$ "+filter_cat[indiceDados].price.m3+"</p></div></div>";
                
                
                card.appendChild(bx_foto);
                card.appendChild(bx_cores);
                card.appendChild(desc);
                bx_foto.appendChild(img2);
                container.appendChild(card);
                // console.log(item.nomeProd);
              

                // $("#id-cont").append( cardf(dados[indiceDados]).card );
                console.log(indiceDados);
                indiceDados +=1;

            }

            
            

        }
        
    });


   

   
    
    
    
    
       
    
    
    



   

