// Typed.js initialization
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-output', {
        strings: ["Web Developer", "Software Engineer", "Problem Solver"],
        typeSpeed: 50,
        backSpeed: 30,
        showCursor: false,
        loop: true
    });
});
// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Animation Functionality
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('active');
        }
    });
}

// Mobile sidebar functionality
        document.addEventListener('DOMContentLoaded', function() {
            const mobileSidebar = document.getElementById('mobileSidebar');
            const sidebarOverlay = document.getElementById('sidebarOverlay');
            const closeSidebarBtn = document.getElementById('closeSidebar');
            const sidebarToggle = document.getElementById('sidebarToggle');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            
            // Toggle sidebar when navbar toggler is clicked
            sidebarToggle.addEventListener('click', function() {
                mobileSidebar.classList.add('active');
                sidebarOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            // Close sidebar when close button is clicked
            closeSidebarBtn.addEventListener('click', closeSidebar);
            
            // Close sidebar when overlay is clicked
            sidebarOverlay.addEventListener('click', closeSidebar);
            
            // Close sidebar when a nav link is clicked
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', function() {
                    closeSidebar();
                    
                    // Update active class
                    mobileNavLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });
            
            function closeSidebar() {
                mobileSidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Close sidebar when window is resized to desktop size
            window.addEventListener('resize', function() {
                if (window.innerWidth >= 992) {
                    closeSidebar();
                }
            });
        });

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);