// Main Logic for Codzy Tech

// Tailwind Configuration Injection
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2448FF',
                secondary: '#82FD28',
                dark: '#2448FF',
                light: '#F2F2F2',
                accent: '#D3C7EB',
                text: '#282828'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

// Layout Components
function renderHeader() {
    const header = document.createElement('header');
    header.className = 'fixed w-full top-0 z-50 bg-[#2448FF]/95 backdrop-blur border-b border-white/10 text-white transition-all duration-300';
    header.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="index.html" class="flex items-center gap-2">
                        <img src="images/Artboard 14.png" alt="Codzy Tech Logo" class="h-10 w-auto object-contain">
                        <span class="font-bold text-xl tracking-tight">Codzy Tech</span>
                    </a>
                </div>

                <!-- Desktop Menu -->
                <nav class="hidden md:flex space-x-8 items-center">
                    <a href="index.html" class="text-white hover:text-secondary font-medium transition-colors" data-i18n="nav.home">Home</a>
                    <div class="relative group">
                        <a href="courses.html" class="text-white hover:text-secondary font-medium transition-colors flex items-center gap-1">
                            <span data-i18n="nav.courses">Courses</span> <i data-lucide="chevron-down" class="w-4 h-4"></i>
                        </a>
                        <!-- Dropdown -->
                        <div class="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <div class="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tracks</div>
                            <a href="courses.html#kids" class="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary">Kids & Teens (12-18)</a>
                            <a href="courses.html#pro" class="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary">Students & Professionals</a>
                        </div>
                    </div>
                    <a href="about.html" class="text-white hover:text-secondary font-medium transition-colors" data-i18n="nav.about">About</a>
                    <a href="instructors.html" class="text-white hover:text-secondary font-medium transition-colors" data-i18n="nav.instructors">Instructors</a>
                    
                    <!-- Lang Switcher -->
                    <button onclick="toggleLanguage()" class="flex items-center gap-1 text-gray-300 hover:text-white font-medium transition-colors border border-white/20 px-3 py-1 rounded-full text-sm">
                        <span id="lang-text">AR</span>
                    </button>

                    <a href="contact.html" class="px-6 py-2.5 bg-secondary text-dark font-bold rounded-full hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(130,253,40,0.3)]" data-i18n="nav.cta">
                        Start Learning
                    </a>
                </nav>

                <!-- Mobile Button -->
                <div class="md:hidden flex items-center gap-4">
                     <button onclick="toggleLanguage()" class="text-gray-300 font-bold border border-white/20 px-2 py-1 rounded text-xs">
                        <span id="mobile-lang-text">AR</span>
                    </button>
                    <button id="mobile-menu-btn" class="text-white hover:text-secondary focus:outline-none">
                        <i data-lucide="menu" class="w-8 h-8"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-[#03001B] border-t border-white/10">
            <div class="px-4 pt-2 pb-6 space-y-2">
                <a href="index.html" class="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg" data-i18n="nav.home">Home</a>
                <a href="courses.html" class="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg" data-i18n="nav.courses">Courses</a>
                <a href="about.html" class="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg" data-i18n="nav.about">About Academy</a>
                <a href="instructors.html" class="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-lg" data-i18n="nav.instructors">Instructors</a>
                <a href="contact.html" class="block mt-4 text-center px-4 py-3 bg-secondary text-dark font-bold rounded-lg hover:bg-green-400" data-i18n="nav.cta">
                    Get Started Now
                </a>
            </div>
        </div>
    `;
    document.body.prepend(header);

    // Initialize Mobile Menu Logic
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Initialize Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize Language
    applyLanguage(localStorage.getItem('lang') || 'en');
}

function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-dark text-white pt-20 pb-10 border-t border-white/10';
    footer.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-1 md:col-span-1">
                    <div class="flex items-center gap-2 mb-6">
                        <img src="images/Artboard 14.png" alt="Codzy Tech Logo" class="h-8 w-auto object-contain">
                        <span class="font-bold text-xl tracking-tight">Codzy Tech</span>
                    </div>
                    <p class="text-white text-sm leading-relaxed mb-6" data-i18n="footer.slogan">
                        Empowering the next generation of innovators with future-ready tech skills. From first lines of code to professional mastery.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.facebook.com/share/1AUTJoiZLz/" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><i data-lucide="facebook" class="w-5 h-5"></i></a>
                        <a href="https://www.instagram.com/codzyacademy?igsh=OWtkbDNsbHllbXkw" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><i data-lucide="instagram" class="w-5 h-5"></i></a>
                        <a href="https://www.linkedin.com/company/codzy-academy/" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
                        <a href="https://www.tiktok.com/@codzy.academy?_r=1&_t=ZS-92AXuz4SP5s" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"><i data-lucide="video" class="w-5 h-5"></i></a>
                    </div>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 text-white" data-i18n="footer.programs">Programs</h3>
                    <ul class="space-y-4 text-white text-sm">
                        <li><a href="courses.html#kids" class="hover:text-secondary transition-colors">Kids Coding (12-14)</a></li>
                        <li><a href="courses.html#kids" class="hover:text-secondary transition-colors">Teens Python (15-18)</a></li>
                        <li><a href="courses.html#pro" class="hover:text-secondary transition-colors">Pro Web Development</a></li>
                        <li><a href="courses.html#pro" class="hover:text-secondary transition-colors">AI & Data Science</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 text-white" data-i18n="footer.academy">Academy</h3>
                    <ul class="space-y-4 text-white text-sm">
                        <li><a href="about.html" class="hover:text-secondary transition-colors">Our Story</a></li>
                        <li><a href="instructors.html" class="hover:text-secondary transition-colors">Instructors</a></li>
                        <li><a href="success.html" class="hover:text-secondary transition-colors">Success Stories</a></li>
                        <li><a href="contact.html" class="hover:text-secondary transition-colors" data-i18n="footer.contact">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-bold mb-6 text-white" data-i18n="footer.contact">Contact</h3>
                    <ul class="space-y-4 text-white text-sm">
                        <li class="flex items-start gap-3">
                            <i data-lucide="map-pin" class="w-5 h-5 text-primary mt-0.5"></i>
                            <span>New Adminstrative Capital, New Cairo<br>Egypt</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i data-lucide="phone" class="w-5 h-5 text-primary"></i>
                            <span>+20 103 557 2710</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i data-lucide="mail" class="w-5 h-5 text-primary"></i>
                            <span>codzytech@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white">
                <p>&copy; 2025 Codzy Tech. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white transition-colors" data-i18n="footer.privacy">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition-colors" data-i18n="footer.terms">Terms of Service</a>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(footer);

    // Re-run icons for footer
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}


// Language Switcher Logic
function toggleLanguage() {
    const current = localStorage.getItem('lang') || 'en';
    const next = current === 'en' ? 'ar' : 'en';
    applyLanguage(next);
    setTimeout(() => location.reload(), 100);
}

function applyLanguage(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update Button Text
    const btnText = document.getElementById('lang-text');
    const mobileBtnText = document.getElementById('mobile-lang-text');
    if (btnText) btnText.textContent = lang === 'en' ? 'AR' : 'EN';
    if (mobileBtnText) mobileBtnText.textContent = lang === 'en' ? 'AR' : 'EN';

    // Apply translations
    if (typeof translations !== 'undefined' && translations[lang]) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }
}

// Auto-run on load
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    // Re-apply language after rendering to catch new elements
    setTimeout(() => {
        applyLanguage(localStorage.getItem('lang') || 'en');
    }, 50);
});
