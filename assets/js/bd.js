

const bd = [];

function createProduct(id, nomeProd, price, cat, slogan, desc, url){
    bd.push({id:id, nomeProd:nomeProd, price:price , cat:cat, url:url, slogan:slogan, desc:desc});
}


// CASAL
createProduct(1, "Edredom - Giovana", 38, "Edredom", "Casal","2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0005.jpg");
createProduct(2, "Edredom - Juliana", 38, "Edredom", "Casal","2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0008.jpg");
createProduct(2, "Edredom - Melissa", 38, "Edredom", "Casal","2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0010.jpg");
createProduct(2, "Edredom - Gabriela", 38, "Edredom", "Casal","2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0012.jpg");
createProduct(2, "Edredom - Rebeca", 38, "Edredom", "Casal","2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0010.jpg");

// SOLTEIRO
createProduct(2, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro1.jpeg");
createProduct(2, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro2.jpeg");
createProduct(2, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro3.jpeg");
createProduct(2, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro4.jpeg");
createProduct(2, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro5.jpeg");
createProduct(2, "Edredom - Rebeca", 38, "Edredom", "Solteiro","2,90 x 2,90","assets/imagens/solteiro/solteiro6.jpeg");


// CORTINA
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina1.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina2.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina3.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina4.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina5.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina6.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina7.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina8.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina9.jpeg");
createProduct(2, "Melissa", 38, "Cortina", "Cortina","2,90 x 2,90","assets/imagens/cortina/cortina10.jpeg");

console.log(bd);