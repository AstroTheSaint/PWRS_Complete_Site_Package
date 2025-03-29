// Navigation handling
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const loadingScreen = document.querySelector('.loading');
    const pageContent = document.querySelector('.page-content');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');

    // Set active state based on current hash
    const currentHash = window.location.hash || '#dashboard';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        }
    });

    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Skip if it's the back home link
            if (href === '../index.html') {
                window.location.href = href;
                return;
            }
            
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

            // Update URL hash
            window.location.hash = href.substring(1);

            // Hide loading screen after a short delay
            setTimeout(() => {
                loadingScreen.classList.remove('visible');
                pageContent.classList.add('loaded');
            }, 300);
        });
    });

    // Handle hash changes
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash || '#dashboard';
        navLinks.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
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

    // Mobile menu functionality
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuButton.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !mobileMenuButton.contains(e.target)) {
                mobileMenuButton.classList.remove('active');
                sidebar.classList.remove('active');
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mobileMenuButton.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
}); 