function getProducts() {
    var products = ["Apple", "Banana", "Orange"];

    function getProductById (id) {
        let product = products[id];

        if(product)
            return product;
        
        return "Product not found";
    }
    
    return getProductById;
}

console.log(getProducts()(5));

var products = getProducts();

console.log(products(1));
console.log(products(2));
console.log(products(3));