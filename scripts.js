document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const cards = document.querySelectorAll('.card');

    function handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Header hide/show on scroll
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Scrolling down and past the header height
            header.classList.add('header-hidden');
        } else if (scrollTop < lastScrollTop) {
            // Scrolling up
            header.classList.remove('header-hidden');
        }

        lastScrollTop = scrollTop;

        // Card animation on scroll
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const cardHeight = card.offsetHeight;
            if (cardTop < window.innerHeight - cardHeight / 4) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();
});
