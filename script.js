'use strict';

const products = [
    { id: 'ssd', name: 'SSD 1TB', description: 'NVMe PCIe Gen4 SSD', price: 2790, image: 'assets/images/ssd.webp', specs: {'Capacity': '1TB', 'Form Factor': 'M.2 2280', 'Interface': 'PCIe Gen 4.0 x4, NVMe 1.4', 'Sequential Read Speed': 'Up to 7,300 MB/s', 'Sequential Write Speed': 'Up to 6,000 MB/s', 'Endurance (TBW)': '600 TBW', 'Warranty': '5 Years'} },
    { id: 'mouse', name: 'Gaming Mouse', description: 'High Precision RGB Gaming Mouse', price: 890, image: 'assets/images/Mouse.jpg', specs: {'Sensor': 'High-Precision Optical Sensor', 'DPI': 'Adjustable up to 12,000 DPI', 'Switches': 'Mechanical Switches (รองรับการคลิก 50 ล้านครั้ง)', 'Lighting': 'RGB 16.8 ล้านสี พร้อมซอฟต์แวร์ปรับแต่ง', 'Connection': 'Wired USB (สายถักยาว 1.8 เมตร)', 'Weight': '85 กรัม (Ultra-lightweight)', 'Warranty': '1 Year'} },
    { id: 'keyboard', name: 'Mechanical Keyboard', description: 'RGB Mechanical Keyboard Blue Switch', price: 1590, image: 'assets/images/keyboard.jpg', specs: {'Switch Type': 'Outemu Blue Switch (Clicky & Tactile)', 'Layout': 'Full-size 104 Keys (TH/EN Keycaps)', 'Backlight': 'ระบบไฟ RGB 20 โหมด', 'Anti-Ghosting': '100% N-Key Rollover', 'Material': 'โครงสร้าง Aluminum Alloy แข็งแรงทนทาน', 'Connection': 'Wired USB Type-A', 'Warranty': '2 Years'} },
    { id: 'headset', name: 'Gaming Headset', description: '7.1 Surround Sound Headset', price: 1290, image: 'assets/images/Gaming headset.jpg', specs: {'Audio System': 'Virtual 7.1 Surround Sound', 'Drivers': '50mm Neodymium magnets', 'Microphone': 'ไมโครโฟนตัดเสียงรบกวน (Noise-cancelling) สามารถถอดเก็บได้', 'Earcups': 'Premium Memory Foam หุ้มหนังเทียม ระบายอากาศได้ดี', 'Connection': 'USB 2.0 / 3.5mm Audio Jack', 'Warranty': '1 Year'} },
    { id: 'monitor', name: 'Gaming Monitor', description: '24-inch Full HD 180Hz Monitor', price: 5990, image: 'assets/images/monitor1.webp', specs: {'Panel Size': '24 นิ้ว', 'Resolution': 'Full HD (1920 x 1080)', 'Refresh Rate': '180Hz (รองรับ AMD FreeSync / NVIDIA G-Sync Compatible)', 'Response Time': '1ms (GtG)', 'Panel Type': 'Fast IPS', 'Ports': '2x HDMI 2.0, 1x DisplayPort 1.2', 'Warranty': '3 Years'} },
    { id: 'laptop', name: 'Gaming Laptop', description: '15.6-inch Gaming Laptop', price: 35900, image: 'assets/images/laptop.webp', specs: {'CPU': 'Intel Core i5-13500H (12 Cores, 16 Threads)', 'GPU': 'NVIDIA GeForce RTX 4050 6GB GDDR6', 'RAM': '16GB DDR5 4800MHz', 'Storage': '512GB PCIe 4.0 NVMe M.2 SSD', 'Display': '15.6" FHD (1920x1080) IPS 144Hz', 'OS': 'Windows 11 Home', 'Warranty': '2 Years On-site Service'} },
    { id: 'chair', name: 'Gaming Chair', description: 'Ergonomic Gaming Chair', price: 4990, image: 'assets/images/chair.webp', specs: {'Material': 'Premium PU Leather ทนทานต่อรอยขีดข่วน', 'Armrests': '3D Adjustable (ปรับขึ้นลง, ซ้ายขวา, หน้าหลัง)', 'Recline': 'ปรับเอนได้สูงสุด 160 องศา', 'Base & Lift': 'ฐานเหล็ก 5 แฉก พร้อม Class 4 Gas Lift', 'Max Load': 'รองรับน้ำหนักสูงสุด 150 กิโลกรัม', 'Warranty': '3 Years (โครงสร้างและโช้ค)'} },
    { id: 'rtx', name: 'Graphics Card RTX 4070', description: 'High Performance Graphics Card', price: 22990, image: 'assets/images/rtx.webp', specs: {'Chipset': 'NVIDIA GeForce RTX 4070', 'VRAM': '12GB GDDR6X', 'Core Clock': 'Boost 2520 MHz', 'Cooling System': 'Triple Fan Design (พัดลม 3 ตัว)', 'Recommended PSU': '650W ขึ้นไป', 'Ports': '3x DisplayPort 1.4a, 1x HDMI 2.1', 'Warranty': '3 Years'} },
    { id: 'intel', name: 'Intel Core i7 Processor', description: '13th Gen High Speed Processor', price: 11900, image: 'assets/images/intel.webp', specs: {'Model': 'Intel Core i7-13700F (13th Gen)', 'Cores/Threads': '16 Cores (8 Performance-cores + 8 Efficient-cores) / 24 Threads', 'Max Turbo Frequency': 'Up to 5.20 GHz', 'Socket': 'LGA 1700', 'TDP': '65W (Base) / 219W (Maximum Turbo Power)', 'Warranty': '3 Years'} },
    { id: 'ram', name: 'RAM 16GB DDR5', description: 'High Speed DDR5 Memory', price: 2490, image: 'assets/images/ram.webp', specs: {'Capacity': '16GB (1 x 16GB)', 'Memory Type': 'DDR5', 'Speed': '5200 MHz', 'CAS Latency': 'CL40', 'Heatsink': 'Aluminum Heat Spreader สีดำระบายความร้อน', 'Warranty': 'Lifetime Warranty'} },
    { id: 'case', name: 'RGB PC Case', description: 'Tempered Glass Gaming Case', price: 2990, image: 'assets/images/case.webp', specs: {'Form Factor': 'Mid-Tower', 'Motherboard Support': 'ATX, Micro-ATX, Mini-ITX', 'Side Panel': 'Tempered Glass (กระจกนิรภัย)', 'Included Fans': 'ติดตั้งพัดลม 120mm ARGB มาให้ 4 ตัว (หน้า 3, หลัง 1)', 'I/O Ports': '2x USB 3.0, 1x HD Audio / Mic', 'Warranty': '1 Year'} }
];

let cart = loadCart();

function formatPrice(value) {
    return `${new Intl.NumberFormat('th-TH').format(value)} THB`;
}

function loadCart() {
    try {
        const saved = JSON.parse(localStorage.getItem('techzone_cart') || '[]');
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem('techzone_cart', JSON.stringify(cart));
}

function getCartQuantity() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCartBadge() {
    document.querySelectorAll('#cartBadge').forEach((badge) => {
        badge.textContent = getCartQuantity();
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    const existing = cart.find((item) => item.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
    saveCart();
    updateCartBadge();
    renderCart();
    showToast('เพิ่มสินค้าลงตะกร้าแล้ว');
}

function changeCartQuantity(productId, amount) {
    const item = cart.find((entry) => entry.id === productId);
    if (!item) return;
    item.quantity += amount;
    if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== productId);
    saveCart();
    updateCartBadge();
    renderCart();
}

function renderProductCard(product) {
    return `<article class="product-card">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-card-body">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-specs"><strong>Specs:</strong> ${Object.entries(product.specs).slice(0, 3).map(([key, value]) => `${key}: ${value}`).join(" · ")}</p>
            <p class="product-price">${formatPrice(product.price)}</p>
            <div class="product-actions">
                <button class="button button-secondary" type="button" data-action="details" data-id="${product.id}">View Details</button>
                <button class="button button-accent" type="button" data-action="add" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    </article>`;
}

function renderFeaturedProducts() {
    const target = document.getElementById('featuredProducts');
    if (!target) return;
    target.innerHTML = products.slice(0, 4).map(renderProductCard).join('');
}

function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    const search = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
    const sort = document.getElementById('sortSelect')?.value || 'default';
    let result = products.filter((product) => {
        const matchesSearch = `${product.name} ${product.description} ${Object.entries(product.specs).map(([key, value]) => `${key} ${value}`).join(' ')}`.toLowerCase().includes(search);        return matchesSearch;
    });
    if (sort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') result.sort((a, b) => b.price - a.price);
    grid.innerHTML = result.length ? result.map(renderProductCard).join('') : '<div class="empty-state">ไม่พบสินค้าที่ตรงกับการค้นหา</div>';
    const count = document.getElementById('productCount');
    if (count) count.textContent = `พบสินค้า ${result.length} รายการ`;
}

function showProductDetails(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;
    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="รายละเอียดสินค้า">
        <button class="modal-close" type="button" aria-label="ปิด">×</button>
        <img src="${product.image}" alt="${product.name}">
        <span class="eyebrow">PRODUCT DETAIL</span>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="product-specifications">
            <h3>Technical Specifications</h3>
            <ul class="spec-list">
                ${Object.entries(product.specs).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
            </ul>
        </div>
        <p class="product-price">${formatPrice(product.price)}</p>
        <button class="button button-accent" type="button" data-modal-add="${product.id}">Add to Cart</button>
    </div>`;
    document.body.appendChild(modal);
    const close = () => modal.remove();
    modal.querySelector('.modal-close').addEventListener('click', close);
    modal.addEventListener('click', (event) => { if (event.target === modal) close(); });
    modal.querySelector('[data-modal-add]').addEventListener('click', () => { addToCart(product.id); close(); });
}

function renderCart() {
    const target = document.getElementById('cartItems');
    const totalTarget = document.getElementById('cartTotal');
    if (!target || !totalTarget) return;
    if (!cart.length) {
        target.innerHTML = '<div class="empty-state">ยังไม่มีสินค้าในตะกร้า</div>';
        totalTarget.textContent = '0 THB';
        return;
    }
    target.innerHTML = cart.map((item) => `<div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div><h3>${item.name}</h3><p>${formatPrice(item.price)} / ชิ้น</p></div>
        <div class="quantity-controls"><button type="button" data-cart-action="minus" data-id="${item.id}">−</button><span>${item.quantity}</span><button type="button" data-cart-action="plus" data-id="${item.id}">+</button></div>
        <strong>${formatPrice(item.price * item.quantity)}</strong>
    </div>`).join('');
    totalTarget.textContent = formatPrice(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
}

async function apiCall(endpoint, method = 'GET', data = null) {
    const options = { method, headers: { 'Content-Type': 'application/json' } };
    if (data !== null) options.body = JSON.stringify(data);
    const response = await fetch(endpoint, options);
    let result = null;
    try { result = await response.json(); } catch { result = null; }
    if (!response.ok) {
        const error = new Error(result?.message || `Request failed with status ${response.status}`);
        error.status = response.status;
        error.data = result;
        throw error;
    }
    return result;
}

function setupLogin() {
    const form = document.getElementById('loginForm');
    if (!form) return;
    const button = document.getElementById('loginButton');
    const errorBox = document.getElementById('loginError');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        errorBox.style.display = 'none';
        const userEmail = document.getElementById('email').value.trim();
        const userPassword = document.getElementById('password').value;
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail);
        if (!emailValid) { errorBox.textContent = 'กรุณากรอกอีเมลให้ถูกต้อง'; errorBox.style.display = 'block'; return; }
        if (!userPassword) { errorBox.textContent = 'กรุณากรอกรหัสผ่าน'; errorBox.style.display = 'block'; return; }
        button.disabled = true;
        button.textContent = 'Loading...';
        try {
            const data = await apiCall(form.action, 'POST', { email: userEmail, password: userPassword });
            if (data?.token) localStorage.setItem('token', data.token);
            window.location.href = 'index.html';
        } catch (error) {
            errorBox.textContent = error.status === 401 ? (error.data?.message || 'อีเมลหรือรหัสผ่านไม่ถูกต้อง') : 'ยังไม่สามารถเข้าสู่ระบบได้ กรุณาตรวจสอบการเชื่อมต่อ Server';
            errorBox.style.display = 'block';
            document.getElementById('password').value = '';
            button.disabled = false;
            button.textContent = 'Login';
        }
    });
}

document.addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-action]');
    if (actionButton) {
        const { action, id } = actionButton.dataset;
        if (action === 'add') addToCart(id);
        if (action === 'details') showProductDetails(id);
    }
    const cartButton = event.target.closest('[data-cart-action]');
    if (cartButton) changeCartQuantity(cartButton.dataset.id, cartButton.dataset.cartAction === 'plus' ? 1 : -1);
});

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderFeaturedProducts();
    renderProducts();
    renderCart();
    setupLogin();
    document.getElementById('searchInput')?.addEventListener('input', renderProducts);
    document.getElementById('sortSelect')?.addEventListener('change', renderProducts);
    document.getElementById('checkoutButton')?.addEventListener('click', () => showToast(cart.length ? 'ระบบสั่งซื้อจะเชื่อม Backend ใน Phase 2' : 'กรุณาเพิ่มสินค้าลงตะกร้าก่อน'));
});
