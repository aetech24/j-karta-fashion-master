import { products } from "../data/men-and-women.js";
const shopProducts = document.querySelector('.shop_display');
import { cart, addToCart, getCartCount } from '../data/cart.js';
import { formatCurrency } from "./utils/money.js";

let shopDisplay = '';

function displayProducts(filteredProducts) {
   shopDisplay = '';
   filteredProducts.forEach((product) => {
      shopDisplay += `
         <div class="single_product">
            <a href="../singleproduct.html"><img src=${product.image} data-product-name='${product.name}' class='product_image' alt=""></a>
            <div class="single_product_detail">
               <p><small>Name</small>: ${product.name}</p>
               <p><small>Price</small>: ${formatCurrency(product.price)}</p>
               <button class='btn js-add-to-cart' data-product-id='${product.id}'>Add to Cart</button>
            </div>
         </div>
      `;
   });
   shopProducts.innerHTML = shopDisplay;

   document.querySelectorAll('.js-add-to-cart').forEach((button) => {
      button.addEventListener('click', () => {
         const productId = button.dataset.productId;
         addToCart(productId);
         updateCartQuantity();
      });
   });
}

function updateCartQuantity() {
   const cartQuantity = getCartCount();
   document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelector('.js-all').addEventListener('click', () => {
   displayProducts(products.men.shoes.concat(products.men.bags, products.women.shoes, products.women.bags));
});

document.querySelector('.js-men').addEventListener('click', () => {
   const menProducts = products.men.shoes.concat(products.men.bags);
   displayProducts(menProducts);
});

document.querySelector('.js-women').addEventListener('click', () => {
   const womenProducts = products.women.shoes.concat(products.women.bags);
   displayProducts(womenProducts);
});

// Initially display all products
displayProducts(products.men.shoes.concat(products.men.bags, products.women.shoes, products.women.bags));
updateCartQuantity();

