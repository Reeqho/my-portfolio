/* ========================================
   PORTFOLIO CONFIG - RADIT
   Ubah konfigurasi di sini untuk kemudahan!
   ======================================== */

// ========== INFORMASI PRIBADI ==========
const portfolioConfig = {
    // Informasi Dasar
    personalInfo: {
        name: "Radit",
        title: "Web Developer, .NET Develooper, IoT Enthusiast",
        email: "teeqho90@gmail.com",
        phone: "+6285236150091",
        location: "Surabaya, Indonesia",
        bio: "Saya adalah seorang web dan desktop developer dengan pengalaman dalam membangun aplikasi yang efisien dan user-friendly. Saya memiliki keahlian dalam berbagai teknologi seperti Laravel, C#, dan Winforms, serta pengalaman dalam instalasi, konfigurasi, dan pemeliharaan perangkat keras komputer. Saya selalu bersemangat untuk belajar hal baru dan siap untuk menghadapi tantangan dalam dunia pengembangan perangkat lunak.",
    },

    // Sosial Media Links
    socialMedia: {
        linkedin: "https://www.linkedin.com/in/raditya-octa-syahputra-b27ab2330/",
        github: "https://github.com/Reeqho",
        instagram: "https://www.instagram.com/teq0dit_/",
        whatsapp: "https://wa.me/6285236150091",
        facebook: "https://web.facebook.com/radet.octa"
    },

    // Tema Warna (CSS Variables)
    theme: {
        primaryColor: "#6c5ce7",        // Warna utama
        primaryDark: "#5f3dc4",         // Warna utama gelap
        secondaryColor: "#00b894",      // Warna sekunder
        textColor: "#2d3436",           // Warna teks
        textLight: "#636e72",           // Warna teks ringan
        bgColor: "#ffffff",             // Background
        bgLight: "#f8f9fa",             // Background ringan
        borderColor: "#e0e0e0",         // Border
    },

    // Pengalaman Kerja
    experience: [
        {
            year: "2023 - Sekarang",
            position: "Junior Web Developer",
            company: "Kominfo",
            description: "Membuat dan memelihara aplikasi web untuk layanan publik menggunakan Laravel dan Tailwind CSS."
        },
    ],
    // Proyek
    projects: [
        {
            id: 1,
            title: "SPBE",
            description: "Sistem Pemerintahan Berbasis Elektronik untuk meningkatkan efisiensi layanan publik di Pemerintah Kota Magetan",
            descriptionFull: "Sistem Pemerintahan Berbasis Elektronik (SPBE) merupakan penyelenggaraan pemerintahan yang memanfaatkan teknologi informasi dan komunikasi untuk meningkatkan efektivitas, efisiensi, serta kualitas layanan publik. SPBE mendukung pelayanan kepada instansi pemerintah, aparatur sipil negara, masyarakat, pelaku usaha, dan berbagai pihak yang memanfaatkan layanan pemerintah secara digital.",
            category: "Web-App",
            technologies: ["Tailwind CSS", "Laravel", "PostgreSQL", "JavaScript"],
            year: "2024",
            client: "Pemerintah Kota Magetan",
            image: "assets/images/project1.png",
            projectLink: "https://drive.google.com/drive/folders/1lGf2q7ZBjfP7idP2QBvGM-_KTK8oUAr6?usp=drive_link"
        },
        {
            id: 2,
            title: "Smart Inventory And Sales Management",
            description: "Sistem manajemen inventaris dan penjualan yang memanfaatkan teknologi untuk meningkatkan efisiensi operasional",
            descriptionFull: "Sistem manajemen inventaris dan penjualan yang memanfaatkan teknologi untuk meningkatkan efisiensi operasional. Sistem ini dirancang untuk membantu bisnis dalam mengelola stok, memproses transaksi penjualan, dan menghasilkan laporan keuangan secara otomatis. Dengan fitur-fitur seperti pelacakan inventaris real-time, manajemen pelanggan, dan analisis penjualan, sistem ini bertujuan untuk meningkatkan produktivitas dan profitabilitas bisnis.",
            category: "Smart Inventory",
            technologies: ["C#", "Winforms", "Entity Framework", "SQL Lite"],
            year: "2025",
            client: "UMKM",
            image: "assets/images/project2.png",
            projectLink: "https://github.com/Reeqho/SmartInventoryWinForms"
        },
    ],

    // Metadata untuk SEO
    seo: {
        siteName: "Portfolio Radit",
        description: "Portfolio profesional Radit - Web Developer & Designer dengan pengalaman 5+ tahun",
        keywords: "web developer, designer, portfolio, frontend, react, vue.js",
        author: "Radit",
        ogImage: "assets/images/profile.png"
    },

    // Pengaturan Kontak
    contact: {
        formTitle: "Hubungi Saya",
        formSubtitle: "Kirim pesan dan kami akan merespons segepat mungkin",
        workingHours: {
            weekday: "Senin - Jumat: 09:00 - 18:00",
            weekend: "Sabtu: 10:00 - 16:00"
        },
        responseTime: "Biasanya respons dalam 24 jam"
    }
};

// ========== FUNGSI UNTUK MENGGUNAKAN CONFIG ==========

/**
 * Fungsi untuk mendapatkan informasi dari config
 * Usage: getConfig('personalInfo.name')
 */
function getConfig(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], portfolioConfig);
}

/**
 * Fungsi untuk update config
 * Usage: updateConfig('theme.primaryColor', '#ff0000')
 */
function updateConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const obj = keys.reduce((o, k) => o[k], portfolioConfig);
    if (obj) obj[lastKey] = value;
    applyTheme();
}

/**
 * Fungsi untuk menerapkan tema
 */
function applyTheme() {
    const theme = portfolioConfig.theme;
    const root = document.documentElement;

    Object.entries(theme).forEach(([key, value]) => {
        const cssVarName = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(cssVarName, value);
    });
}

//
// POPULATE DENGAN CONFIG
//

// Populate contact info
function populateContactInfo() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');

    // Update email
    emailLinks.forEach(link => {
        link.href = `mailto:${portfolioConfig.personalInfo.email}`;
        link.textContent = portfolioConfig.personalInfo.email;
    });

    // Update WhatsApp
    whatsappLinks.forEach(link => {
        link.href = portfolioConfig.socialMedia.whatsapp;
        link.textContent = portfolioConfig.personalInfo.phone;
    });
}

// Populate social media links
function populateSocialMedia() {
    const socialLinks = document.querySelectorAll('.social-links a, .social-icon');
    const socialConfig = portfolioConfig.socialMedia;

    // Map social icons ke config
    const socialMap = {
        'linkedin': socialConfig.linkedin,
        'github': socialConfig.github,
        'instagram': socialConfig.instagram,
        'facebook': socialConfig.facebook,
    };

    socialLinks.forEach((link, index) => {
        const keys = Object.keys(socialMap);
        if (index < keys.length) {
            link.href = socialMap[keys[index]];
        }
    });
}


// populate projects in indexPage 
function populateProjectsIndex() {
    const projectsGrid = document.querySelector('.projects-grid');

    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    portfolioConfig.projects.forEach(project => {
        const techTags = project.technologies
            .map(tech => `<span class="tag">${tech}</span>`)
            .join('');

        projectsGrid.innerHTML += `
            <article class="project-card">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>

                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>

                    <div class="project-tags">
                        ${techTags}
                    </div>

                    <a href="projects.html?id=${project.id}" class="project-link">
                        Lihat Detail →
                    </a>
                </div>
            </article>
        `;
    });
}

function populateProjects() {

    // ======================
    // FILTER BUTTONS
    // ======================
    const filterContainer = document.querySelector('.filter-buttons');
    const projectsGridFull = document.querySelector('.projects-grid-full');

    if (!filterContainer || !projectsGridFull) return;

    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">
            Semua
        </button>
    `;

    portfolioConfig.projects.forEach(project => {
        filterContainer.innerHTML += `
            <button class="filter-btn" data-filter="${project.category}">
                ${project.title}
            </button>
        `;
    });

    // ======================
    // PROJECT CARDS
    // ======================
    projectsGridFull.innerHTML = '';

    portfolioConfig.projects.forEach(project => {

        const techTags = project.technologies
            .map(tech => `<span class="tag">${tech}</span>`)
            .join('');

        projectsGridFull.innerHTML += `
            <article class="project-card-full"
                     data-category="${project.category}">
                <div class="project-image-full">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <a href="${project.projectLink}" class="view-btn" target="_blank">
                            Lihat Detail
                        </a>
                    </div>
                </div>

                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.descriptionFull}</p>

                    <div class="project-meta">
                        <span class="client">
                            Client: ${project.client}
                        </span>

                        <span class="date">
                            Tahun: ${project.year}
                        </span>
                    </div>

                    <div class="project-technologies">
                        ${techTags}
                    </div>
                </div>
            </article>
        `;
    });

    // ======================
    // FILTER EVENT
    // ======================
    const filterButtons =
        document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {

        button.addEventListener('click', () => {

            filterButtons.forEach(btn =>
                btn.classList.remove('active')
            );

            button.classList.add('active');

            const filter = button.dataset.filter;

            document
                .querySelectorAll('.project-card-full')
                .forEach(card => {

                    if (
                        filter === 'all' ||
                        card.dataset.category === filter
                    ) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }

                });
        });

    });
}

/**
 * Fungsi untuk generate menu dari config
 */
function generateNavMenu() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;

    // Menu items
    const menuItems = [
        { label: 'Home', href: 'index.html' },
        { label: 'Tentang', href: 'about.html' },
        { label: 'Proyek', href: 'projects.html' },
        { label: 'Kontak', href: 'contact.html' }
    ];

    navMenu.innerHTML = menuItems.map(item =>
        `<li><a href="${item.href}">${item.label}</a></li>`
    ).join('');
}

// 
//  Load meta tags untuk SEO
//  
function loadSEOMetaTags() {
    const seo = portfolioConfig.seo;
    const head = document.head;

    // Description
    let descTag = head.querySelector('meta[name="description"]');
    if (!descTag) {
        descTag = document.createElement('meta');
        descTag.name = 'description';
        head.appendChild(descTag);
    }
    descTag.content = seo.description;

    // Keywords
    let keywordsTag = head.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
        keywordsTag = document.createElement('meta');
        keywordsTag.name = 'keywords';
        head.appendChild(keywordsTag);
    }
    keywordsTag.content = seo.keywords;

    // OG Image
    let ogImageTag = head.querySelector('meta[property="og:image"]');
    if (!ogImageTag) {
        ogImageTag = document.createElement('meta');
        ogImageTag.setAttribute('property', 'og:image');
        head.appendChild(ogImageTag);
    }
    ogImageTag.content = seo.ogImage;
}


// UNSUSED FUNCTIONS - Simpan untuk referensi atau fitur masa depan

// // Keahlian
// skills: {
//     frontend: ["HTML/CSS", "JavaScript", "React", "Vue.js", "Responsive Design"],
//     backend: ["Node.js", "Express.js", "PostgreSQL", "SQL", "REST API"],
//     tools: ["Git", "Figma", "VS Code", "Visual Studio"],
//     soft: ["Problem Solving", "Team Work", "Communication", "Leadership"]
// },

// // Statistik
// stats: {
//     projectsCompleted: "50+",
//     happyClients: "45+",
//     yearsExperience: "5+",
//     clientSatisfaction: "100%"
// },

// Konten FAQ
// faqItems: [
//     {
//         question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
//         answer: "Timeline proyek bergantung pada kompleksitas dan scope. Rata-rata project landing page membutuhkan 2-4 minggu, sementara web app membutuhkan 1-3 bulan. Kami akan memberikan estimasi detail setelah konsultasi."
//     },
//     {
//         question: "Berapa biaya untuk membuat website?",
//         answer: "Biaya bervariasi tergantung kebutuhan. Landing page sederhana mulai dari 5 juta, website corporate 10-20 juta, dan web app sesuai kompleksitas. Hubungi saya untuk konsultasi gratis."
//     },
//     {
//         question: "Apakah website akan mobile responsive?",
//         answer: "Ya, semua project saya didesain dengan mobile-first approach. Website akan responsive dan optimal di semua device dengan performa yang cepat."
//     },
//     {
//         question: "Apakah termasuk support setelah launching?",
//         answer: "Ya, setiap project termasuk periode maintenance 3 bulan gratis. Kami juga menyediakan paket maintenance bulanan untuk support berkelanjutan."
//     }
// ],

// Testimoni Klien
// testimonials: [
//     {
//         text: "Radit sangat profesional dan deliver hasil yang melampaui ekspektasi. Komunikasi jelas dan timeline terpenuhi.",
//         author: "Budi Santoso",
//         position: "CEO TechStart",
//         rating: 5
//     },
//     {
//         text: "Website yang dibuat sangat user-friendly dan responsive. Traffic website kami naik 150% dalam 3 bulan.",
//         author: "Siti Nurhaliza",
//         position: "Pemilik Toko Online",
//         rating: 5
//     },
//     {
//         text: "Kerja sama dengan Radit sangat smooth. Tim responsif dan selalu siap membantu saat ada pertanyaan.",
//         author: "Ahmad Wijaya",
//         position: "Direktur Marketing",
//         rating: 5
//     }
// ],
/**
 * Fungsi untuk populate FAQ
 */
// function populateFAQ() {
//     const faqSection = document.querySelector('.faq-grid');
//     if (!faqSection) return;

//     faqSection.innerHTML = portfolioConfig.faqItems.map(item => `
//         <div class="faq-item">
//             <button class="faq-question">
//                 <span>${item.question}</span>
//                 <span class="faq-icon">+</span>
//             </button>
//             <div class="faq-answer">
//                 <p>${item.answer}</p>
//             </div>
//         </div>
//     `).join('');

//     // Re-initialize FAQ functionality
//     initializeFAQ();
// }

// /**
//  * Fungsi untuk populate testimonials
//  */
// function populateTestimonials() {
//     const testimonialsGrid = document.querySelector('.testimonials-grid');
//     if (!testimonialsGrid) return;

//     testimonialsGrid.innerHTML = portfolioConfig.testimonials.map(item => `
//         <div class="testimonial-card">
//             <div class="stars">${'⭐'.repeat(item.rating)}</div>
//             <p class="testimonial-text">"${item.text}"</p>
//             <p class="testimonial-author">- ${item.author}, ${item.position}</p>
//         </div>
//     `).join('');
// }


// //   Initialize FAQ functionality
// function initializeFAQ() {
//     const faqQuestions = document.querySelectorAll('.faq-question');
//     faqQuestions.forEach(question => {
//         question.addEventListener('click', () => {
//             const faqItem = question.parentElement;
//             faqItem.classList.toggle('active');
//         });
//     });
// }


// ========== INITIALIZE SEMUA SAAT PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
    // Apply theme
    applyTheme();

    // Populate info
    populateContactInfo();
    populateSocialMedia();
    populateProjectsIndex();
    populateProjects();
    populateFilterButtons();
    // populateFAQ();
    // populateTestimonials();

    // Load SEO
    loadSEOMetaTags();

    console.log('%c✓ Portfolio Config Loaded', 'color: #6c5ce7; font-size: 14px; font-weight: bold;');
});

// ========== CONTOH PENGGUNAAN ==========

// Mengakses config
// console.log(getConfig('personalInfo.name'));

// Update config
// updateConfig('theme.primaryColor', '#ff0000');

// Akses statistik
// console.log(portfolioConfig.stats);

// Akses proyek
// console.log(portfolioConfig.projects);

// ========== EXPORT UNTUK MODULE SYSTEM ==========
// Uncomment jika menggunakan ES6 modules
// export { portfolioConfig, getConfig, updateConfig, applyTheme };
