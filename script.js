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
    const total = cart.reduce((sum, price) => sum + price, 0);
    const itemCount = cart.length;
    
    // Обновляем текст в корзине
    cartInfo.innerHTML = `
        Ціна: ${total} грн <br>
        Кількість товарів: ${itemCount} <br>
        <button id="clear-cart">Очистити кошик</button>
        <button id="place-order">Оформити замовлення</button>
    `;
    
    // Слушатели для кнопок очистки и оформления заказа
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    document.getElementById('place-order').addEventListener('click', placeOrder);
}

// Функция для очистки корзины
function clearCart() {
    cart = [];
    updateCartInfo(); // Обновляем информацию о корзине
}

// Функция для оформления заказа (просто очищает корзину)
function placeOrder() {
    alert('Ваше замовлення прийнято!');
    clearCart(); // Очистить корзину после оформления
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
