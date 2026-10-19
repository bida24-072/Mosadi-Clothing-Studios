/* ============================================
   MOSADI CLOTHING STUDIOS — Main Script
============================================ */

/* ============================================
   PRODUCT DATA
============================================ */
const products = [
   { id: 1, name: "Seetebosigo — Black Hoodie", category: "hoodies", collection: "1966 Prestige", price: 500, img: "IMG_4226.jpeg", badge: "Best Seller" },
   { id: 2, name: "Seetebosigo — Khaki,Green Sweater", category: "hoodies", collection: "1966 Prestige", price: 550, img: "IMG_3176%20(1).jpeg", badge: "Best Seller" },
    { id: 3, name: "Seetebosigo — Grey Hoodie", category: "hoodies", collection: "1966 Prestige", price: 500, img: "(Upload-from-mobile-1792027964)68F36A35-CA6E-47C7-A13A-5C4D4549B828.jpeg", badge: "Best Seller" },
     { id: 4, name: "Seetebosigo — Orange Mosadi Sweater", category: "hoodies", collection: "1966 Prestige", price: 550, img: "(Upload-from-mobile-1792027964)AF657FAB-39E7-48B9-85FD-C6B44A703530.jpeg", badge: "Best Seller" },
     { id: 5, name: "Seetebosigo — Black Sweater", category: "hoodies", collection: "1966 Prestige", price: 550, img: "(Upload-from-mobile-1792027964)F6A3FD19-1B8F-42D1-8A6A-379DBEB9B915.jpeg", badge: "Best Seller" },
     { id: 6, name: "Seetebosigo — Black Hoodie", category: "hoodies", collection: "1966 Prestige", price: 500, img: "(Upload-from-mobile-1792028043)3C668DD0-0075-46DB-A1C9-E2E9D59E0788.jpeg", badge: "Best Seller" },
     { id: 7, name: "Seetebosigo — Black Hoodie", category: "hoodies", collection: "1966 Prestige", price: 500, img: "(Upload-from-mobile-1792028043)F1F5AD12-EC86-4405-B3FB-0B67F27DAA45.jpeg", badge: "Best Seller" },
    { id: 8, name: "Mosadi oversized Tee — White", category: "tshirts", collection: "Signature", price: 399, img: "IMG_5121.jpeg", badge: null },
    { id: 9, name: "1966 Prestige Tee — White", category: "tshirts", collection: "Signature", price: 399, img: "IMG_2340%20(1).jpeg", badge: null },
    { id: 10, name: "Thari Tee — White", category: "tshirts", collection: "Signature", price: 399, img: "IMG_2138%20(1).jpeg", badge: null },
   { id: 11, name: "1966 Prestige Tee — Black", category: "trousers", collection: "Signature", price: 399, img: "IMG_3033.jpeg", badge: null },
   { id: 12, name: "Mosadi oversized Pants — Black", category: "trousers", collection: "Signature", price: 500, img: "(Upload-from-mobile-1792030157)49AEE730-1286-4262-8599-9FF4AF23F461.jpeg", badge: null },
   { id: 13, name: "Mosadi oversized Tee — Black", category: "tshirts", collection: "Signature", price: 399, img: "(Upload-from-mobile-1792030157)4C3F3A13-85CA-43C4-A5DB-FD48CB98D4B4.jpeg", badge: null },
   { id: 14, name: "Mosadi oversized Tee — Brown", category: "tshirts", collection: "Signature", price: 399, img: "(Upload-from-mobile-1792030157)D924D41B-CCB8-44D0-858A-06FC07FD560E.jpeg", badge: null },
   { id: 15, name: "1966 Prestige Tee — Brown", category: "tshirts", collection: "Signature", price: 399, img: "(Upload-from-mobile-1792030209)2A370DA4-0FB0-4BCB-B7FA-03A7B979E419.jpeg", badge: null },
   { id: 16, name: "Mosadi oversized Tee — Brown", category: "tshirts", collection: "Signature", price: 399, img: "(Upload-from-mobile-1792030209)44A36344-BDA9-4C2B-869C-290241738BD7.jpeg", badge: null },
   { id: 17, name: "1966 Prestige Tee — Black", category: "tshirts", collection: "Signature", price: 399, img: "(Upload-from-mobile-1792030209)F9002B3F-E85D-495D-8E5D-109797600063.jpeg", badge: null },
    { id: 18, name: "Setlhare Pants — ", category: "trousers", collection: "Signature", price: 500, img: "(Upload-from-mobile-1792032095)BD928918-A8CE-430B-8304-817053C61932.jpeg", badge: null },
    { id: 19, name: "Mosadi signature Pants — Cream", category: "trousers", collection: "Signature", price: 500, img: "IMG_3181.jpeg", badge: null },
    { id: 20, name: "Letsatsi custom-made Pants — Black", category: "trousers", collection: "Signature", price: 500, img: "IMG_4081.jpeg", badge: null },
    { id: 21, name: "Serame custom-made Pants — Black", category: "trousers", collection: "Signature", price: 500, img: "(Upload-from-mobile-1792030570)827C2AD9-0F59-48F6-91DF-066F9A899072.jpeg", badge: null },
    { id: 22, name: "Signature sun emblem Pants — Black", category: "trousers", collection: "Signature", price: 500, img: "(Upload-from-mobile-1792030570)FCE6EE37-3C5E-43FB-A522-790B7D3DB190.jpeg", badge: null },
    { id: 23, name: "1966 Prestige Tee — Deep Green", category: "tshirts", collection: "1966 Prestige", price: 399, img: "(Upload-from-mobile-1792032389)127980D5-AFFC-4F26-B209-361B22910A36.jpeg", badge: null },
   { id: 24, name: "Mosadi Thari Sweater — Burnt Orange", category: "hoodies", collection: "Signature", price: 550, img: "IMG_2339%20(1).jpeg", badge: null },
    { id: 25, name: "Mosadi luxury Drawstring Bag — Natural", category: "accessories", collection: "Accessories", price: 150, img: "IMG_2329.jpeg", badge: null },
    { id: 26, name: "Mosadi Full Set--Pants+Tshirt", category: "sets", collection: "1966 Prestige", price: 900, img: "IMG_2333%20(1).jpeg", badge: "New" },
    { id: 27, name: "Mosadi heritage full-Set", category: "sets", collection: " ", price: 900, img: "IMG_2893.jpeg", badge: "New" },
    { id: 28, name: "Mosadi heritage Full Set Pants+Tshirt", category: "sets", collection: "1966 Prestige", price: 900, img: "IMG_2406.jpeg", badge: "New" },
    { id: 29, name: "Signature Bucket Hat — Orange", category: "accessories", collection: "Accessories", price: 200, img: "IMG_2338%20(1).jpeg", badge: null },
    { id: 30, name: "Mosadi Vest - White ", category: "accessories", collection: "Accessories", price: 280, img: "IMG_2336%20(2).jpeg", badge: null },
    { id: 31, name: "Mosadi Vest - Black ", category: "accessories", collection: "Accessories", price: 280, img: "(Upload-from-mobile-1792032606)13F61561-824B-400C-B23E-D3C59885C121.jpeg", badge: null },
    { id: 32, name: "Mosadi Vest - Cream ", category: "accessories", collection: "Accessories", price: 280, img: "IMG_2986.jpeg", badge: null }
];

/* ============================================
   CART STATE
============================================ */
let cart = JSON.parse(localStorage.getItem('mosadiCart')) || [];

function saveCart() {
    localStorage.setItem('mosadiCart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(productId, event) {
    if (event) { event.stopPropagation(); event.preventDefault(); }
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
    // Update badge count in nav (all instances)
    document.querySelectorAll('#cart-count').forEach(badge => {
        const count = getCartCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    });

    // Cart drawer items
    const container = document.getElementById('cart-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn btn-outline" style="margin-top: 15px; color: var(--choc); border-color: var(--choc);">Browse Shop</a>
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
    if (!drawer) return;
    drawer.classList.toggle('open');
    if (overlay) overlay.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
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

    const phone = '26778631810';
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
