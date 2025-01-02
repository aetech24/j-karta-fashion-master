import { products } from "../data/product.js";
const relatedProducts = document.querySelector('.related_product_container')
//import { matchingProduct } from "./shop.js"

let singleProduct ;

// products.map((product) => {
//    singleProduct += `
//        <div class="single_product_image_container">
//             <div class="main_product_image">
//                <img src="${product.image} alt="">
//             </div>

//             <div class="sub_products">
//                ${product.sub_image}
//             </div>
//          </div>

//          <div class="single_product_details">
//             <div class="product_name">
//                <h4>${product.name}</h4>
//             </div>

//             <div class="product_price">
//                <p><small>Price: </small>${product.price}</p>
//             </div>

//             <div class="btns">
//                <button class="btn form_btn js-add-to-cart">Add to Cart</button>

//             </div> 

//             <div class="product_details_text">
//                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et ipsum aperiam exercitationem molestias cum?</p>
//             </div>

//             <div class="product_size">
//                <p><small>Size: </small> ${product.size}</p>
//             </div>

//             <div class="shipping_details">
//                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, suscipit exercitationem magnam saepe, ipsum veniam quos ratione tempora totam, minima impedit fugit id adipisci voluptate deserunt! Sunt maiores repellat quod.</p>
//             </div>
//          </div>
//    `

//    if(matchingProduct){
//       document.querySelector('.single_product_container').innerHTML = singleProduct;
//    }
// })

let relatedProductHtml = ''

products.map((product) => {
   relatedProductHtml += `
      <div class="related_products">
          <img src='../assets/product-images/${product.image}' alt="">
      </div>
   `
})
relatedProducts.innerHTML = relatedProductHtml;

document.addEventListener('DOMContentLoaded', () => {
    const menMenu = document.querySelector('.men');
    const womenMenu = document.querySelector('.women');

    menMenu.addEventListener('click', () => {
        menMenu.classList.toggle('active');
    });

    womenMenu.addEventListener('click', () => {
        womenMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!menMenu.contains(e.target)) {
            menMenu.classList.remove('active');
        }
        if (!womenMenu.contains(e.target)) {
            womenMenu.classList.remove('active');
        }
    });
});
