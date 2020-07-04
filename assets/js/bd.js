

const bd = [];

function createProduct(id, nomeProd, price, cat, url, desc){
    bd.push({id:id, nomeProd:nomeProd, price:price , cat:cat, url:url, desc:desc});
}

createProduct(1, "Giovana", 38, "Edredom", "", "2,90 x 2,90");
createProduct(2, "Melissa", 38, "Edredom", "", "2,90 x 2,90");

createProduct(2, "Melissa", 38, "Cortina", "", "2,90 x 2,90");