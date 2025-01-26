const newsData = [
    {
        title: "New Project Launch",
        date: "2024-02-20",
        image: "https://via.placeholder.com/300",
        excerpt: "Exciting new project launch featuring cutting-edge technology solutions.",
        link: "#"
    },
    {
        title: "Industry Award Winner",
        date: "2024-02-15",
        image: "https://via.placeholder.com/300",
        excerpt: "Our team wins prestigious industry award for innovation in development.",
        link: "#"
    },
    {
        title: "Tech Conference 2024",
        date: "2024-02-10",
        image: "https://via.placeholder.com/300",
        excerpt: "Join us at the upcoming tech conference where we'll showcase latest developments.",
        link: "#"
    }
];

function createNewsCard(news) {
    return `
        <div class="news-card">
            <img src="${news.image}" alt="${news.title}" class="news-image">
            <div class="news-content">
                <div class="news-date">${formatDate(news.date)}</div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-excerpt">${news.excerpt}</p>
                <a href="${news.link}" class="read-more">Read More →</a>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function renderNews() {
    const grid = document.getElementById('newsGrid');
    grid.innerHTML = newsData.map(news => createNewsCard(news)).join('');
}

document.addEventListener('DOMContentLoaded', renderNews);
