// ============================================
// MIMARSINAN BÖREKÇISI - JAVASCRIPT
// ============================================

// Menü Verileri
const menuData = {
    borek: {
        title: 'Börekler',
        desc: 'Taş fırınımızda her sabah özenle hazırlanan, çıtır dış kabuğu ve lezzetli dolgusuyla ünlü böreklerimiz',
        items: [
            {
                id: 'borek-adana',
                name: 'Adana Su Böreği',
                price: 700,
                unit: 'kg',
                description: 'Ince yufka katmanlarından oluşan, geleneksel Adana tarifi ile hazırlanan su böreği. Çıtır ve ıslak dokusuyla benzersiz bir lezzet.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-borek-adana-jSAYHsRmudoj9KaxMCxjFH.webp',
                taste: 'Hafif, ıslak, çıtır - Geleneksel Türk lezzeti',
                ingredients: 'Yufka, su, tuz, zeytinyağı',
            },
            {
                id: 'borek-kiyma',
                name: 'Kıymalı Börek',
                price: 700,
                unit: 'kg',
                description: 'Taze kıyma, soğan ve baharatlarla hazırlanmış, altın rengi yufka katmanlarına sarılmış börek.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-borek-kiyma-2iMBadAuiH7JkeVXJTujhK.webp',
                taste: 'Zengin, baharatlı, doyurucu - Lezzetli ve besleyici',
                ingredients: 'Dana kıyma, soğan, baharat, yufka',
            },
            {
                id: 'borek-peynir',
                name: 'Peynirli Börek',
                price: 700,
                unit: 'kg',
                description: 'Beyaz peynir ve maydanozla hazırlanan, hafif ve lezzetli börek. Kahvaltının vazgeçilmez parçası.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-borek-adana-jSAYHsRmudoj9KaxMCxjFH.webp',
                taste: 'Hafif, tuzlu, ferah - Sabahın en iyi seçimi',
                ingredients: 'Beyaz peynir, maydanoz, yufka, tuz',
            },
            {
                id: 'borek-patates',
                name: 'Patatesli Börek',
                price: 140,
                unit: 'porsiyon',
                description: 'Haşlanmış patates ve soğanla hazırlanan, ekonomik ve doyurucu börek porsiyonu.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-borek-adana-jSAYHsRmudoj9KaxMCxjFH.webp',
                taste: 'Yumuşak, doyurucu, ev yapımı - Klasik lezzet',
                ingredients: 'Patates, soğan, baharat, yufka',
            },
        ]
    },
    pogaca: {
        title: 'Poğaçalar',
        desc: 'Sabah erkenden fırınlanan, sıcacık ve taze poğaçalarımız. Her gün yeni üretim garantisi.',
        items: [
            {
                id: 'pogaca-kuru',
                name: 'Kuru Poğaça',
                price: 30,
                unit: 'adet',
                description: 'Klasik kuru poğaça. Hafif, çıtır ve lezzetli. Çay veya kahvenin mükemmel eşliği.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-pogaca-dereotlu-eihCFE34TCqzw63E6wsf4C.webp',
                taste: 'Hafif, çıtır, nötr - Tüm saatler için uygun',
                ingredients: 'Un, yağ, tuz, su',
            },
            {
                id: 'pogaca-dereotlu',
                name: 'Dereotlu Poğaça',
                price: 30,
                unit: 'adet',
                description: 'Taze dereotu ve peynirle hazırlanan, aromalı ve lezzetli poğaça.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-pogaca-dereotlu-eihCFE34TCqzw63E6wsf4C.webp',
                taste: 'Otlu, tuzlu, ferah - Sabahın en iyi eşliği',
                ingredients: 'Un, dereotu, peynir, yağ, tuz',
            },
            {
                id: 'pogaca-susam',
                name: 'Susamlı Simit',
                price: 30,
                unit: 'adet',
                description: 'Susamla kaplanmış, çıtır ve lezzetli simit. Bol susamlı ve taze.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-pogaca-dereotlu-eihCFE34TCqzw63E6wsf4C.webp',
                taste: 'Çıtır, susamlı, tatlı - Simit severler için',
                ingredients: 'Un, susam, tuz, yağ, su',
            },
        ]
    },
    pide: {
        title: 'Pideler',
        desc: 'Bol malzemeli ve iştah açan pidelerimiz. Sıcak ve taze olarak sunulur.',
        items: [
            {
                id: 'pide-kir',
                name: 'Kır Pidesi',
                price: 50,
                unit: 'adet',
                description: 'Kırsal bölgelerin geleneksel tarifine göre hazırlanan, basit ama lezzetli pide.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-pide-kir-itQnVm99daXLDgmDLgLWWt.webp',
                taste: 'Basit, doyurucu, geleneksel - Köy lezzeti',
                ingredients: 'Pide hamuru, soğan, baharat, zeytinyağı',
            },
            {
                id: 'pide-guevec',
                name: 'Güveç Pide',
                price: 150,
                unit: 'adet',
                description: 'Güveçte pişirilen, bol malzemeli ve zengin lezzette pide. Öğün olarak yeterli.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-pide-kir-itQnVm99daXLDgmDLgLWWt.webp',
                taste: 'Zengin, doyurucu, sıcak - Tam bir öğün',
                ingredients: 'Pide hamuru, kıyma, soğan, domates, baharat',
            },
            {
                id: 'pide-kusbasili',
                name: 'Kuşbaşılı Kaşarlı',
                price: 150,
                unit: 'adet',
                description: 'Kuşbaşı et parçaları ve kaşar peyniriyle hazırlanan, lezzetli ve besleyici pide.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-pide-kir-itQnVm99daXLDgmDLgLWWt.webp',
                taste: 'Etli, peynirli, zengin - Protein dolu seçim',
                ingredients: 'Pide hamuru, dana eti, kaşar peyniri, soğan, baharat',
            },
        ]
    },
    icecek: {
        title: 'İçecekler',
        desc: 'Lezzet dolu tabağınıza eşlik edecek taze ve soğuk içecekler.',
        items: [
            {
                id: 'icecek-kutu',
                name: 'Kutu İçecekler',
                price: 70,
                unit: 'adet',
                description: 'Çeşitli markaların soğuk içecekleri. Gazlı ve gazlı olmayan seçenekler mevcuttur.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-icecek-ayran-ZwybYcNbMp6vGfXreCQkWS.webp',
                taste: 'Soğuk, serinletici, çeşitli - Tüm tatlar için',
                ingredients: 'Çeşitli içecekler',
            },
            {
                id: 'icecek-ayran-buyuk',
                name: 'Ayran (Büyük)',
                price: 50,
                unit: 'adet',
                description: 'Taze ve soğuk ayran. Börek ve pidelerinizin mükemmel eşliği. Geleneksel Türk içeceği.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-icecek-ayran-ZwybYcNbMp6vGfXreCQkWS.webp',
                taste: 'Tatlı, tuzlu, serinletici - Geleneksel tat',
                ingredients: 'Yoğurt, su, tuz',
            },
            {
                id: 'icecek-kahve',
                name: 'Türk Kahvesi',
                price: 100,
                unit: 'adet',
                description: 'Ince öğütülmüş, geleneksel Türk kahvesi. Sabahın en iyi başlangıcı.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663625218090/9Ym663gcDLRVvbGvzEo2Lg/product-icecek-ayran-ZwybYcNbMp6vGfXreCQkWS.webp',
                taste: 'Güçlü, aromatik, geleneksel - Türk kahvesi tutkusu',
                ingredients: 'Kahve, su, tuz',
            },
        ]
    }
};

// Header Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 5000);

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Menü Kategorisi Değiştir
const navLinks = document.querySelectorAll('[data-category]');
let currentCategory = 'borek';

function loadMenu(category) {
    currentCategory = category;
    const data = menuData[category];
    
    // Başlık ve açıklamayı güncelle
    document.getElementById('menuTitle').textContent = data.title;
    document.getElementById('menuDesc').textContent = data.desc;
    
    // Menü kartlarını oluştur
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    
    data.items.forEach((item, index) => {
        const card = createMenuCard(item, index);
        menuGrid.appendChild(card);
    });
    
    // Aktif nav linkini güncelle
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.category === category) {
            link.classList.add('active');
        }
    });
    
    // Mobil menüyü kapat
    mobileMenu.classList.remove('active');
}

function createMenuCard(item, index) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="menu-card-image">
        <div class="menu-card-content">
            <div>
                <div class="menu-card-header">
                    <h3 class="menu-card-name">${item.name}</h3>
                    <p class="menu-card-unit">${item.unit} fiyatıdır</p>
                </div>
                <p class="menu-card-description">${item.description}</p>
                <div class="menu-card-details">
                    <div class="detail-box taste">
                        <strong>🔥 Tat Profili</strong>
                        <p>${item.taste}</p>
                    </div>
                    ${item.ingredients ? `
                        <div class="detail-box ingredients">
                            <strong>🌿 İçindekiler</strong>
                            <p>${item.ingredients}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
            <div class="menu-card-footer">
                <div class="menu-price">
                    <span class="menu-price-amount">${item.price}</span>
                    <span class="menu-price-currency">₺</span>
                </div>
                <button class="order-btn" onclick="orderProduct('${item.name}', ${item.price})">Sipariş Ver</button>
            </div>
        </div>
    `;
    
    return card;
}

// Kategori linklerine tıklama
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loadMenu(link.dataset.category);
    });
});

// İlk menüyü yükle
loadMenu('borek');

// Yorum Sistemi
const starsInput = document.querySelectorAll('.stars-input .star');
let selectedRating = 0;

starsInput.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = star.dataset.value;
        starsInput.forEach((s, index) => {
            if (index < selectedRating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

// Yorum Gönder
const submitReviewBtn = document.getElementById('submitReview');
const reviewNameInput = document.getElementById('reviewName');
const reviewTextInput = document.getElementById('reviewText');
const reviewsList = document.getElementById('reviewsList');

// LocalStorage'dan yorumları yükle
function loadReviews() {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviewsList.innerHTML = '';
    
    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-item';
        reviewDiv.innerHTML = `
            <p class="review-author">${review.name}</p>
            <p class="review-rating">${'⭐'.repeat(review.rating)}</p>
            <p class="review-text">"${review.text}"</p>
        `;
        reviewsList.appendChild(reviewDiv);
    });
}

submitReviewBtn.addEventListener('click', () => {
    const name = reviewNameInput.value.trim();
    const text = reviewTextInput.value.trim();
    
    if (!name || !text || selectedRating === 0) {
        alert('Lütfen tüm alanları doldurunuz!');
        return;
    }
    
    // LocalStorage'a kaydet
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.unshift({
        name: name,
        text: text,
        rating: selectedRating
    });
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    // Formu temizle
    reviewNameInput.value = '';
    reviewTextInput.value = '';
    selectedRating = 0;
    starsInput.forEach(star => star.classList.remove('active'));
    
    // Yorumları yeniden yükle
    loadReviews();
    
    alert('Yorumunuz başarıyla gönderildi!');
});

// Sayfa yüklendiğinde yorumları göster
loadReviews();

// Sipariş Fonksiyonu
function orderProduct(productName, price) {
    const message = `${productName} (${price}₺) sipariş etmek istiyorum.`;
    const whatsappUrl = `https://wa.me/905555555555?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
