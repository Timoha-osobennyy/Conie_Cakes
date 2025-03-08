// Пример обработки события нажатия на кнопку "Заказать"
const orderButtons = document.querySelectorAll('.order-button');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
    });
});
