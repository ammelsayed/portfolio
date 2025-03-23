document.addEventListener('DOMContentLoaded', function() {
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
                        <p><em>${pub.date},${pub.journal}</em></p>
                        <p>${pub.description}</p>
                        <a href="${pub.link}" target="_blank">Read more</a>
                    `;
                    publicationsList.appendChild(pubElement);
                });
            })
            .catch(error => console.error('Error loading publications:', error));
    }
});
