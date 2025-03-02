
let cart = [];


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {

        const productElement = this.closest('.tovar');
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        const product = {
            name: productName,
            price: productPrice
        };


        cart.push(product);
        updateCartStatistics();
    });
});

function updateCartStatistics() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    

    cartItems.innerHTML = '';

    cartCount.textContent = cart.length;

    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}грн`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);

    document.getElementById('cart-statistics').style.display = 'block';
}


function clearCart() {
    cart = []; 
    updateCartStatistics(); 
}


function closeCart() {
    document.getElementById('cart-statistics').style.display = 'none';
}


document.getElementById('cart-icon').addEventListener('click', function() {
    const cartStatistics = document.getElementById('cart-statistics');
    if (cartStatistics.style.display === 'block') {
        cartStatistics.style.display = 'none';
    } else {
        cartStatistics.style.display = 'block';
    }
});
