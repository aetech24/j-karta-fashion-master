import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/product.js";
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = '';

cart.forEach((cartItem) => {

   const productId = cartItem.productId;

   let matchingProduct;

   products.forEach((product) => {
      if(product.id === productId){
         matchingProduct = product
      }
   });
   console.log(matchingProduct);
   
   cartSummaryHTML += `

   <div class="cartitem_details_grid js-cart-item-container-${matchingProduct.id}">
      <div class="product_image">
      <img src="${matchingProduct.image}">

      <div class="product_name">
         <p>${matchingProduct.name}</p>
      </div>
      </div>

    <div class="cart_items_details_container">
      
      <div class="cart_item_details">
         <div class="product_prices">
            <div class="name">Price</div>
            <p>${formatCurrency(matchingProduct.price)}</p>
         </div>
         <div class="product_quantity">
            <div class="name">Quantity</div>
            <p class="quantity_lable">${cartItem.quantity}</p>
         </div>
         <div class="product_quantity">
            <div class="name">Sub total</div>
            <p class="quantity_lable">${formatCurrency(matchingProduct.price * cartItem.quantity)}</p>
         </div>
      </div>
      <div class="delete">
         <button class="btn js-delete-link" data-product-id="${matchingProduct.id}">
            Remove X
         </button>

         <button class="btn js-add-link" data-product-id="${matchingProduct.id}">
            Update +
         </button>
      </div>
      </div>

      <div class="delivery_container">
         <h4>Choose Delivery Option</h4>

         <div class="delivery_option">
            <div class="pick_up option">
               <div>
                  <input type="radio" placeholder="pick up" name="${matchingProduct.id}">
                  <span>Pick up</span>
               </div>
               <p>gh 00</p>
            </div>

            <div class="delivery option">
                <div>
                  <input type="radio" placeholder="pick up" name="${matchingProduct.id}">
                  <span>Delivery</span>
               </div>
               <p>gh 50</p>
            </div>

         </div>
      </div>
   </div>
   
   
   `
});

document.querySelector('.cartitem_details_grid_container').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
   link.addEventListener('click', () => {
     const productId = link.dataset.productId;
     removeFromCart(productId);
     console.log(cart)


      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove()
   })
})
