let cart = [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    alert(`Welcome, ${username}! To (SJT) Company for  shoping ${email}.`);
});

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">OTHER PURCHASE</button>`;
        cartItems.appendChild(li);
    });

    document.getElementById('cartTotal').innerText = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}



