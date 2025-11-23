const products_block = document.getElementById('products_block');
const cart_item_block = document.getElementById('cart_item_block');
const cart_price_block = document.getElementById('cart_price_block');
const cart_quantity_block = document.getElementById('cart_quantity_block');
const cart_total_block = document.getElementById('cart_total_block');

const products = [];
const cart = [];
const cart_total = 0;

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products/');
    products.push(...await response.json());
}

function renderProducts() {
    products.forEach(product => {
        const product_element = document.createElement('div');
        product_element.classList.add('product');

        // image
        const image_element = document.createElement('div');
        image_element.classList.add('product-image');

        const product_image_element = document.createElement('img');
        product_image_element.src = product.image;
        image_element.appendChild(product_image_element)

        //title
        const product_title_element = document.createElement('h2');
        product_title_element.innerText = product.title;

        // description
        const product_description_element = document.createElement('p');
        product_description_element.innerText = product.description;

        // price + add to cart button block
        const price_addToCart_element = document.createElement('div');
        price_addToCart_element.classList.add('price-add-to-cart');

        const product_price_element = document.createElement('div');
        product_price_element.classList.add('product-price');
        product_price_element.innerText = product.price + " $";
        price_addToCart_element.appendChild(product_price_element);

        const product_add_to_cart_element = document.createElement('button');
        product_add_to_cart_element.innerText = 'Add to cart';
        price_addToCart_element.appendChild(product_add_to_cart_element);

        // add to cart button
        product_add_to_cart_element.addEventListener('click', () => {
            cart.push(product);
            renderCart();
        })

        product_element.appendChild(image_element);
        product_element.appendChild(product_title_element);
        product_element.appendChild(product_description_element);
        product_element.appendChild(price_addToCart_element);

        products_block.appendChild(product_element);
    })
}

function renderCart() {
    cart.forEach(product => {
        const cart_product_element = document.createElement('div');
        cart_product_element.classList.add('cart-product');

        // title + image
        const cart_product_image_element = document.createElement('div');
        cart_product_image_element.classList.add('cart-product-image');
        const cart_product_image = document.createElement('img');
        cart_product_image.classList.add('cart-img');
        cart_product_image.src = product.image;
        cart_product_image_element.appendChild(cart_product_image);

        const cart_product_title_element = document.createElement('h2');
        cart_product_title_element.innerText = product.title;

        cart_product_element.appendChild(cart_product_image_element);
        cart_product_element.appendChild(cart_product_title_element);

        cart_item_block.appendChild(cart_product_element);

        // price
        const cart_product_price_element = document.createElement('div');
        cart_product_price_element.innerText = product.price + " $";

        cart_price_block.appendChild(cart_product_price_element);

        // quantity
        //pass
        const cart_product_quantity_element = document.createElement('div');

        const cart_product_remove_from_cart_element = document.createElement('button');
        cart_product_remove_from_cart_element.innerText = 'Remove';
        cart_product_quantity_element.appendChild(cart_product_remove_from_cart_element);

        cart_quantity_block.appendChild(cart_product_quantity_element);

        // remove from cart button
        cart_product_remove_from_cart_element.addEventListener('click', () => {
            cart.splice(cart.indexOf(product), 1);
            renderCart();
        })


    })
}



async function init() {
    await getProducts();
    renderProducts();
    renderCart();
}

init();
