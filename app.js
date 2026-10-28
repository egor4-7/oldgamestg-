// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем приложение на весь экран

// Список товаров (ваша выпечка)
const products = [
    { id: 1, name: "Круассан классический", price: 150, desc: "Свежий хрустящий круассан" },
    { id: 2, name: "Булка с корицей", price: 200, desc: "Ароматная булочка с глазурью" },
    { id: 3, name: "Плетенка с маком", price: 180, desc: "Сдобная выпечка с маковой начинкой" }
];

let cart = {};

const catalogEl = document.getElementById('catalog');
const cartItemsEl = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const orderBtn = document.getElementById('order-btn');

// Отрисовка каталога
function renderCatalog() {
    catalogEl.innerHTML = '';
    products.forEach(product => {
        let itemEl = document.createElement('div');
        itemEl.className = 'item';
        itemEl.innerHTML = `
            <div class="item-info">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <p><b>${product.price} ₽</b></p>
            </div>
            <button class="btn" onclick="addToCart(${product.id})">В корзину</button>
        `;
        catalogEl.appendChild(itemEl);
    });
}

// Добавление в корзину
function addToCart(id) {
    if (!cart[id]) {
        cart[id] = { ...products.find(p => p.id === id), quantity: 0 };
    }
    cart[id].quantity += 1;
    updateCart();
}

// Обновление корзины
function updateCart() {
    let html = '';
    let total = 0;
    let hasItems = false;

    for (let id in cart) {
        if (cart[id].quantity > 0) {
            hasItems = true;
            html += `<div>${cart[id].name} x${cart[id].quantity} — ${cart[id].price * cart[id].quantity} ₽</div>`;
            total += cart[id].price * cart[id].quantity;
        }
    }

    cartItemsEl.innerHTML = hasItems ? html : 'Пусто';
    totalPriceEl.innerText = total;
    orderBtn.disabled = !hasItems;
}

// Кнопка оплаты (отправка данных боту)
orderBtn.addEventListener('click', () => {
    let orderData = JSON.stringify(cart);
    // Отправляем данные обратно в Telegram-бот и закрываем приложение
    tg.sendData(orderData);
});

renderCatalog();
