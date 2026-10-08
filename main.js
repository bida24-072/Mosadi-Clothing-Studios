/* ============================================
   MOSADI CLOTHING STUDIOS — Main Script
   Includes: Products · Cart · Filters · Forms
============================================ */

/* ============================================
   PRODUCT DATA
============================================ */
const products = [
    {
        id: 1,
        name: "1966 Prestige — Orange Hoodie",
        category: "hoodies",
        collection: "1966 Prestige",
        price: 550,
        img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "Mme Embroidered Tee — Black",
        category: "tshirts",
        collection: "Signature",
        price: 399,
        img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 3,
        name: "Tsala Wide-Leg Trousers — Cream",
        category: "trousers",
        collection: "Signature",
        price: 500,
        img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 4,
        name: "Botswana 1966 Tee — Deep Green",
        category: "tshirts",
        collection: "1966 Prestige",
        price: 399,
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 5,
        name: "Winter Camo Hoodie — Grey",
        category: "hoodies",
        collection: "Winter Collection",
        price: 500,
        img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 6,
        name: "Mosadi Cap",
        category: "accessories",
        collection: "Winter Collection",
        price: 180,
        img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 7,
        name: "Mme Sweater — Burnt Orange",
        category: "hoodies",
        collection: "Signature",
        price: 780,
        img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 8,
        name: "Mosadi Tote Bag — Natural",
        category: "accessories",
        collection: "Accessories",
        price: 550,
        img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 9,
        name: "Mosadi Full Set",
        category: "sets",
        collection: "1966 Prestige",
        price: 900,
        img: "https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: "New"
    },
    {
        id: 10,
        name: "Signature Bucket Hat — Black",
        category: "accessories",
        collection: "Accessories",
        price: 200,
        img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 11,
        name: "Mosadi Bag — Earth",
        category: "accessories",
        collection: "Winter Collection",
        price: 150,
        img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    },
    {
        id: 12,
        name: "Mosadi Vest — Khaki",
        category: "accessories",
        collection: "Accessories",
        price: 280,
        img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        badge: null
    }
];

/* ============================================
   CART — Persistent via localStorage
============================================ */
let cart = JSON.parse(localStorage.getItem('mosadiCart')) || [];

function saveCart() {
    localStorage.setItem('mosadiCart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId, event) {
    event?.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();

    // Button feedback
    if (event?.currentTarget) {
        const btn = event.currentTarget;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Added';
        btn.style.background = 'var(--olive)';
        btn.style.color = 'var(--cream)';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
        }, 1200);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQuantity(productId, newQty) {
    const qty = parseInt(newQty);
    if (qty <= 0) return removeFromCart(productId);
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity = qty;
        saveCart();
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartUI() {
    // Badge count on nav
    const badge = document.getElementById('cart-count');
    if (badge) {
        const count = getCartCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }

    // Cart drawer items
    const container = document.getElementById('cart-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn btn-outline" style="margin-top: 15px;">Browse Shop</a>
            </div>
        `;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">P${item.price.toFixed(2)}</p>
                    <div class="cart-item-qty">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
    }

    // Total
    const totalEl = document.getElementById('cart-total');
    if (totalEl) totalEl.textContent = `P${getCartTotal().toFixed(2)}`;
}

function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.style.overflow = drawer?.classList.contains('open') ? 'hidden' : '';
}

function closeCart() {
    const drawer = document.getElementById('cart-drawer');
    const overlay = document.getElementById('cart-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

function checkoutCart() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    const items = cart.map(i => `• ${i.quantity}× ${i.name} — P${(i.price * i.quantity).toFixed(2)}`).join('\n');
    const total = `P${getCartTotal().toFixed(2)}`;
    const message = `Dumela Mosadi Clothing Studios! 👋\n\nI'd like to order:\n\n${items}\n\nTotal: ${total}\n\nPlease confirm availability and delivery. Ke a leboga!`;

    const phone = '26771234567';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

/* ============================================
   RENDER SHOP GRID
============================================ */
function renderShop(filter = 'all') {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;

    const list = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    grid.innerHTML = '';

    if (list.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--grey); padding: 60px 0;">No products in this category yet.</p>';
        return;
    }

    list.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <div class="product-img">
                    <img src="${p.img}" alt="${p.name}" loading="lazy">
                    <span class="product-tag">${p.collection}</span>
                    ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
                    <button class="product-add" onclick="addToCart(${p.id}, event)" aria-label="Add to cart">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <span class="product-cat">${p.category}</span>
                    <div class="product-price">P${p.price.toFixed(2)}</div>
                </div>
            </div>
        `;
    });
}

/* ============================================
   FILTER
============================================ */
function filterShop(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderShop(category);
}

/* ============================================
   FORMS
============================================ */
function submitContact(e) {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value || 'friend';
    alert(`Thank you, ${name}! Your message has been received. We'll be in touch within 24 hours.\n\n— Mosadi Clothing Studios`);
    e.target.reset();
}

function submitNewsletter(e) {
    e.preventDefault();
    alert("Thank you for subscribing to Mosadi updates. You'll hear from us soon.");
    e.target.reset();
}

/* ============================================
   INIT
============================================ */
document.addEventListener('DOMContentLoaded', () => {
    renderShop('all');
    updateCartUI();
});
