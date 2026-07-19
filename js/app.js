// 1. قاعدة بيانات المنتجات (تسهل عليك الإضافة والتعديل والحذف مستقبلاً)
const PRODUCTS_DATA = [
    { id: 1, name: "جومه أشكال بحرية صغيرة ديلي Magic Zoo", price: 2.5, category: "school", images: ["imgs/جومه_أشكال_بحرية_صغيرة.webp","imgs/جومه_أشكال_بحرية_صغيرة_1.webp"] },
    { 
        id: 2, 
        name: "جومه ديلي بيضاء Scribe PVC Free",         
        price: 15, 
        category: "school", 
        images: ["imgs/جومه_ديلي_بيضاء_سكرايب.webp" , "imgs/جومه_ديلي_بيضاء_سكرايب_1.webp","imgs/جومه_ديلي_بيضاء_سكرايب_2.webp"] 
    },
    { id: 3, name: "جومه ديلي رسمة سبونج بوب", price: 15, category: "school", images: ["imgs/جومه_ديلي_رسمة_سبونج_بوب.webp"] },
    { id: 4, name: "جومه ديلي شكل بطة Little Singer", price: 20, category: "school", images: ["imgs/جومه_ديلي_شكل_بطة.webp","imgs/جومه_ديلي_شكل_بطة_1.webp"] },
    { id: 5, name: "جومه ديلي مثلث سوداء Scribe Infinite 4B", price: 15, category: "school", images: ["imgs/جومه_ديلي_مثلث_سوداء.webp"] },
    { id: 6, name: "جومه سوداء ديلي للامتحانات Exam Premium", price: 15, category: "school", images: ["imgs/جومه_سوداء_ديلي_امتحانات.webp"] },
    { id: 7, name: "جومه شكل آيس كريم فواكه ديلي", price: 25, category: "school", images: ["imgs/جومه_شكل_آيس_كريم.webp","imgs/جومه_شكل_آيس_كريم_1.webp","imgs/جومه_شكل_آيس_كريم_2.webp"] },
    { id: 8, name: "جومه فابر كاستل كلاسيك سوداء PVC-Free", price: 20, category: "school", images: ["imgs/جومه_فابر_كاستل_كلاسيك.webp"] },
    { id: 9, name: "جومه ديلي ألوان باستيل هادئة", price: 15, category: "school", images: ["imgs/جوميت_ديلي_ألوان_باستيل.webp" , "imgs/جوميت_ديلي_ألوان_باستيل_1.webp"] },
    { id: 15, name: "جومه أصوانية شكل فواكه", price: 15, category: "school", images: ["imgs/جومه_أسطوانية_شكل_فواكه.webp","imgs/جومه_أسطوانية_شكل_فواكه_1.webp"] },
    { 
        id: 13, 
        name: "زجاجة تانك معزولة (Tank Me)", 
        price: 220, 
        category: "school", 
        images: ["imgs/زجاجة_تانك_1.webp", "imgs/زجاجة_تانك_2.webp", "imgs/زجاجة_تانك_3.webp", "imgs/زجاجة_تانك.webp"] // سلايدشو
    },
    { id: 14, name: "زمزمية مياه مموهة عصرية", price: 75, category: "school", images: ["imgs/زمزميه_مموهة.webp"] },
    { id: 16, name: "كوب ستيتش مميز بالشاليموه", price: 95, category: "school", images: ["imgs/كوب_ستيتش_مميز_بالشاليموه.webp"] },
    { id: 17, name: "زجاجة مياه أطفال ستيتش", price: 105, category: "school", images: ["imgs/زجاجة_مياه_أطفال_ستيتش.webp"] },
    { id: 18, name: "زمزميه مياه رياضية سبيريت", price: 115, category: "school", images: ["imgs/زجاجة_مياه_رياضية_سبيريت.webp"] },
    { id: 19, name: "زمزميه مياه شفافة لابوبو", price: 115, category: "school", images: ["imgs/زجاجة_مياه_شفافة_لابوبو.webp"] },
    { id: 20, name: "زمزميه مياه لابوبو", price: 115, category: "school", images: ["imgs/زجاجة_مياه_لابوبو.webp", "imgs/زجاجة_مياه_لابوبو_1.webp","imgs/زجاجة_مياه_لابوبو_2.webp"] },
    {
        id: 21, 
        name: "زمزميه مياه رياضية", 
        price: 185, category: "school", 
        images: ["imgs/زمزمية_رياضية_بماصة.webp","imgs/زمزمية_رياضية_بماصة_1.webp","imgs/زمزمية_رياضية_بماصة_2.webp","imgs/زمزمية_رياضية_بماصة_3.webp"] 
    },
    {
        id: 22, 
        name:  "Aqua زمزمية مياه", 
        price: 35, category: "school", 
        images: ["imgs/زمزمية_مياه_aqua.webp","imgs/زمزمية_مياه_aqua_1.webp","imgs/زمزمية_مياه_aqua_2.webp","imgs/زمزمية_مياه_aqua_3.webp","imgs/زمزمية_مياه_aqua_4.webp"] 
    },
    {
        id: 23, 
        name:  "Carbon زمزميه مياه", 
        price: 35,
        category: "school",
        images: [
            "imgs/زمزميه_مياه_carbon.webp",
            "imgs/زمزميه_مياه_carbon_1.webp",
            "imgs/زمزميه_مياه_carbon_2.webp",
            "imgs/زمزميه_مياه_carbon_3.webp",
            "imgs/زمزميه_مياه_carbon_4.webp",
            "imgs/زمزميه_مياه_carbon_5.webp"
        ]
    },
    {
        id: 24, 
        name:  "Joy طقم", 
        price: 100,
        category: "school",
        images: [
            "imgs/طقم_joy.webp",
            "imgs/طقم_joy_1.webp",
            "imgs/طقم_joy_2.webp",
            "imgs/طقم_joy_3.webp",
            "imgs/طقم_joy_4.webp",
            "imgs/طقم_joy_5.webp"
        ]
    },
    {
        id: 25, 
        name:  "Happy Meal لانش بوكس", 
        price: 100,
        category: "school",
        images: [
            "imgs/لانش_بوكس_happy_meal.webp",
            "imgs/لانش_بوكس_happy_meal_1.webp",
            "imgs/لانش_بوكس_happy_meal_2.webp",
            "imgs/لانش_بوكس_happy_meal_3.webp",
            "imgs/لانش_بوكس_happy_meal_4.webp",
            "imgs/لانش_بوكس_happy_meal_6.webp"
        ]
    },
    {
        id: 26, 
        name:  "Master لانش بوكس", 
        price: 105,
        category: "school",
        images: [
            "imgs/لانش_بوكس_master.webp",
            "imgs/لانش_بوكس_master_1.webp",
            "imgs/لانش_بوكس_master_2.webp",
            "imgs/لانش_بوكس_master_3.webp",
            "imgs/لانش_بوكس_master_4.webp"
        ]
    },
    {
        id: 27, 
        name:  "Mega  لانش بوكس", 
        price: 100,
        category: "school",
        images: [
            "imgs/لانش_بوكس_mega.webp",
            "imgs/لانش_بوكس_mega_1.webp",
            "imgs/لانش_بوكس_mega_4.webp",
            "imgs/لانش_بوكس_mega_5.webp",
            "imgs/لانش_بوكس_mega_6.webp"
        ]
    },
    {
        id: 28, 
        name:  "Boom لانش بوكس وزمزميه", 
        price: 100,
        category: "school",
        images: [
            "imgs/لانش_بوكس_وزمزميه_boom.webp",
            "imgs/لانش_بوكس_وزمزميه_boom_1.webp",
            "imgs/لانش_بوكس_وزمزميه_boom_2.webp",
            "imgs/لانش_بوكس_وزمزميه_boom_3.webp",
            "imgs/لانش_بوكس_وزمزميه_boom_4.webp",
            "imgs/لانش_بوكس_وزمزميه_boom_5.webp"
        ]
    },
    {
        id: 29, 
        name:  "Mini Mega لانش بوكس وزمزميه", 
        price: 55,
        category: "school",
        images: [
            "imgs/لانش_بوكس_وزمزميه_mini_mega.jpg",
            "imgs/لانش_بوكس_وزمزميه_mini_mega_1.jpg",
            "imgs/لانش_بوكس_وزمزميه_mini_mega_2.jpg",
            "imgs/لانش_بوكس_وزمزميه_mini_mega_3.jpg",
            "imgs/لانش_بوكس_وزمزميه_mini_mega_4.jpg",
            "imgs/لانش_بوكس_وزمزميه_mini_mega_5.jpg"
        ]
    },
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

// 4. دالة عرض المنتجات بناءً على الفلترة والبحث (تعديل طفيف لإضافة عناصر التحكم بالسلايدشو)
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
            
            // الصور
            product.images.forEach((img, idx) => {
                imageHTML += `<img src="${img}" class="slide ${idx === 0 ? 'active' : ''}" alt="${product.name}">`;
            });
            
            // أسهم التقليب
            imageHTML += `
                <button class="slideshow-arrow prev-arrow" aria-label="الصورة السابقة"><i class="fas fa-chevron-right"></i></button>
                <button class="slideshow-arrow next-arrow" aria-label="الصورة التالية"><i class="fas fa-chevron-left"></i></button>
            `;

            // دوائر المؤشر السفلية (Dots)
            imageHTML += `<div class="slideshow-dots">`;
            product.images.forEach((_, idx) => {
                imageHTML += `<span class="dot ${idx === 0 ? 'active' : ''}" data-index="${idx}"></span>`;
            });
            imageHTML += `</div>`;
            
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

// 8. محرك السلايدشو اليدوي المطور (أسهم، نقاط، وسحب لليمين واليسار)
function initSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow-container');
    
    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slide');
        const dots = slideshow.querySelectorAll('.dot');
        const prevArrow = slideshow.querySelector('.prev-arrow');
        const nextArrow = slideshow.querySelector('.next-arrow');
        let currentIndex = 0;

        // دالة الانتقال لصورة محددة
        function goToSlide(index) {
            // معالجة الحدود الدائرية للسلايدشو
            if (index >= slides.length) index = 0;
            if (index < 0) index = slides.length - 1;

            // إزالة الكلاس النشط من الصورة والنقطة الحالية
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');

            // تفعيل العنصر الجديد
            currentIndex = index;
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        // 1. تشغيل الأسهم
        prevArrow.addEventListener('click', (e) => {
            e.stopPropagation(); // منع انتقال الحدث لفتح تفاصيل أو سلة
            goToSlide(currentIndex - 1);
        });

        nextArrow.addEventListener('click', (e) => {
            e.stopPropagation();
            goToSlide(currentIndex + 1);
        });

        // 2. تشغيل دوائر المؤشر السفلية (Dots)
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetIndex = parseInt(dot.getAttribute('data-index'));
                goToSlide(targetIndex);
            });
        });

        // 3. التقليب عن طريق السحب (Swipe / Drag) للموبايل والكمبيوتر
        let startX = 0;
        let isDragging = false;

        // أحداث اللمس (الهواتف)
        slideshow.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });

        slideshow.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            let endX = e.changedTouches[0].clientX;
            handleSwipe(startX, endX);
            isDragging = false;
        }, { passive: true });

        // أحداث الماوس (الكمبيوتر)
        slideshow.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            e.preventDefault(); // يمنع سحب الصورة الافتراضي للمتصفح
        });

        slideshow.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            let endX = e.clientX;
            handleSwipe(startX, endX);
            isDragging = false;
        });

        slideshow.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        // معالجة اتجاه السحب (مع مراعاة اتجاه RTL العربي لليمين واليسار)
        function handleSwipe(start, end) {
            const threshold = 50; // الحد الأدنى للمسافة بالبكسل لاعتبارها سحبة ناجحة
            const diff = start - end;

            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    // سحب لليسار -> الانتقال للصورة التالية
                    goToSlide(currentIndex + 1);
                } else {
                    // سحب لليمين -> الانتقال للصورة السابقة
                    goToSlide(currentIndex - 1);
                }
            }
        }
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
