import './style.css'

const gyms = [
    { name: 'Iron Fit Gym', price: 30, description: 'Modern equipment and expert trainers for all fitness levels.', image: '/gym1.jpg' },
    { name: 'Power House', price: 35, description: 'Specialized in strength training and powerlifting.', image: '/gym2.jpg' },
    { name: 'CrossFit Zone', price: 40, description: 'Professional CrossFit box with certified coaches.', image: '/gym3.jpg' },
    { name: 'Fitness Plus', price: 25, description: '24/7 access to cardio and weight training equipment.', image: '/gym4.jpg' },
    { name: 'Yoga Life', price: 45, description: 'Peaceful environment for yoga and meditation classes.', image: '/gym5.jpg' },
    { name: 'Elite Fitness', price: 50, description: 'Luxury gym experience with premium amenities.', image: '/gym6.jpg' },
];

const app = document.querySelector<HTMLDivElement>('#app')!

const renderGyms = (filteredGyms = gyms) => {
    const gymGrid = filteredGyms.map(gym => `
        <article class="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100 overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div class="h-56 bg-cover bg-center" style="background-image: url('${gym.image}')"></div>
            <div class="p-8">
                <h3 class="text-2xl font-extrabold text-blue-900">${gym.name}</h3>
                <p class="text-lg text-pink-400 mt-2 font-semibold">Starting at $${gym.price}/mo</p>
                <p class="mt-4 text-blue-800">${gym.description}</p>
                <a href="#" class="inline-block mt-6 bg-gradient-to-r from-pink-400 to-blue-400 text-white py-2 px-6 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-400 hover:to-pink-400 transition-transform duration-300">View Details</a>
            </div>
        </article>
    `).join('');

    app.innerHTML = `
        <!-- Hero/Header -->
        <header class="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white shadow-xl rounded-b-3xl">
            <div class="container mx-auto px-6 py-12 flex flex-col items-center justify-center text-center relative">
                <h1 class="text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">Find Your <span class="text-pink-400">Perfect Gym</span></h1>
                <p class="text-lg md:text-xl text-blue-100 max-w-2xl mb-6">Discover the best fitness facilities in your area and start your fitness journey today!</p>
                <div class="absolute right-0 top-0 opacity-30 pointer-events-none hidden md:block">
                    <svg width="300" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="100" r="100" fill="#f472b6"/>
                        <circle cx="100" cy="150" r="60" fill="#38bdf8"/>
                    </svg>
                </div>
                <div class="w-full flex flex-col items-center mt-8">
                    <input type="text" id="search" placeholder="Search for a gym..." class="w-full max-w-lg p-4 rounded-xl border border-blue-200 bg-blue-50 text-blue-900 shadow focus:border-pink-400 focus:ring-2 focus:ring-pink-200 transition" />
                </div>
            </div>
            <nav class="container mx-auto px-6 flex items-center justify-center space-x-8 pb-4">
                <a href="/" class="text-pink-400 font-bold underline">Home</a>
                <a href="/src/pages/about.html" class="hover:text-pink-400 transition-colors duration-300 font-semibold">About Us</a>
                <a href="/src/pages/contact.html" class="hover:text-pink-400 transition-colors duration-300 font-semibold">Contact Us</a>
                <a href="#" class="bg-gradient-to-r from-pink-400 to-blue-400 py-2 px-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-blue-400 hover:to-pink-400 transition-transform duration-300">Submit a New Gym</a>
            </nav>
        </header>

        <main class="container mx-auto px-6 py-16">
            <section>
                <h2 class="text-3xl font-bold text-center text-blue-900 mb-12">Featured Gyms</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    ${gymGrid}
                </div>
            </section>
        </main>

        <footer class="bg-gradient-to-r from-blue-900 via-blue-700 to-pink-400 text-white py-12 mt-16 rounded-t-3xl shadow-inner">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h4 class="text-xl font-bold mb-2">About GymFinder</h4>
                        <p class="text-blue-100">Connecting fitness enthusiasts with the perfect gyms since 2024.</p>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-2">Quick Links</h4>
                        <ul class="space-y-2">
                            <li><a href="/src/pages/about.html" class="hover:text-pink-200 transition">About Us</a></li>
                            <li><a href="/src/pages/contact.html" class="hover:text-pink-200 transition">Contact</a></li>
                            <li><a href="#" class="hover:text-pink-200 transition">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-pink-200 transition">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold mb-2">Contact Us</h4>
                        <ul class="space-y-2 text-blue-100">
                            <li class="flex items-center gap-2"><svg class="w-5 h-5 text-pink-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 01-8 0V8a4 4 0 018 0v4z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 16v2m0 0h-2m2 0h2"/></svg> info@gymfinder.com</li>
                            <li class="flex items-center gap-2"><svg class="w-5 h-5 text-pink-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.5 19h9a2 2 0 001.85-2.7L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7"/></svg> (555) 123-4567</li>
                            <li class="flex items-center gap-2"><svg class="w-5 h-5 text-pink-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243A8 8 0 1116.657 7.343z"/></svg> 123 Fitness Street</li>
                        </ul>
                        <div class="flex space-x-4 mt-4">
                            <a href="#" class="hover:scale-110 transition-transform"><svg class="w-6 h-6 text-blue-200 hover:text-pink-200" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91A4.54 4.54 0 0 1 19.44 24H4.56A4.54 4.54 0 0 1 0 19.47V4.56A4.54 4.54 0 0 1 4.56 0h14.91A4.54 4.54 0 0 1 24 4.56zM7.09 20.45h3.09v-7.09H7.09zm1.54-8.09a1.79 1.79 0 1 1 1.79-1.79 1.79 1.79 0 0 1-1.79 1.79zm9.82 8.09h3.09v-4.09c0-2.18-1.16-3.19-2.7-3.19a2.32 2.32 0 0 0-2.09 1.16v-1h-3.09s.04.66 0 7.09h3.09v-3.97c0-1.06.19-2.09 1.54-2.09s1.54 1.03 1.54 2.09z"/></svg></a>
                            <a href="#" class="hover:scale-110 transition-transform"><svg class="w-6 h-6 text-blue-200 hover:text-pink-200" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.763.127 1.124C7.691 8.095 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.808 2.105-6.102 2.105-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                            <a href="#" class="hover:scale-110 transition-transform"><svg class="w-6 h-6 text-blue-200 hover:text-pink-200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.342 2.393 1.322 3.373.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.98-.98 1.263-2.092 1.322-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.342-2.393-1.322-3.373-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0z"/></svg></a>
                        </div>
                    </div>
                </div>
                <div class="mt-12 border-t border-blue-800 pt-8 text-center text-blue-100">
                    <p>&copy; 2024 GymFinder. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;

    const searchInput = document.getElementById('search') as HTMLInputElement;
    searchInput.addEventListener('input', (e) => {
        const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
        const filteredGyms = gyms.filter(gym => gym.name.toLowerCase().includes(searchTerm));
        renderGyms(filteredGyms);
        (document.getElementById('search') as HTMLInputElement).value = searchTerm;
    });
};

renderGyms();