// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const loadingScreen = document.querySelector('.loading');
    const pageContent = document.querySelector('.page-content');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');

    // Set active state based on current page
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show loading screen
            loadingScreen.classList.add('visible');
            pageContent.classList.remove('loaded');

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                mobileMenuButton.classList.remove('active');
                sidebar.classList.remove('active');
            }

            // Navigate after a short delay
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // Handle back/forward browser navigation
    window.addEventListener('popstate', () => {
        loadingScreen.classList.add('visible');
        pageContent.classList.remove('loaded');
        
        setTimeout(() => {
            loadingScreen.classList.remove('visible');
            pageContent.classList.add('loaded');
        }, 300);
    });

    // Handle initial page load
    if (document.readyState === 'complete') {
        loadingScreen.classList.remove('visible');
        pageContent.classList.add('loaded');
    } else {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.remove('visible');
                pageContent.classList.add('loaded');
            }, 1000);
        });
    }
}); 