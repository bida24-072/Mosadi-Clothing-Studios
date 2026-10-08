/* ============================================
   MOSADI CLOTHING STUDIOS — Product Data
============================================ */
const products = [
    {
        id: 1,
        name: "1966 Prestige — Orange Hoodie",
        category: "hoodies",
        collection: "1966 Prestige",
        price: 550,
        img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Mme Embroidered Tee — Black",
        category: "tshirts",
        collection: "Signature",
        price: 399,
        img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Tsala Wide-Leg Trousers — Cream",
        category: "trousers",
        collection: "Signature",
        price: 500,
        img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Botswana 1966 Tee — Deep Green",
        category: "tshirts",
        collection: "1966 Prestige",
        price: 399,
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Winter Camo Hoodie — Grey",
        category: "hoodies",
        collection: "Winter Collection",
        price: 500,
        img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Caps",
        category: "caps",
        collection: "Winter Collection",
        price: 180,
        img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        name: "Mme Sweater — Burnt Orange",
        category: "hoodies",
        collection: "Signature",
        price: 780,
        img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        name: "Mosadi Tote Bag — Natural",
        category: "accessories",
        collection: "Accessories",
        price: 550,
        img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Sets",
        category: "whole fit",
        collection: "1966 Prestige",
        price: 900,
        img: "https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        name: "Signature bucket hats — Black",
        category: "accessories",
        collection: "Accessories",
        price: 200,
        img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        name: "Bags — Earth",
        category: "trousers",
        collection: "Winter Collection",
        price: 150,
        img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        name: "Mosadi vests — Khaki",
        category: "accessories",
        collection: "Accessories",
        price: 280,
        img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

/* ============================================
   RENDER SHOP GRID
============================================ */
function renderShop(filter = 'all') {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;

    const list = filter === 'all' ? products : products.filter(p => p.category === filter);
    grid.innerHTML = '';

    if (list.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--grey); padding: 60px 0;">No products in this category yet.</p>';
        return;
    }

    list.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <div class="product-img">
                    <img src="${p.img}" alt="${p.name}">
                    <span class="product-tag">${p.collection}</span>
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
   CONTACT FORM
============================================ */
function submitContact(e) {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value || 'friend';
    alert(`Thank you, ${name}! Your message has been received. We'll be in touch within 24 hours.\n\n— Mosadi Clothing Studios`);
    e.target.reset();
}

/* ============================================
   NEWSLETTER
============================================ */
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
});
