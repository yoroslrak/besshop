let cart = [];

// Получаем все кнопки "Добавить в корзину"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Получаем элемент для отображения корзины
const cartIcon = document.querySelector('.koshik');
const cartInfo = document.createElement('div');
cartInfo.classList.add('cart-info');
cartIcon.parentElement.appendChild(cartInfo);

// Функция для добавления товара в корзину
function addToCart(product) {
    // Получаем цену товара
    const price = parseInt(product.getAttribute('data-price'));
    // Добавляем товар в корзину (цену)
    cart.push(price);
    updateCartInfo();
}

// Функция для обновления информации о корзине
function updateCartInfo() {
    // Считаем общую цену
    const total = cart.reduce((sum, price) => sum + price, 0);
    // Обновляем текст в корзине
    cartInfo.textContent = `Ціна: ${total} грн`;
}

// Добавляем обработчики событий на кнопки добавления товара в корзину
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.tovar');
        addToCart(product);
    });
});

// Показываем корзину при наведении на иконку
cartIcon.addEventListener('mouseover', () => {
    cartInfo.style.display = 'block';
});

// Скрываем корзину, когда мышь покидает иконку
cartIcon.addEventListener('mouseout', () => {
    cartInfo.style.display = 'none';
});
