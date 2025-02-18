document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const clearCartButton = document.getElementById('clear-cart');

    let cart = JSON.parse(localStorage.getItem('cart'));

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function calculateTotal() {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }

    function renderCart() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Tu carrito está vacío. 🛒</p>';
            totalPriceElement.textContent = '$0.00';
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <h3>${item.name}</h3>
                <img src="/images/${item.img}.jpg" />
                <p>Precio: $${item.price.toFixed(2)}</p>
                <p>Cantidad: 
                    <button class="quantity-btn" data-action="decrease" data-index="${index}">-</button>
                    ${item.quantity}
                    <button class="quantity-btn" data-action="increase" data-index="${index}">+</button>
                </p>
                <button class="remove-item-btn" data-index="${index}">Eliminar</button>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        totalPriceElement.textContent = `$${calculateTotal()}`;
    }

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-btn')) {
            const index = e.target.getAttribute('data-index');
            const action = e.target.getAttribute('data-action');

            if (action === 'increase') {
                cart[index].quantity += 1;
            } else if (action === 'decrease' && cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }

            updateCart();
        }

        if (e.target.classList.contains('remove-item-btn')) {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        }
    });

    clearCartButton.addEventListener('click', () => {
        cart = [];
        updateCart();
    });

    renderCart();
});
