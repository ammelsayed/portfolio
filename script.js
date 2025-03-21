document.addEventListener('DOMContentLoaded', function() {
    // Load Blog Posts
    if (document.getElementById('blog-posts')) {
        fetch('posts.json')
            .then(response => response.json())
            .then(data => {
                const blogPosts = document.getElementById('blog-posts');
                data.forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.classList.add('post');
                    postElement.innerHTML = `
                        <h2><a href="${post.link}">${post.title}</a></h2>
                        <p><em>${post.date}</em></p>
                        <p>${post.excerpt}</p>
                    `;
                    blogPosts.appendChild(postElement);
                });
            })
            .catch(error => console.error('Error loading posts:', error));
    }

    // Load Publications
    if (document.getElementById('publications-list')) {
        fetch('publications.json')
            .then(response => response.json())
            .then(data => {
                const publicationsList = document.getElementById('publications-list');
                data.forEach(pub => {
                    const pubElement = document.createElement('div');
                    pubElement.classList.add('publication');
                    pubElement.innerHTML = `
                        <h3>${pub.title}</h3>
                        <p><em>${pub.date}</em></p>
                        <p>${pub.description}</p>
                        <a href="${pub.link}" target="_blank">Read more</a>
                    `;
                    publicationsList.appendChild(pubElement);
                });
            })
            .catch(error => console.error('Error loading publications:', error));
    }

    // Contact Form Handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! (This is a demo, no actual submission.)');
            form.reset();
        });
    }
});