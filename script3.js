document.addEventListener('DOMContentLoaded', function() {

    // ✅ Create a navigation bar container
    const navBar = document.createElement('div');
    navBar.className = "navbar";

    // Left side (site name or logo)
    const siteTitle = document.createElement('div');
    siteTitle.className = "site-title";
    siteTitle.textContent = "My Portfolio"; // You can change this
    navBar.appendChild(siteTitle);

    // Right side (Contact link)
    const navLinks = document.createElement('div');
    navLinks.className = "nav-links";

    const contactLink = document.createElement('a');
    contactLink.textContent = "Contact";
    contactLink.href = "./contact.html";
    contactLink.className = "contact-link";

    navLinks.appendChild(contactLink);
    navBar.appendChild(navLinks);

    // Add navbar to top of page
    document.body.prepend(navBar);

    // --- your existing image rendering code below ---
    const imageData = [
        {
            id: 1,
            title: "About",
            description: "I thrive on solving everyday problems with code.",
            imageUrl: "https://picsum.photos/id/1018/800/600",
            tags: ["About"]
        },
        {
            id: 2,
            title: "Experience",
            description: "E-learning Developer (2020), AccessiWheels<br>" +
            "Learning and Developemnt Manager (2021), Globe Telecom, Inc.<br>" +
            "Computer Science Teacher (2023), Cambridge International School<br>" +
            "Associate Program Manager (2024), Toddle",
            imageUrl: "https://picsum.photos/id/1015/800/600",
            tags: ["Experience"]
        }
        // ... keep the rest of your data
    ];

    function renderImages() {
        const container = document.getElementById('imageContainer');
        
        imageData.forEach(item => {
            const panel = document.createElement('div');
            panel.className = 'panel';
            panel.dataset.id = item.id;
            
            panel.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="content">
                    <h3>${item.title}</h3>
                    <p class="description">${item.description}</p>
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            panel.addEventListener('click', function() {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
                    this.classList.add('active');
                }
            });
            
            container.appendChild(panel);
        });
    }

    renderImages();
});
