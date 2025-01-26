const personnelData = [
    {
        name: "Eslam Ali",
        role: "Lead Developer",
        image: "./imges/WhatsApp Image 2025-01-26 at 6.11.53 PM.jpeg",
        description: "Full-stack developer with 5 years of experience in web development.",
        social: {
            linkedin: "https://linkedin.com/in/eslam-ali",
            github: "https://github.com/eslam-ali",
            twitter: "https://twitter.com/eslam-ali"
        }
    },
    {
        name: "Sarah Johnson",
        role: "UI/UX Designer",
        image: "./imges/WhatsApp Image 2025-01-26 at 6.09.39 PM (1).jpeg",
        description: "Creative designer specializing in user-centered design solutions.",
        social: {
            linkedin: "https://linkedin.com/in/sarah-johnson",
            github: "https://github.com/sarah-j",
            twitter: "https://twitter.com/sarah-j"
        }
    },
    {
        name: "Mike Chen",
        role: "Backend Developer",
        image: "./imges/WhatsApp Image 2025-01-26 at 6.11.53 PM (1).jpeg",
        description: "Backend specialist with expertise in Node.js and Python.",
        social: {
            linkedin: "https://linkedin.com/in/mike-chen",
            github: "https://github.com/mike-chen",
            twitter: "https://twitter.com/mike-chen"
        }
    }
];

function createPersonnelCard(person) {
    return `
        <div class="personnel-card">
            <img src="${person.image}" alt="${person.name}" class="personnel-image">
            <div class="personnel-info">
                <h3>${person.name}</h3>
                <p class="role">${person.role}</p>
                <p>${person.description}</p>
                <div class="personnel-social">
                    <a href="${person.social.linkedin}" class="social-icon" target="_blank">LinkedIn</a>
                    <a href="${person.social.github}" class="social-icon" target="_blank">GitHub</a>
                    <a href="${person.social.twitter}" class="social-icon" target="_blank">Twitter</a>
                </div>
            </div>
        </div>
    `;
}

function renderPersonnel() {
    const grid = document.getElementById('personnelGrid');
    grid.innerHTML = personnelData.map(person => createPersonnelCard(person)).join('');
}

document.addEventListener('DOMContentLoaded', renderPersonnel);
