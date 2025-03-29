// Portal Data and Configuration
const PORTAL_DATA = {
    artist: {
        name: "Metro Boomin",
        profile: {
            image: "https://example.com/metro-boomin.jpg",
            bio: "Grammy-winning producer and artist",
            stats: {
                followers: "12.5M",
                monthlyListeners: "45M",
                totalPlays: "2.8B"
            }
        },
        music: {
            albums: [
                {
                    title: "HEROES & VILLAINS",
                    releaseDate: "2022-12-02",
                    revenue: "$8.2M",
                    streams: "1.2B",
                    tracks: [
                        "Superhero (Heroes & Villains)",
                        "Creepin'",
                        "Niagara Falls",
                        "Metro Spider",
                        "Walk Em Down"
                    ]
                },
                {
                    title: "NOT ALL HEROES WEAR CAPES",
                    releaseDate: "2018-11-02",
                    revenue: "$6.5M",
                    streams: "980M",
                    tracks: [
                        "10 Freaky Girls",
                        "Space Cadet",
                        "Don't Come Out The House",
                        "Dreamcatcher"
                    ]
                }
            ],
            singles: [
                {
                    title: "Creepin'",
                    releaseDate: "2022-12-16",
                    revenue: "$2.1M",
                    streams: "450M"
                },
                {
                    title: "Superhero (Heroes & Villains)",
                    releaseDate: "2022-12-02",
                    revenue: "$1.8M",
                    streams: "380M"
                }
            ]
        },
        shows: {
            total: 127,
            upcoming: [
                {
                    date: "2024-06-15",
                    venue: "Madison Square Garden",
                    city: "New York",
                    capacity: 20000,
                    status: "Sold Out"
                },
                {
                    date: "2024-06-20",
                    venue: "O2 Arena",
                    city: "London",
                    capacity: 18000,
                    status: "On Sale"
                }
            ],
            past: [
                {
                    date: "2024-03-15",
                    venue: "Staples Center",
                    city: "Los Angeles",
                    capacity: 19000,
                    revenue: "$1.2M"
                }
            ]
        },
        revenue: {
            total: "$18.5M",
            breakdown: {
                music: "$12.3M",
                touring: "$4.8M",
                merchandise: "$1.4M"
            },
            monthly: [
                { month: "Jan 2024", amount: "$1.2M" },
                { month: "Feb 2024", amount: "$1.5M" },
                { month: "Mar 2024", amount: "$1.8M" }
            ]
        },
        communications: {
            messages: [
                {
                    id: 1,
                    from: "Tour Manager",
                    subject: "Summer Tour Schedule",
                    date: "2024-03-20",
                    read: false
                },
                {
                    id: 2,
                    from: "Label",
                    subject: "New Release Strategy",
                    date: "2024-03-19",
                    read: true
                }
            ],
            announcements: [
                {
                    id: 1,
                    title: "New Single Release",
                    date: "2024-04-01",
                    content: "New single 'Metro Spider' dropping next month"
                }
            ]
        }
    }
};

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(amount);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

// Export for use in other files
window.PORTAL_DATA = PORTAL_DATA; 