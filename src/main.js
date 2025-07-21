// Function to set the theme based on user preference
const applyTheme = () => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// Function to setup the theme toggle button
const setupThemeToggle = () => {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleButton = document.getElementById('theme-toggle');

    if (!themeToggleButton || !themeToggleDarkIcon || !themeToggleLightIcon) return;

    // Set initial icon visibility
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcon.classList.remove('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
    }

    themeToggleButton.addEventListener('click', () => {
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
};

// Function to setup the mobile menu toggle
const setupMobileMenu = () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
};

// Function to setup the FAQ accordion
const setupFAQAccordion = () => {
    const faqAccordion = document.getElementById('faq-accordion');
    if (faqAccordion) {
        const questions = faqAccordion.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('svg');

                // Close other open answers
                questions.forEach(otherQuestion => {
                    const otherAnswer = otherQuestion.nextElementSibling;
                    const otherIcon = otherQuestion.querySelector('svg');
                    if (otherQuestion !== question && !otherAnswer.classList.contains('hidden')) {
                        otherAnswer.classList.add('hidden');
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current answer
                answer.classList.toggle('hidden');
                if (!answer.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });
    }
};

// Function to inject the footer
const injectFooter = () => {
    const footerHTML = `
    <footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div class="container mx-auto px-6 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">جیم<span class="text-indigo-500">فایندر</span></h3>
                    <p class="text-slate-600 dark:text-slate-400 pr-8">بهترین مکان برای یافتن، بررسی و ارتباط با باشگاه‌های منطقه شما. سفر تندرستی خود را امروز با ما آغاز کنید.</p>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">لینک‌های سریع</h4>
                    <ul class="space-y-2">
                        <li><a href="/index.html#gyms" class="hover:text-indigo-500 dark:hover:text-indigo-400 transition">یافتن باشگاه</a></li>
                        <li><a href="/index.html#about" class="hover:text-indigo-500 dark:hover:text-indigo-400 transition">درباره ما</a></li>
                        <li><a href="/index.html#faq" class="hover:text-indigo-500 dark:hover:text-indigo-400 transition">سوالات متداول</a></li>
                        <li><a href="/add-gym.html" class="hover:text-indigo-500 dark:hover:text-indigo-400 transition">باشگاه خود را اضافه کنید</a></li>
                        <li><a href="/privacy-policy.html" class="hover:text-indigo-500 dark:hover:text-indigo-400 transition">سیاست حفظ حریم خصوصی</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">ما را دنبال کنید</h4>
                    <div class="flex space-x-4 space-x-reverse">
                        <a href="#" class="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.45,16.02 6.13,17.26 8.1,17.29C6.63,18.45 4.8,19.12 2.83,19.12C2.47,19.12 2.12,19.1 1.77,19.05C3.78,20.36 6.15,21.11 8.76,21.11C16,21.11 20.38,15.12 20.38,9.83C20.38,9.65 20.37,9.47 20.36,9.29C21.1,8.77 21.85,8.07 22.46,7.22L22.46,6Z" /></svg></a>
                        <a href="#" class="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 9,21.5C9.08,21.5 9.13,21.45 9.13,21.38V19.34C9.13,19.16 9.18,19.08 9.28,18.98C7.5,18.78 5.8,18.13 5.8,15.3C5.8,14.39 6.13,13.64 6.63,13.08C6.55,12.88 6.28,12.03 6.73,10.93C6.73,10.93 7.38,10.73 9.13,11.93C9.75,11.75 10.43,11.67 11.13,11.67C11.83,11.67 12.5,11.75 13.13,11.93C14.88,10.73 15.53,10.93 15.53,10.93C16,12.03 15.7,12.88 15.63,13.08C16.13,13.64 16.45,14.39 16.45,15.3C16.45,18.13 14.75,18.78 13,18.98C13.1,19.08 13.13,19.16 13.13,19.34V21.38C13.13,21.45 13.18,21.5 13.25,21.5C17.13,20.17 20,16.42 20,12A10,10 0 0,0 12,2Z" /></svg></a>
                        <a href="#" class="text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" /></svg></a>
                    </div>
                </div>
            </div>
            <div class="mt-8 border-t border-slate-200 dark:border-slate-800 pt-8 text-center">
                <p class="text-sm text-slate-500 dark:text-slate-400">&copy; ۲۰۲۴ جیم‌فایندر. تمام حقوق محفوظ است.</p>
            </div>
        </div>
    </footer>
    `;
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
};

// Run all setup functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    setupThemeToggle();
    setupMobileMenu();
    setupFAQAccordion();
    injectFooter();
});