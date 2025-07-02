document.addEventListener('DOMContentLoaded', function() {

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
        },
        {
            id: 3,
            title: "Skills",
            description: "CSS | " +
            "Git | " +
            "HTML | " +
            "JavaScript | " +
            "Linux | " +
            "Node.js | " +
            "SQL | " +
            "React.js | " +
            "TypeScript",
            imageUrl: "https://picsum.photos/id/1019/800/600",
            tags: ["Skills"]
        },
        {
            id: 4,
            title: "Portfolio",
            description: "<a href='' target='_blank'>The Marble Tier</a> | " +
            "<a href='http://www.seriousbyte.com/coolschool/home.html' target='_blank'>Cool School</a> | " +
            "<a href='https://alpas-ph.com/kristine-costo-artist-profile' target='_blank'>Artist Profile</a>",
            imageUrl: "https://picsum.photos/id/1040/800/600",
            tags: ["Portfolio"]
        },
        {
            id: 5,
            title: "Portfolio",
            description: "The Marble Tier",
            imageUrl: "https://picsum.photos/id/1044/800/600",
            tags: ["Portfolio"]
        },
        {
            id: 6,
            title: "Portfolio",
            description: "Cool School",
            imageUrl: "https://picsum.photos/id/1062/800/600",
            tags: ["Portfolio"]
        },
        {
            id: 7,
            title: "Portfolio",
            description: "Artist Profile",
            imageUrl: "https://picsum.photos/id/1016/800/600",
            tags: ["Portfolio"]
        },
        {
            id: 8,
            title: "Work and Skills Summary",
            description: "<a href='https://drive.google.com/file/d/1mw5tNdwtORkDm3Oqi8K-kr1velW7f1kx/view' target='_blank'>Download</a>",
            imageUrl: "https://picsum.photos/id/1036/800/600",
            tags: ["Resumé"]
        },
        {
            id: 9,
            title: "Contact Information",
            description: "Joanne Costo | " + 
            "jscosto@gmail.com | " +
            "+63 9175860524 <br>" +
            "<a href='./contact.html'>Access Form</a>",
            imageUrl: "https://picsum.photos/id/1052/800/600",
            tags: ["Contact"]
        },
        {
            id: 10,
            title: "Other Works",
            description: "Content Creation | " +
            "Graphic Design | " +
            "Video Editing",
            imageUrl: "https://picsum.photos/id/1060/800/600",
            tags: ["Skills"]
        } 
    ];

    // Render images
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

                    document.querySelectorAll('.panel').forEach(p => {
                        p.classList.remove('active');
                    });

                    this.classList.add('active');
                }
            });
            
            container.appendChild(panel);
        });
    }


    renderImages();
});