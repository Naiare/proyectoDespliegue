document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Ositos de Goma', category: 'gomitas', price: 2.99, img: 'gummyBears' },
        { id: 2, name: 'Caramelos Ácidos', category: 'ácidos', price: 3.49, img: 'sour' },
        { id: 3, name: 'Chocolates', category: 'dulces', price: 4.99, img: 'chocolates' },
        { id: 4, name: 'Piruletas', category: 'dulces', price: 1.99, img: 'lollipops' },
        { id: 1, name: 'Ositos de Goma', category: 'gomitas', price: 2.99, img: 'gummyBears' },
        { id: 2, name: 'Caramelos Ácidos', category: 'ácidos', price: 3.49, img: 'sour' },
        { id: 3, name: 'Chocolates', category: 'dulces', price: 4.99, img: 'chocolates' },
        { id: 4, name: 'Piruletas', category: 'dulces', price: 1.99, img: 'lollipops' },
        { id: 1, name: 'Ositos de Goma', category: 'gomitas', price: 2.99, img: 'gummyBears' },
        { id: 2, name: 'Caramelos Ácidos', category: 'ácidos', price: 3.49, img: 'sour' },
        { id: 3, name: 'Chocolates', category: 'dulces', price: 4.99, img: 'chocolates' },
        { id: 4, name: 'Piruletas', category: 'dulces', price: 1.99, img: 'lollipops' },
    ];

    const productContainer = document.getElementById('products');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');
    const cartCount = document.getElementById('cart-count');

    // Recuperar carrito del localStorage o inicializar vacío
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Actualizar el contador del carrito
    function updateCartCount() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    function renderProducts() {
        const searchQuery = searchInput.value.toLowerCase();
        const filterValue = filterSelect.value;

        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery);
            const matchesFilter = filterValue === 'all' || product.category === filterValue;
            return matchesSearch && matchesFilter;
        });

        productContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="/images/${product.img}.jpg" alt="${product.name}" class="product-image">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Añadir al carrito</button>
            `;
            productContainer.appendChild(productCard);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === Number(productId));
        if (product) {
            const existingProduct = cart.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1; // Incrementar la cantidad
            } else {
                cart.push({ ...product, quantity: 1 }); // Añadir nuevo producto con cantidad inicial 1
            }
            saveCartToLocalStorage(); // Guardar el carrito actualizado
            updateCartCount(); // Actualizar contador
        }
    }

    productContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        }
    });

    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    searchInput.addEventListener('input', renderProducts);
    filterSelect.addEventListener('change', renderProducts);

    // Comprobar el carrito existente en localStorage al cargar la página
    updateCartCount();
    renderProducts();
});
