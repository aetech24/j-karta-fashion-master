export let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
    let matchingItem = cart.find(cartItem => cartItem.productId === productId);

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({ productId, quantity: 1 });
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    cart = cart.filter(cartItem => cartItem.productId !== productId);
    saveToStorage();
}

export function getCartCount() {
    return cart.reduce((count, cartItem) => count + cartItem.quantity, 0);
}

export function getTotalPrice(products) {
    return cart.reduce((total, cartItem) => {
        const product = products.find(product => product.id === cartItem.productId);
        return total + (product.price * cartItem.quantity);
    }, 0);
}
