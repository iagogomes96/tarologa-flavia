const siteData = {
    whatsapp: {
        numero: "5511995316670",
        exibicao: "(11) 99531-6670", 
        mensagemPadrao: "Olá, Flávia! Vi o seu site e gostaria de saber mais sobre os seus serviços de tarologia. Poderia me ajudar?"
    },
    instagram: {
        url: "https://www.instagram.com/tarologa_flavia",
        exibicao: "@tarologa_flavia"
    },
    tiktok: {
        url: "https://tiktok.com/@tarologa_flavia",
        exibicao: "@tarologa_flavia"
    }
};

function injetarDadosDoSite() {
    const waLink = `https://wa.me/${siteData.whatsapp.numero}?text=${encodeURIComponent(siteData.whatsapp.mensagemPadrao)}`;

    document.querySelectorAll('[data-link="whatsapp"]').forEach(el => el.href = waLink);
    document.querySelectorAll('[data-link="instagram"]').forEach(el => el.href = siteData.instagram.url);
    document.querySelectorAll('[data-link="tiktok"]').forEach(el => el.href = siteData.tiktok.url);

    document.querySelectorAll('[data-text="whatsapp-display"]').forEach(el => el.textContent = siteData.whatsapp.exibicao);
    document.querySelectorAll('[data-text="instagram-display"]').forEach(el => el.textContent = siteData.instagram.exibicao);
    document.querySelectorAll('[data-text="tiktok-display"]').forEach(el => el.textContent = siteData.tiktok.exibicao);
}

injetarDadosDoSite();
lucide.createIcons();

const btnMenu = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('menu-icon-open');
const iconClose = document.getElementById('menu-icon-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isActive = mobileMenu.classList.toggle('active');
    btnMenu.setAttribute('aria-expanded', isActive); 

    if (isActive) {
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
    } else {
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    }
}

btnMenu.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});


const header = document.getElementById('header');
const whatsappFloat = document.getElementById('whatsapp-float');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    if (window.scrollY > 300) {
        whatsappFloat.classList.add('show');
    } else {
        whatsappFloat.classList.remove('show');
    }
}, { passive: true });

// =========================================
// 5. Carrossel de Depoimentos
// =========================================
const track = document.getElementById('carousel-track');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const totalCards = document.querySelectorAll('.testimonial-slide').length;
let currentIndex = 0;

function updateCarousel() {
    const isMobile = window.innerWidth < 768;
    const visibleCards = isMobile ? 1 : 2;
    const maxIndex = totalCards - visibleCards;

    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const percentage = 100 / visibleCards;
    track.style.transform = `translateX(-${currentIndex * percentage}%)`;

    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex >= maxIndex;
}

btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

btnNext.addEventListener('click', () => {
    const isMobile = window.innerWidth < 768;
    const visibleCards = isMobile ? 1 : 2;
    const maxIndex = totalCards - visibleCards;

    if (currentIndex < maxIndex) {
        currentIndex++;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);
updateCarousel();

document.getElementById('year').textContent = new Date().getFullYear();