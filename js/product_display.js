import { products } from "../data/product.js";

// Select the product display container
const productDisplayElement = document.querySelector('.product_display');

let filteredProducts = products;  // Store the current filtered products
let currentPage = 1;
const itemsPerPage = 6;  // Number of items per page

// Function to display products based on the current page
function displayProducts() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage;
  const productsToDisplay = filteredProducts.slice(start, end);

  // Clear the display and render new products
  productDisplayElement.innerHTML = '';
  
  productsToDisplay.forEach(product => {
    productDisplayElement.innerHTML += `
      <div class="product-item">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₵${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });
}

// Initially, display all products when the page loads
document.addEventListener('DOMContentLoaded', () => {
   console.log('Displaying products...'); // Check if it's being called
   displayProducts();
});

// Function to paginate the products
// function changePage(direction) {
//   if (direction === 'next') {
//     if (currentPage * itemsPerPage < filteredProducts.length) {
//       currentPage++;
//     }
//   } else if (direction === 'prev') {
//     if (currentPage > 1) {
//       currentPage--;
//     }
//   }
//   displayProducts(); // Update the displayed products
//   document.getElementById('pageNumber').innerText = currentPage;
// }

// Function to filter products based on category (men, women, all)
function filterProducts(category) {
  if (category === 'all') {
    filteredProducts = products;  // Display all products
  } else if (category === 'men') {
    filteredProducts = products.filter(product => product.men);  // Show only men's products
  } else if (category === 'women') {
    filteredProducts = products.filter(product => product.women);  // Show only women's products
  }
  currentPage = 1;  // Reset to page 1 when a new filter is applied
  displayProducts(); // Update the displayed products
}

// Function to sort products by price or name
// function sortProducts() {
//   const sortBy = document.getElementById('sortBy').value;
//   if (sortBy === 'name') {
//     filteredProducts.sort((a, b) => a.name.localeCompare(b.name));  // Sort by name
//   } else if (sortBy === 'price') {
//     filteredProducts.sort((a, b) => a.price - b.price);  // Sort by price
//   }
//   displayProducts(); // Update the displayed products
// }
