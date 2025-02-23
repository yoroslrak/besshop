// Масив для зберігання товарів у кошику
let cart = [];

// Додаємо подію на кожну кнопку "Додати в кошик"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Отримуємо інформацію про товар з елементів даного товару
        const productElement = this.closest('.tovar');
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        // Створюємо об'єкт товару
        const product = {
            name: productName,
            price: productPrice
        };

        // Додаємо товар в масив кошика
        cart.push(product);
        updateCartStatistics();
    });
});

// Функція для оновлення статистики кошика
function updateCartStatistics() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Очищаємо список перед оновленням
    cartItems.innerHTML = '';

    // Оновлюємо кількість товарів
    cartCount.textContent = cart.length;

    // Оновлюємо загальну суму
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}грн`;
        cartItems.appendChild(li);
    });

    // Оновлюємо загальну суму
    cartTotal.textContent = total.toFixed(2);

    // Показуємо блок статистики кошика
    document.getElementById('cart-statistics').style.display = 'block';
}

// Функція для очищення кошика
function clearCart() {
    cart = []; // Очищаємо масив кошика
    updateCartStatistics(); // Оновлюємо статистику
}

// Функція для закриття статистики кошика
function closeCart() {
    document.getElementById('cart-statistics').style.display = 'none';
}

// При натисканні на іконку кошика відкриваємо статистику
document.getElementById('cart-icon').addEventListener('click', function() {
    // Показуємо або ховаємо статистику кошика
    const cartStatistics = document.getElementById('cart-statistics');
    if (cartStatistics.style.display === 'block') {
        cartStatistics.style.display = 'none';
    } else {
        cartStatistics.style.display = 'block';
    }
});
