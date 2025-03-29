// Globe Configuration
const GLOBE_CONFIG = {
    dark: {
        globeImageUrl: '//unpkg.com/three-globe/example/img/earth-dark.jpg',
        backgroundColor: 'rgba(0,0,0,0)',
        atmosphereColor: '#1DB954',
        atmosphereAltitude: 0.1,
        pointColor: '#1DB954',
        pointAltitude: 0.1,
        pointRadius: 0.5
    }
};

// Sample Tour Data
const TOUR_DATA = {
    "2022": [
        { lat: 34.0522, lng: -118.2437, size: 20000, label: "LA - $1.5M", color: "#1DB954" },
        { lat: 40.7128, lng: -74.0060, size: 18000, label: "NYC - $1.2M", color: "#1DB954" },
        { lat: 51.5074, lng: -0.1278, size: 15000, label: "London - $1.0M", color: "#1DB954" }
    ],
    "2023": [
        { lat: 35.6762, lng: 139.6503, size: 25000, label: "Tokyo - $2.0M", color: "#1DB954" },
        { lat: 19.4326, lng: -99.1332, size: 22000, label: "Mexico City - $1.8M", color: "#1DB954" },
        { lat: -33.8688, lng: 151.2093, size: 20000, label: "Sydney - $1.6M", color: "#FFD700" }
    ],
    "2024": [
        { lat: 48.8566, lng: 2.3522, size: 30000, label: "Paris - $2.5M", color: "#FFD700" },
        { lat: 55.7558, lng: 37.6173, size: 28000, label: "Moscow - $2.2M", color: "#FFD700" },
        { lat: 1.3521, lng: 103.8198, size: 25000, label: "Singapore - $2.0M", color: "#FFD700" }
    ]
};

class GlobeVisualization {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        this.options = { ...GLOBE_CONFIG.dark, ...options };
        this.globe = null;
        this.frame = null;
        this.initialize();
    }

    initialize() {
        this.globe = Globe()(this.container)
            .globeImageUrl(this.options.globeImageUrl)
            .backgroundColor(this.options.backgroundColor)
            .atmosphereColor(this.options.atmosphereColor)
            .atmosphereAltitude(this.options.atmosphereAltitude);

        // Set initial dimensions
        this.handleResize();

        // Add window resize handler
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        const { width, height } = this.container.getBoundingClientRect();
        this.globe
            .width(width)
            .height(height);
    }

    setData(data) {
        this.globe
            .pointsData(data)
            .pointColor(d => d.color || this.options.pointColor)
            .pointAltitude(d => d.altitude || this.options.pointAltitude)
            .pointRadius(d => d.radius || this.options.pointRadius)
            .pointLabel(d => d.label);
    }

    startAnimation(speed = 0.1) {
        const animate = () => {
            this.frame = requestAnimationFrame(animate);
            this.globe.rotation({ lat: 0, lng: (Date.now() * speed / 1000) % 360 });
        };
        animate();
    }

    stopAnimation() {
        if (this.frame) {
            cancelAnimationFrame(this.frame);
            this.frame = null;
        }
    }

    highlightPoint(lat, lng) {
        this.globe.pointOfView({ lat, lng, altitude: 2.5 }, 1000);
    }
}

// Utility Functions
function yearFilter(data, year) {
    return TOUR_DATA[year] || [];
}

function formatRevenue(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(amount);
}

// Export for use in other files
window.PWRS = {
    GlobeVisualization,
    TOUR_DATA,
    yearFilter,
    formatRevenue
}; 