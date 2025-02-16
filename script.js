// Знаходимо всі кнопки "Додати в кошик"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Додаємо подію на кожну кнопку
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Знаходимо контейнер товару
        const tovar = e.target.closest('.tovar');
        
        // Отримуємо ціну товару
        const price = tovar.getAttribute('data-price');
        
        // Знаходимо елемент для ціни в кошику
        const cartPrice = document.getElementById('cartPrice');
        
        // Оновлюємо текст ціни в кошику
        cartPrice.textContent = `Ціна: ${price} грн`;
    });
});
