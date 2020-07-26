

const bd = [];

function createProduct(id, nomeProd, price, cat, slogan, desc, url, descri){
    bd.push({id:id, nomeProd:nomeProd, price:price , cat:cat, url:url, slogan:slogan, desc:descri});
}


// CASAL
createProduct("casal" + 1,
    "Edredom - Juliana", 
    38, "Edredom", 
    "Casal","2,90 x 2,90",
    "assets/imagens/r/IMG-20200616-WA0005.jpg",
    [
        {"type":"title", "content":"Edredom Juliana"},
        {"type":"description", "content":"Tamanho"}
    ]
);

console.log(bd);
createProduct("casal" + 2, 
    "Edredom - Giovana", 
    38, "Edredom", "Casal",
    "2,90 x 2,90",
    "assets/imagens/r/IMG-20200616-WA0008.jpg",
    [
        {"type":"title", "content":"Edredom Giovana"},
        {"type":"description", "content":"Tamanho"}
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