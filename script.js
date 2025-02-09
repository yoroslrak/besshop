
let cart = [];

// Отримуємо всі кнопки "Додати в кошик"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Отримуємо елемент для відображення кошика
const cartIcon = document.querySelector('.koshik');
const cartInfo = document.createElement('div');
cartInfo.classList.add('cart-info');
cartIcon.parentElement.appendChild(cartInfo);

// Функція для додавання товару в кошик
function addToCart(product) {
    // Отримуємо ціну товару
    const price = parseInt(product.getAttribute('data-price'));
    // Додаємо товар у кошик (ціна)
    cart.push(price);
    updateCartInfo();
}

// Функція для оновлення інформації про кошик
function updateCartInfo() {
    // Обчислюємо загальну ціну
    const total = cart.reduce((sum, price) => sum + price, 0);
    // Оновлюємо текст в кошику
    cartInfo.textContent = `Ціна: ${total} грн`;
}

// Додаємо слухачі подій на кнопки додавання товару в кошик
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.tovar');
        addToCart(product);
    });
});

// Показуємо кошик при наведенні на іконку
cartIcon.addEventListener('mouseover', () => {
    cartInfo.style.display = 'block';
});

// Приховуємо кошик, коли миша покидає іконку
cartIcon.addEventListener('mouseout', () => {
    cartInfo.style.display = 'none';
});
