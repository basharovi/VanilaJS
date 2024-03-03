let product1 = {
  id: 1,
  name: "pen",
  quantity: 10,
};

let product2 = {
  id: 2,
  name: "pen2",
};

let newProduct = product1;
newProduct = product2;
let updatedProduct = { ...product1, ...product2 };
let updatedProduct1 = { product1 };
let updatedProduct2 = { ...product1 };
let updatedProduct3 = { ...product2, sold: 45, id: 5 };
let updatedProduct4 = { product1, sold: 45 };
