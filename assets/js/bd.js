

const bd = [];

function createProduct(id, nomeProd, price, cat, url, desc, url){
    bd.push({id:id, nomeProd:nomeProd, price:price , cat:cat, url:url, desc:desc});
}

createProduct(1, "Edredom - Giovana", 38, "Edredom", "", "2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0005.jpg");
createProduct(2, "Edredom - Juliana", 38, "Edredom", "", "2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0008.jpg");
createProduct(2, "Edredom - Melissa", 38, "Edredom", "", "2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0010.jpg");
createProduct(2, "Edredom - Gabriela", 38, "Edredom", "", "2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0012.jpg");
createProduct(2, "Edredom - Rebeca", 38, "Edredom", "", "2,90 x 2,90","assets/imagens/r/IMG-20200616-WA0019.jpg");

createProduct(2, "Melissa", 38, "Cortina", "", "2,90 x 2,90","assets/imagens/c/cortina1.jpg");