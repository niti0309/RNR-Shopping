let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Women Blue Maxi Dress',
        image: 'c1.jpg',
        price:  899
    },
    {
        id: 2,
        name: 'Maroon Dress',
        image: 'w1.jpg',
        price: 499
    },
    {
        id: 3,
        name: 'Party-wear high heels',
        image: 'h1.jpg',
        price: 650
    },
    {
        id: 4,
        name: 'Chunky Style Boots',
        image: 'b2.jpg',
        price: 999
    },
    {
        id: 5,
        name: 'Teddy Bear Candle',
        image: 'can02.jpg',
        price:  450
    },
    {
        id: 6,
        name: 'All-shades Lipstick Pack',
        image: 's41.jpg',
        price:  450
    },
{
        id: 7,
        name: 'Teal Stylish Shirt',
        image: 'gallery-1.jpg',
        price:  650
    },
{
        id: 8,
        name: 'Everyday-wear Joggers',
        image: 'product-3.jpg',
        price: 450
    },
{
        id: 9,
        name: 'Off-white Shoes for Men',
        image: 'product-5.jpg',
        price:  550
    },{
        id: 10,
        name: 'Comfy Sneakers for Men',
        image: 'product-2.jpg',
        price:  399
    },{
        id: 11,
        name: 'Pearl Necklace',
        image: 'p6.jpg',
        price:  299
    },{
        id: 12,
        name: 'Rosegold Bracelet',
        image: 'p7.jpg',
        price:  399
    },{
        id: 13,
        name: 'Belt for Men',
        image: 'e1.jpg',
        price:  150
    },{
        id: 14,
        name: 'Stylish watch for Men',
        image: 'n1.jpg',
        price:  899
    },{
        id: 15,
        name: 'Kiwi',
        image: 'f5.jpg',
        price:  200
    },{
        id: 16,
        name: 'Dark Fantasy',
        image: 'i1.jpg',
        price:  150
    },{
        id: 17,
        name: 'It Starts With Us',
        image: 'b-1.jpg',
        price:  550
    },{
        id: 18,
        name: 'Moon Lamp',
        image: 'hd13.jpg',
        price:  650
    }




];
let listCarts  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key){
    if(listCarts[key] == null){
        // copy product form list to list Cart
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    }
    reloadCart();
}
function reloadCart(){
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCarts.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCarts[key];
    }else{
        listCarts[key].quantity = quantity;
        listCarts[key].price = quantity * products[key].price;
    }
    reloadCart();
}