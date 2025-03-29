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
            document.querySelector('.loading').classList.remove('hidden');
            
            // Navigate to the new page
            window.location.href = href;
        });
    });

    // Set active state based on current page
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').slice(-2).join('/')) {
            link.classList.add('active');
        }
    });
}); 