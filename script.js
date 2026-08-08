/* ================================
   RAMKIN GLOBAL LINK - Interactive JS
   ================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initCategoryFilters();
    initTestimonialCarousel();
    initQuiz();
    initRangeInput();
    initScrollReveal();
});

/* ===== Navbar Scroll Effect ===== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const onScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ===== Mobile Menu ===== */
function initMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.contains('open');
        if (isOpen) {
            menu.style.display = '';
            menu.classList.remove('open');
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            menu.style.display = 'flex';
            menu.style.position = 'absolute';
            menu.style.top = '100%';
            menu.style.left = '0';
            menu.style.right = '0';
            menu.style.flexDirection = 'column';
            menu.style.gap = '0';
            menu.style.background = 'rgba(255,255,255,0.98)';
            menu.style.backdropFilter = 'blur(20px)';
            menu.style.padding = '12px 0';
            menu.style.boxShadow = '0 10px 30px rgba(10, 36, 99, 0.12)';
            menu.querySelectorAll('a').forEach(a => {
                a.style.color = 'var(--deep-ocean)';
                a.style.padding = '14px 24px';
                a.style.display = 'block';
                a.style.borderBottom = '1px solid var(--border-light)';
            });
            menu.classList.add('open');
            toggle.innerHTML = '<i class="fas fa-times"></i>';
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
                menu.style.display = '';
                toggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

/* ===== Category Filters ===== */
function initCategoryFilters() {
    const filters = document.querySelectorAll('.cat-filter');
    const cards = document.querySelectorAll('.category-card');

    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

/* ===== Testimonial Carousel ===== */
let currentSlide = 0;
let totalSlides = 3;
let autoPlayTimer;

function initTestimonialCarousel() {
    const track = document.getElementById('testimonialTrack');
    const prev = document.getElementById('prevTestimonial');
    const next = document.getElementById('nextTestimonial');
    const dots = document.querySelectorAll('#carouselDots .dot');

    if (!track) return;

    const goToSlide = (n) => {
        currentSlide = (n + totalSlides) % totalSlides;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
        resetAutoPlay();
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(() => goToSlide(currentSlide + 1), 7000);
    };

    prev.addEventListener('click', () => goToSlide(currentSlide - 1));
    next.addEventListener('click', () => goToSlide(currentSlide + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goToSlide(i)));

    const carousel = document.getElementById('testimonialCarousel');
    let startX = 0;
    carousel.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', (e) => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goToSlide(currentSlide + (diff > 0 ? 1 : -1));
    });

    resetAutoPlay();
}

/* ===== Itinerary / Detail Modal ===== */
const packageData = {
    saudi: {
        title: 'Riyadh, Saudi Arabia',
        location: 'Kingdom of Saudi Arabia',
        duration: '2-4 weeks',
        salary: '$1,200 USD/mo',
        price: '$0',
        badge: 'Hot Package',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Riyadh%20Saudi%20Arabia%20modern%20city%20center%20skyline%20daylight%20kingdom%20tower%20professional%20photo&image_size=square_hd',
        stars: 5
    },
    dubai: {
        title: 'Dubai, United Arab Emirates',
        location: 'United Arab Emirates',
        duration: '3-5 weeks',
        salary: '$1,800 USD/mo',
        price: '$0',
        badge: 'Premium Package',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Dubai%20UAE%20luxury%20downtown%20skyline%20Dubai%20Mall%20fountain%20golden%20hour%20professional%20photography&image_size=square_hd',
        stars: 4.5
    },
    qatar: {
        title: 'Doha, Qatar',
        location: 'State of Qatar',
        duration: '1-3 weeks',
        salary: '$1,500 USD/mo',
        price: '$0',
        badge: 'Fast Hire',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Doha%20Qatar%20modern%20skyline%20West%20Bay%20district%20night%20lights%20luxury%20cityscape&image_size=square_hd',
        stars: 5
    },
    kuwait: {
        title: 'Kuwait City, Kuwait',
        location: 'State of Kuwait',
        duration: '2-4 weeks',
        salary: '$950 USD/mo',
        price: '$0',
        badge: 'Tax-Free',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Kuwait%20City%20skyline%20Arabian%20gulf%20modern%20buildings%20waterfront%20daylight%20professional%20photo&image_size=square_hd',
        stars: 5
    },
    bahrain: {
        title: 'Manama, Bahrain',
        location: 'Kingdom of Bahrain',
        duration: '2-3 weeks',
        salary: '$850 USD/mo',
        price: '$0',
        badge: 'Entry Level',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Manama%20Bahrain%20cityscape%20skyline%20harbor%20blue%20sky%20modern%20architecture&image_size=square_hd',
        stars: 4
    },
    oman: {
        title: 'Muscat, Oman',
        location: 'Sultanate of Oman',
        duration: '3-5 weeks',
        salary: '$1,100 USD/mo',
        price: '$0',
        badge: 'Family Visa',
        image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Muscat%20Oman%20coastal%20city%20mountains%20blue%20sea%20traditional%20and%20modern%20buildings%20professional&image_size=square_hd',
        stars: 5
    }
};

function openItinerary(key) {
    const pkg = packageData[key] || packageData.saudi;
    const modal = document.getElementById('itineraryModal');

    document.getElementById('modalImage').src = pkg.image;
    document.getElementById('modalImage').alt = pkg.title;
    document.getElementById('modalBadge').textContent = pkg.badge;
    document.getElementById('modalTitle').textContent = pkg.title;
    document.getElementById('modalLocation').textContent = pkg.location;
    document.getElementById('modalDuration').textContent = pkg.duration;
    document.getElementById('modalSalary').textContent = pkg.salary;
    document.getElementById('modalPrice').textContent = pkg.price;

    const starsEl = document.getElementById('modalStars');
    starsEl.innerHTML = '';
    const full = Math.floor(pkg.stars);
    const half = pkg.stars % 1 >= 0.5;
    for (let i = 0; i < full; i++) starsEl.innerHTML += '<i class="fas fa-star"></i>';
    if (half) starsEl.innerHTML += '<i class="fas fa-star-half-alt"></i>';
    const empty = 5 - full - (half ? 1 : 0);
    for (let i = 0; i < empty; i++) starsEl.innerHTML += '<i class="far fa-star"></i>';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeItinerary() {
    const modal = document.getElementById('itineraryModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeItinerary();
});

/* ===== Quiz / Builder ===== */
let quizStep = 1;
const quizData = {
    name: '',
    phone: '',
    age: '',
    edu: '',
    exp: 3,
    salary: '',
    acco: ''
};

function initQuiz() {
    updateStepUI();
}

function nextStep(from) {
    if (from === 1) {
        const name = document.getElementById('q1_name').value.trim();
        const phone = document.getElementById('q1_phone').value.trim();
        const age = document.getElementById('q1_age').value;
        const edu = document.getElementById('q1_edu').value;

        if (!name || !phone) {
            showToast('Please enter your name and phone number');
            return;
        }
        if (!age || !edu) {
            showToast('Please complete all profile fields');
            return;
        }

        quizData.name = name;
        quizData.phone = phone;
        quizData.age = age;
        quizData.edu = edu;
        quizData.exp = parseInt(document.getElementById('q1_exp').value);

        quizStep = 2;
    } else if (from === 2) {
        const dests = document.querySelectorAll('.chip-group:first-of-type input:checked');
        const cats = document.querySelectorAll('.chip-group:nth-of-type(2) input:checked');
        if (dests.length === 0 || cats.length === 0) {
            showToast('Please select at least one destination and job field');
            return;
        }

        quizData.salary = document.getElementById('q2_salary').value || 'Flexible';
        quizData.acco = document.getElementById('q2_acco').value;

        document.getElementById('sumName').textContent = quizData.name;
        document.getElementById('sumPhone').textContent = quizData.phone;
        document.getElementById('sumEdu').textContent = quizData.edu;
        document.getElementById('sumExp').textContent = quizData.exp + ' years experience';

        quizStep = 3;
    }
    updateStepUI();
}

function prevStep(from) {
    if (from === 2) quizStep = 1;
    else if (from === 3) quizStep = 2;
    updateStepUI();
}

function updateStepUI() {
    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    const stepEl = document.getElementById('step' + quizStep);
    if (stepEl) stepEl.classList.add('active');

    const fill = document.getElementById('progressFill');
    if (fill) {
        const pcts = [0, 33.33, 66.66, 100];
        fill.style.width = pcts[quizStep] + '%';
    }

    const indicators = document.querySelectorAll('.step-indicators .step');
    indicators.forEach((el, i) => {
        const stepNum = i + 1;
        el.classList.toggle('active', stepNum === quizStep);
        el.classList.toggle('completed', stepNum < quizStep);
        const circle = el.querySelector('.step-circle');
        if (stepNum < quizStep) circle.innerHTML = '<i class="fas fa-check" style="font-size:0.85rem;"></i>';
        else circle.textContent = stepNum;
    });

    if (quizStep === 3 && stepEl) {
        stepEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function submitQuiz() {
    const btn = event.target;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        showToast('Application submitted! A consultant will call you within 24 hours.');
        quizStep = 1;
        document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
        document.getElementById('step1').classList.add('active');
        document.getElementById('q1_name').value = '';
        document.getElementById('q1_phone').value = '';
        document.getElementById('q1_age').value = '';
        document.getElementById('q1_edu').value = '';
        document.getElementById('q1_exp').value = 3;
        document.getElementById('expVal').textContent = '3';
        document.getElementById('q2_salary').value = '';
        document.querySelectorAll('.chip input').forEach(c => c.checked = false);
        updateStepUI();
    }, 1600);
}

function initRangeInput() {
    const range = document.getElementById('q1_exp');
    const val = document.getElementById('expVal');
    if (range && val) {
        range.addEventListener('input', () => {
            val.textContent = range.value;
        });
    }
}

/* ===== Newsletter ===== */
function subscribeNewsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (!input.value) return;

    const btn = e.target.querySelector('.btn');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    btn.disabled = true;

    setTimeout(() => {
        input.value = '';
        btn.innerHTML = originalHTML;
        btn.disabled = false;
        showToast('Thanks! You\'re subscribed to our exclusive job alerts.');
    }, 1000);
}

/* ===== Toast ===== */
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 3800);
}

/* ===== Scroll Reveal ===== */
function initScrollReveal() {
    const els = document.querySelectorAll(
        '.section-header, .destination-card, .category-card, .feature-card, .trust-item, .insta-item'
    );
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.style.opacity = '1');
        return;
    }
    els.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, (i % 4) * 80);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => obs.observe(el));
}
