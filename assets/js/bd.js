

const bd = [];

function createProduct(id, nomeProd, price, cat, slogan, desc, url, cor,descri){
    bd.push({id:id, nomeProd:nomeProd, price:price , cat:cat, url:url, slogan:slogan, cores:cor, desc:descri});
}


// CASAL
createProduct("casal" + 1,
    "Cobre Leito casal -  Juliana", 
    38, "Edredom", 
    "Casal","2,90 x 2,90",
    "assets/imagens/r/IMG-20200616-WA0005.jpg",
    [
        {"cor":"Rose", "cod":"#eca5b6", "url":"assets/imagens/r/IMG-20200616-WA0005.jpg"},
        {"cor":"Azul", "cod":"#3ac2eb", "url":"assets/imagens/r/IMG-20200616-WA0006.jpg"},
        {"cor":"Cinza", "cod":"#424b50", "url":"assets/imagens/r/IMG-20200616-WA0007.jpg"},
    ],
    [
        {"type":"title", "content":"Kit Casal Quem 9 Peças"},
        {"type":"description", "content":"Contém"},
        {"type":"description", "content":"01 Cobre leito 2,60m x 2,60m"},
        {"type":"description", "content":"02 Porta Travesseiro 70cm x 50cm"},
        {"type":"description", "content":"02 Almofadaa 48cm x 48cm"},
        {"type":"description", "content":"02 Refis de Travesseiro 65cm x 45cm"},
        {"type":"description", "content":"02 Refis de Almofada 48cm x 48cm"},

        {"type":"title", "content":"Kit Casal King 9 peças"},
        {"type":"description", "content":"Contém"},
        {"type":"description", "content":"01 Cobre leito 2,90m x 2,80m"},
        {"type":"description", "content":"02 Porta Travesseiro 70cm x 50cm"},
        {"type":"description", "content":"02 Almofadaa 48cm x 48cm"},
        {"type":"description", "content":"02 Refis de Travesseiro 65cm x 45cm"},
        {"type":"description", "content":"02 Refis de Almofada 48cm x 48cm"},

        {"type":"title", "content":"Conposição Cobre leito"},
        {"type":"description", "content":"Tecido estampado: 80% Algodão 20% Poliéster"},
        {"type":"description", "content":"Tecido liso: 100% Poliéster"},
        {"type":"description", "content":"Enchimento: 100% Poliéster "},

        {"type":"title", "content":"Composição dos Refis"},
        {"type":"description", "content":"Externo: 100% Polipropeno"},
        {"type":"description", "content":"Enchomento: 100% Poliuretano"},

        {"type":"title", "content":"Instruções de Lavagem"},
        {"type":"description", "content":"Vide etiqueta interna do produto"},
        
    ]
);

console.log(bd);
createProduct("casal" + 2, 
    "Edredom - Giovana", 
    38, "Edredom", "Casal",
    "2,90 x 2,90",
    "assets/imagens/r/IMG-20200616-WA0008.jpg",
    [
        {"cor":"Vermelho", "cod":"#da0904", "url":"assets/imagens/r/IMG-20200616-WA0008.jpg"},
        {"cor":"Azul Marinho", "cod":"#032451", "url":"assets/imagens/r/IMG-20200616-WA0009.jpg"},
      
    ],
    [
        {"type":"title", "content":"Edredom Giovana"},
        {"type":"description", "content":"Tamanho"},
    ]
    );
createProduct("casal" + 3, "Edredom - Melissa", 38, "Edredom", "Casal","2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0010.jpg");
createProduct("casal" + 4, "Edredom - Gabriela", 38, "Edredom", "Casal","2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0012.jpg");

// SOLTEIRO
createProduct("solt" + 1, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro1.jpeg");
createProduct("solt" + 2, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro2.jpeg");
createProduct("solt" + 3, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro3.jpeg");
createProduct("solt" + 4, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro4.jpeg");
createProduct("solt" + 5, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro5.jpeg");
createProduct("solt" + 6, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro6.jpeg");

// CORTINA
createProduct("cort" + 1, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina1.jpeg");
createProduct("cort" + 2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina2.jpeg");
createProduct("cort" + 3, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina4.jpeg");
createProduct("cort" + 4, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina5.jpeg");
createProduct("cort" + 5, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina6.jpeg");
createProduct("cort" + 6, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina7.jpeg");
createProduct("cort" + 7, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina8.jpeg");
createProduct("cort" + 8, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina9.jpeg");
createProduct("cort" + 9, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina10.jpeg");

// console.log(bd);