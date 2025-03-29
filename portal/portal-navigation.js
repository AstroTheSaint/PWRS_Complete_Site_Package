// Portal Navigation Handler
document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            
            // Update active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Show loading screen
            const loading = document.querySelector('.loading');
            loading.classList.remove('hidden');
            
            // Fade out current content
            const pageContent = document.querySelector('.page-content');
            pageContent.classList.remove('loaded');
            
            // Navigate to the new page after a short delay
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // Set active state based on current page
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath)) {
            link.classList.add('active');
        }
    });

    // Show content with animation
    const pageContent = document.querySelector('.page-content');
    setTimeout(() => {
        pageContent.classList.add('loaded');
    }, 100);
}); 