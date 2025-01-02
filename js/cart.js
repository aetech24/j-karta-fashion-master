// Initialize cart in local storage if not already initialized
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Function to add an item to the cart
export function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')); // Retrieve current cart
  const item = cart.find(product => product.productId === productId);

  if (item) {
    item.quantity += 1; // Increment quantity if item already in cart
  } else {
    cart.push({ productId, quantity: 1 }); // Add new item
  }

  localStorage.setItem('cart', JSON.stringify(cart)); // Update cart in local storage
  updateCartCount();
  alert('Item has been added to your cart!');
}

// Function to update the cart count
export function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll('.cart_count p').forEach(element => {
    element.textContent = cartCount;
  });
}

// Function to remove an item from the cart
export function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart = cart.filter(cartItem => cartItem.productId !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Function to get the total price of items in the cart
export function getTotalPrice(products) {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart.reduce((total, cartItem) => {
    const product = products.find(product => product.id === cartItem.productId);
    return total + (product.price * cartItem.quantity);
  }, 0);
}

// Function to get the cart count
export function getCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart.reduce((count, cartItem) => count + cartItem.quantity, 0);
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll('.js-add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.getAttribute('data-product-id');
    addToCart(productId);
  });
});

// Update cart count on page load
updateCartCount();
