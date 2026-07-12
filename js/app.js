// 1. قاعدة بيانات المنتجات (تسهل عليك الإضافة والتعديل والحذف مستقبلاً)
const PRODUCTS_DATA = [
    { id: 1, name: "جومه أشكال بحرية صغيرة ديلي Magic Zoo", price: 2.5, category: "school", images: ["imgs/جومه_أشكال_بحرية_صغيرة.webp"] },
    { id: 2, name: "جومه ديلي بيضاء Scribe PVC Free", price: 15, category: "school", images: ["imgs/جومه_ديلي_بيضاء_سكرايب1.webp"] },
    { id: 3, name: "جومه ديلي رسمة سبونج بوب", price: 15, category: "school", images: ["imgs/جومه_ديلي_رسمة_سبونج_بوب.jpeg"] },
    { id: 4, name: "جومه ديلي شكل بطة Little Singer", price: 20, category: "school", images: ["imgs/جومه_ديلي_شكل_بطة.jpg"] },
    { id: 5, name: "جومه ديلي مثلث سوداء Scribe Infinite 4B", price: 15, category: "school", images: ["imgs/جومه_ديلي_مثلث_سوداء.jpg"] },
    { id: 6, name: "جومه سوداء ديلي للامتحانات Exam Premium", price: 15, category: "school", images: ["imgs/جومه_سوداء_ديلي_امتحانات.jpg"] },
    { id: 7, name: "جومه شكل آيس كريم فواكه ديلي", price: 25, category: "school", images: ["imgs/جومه_شكل_آيس_كريم.jpg"] },
    { id: 8, name: "جومه فابر كاستل كلاسيك سوداء PVC-Free", price: 20, category: "school", images: ["imgs/جومه_فابر_كاستل_كلاسيك.webp"] },
    { id: 9, name: "جومه ديلي ألوان باستيل هادئة", price: 15, category: "school", images: ["imgs/جوميت_ديلي_ألوان_باستيل.png"] },
    { id: 10, name: "حقيبة مدرسية متينة", price: 350, category: "school", icon: "fa-backpack" }, // دعم الأيقونات بدلاً من الصور المفقودة
    { id: 11, name: "طقم أقلام حبر جاف", price: 45, category: "school", icon: "fa-pen-nib" },
    { id: 12, name: "كشكول سلك 100 ورقة", price: 60, category: "school", icon: "fa-book" },
    { 
        id: 13, 
        name: "زجاجة تانك معزولة (Tank Me)", 
        price: 120, 
        category: "school", 
        images: ["زجاجة_تانك_1.jpg", "زجاجة_تانك_2.jpg", "زجاجة_تانك_3.png", "زجاجة_تانك.jpg"] // سلايدشو
    },
    { id: 14, name: "زمزمية مياه مموهة عصرية", price: 75, category: "school", images: ["FB_IMG_1783246983431.jpg"] },
    { id: 15, name: "جومه أصوانية شكل فواكه", price: 15, category: "school", images: ["imgs/جومه_أسطوانية_شكل_فواكه.jpg"] },
    { id: 16, name: "كوب ستيتش مميز بالشاليموه", price: 95, category: "school", images: ["photo_2025-11-01_21-24-54.jpg"] },
    { id: 17, name: "مكعبات بناء تعليمية", price: 120, category: "toys", icon: "fa-cubes" },
    { id: 18, name: "بازل خشبي للأطفال", price: 85, category: "toys", images: ["زجاجة_تانك.jpg"] },
    { id: 19, name: "روبوت تفاعلي مضيء", price: 250, category: "toys", icon: "fa-robot" }
];

// 2. حالة التطبيق (State)
let cart = JSON.parse(localStorage.getItem('karim_store_cart')) || [];
let currentFilter = 'all';
let searchQuery = '';

// 3. عناصر الواجهة (DOM Elements)
const productsGrid = document.getElementById('products-grid');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPriceEl = document.getElementById('total-price');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const whatsappCheckoutBtn = document.getElementById('whatsapp-checkout-btn');

// 4. دالة عرض المنتجات بناءً على الفلترة والبحث
function renderProducts() {
    productsGrid.innerHTML = '';
    
    const filteredProducts = PRODUCTS_DATA.filter(product => {
        const matchesFilter = currentFilter === 'all' || product.category === currentFilter;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `<p class="no-products">لا توجد منتجات تطابق بحثك حالياً.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = `product-card ${product.category}`;
        
        // بناء الهيكل الخاص بالصورة أو السلايدشو أو الأيقونة
        let imageHTML = '';
        if (product.images && product.images.length > 1) {
            imageHTML = `<div class="product-image slideshow-container" data-id="${product.id}">`;
            product.images.forEach((img, idx) => {
                imageHTML += `<img src="${img}" class="slide ${idx === 0 ? 'active' : ''}" alt="${product.name}">`;
            });
            imageHTML += `</div>`;
        } else if (product.images && product.images.length === 1) {
            imageHTML = `<div class="product-image"><img src="${product.images[0]}" alt="${product.name}" class="single-product-img" loading="lazy"></div>`;
        } else {
            imageHTML = `<div class="product-image"><i class="fas ${product.icon}"></i></div>`;
        }

        card.innerHTML = `
            ${imageHTML}
            <div class="p-20">
                <h3>${product.name}</h3>
                <p class="price">${product.price} ج.م</p>
                <div class="product-action">
                    <div class="card-qty-control">
                        <button class="card-qty-btn decrease-card-qty">-</button>
                        <span class="card-qty-num" data-product-id="${product.id}">1</span>
                        <button class="card-qty-btn increase-card-qty">+</button>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    initSlideshows();
}

// 5. إدارة كميات بطاقة المنتج والإضافة للسلة (Event Delegation)
productsGrid.addEventListener('click', (e) => {
    const target = e.target;
    
    // أزرار زيادة ونقصان الكمية في الكارت قبل الإضافة
    if (target.classList.contains('increase-card-qty') || target.classList.contains('decrease-card-qty')) {
        const qtyNumEl = target.parentElement.querySelector('.card-qty-num');
        let qty = parseInt(qtyNumEl.innerText);
        if (target.classList.contains('increase-card-qty')) qty++;
        if (target.classList.contains('decrease-card-qty') && qty > 1) qty--;
        qtyNumEl.innerText = qty;
    }

    // زر الإضافة إلى السلة
    const addBtn = target.closest('.add-to-cart-btn');
    if (addBtn) {
        const productId = parseInt(addBtn.getAttribute('data-id'));
        const qtyNumEl = addBtn.parentElement.querySelector('.card-qty-num');
        const quantity = parseInt(qtyNumEl.innerText);
        
        addToCart(productId, quantity);
        qtyNumEl.innerText = '1'; // إعادة التعيين لـ 1
    }
});

// 6. نظام السلة (Cart functions)
function addToCart(id, quantity) {
    const product = PRODUCTS_DATA.find(p => p.id === id);
    const existingIndex = cart.findIndex(item => item.id === id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    updateCart();
    openCart();
}

function updateCart() {
    localStorage.setItem('karim_store_cart', JSON.stringify(cart));
    renderCartUI();
}

function renderCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">السلة فارغة حالياً</p>';
        cartCount.innerText = '0';
        totalPriceEl.innerText = '0';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;

        const itemEl = document.createElement('div');
        itemEl.classList.add('cart-item');
        itemEl.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <p class="unit-price">${item.price} ج.م للقطعة</p>
                <p class="item-total-price">إجمالي: ${itemTotal} ج.م</p>
            </div>
            <div class="item-controls">
                <div class="quantity-control">
                    <button class="qty-btn" onclick="changeCartItemQty(${index}, -1)">-</button>
                    <span class="qty-num">${item.quantity}</span>
                    <button class="qty-btn" onclick="changeCartItemQty(${index}, 1)">+</button>
                </div>
                <i class="fas fa-trash remove-item" onclick="removeCartItem(${index})"></i>
            </div>
        `;
        cartItemsContainer.appendChild(itemEl);
    });

    cartCount.innerText = totalItems;
    totalPriceEl.innerText = total.toFixed(2).replace(/\.00$/, '');
}

window.changeCartItemQty = function(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCart();
};

window.removeCartItem = function(index) {
    cart.splice(index, 1);
    updateCart();
};

// 7. التحكم في فتح وإغلاق السلة
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

cartIcon.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// 8. محرك السلايدشو للمنتجات متعددة الصور
function initSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow-container');
    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slide');
        let currentSlide = 0;
        let interval;

        function showNext() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        interval = setInterval(showNext, 3000);

        slideshow.addEventListener('click', () => {
            clearInterval(interval);
            showNext();
            interval = setInterval(showNext, 3000);
        });
    });
}

// 9. الفلترة والبحث (Filters & Search)
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderProducts();
    });
});

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

// 10. إرسال الطلب عبر الواتساب
whatsappCheckoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('السلة فارغة، يرجى إضافة منتجات أولاً!');
        return;
    }

    let message = "مرحباً مكتبة كريم، أريد طلب المنتجات التالية:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        message += `${index + 1}. *${item.name}* \n   الكمية: ${item.quantity} × ${item.price} ج.م = ${itemTotal} ج.م\n\n`;
        total += itemTotal;
    });

    message += `*الإجمالي المطلوب:* ${total} ج.م\n`;
    message += "\nبرجاء التأكيد وإخباري بتفاصيل الشحن والتوصيل.";

    const whatsappNumber = "201223086107";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});

// التشغيل الأولي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCartUI();
});
