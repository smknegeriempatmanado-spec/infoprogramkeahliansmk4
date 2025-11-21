document.addEventListener('DOMContentLoaded', () => {

    // --- Fungsi untuk Menu Hamburger di Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // --- Fungsi untuk Animasi Scroll pada Kartu Program ---
    const observerOptions = {
        root: null, // mengamati viewport
        threshold: 0.1, // 10% dari elemen terlihat
        rootMargin: '0px 0px -50px 0px' // mulai sedikit lebih awal
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi jalan
            }
        });
    }, observerOptions);

    // Targetkan semua kartu program untuk diamati
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        observer.observe(card);
    });

});