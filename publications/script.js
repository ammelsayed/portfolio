
/*---------------------------------------*\ 
    AUTHOR: A.M.M. Elsayed   
    * ALL RIGHTS RESERVED *
\*---------------------------------------*/

function fetchJSONData() {
    fetch('publications/publications.json')
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const publicationsList = document.getElementById('publications-list');
            data.forEach(pub => {
            const pubElement = document.createElement('div');
            pubElement.classList.add('publication');
            pubElement.innerHTML =`  
                        <div class="content">
                            <p style="color: navy;"><em><b>${pub.paper_type}</b></em></p>
                            <h2>${pub.title}</h2>
                            <p><em>${pub.date}, ${pub.journal}</em></p>
                            <p id="abstract"><b>Abstract:</b> ${pub.description}</p>
                            <p id="doi-link"><b>DOI:</b> <a href="${pub.link}" target="_blank">${pub.link}</a></p>
                        </div>
                        <img src="${pub.image_soruce}" class="publication-image">
            `;
            publicationsList.appendChild(pubElement);
            });
        })
        .catch(error => console.error('Error loading publications:', error));
    }fetchJSONData();  
