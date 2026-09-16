const productsArray = [
    {
        icon: "apple-whole",
        productName: "Apples",
        price: 2.50,
        quantity: 3,
    },
    {
        icon: "bread-slice",
        productName: "Bread",
        price: 1.80,
        quantity: 2
    },
    {
        icon: "mug-hot",
        productName: "Coffee",
        price: 7.50,
        quantity: 1
    },
    {
        icon: "headphones",
        productName: "Headphones",
        price: 45.00,
        quantity: 1
    },
    {
        icon: "cookie",
        productName: "Chocolate",
        price: 3.20,
        quantity: 4
    }
];

const productList = document.getElementById('product-list');
const products = productsArray.map(product => {
    return product.productName;
});
productsArray.forEach(product => {
    productList.innerHTML += `<div class="product-details">    
    <p class="product-name"><i class="fa-solid fa-${product.icon}"></i> ${product.productName}</p>
    <p class="product-price">€${product.price.toFixed(2)} x ${product.quantity}</p>
    <p class="subtotal">€${(product.price*product.quantity).toFixed(2)}</p>
    </div>`
}); 

const expensiveItems = document.getElementById('expensive-items');
const expensives = productsArray.filter(product => product.price > 10);

for (const product of expensives) {
    expensiveItems.innerHTML += `<div class="expensive-product">
    <p class="product-name"><i class="fa-solid fa-${product.icon}"></i> ${product.productName}</p>
    <p class="product-price">€${product.price.toFixed(2)}</p>
    </div>`
}

const numberOfProducts = document.getElementById('number-of-products');
numberOfProducts.textContent = productsArray.length;

const totalQuantity = document.getElementById('total-quantity');
totalQuantity.textContent = productsArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
}, 0);

const totalPrice = document.getElementById('total');
const getTotal = productsArray.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue.price * currentValue.quantity);
}, 0);
totalPrice.innerHTML = `€${getTotal.toFixed(2)}`;